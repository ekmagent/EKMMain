/**
 * test-rebuild-copy.js
 * Regenerates copy for a handful of pages using the upgraded prompt + social listening.
 * Saves as _new.tsx alongside the original for comparison. Does NOT overwrite originals.
 *
 * Run: node scripts/test-rebuild-copy.js
 */

require("dotenv").config({ path: __dirname + "/.env" });

const Anthropic = require("@anthropic-ai/sdk");
const fs = require("fs");
const path = require("path");

const SERPER_API_KEY = process.env.SERPER_API_KEY;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

function repoPath(...parts) {
  return path.resolve(__dirname, "..", ...parts);
}

// Import shared functions from build-compact-pages
// (We inline the key ones to keep this self-contained)

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function researchKeyword(keyword) {
  if (!SERPER_API_KEY) return "";
  let serpResults;
  try {
    const res = await fetch("https://google.serper.dev/search", {
      method: "POST",
      headers: { "X-API-KEY": SERPER_API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ q: keyword, gl: "us", hl: "en", num: 5 }),
    });
    if (!res.ok) return "";
    serpResults = await res.json();
  } catch { return ""; }

  const urls = (serpResults.organic || []).slice(0, 3).map((r) => r.link)
    .filter((u) => u && !u.includes("medicareyourself.com"));
  const paaQuestions = (serpResults.peopleAlsoAsk || []).slice(0, 4).map((p) => p.question).filter(Boolean);
  const snippets = [];
  for (const url of urls) {
    try {
      const res = await fetch(url, {
        signal: AbortSignal.timeout(6000),
        headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" },
      });
      if (!res.ok) continue;
      const html = await res.text();
      snippets.push(`SOURCE: ${url}\n${stripHtml(html).slice(0, 1200)}`);
    } catch {}
  }
  let research = "";
  if (snippets.length) research += `TOP-RANKING COMPETITOR CONTENT:\n\n${snippets.join("\n\n---\n\n")}`;
  if (paaQuestions.length) research += `\n\nPEOPLE ALSO ASK:\n${paaQuestions.map((q) => `- ${q}`).join("\n")}`;
  return research;
}

async function researchSentiment(keyword) {
  if (!SERPER_API_KEY) return "";
  const conditions = [
    "polymyalgia", "rheumatica", "lupus", "rheumatoid", "psoriatic",
    "arthritis", "scleroderma", "sjogren", "vasculitis", "myositis",
    "ankylosing spondylitis", "fibromyalgia", "multiple sclerosis", "ms ",
    "crohn", "colitis", "celiac", "autoimmune",
    "diabetes", "copd", "parkinson", "cancer", "heart", "cardiac",
    "atrial fibrillation", "afib", "congestive heart failure", "chf",
    "kidney", "dialysis", "chronic", "disability",
    "dementia", "alzheimer", "neuropathy", "stroke",
    "pulmonary", "respiratory", "osteoporosis", "macular degeneration",
    "mental health", "depression", "anxiety", "ptsd",
    "back pain", "spine", "joint replacement", "hip replacement",
    "knee replacement", "amputation", "wheelchair",
    "vision", "hearing", "dental",
    "sleep apnea", "obesity", "lymphedema", "chronic pain",
    "supplement", "medigap", "advantage", "plan g", "plan n", "plan f", "part d", "part b",
    "turning 65",
  ];
  const kwLower = keyword.toLowerCase();
  const queries = [];

  // Condition match
  const matchedCondition = conditions.find((c) => kwLower.includes(c));
  if (matchedCondition && !["supplement", "medigap", "advantage", "plan g", "plan n", "plan f", "part d", "part b", "turning 65"].includes(matchedCondition)) {
    queries.push(`"medicare" "${matchedCondition}" frustrating OR worried OR "nobody told me" OR "wish I knew" site:reddit.com`);
    queries.push(`"medicare" "${matchedCondition}" coverage OR cost OR "out of pocket" site:reddit.com OR site:inspire.com`);
  }

  // Plan type
  const planTypes = ["supplement", "medigap", "advantage", "plan g", "plan n", "plan f", "part d"];
  const matchedPlan = planTypes.find((p) => kwLower.includes(p));
  if (matchedPlan) {
    queries.push(`"medicare ${matchedPlan}" "I wish" OR "mistake" OR "surprised" OR "didn't realize" site:reddit.com`);
  }

  // Local
  const njCities = keyword.match(/\b(cherry hill|camden|trenton|newark|jersey city|edison|brick|toms river|lakewood|paterson|clifton|hackensack|morristown|princeton|freehold|mount laurel|marlton|voorhees|haddonfield|vineland|atlantic city|egg harbor|bridgewater|piscataway|plainfield|belleville|burlington|fort lee|jackson|woodbridge|old bridge|hamilton|east brunswick)\b/i);
  if (njCities) {
    queries.push(`"medicare" "${njCities[1]}" OR "south jersey" OR "north jersey" hospital OR doctor OR "health system" site:reddit.com`);
  }

  // Turning 65
  if (kwLower.includes("turning 65") || kwLower.includes("new to medicare")) {
    queries.push(`"turning 65" "medicare" overwhelmed OR confused OR "where do I start" OR "nobody explains" site:reddit.com`);
  }

  if (queries.length === 0) return "";

  const allSnippets = [];
  for (const q of queries.slice(0, 2)) {
    try {
      const res = await fetch("https://google.serper.dev/search", {
        method: "POST",
        headers: { "X-API-KEY": SERPER_API_KEY, "Content-Type": "application/json" },
        body: JSON.stringify({ q, gl: "us", hl: "en", num: 5 }),
      });
      if (!res.ok) continue;
      const data = await res.json();
      const urls = (data.organic || []).slice(0, 3).map((r) => r.link)
        .filter((u) => u && (u.includes("reddit.com") || u.includes("inspire.com") || u.includes("patient")));
      for (const url of urls) {
        try {
          const pageRes = await fetch(url, {
            signal: AbortSignal.timeout(6000),
            headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" },
          });
          if (!pageRes.ok) continue;
          const html = await pageRes.text();
          allSnippets.push(stripHtml(html).slice(0, 1500));
        } catch {}
      }
    } catch {}
  }

  if (allSnippets.length === 0) return "";

  return `REAL PATIENT & CONSUMER VOICES (from public forums — synthesize patterns, do NOT quote individuals):

${allSnippets.join("\n\n---\n\n")}

Use these conversations to understand:
- What language real people use when talking about this topic
- What frustrations come up repeatedly
- What they wish someone had told them
- What makes them feel overwhelmed, dismissed, or confused
- What daily realities they deal with that most insurance content ignores

Synthesize these patterns into your copy. Do NOT copy forum language verbatim. Do NOT quote or reference specific users. Do NOT invent sentiment you did not find. Let these real voices inform the tone, specificity, and empathy of what you write.`;
}

// ---------------------------------------------------------------------------
// Test pages — extract SEO skeleton from existing page, regenerate body copy
// ---------------------------------------------------------------------------
const TEST_PAGES = [
  {
    slug: "medicare-broker-for-people-with-parkinsons",
    keyword: "medicare broker for people with parkinsons",
    title: "Medicare Broker for People With Parkinson's | Specialists, Meds & Therapy Covered | MedicareYourself",
    h1: "Medicare Broker for People With Parkinson's: Finding Coverage That Actually Fits",
    h2s: [
      "Why Parkinson's patients need predictable out-of-pocket costs",
      "Medigap vs Medicare Advantage when you see multiple specialists",
      "Medications and Part D coverage for Parkinson's",
      "Guaranteed issue situations that skip medical underwriting",
    ],
    metaDescription: "Medicare broker for people with Parkinson's — Anthony Orner helps you find coverage that handles specialists, medications, and therapy. Free consultation.",
    contentNotes: "",
    type: "condition",
  },
  {
    slug: "medicare-insurance-agents-in-cherry-hill-new-jersey",
    keyword: "medicare insurance agents in cherry hill new jersey",
    title: "Medicare Insurance Agents in Cherry Hill New Jersey | Free Broker Help | MedicareYourself",
    h1: "Medicare Insurance Agents in Cherry Hill, New Jersey: Local Broker Support",
    h2s: [
      "How a Cherry Hill Medicare broker differs from a captive agent",
      "Supplement and Advantage plans available in Camden County",
      "When to contact a broker before your 65th birthday",
      "What to expect during a free plan comparison",
    ],
    metaDescription: "Medicare insurance agents in Cherry Hill New Jersey — Anthony Orner compares Supplement and Advantage plans across top carriers. Free, no-obligation consultation.",
    contentNotes: "",
    type: "local",
  },
  {
    slug: "medicare-supplement-for-seniors-turning-65",
    keyword: "medicare supplement for seniors turning 65",
    title: "Medicare Supplement for Seniors Turning 65 | Lock in Low Rates | MedicareYourself",
    h1: "Medicare Supplement for Seniors Turning 65: Your One Best Window for Low Rates",
    h2s: [
      "Why your 6-month open enrollment window is worth protecting",
      "Plan G vs Plan N for new enrollees at 65",
      "How attained-age pricing affects your premium every year",
      "Step-by-step enrollment timeline before your 65th birthday",
    ],
    metaDescription: "Medicare Supplement for seniors turning 65 — lock in guaranteed-issue rates during open enrollment. Anthony Orner compares top carriers. Free quote in minutes.",
    contentNotes: "",
    type: "turning-65",
  },
];

// Use the EXACT same prompt from build-compact-pages.js (the upgraded version)
function buildPrompt(blueprint, competitorResearch, sentimentResearch) {
  return `You are a senior healthcare copywriter building a Next.js page for medicareyourself.com (EasyKind Medicare).
This is a Compact Keyword page: 400-500 words of high-quality, factual content targeting one bottom-of-funnel keyword.

Your core standard: Impact = meaning / length.
Say more with fewer words. Make every sentence earn its place. Cut anything that does not increase clarity, trust, specificity, or emotional resonance.

BLUEPRINT FROM SHEET:
- Keyword: "${blueprint.keyword}"
- Title: "${blueprint.title}"
- URL: /services/${blueprint.slug}
- H1: "${blueprint.h1}"
- H2s: ${blueprint.h2s.map((h) => `"${h}"`).join(", ")}
- Meta Description: "${blueprint.metaDescription}"
${blueprint.contentNotes ? `\nCONTENT NOTES (use as inspiration and angle — do not copy verbatim):\n${blueprint.contentNotes}\n` : ""}
${competitorResearch ? competitorResearch + "\n\nUse the above competitor content to verify facts and identify content gaps. Do NOT copy — rewrite in our voice. Only include claims you can verify from these sources or from medicare.gov.\n" : ""}
${sentimentResearch ? sentimentResearch + "\n" : "If no patient/consumer voice research is available, write with broad human empathy. Do not fake specificity you have not verified.\n"}
BEFORE YOU WRITE — silently decide:
1. Who is this page really talking to? (One person, one situation.)
2. What are they worried about but not saying out loud?
3. What everyday reality makes this topic emotional for them?
4. What local details make this page feel like it belongs to this place?
5. What specific next step would feel easiest for them?

PAGE TITLE FORMULA:
"${blueprint.keyword} | [Benefit or Strong CTA like 'Free' or 'No Sign-Up'] | MedicareYourself"
Example: "Medicare Plan G NJ | Compare Rates Free | MedicareYourself"
CRITICAL: The EXACT keyword must appear at the VERY BEGINNING of the title, before any other words.

EDWARD STURM'S COMPACT KEYWORD LANDING PAGE TEMPLATE — follow this EXACTLY:

1. Export metadata object with:
   - title: use the Page Title Formula above — keyword FIRST, then CTA, then brand
   - description: 120-158 chars, keyword appears in the FIRST HALF of the description
   - openGraph with same title/description

2. Define breadcrumbSchema (Home > Medicare Guides > Page Name) and articleSchema
   - breadcrumbSchema MUST use "@type": "ListItem" (NOT "ListItemElement") for each itemListElement entry
   - articleSchema author: Anthony Orner, url: https://medicareyourself.com/about
   - publisher: name "EasyKind Medicare", alternateName "MedicareYourself"

3. Define a faqs array with 3-4 Q&As (use People Also Ask questions from research if available)

4. Export default function component with this EXACT layout order:
   a. SchemaMarkup
   b. Breadcrumb nav (Home > Medicare Guides > [Page Name])
   c. H1 — the page headline (keyword naturally embedded, not stuffed)
   d. 2-3 sentences of intro text — keyword appears in the VERY FIRST WORDS of the first sentence
   e. CTA #1 (PhoneCTA component) — ABOVE THE FOLD, right after intro
   f. 6 H2 sections — short paragraphs (2-4 sentences each) or bullet lists
      - Use the H2s from the blueprint as starting points, expand to 6 total
      - H2s must be SENTENCE CASE (not Title Case). H1 and page title are Title Case.
      - Each H2 section should be scannable — no walls of text
      - Use bullet lists or short paragraphs, not long prose blocks
      - If this is a "vs" or "alternative" keyword, include a simple comparison table
   g. CTA #2 (blue bg banner with phone number and "Get a Free Quote" link)
   h. FAQ section using FAQSection component
   i. Related Resources links section (4 internal links to related pages)

KEYWORD TYPE HANDLING:
- "vs" or "alternative" keywords: Include a 2-column comparison table. Write fairly — help the reader understand real tradeoffs, not just push one option.
- Fragment keywords (e.g. "plan g cost 65 year old nj"): Write naturally — do NOT force the exact fragment into sentences. Break it into natural language.
- "for + plural modifier" keywords (e.g. "medicare for veterans"): Use the modifier group as the audience frame throughout. Write to their specific reality, not generic Medicare info with the group name dropped in.

IMAGE SEO (Edward Sturm Module 06):
- Every page MUST have a heading image using Next.js Image component
- Image src: "/images/${blueprint.slug}.webp"
- Alt text for the heading image: the keyword (or a natural variant)
- Place the Image right after the H1, before the intro paragraph
- Image dimensions: width={800} height={400}
- Example: <Image src="/images/medicare-plan-g-cost.webp" alt="Medicare Plan G cost comparison" width={800} height={400} className="rounded-lg mb-6 w-full" />

IMPORTS (use exactly these):
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

VOICE & STYLE:
Write as Anthony Orner, a working Medicare broker in NJ. The voice should feel like a sharp local Medicare advisor who explains complicated things clearly and talks like a real person.

The voice is: warm, clear, grounded, plainspoken, calm but confident, slightly informal, respectful but never patronizing, helpful first and persuasive second.

- Use contractions naturally. Write "you'll" not "you will" when speaking conversationally.
- Use ACTIVE VOICE. "You pay 20% after the deductible" not "20% is paid by the beneficiary."
- VARY sentence length. Mix short punches (under 10 words) with slightly longer explanatory lines. Never three long sentences in a row.
- Be SPECIFIC. Use actual dollar amounts, plan names (Plan G, Plan N), enrollment windows (Oct 15-Dec 7), and state rules. Replace vague reassurance with useful specificity. Vague = rejected.
- Paragraph length: 2-3 sentences max. One-sentence paragraphs are fine and encouraged for emphasis.
- Sound human, not polished to death.
- Write to someone, not for someone. Even on a templated page, it should feel written for one person in one situation. Use "you" naturally.

CUT THESE HABITS — instant rejection if found:
- Throat-clearing intros ("When it comes to Medicare..." / "Are you looking for...")
- Generic SEO openings that could apply to any city or topic
- Obvious statements ("Medicare can be confusing" without immediately following with something useful)
- Corporate jargon or empty empathy ("we understand your needs")
- Fear-based pressure or hype language
- NEVER use these words: delve, tapestry, realm, intricate, meticulous, multifaceted, nuanced, pivotal, seamless, robust, foster, garner, bolster, interplay, underscore, vibrant, embark, testament, transformative, game-changer, landscape (as metaphor), empower/empowering, comprehensive (when vague), journey
- NEVER use these phrases: "it's worth noting", "it is important to", "having said that", "that being said", "in conclusion", "in summary", "from a broader perspective", "navigate the complexities", "ensuring peace of mind", "comprehensive coverage for your needs", "peace of mind"
- Do NOT use em dashes. Use a regular dash or rewrite the sentence.
- Do NOT open paragraphs with "Furthermore," "Moreover," or "Additionally,"

EMPATHY RULES (condition and concern pages):
When the topic involves a chronic illness, disability, or ongoing health challenge, lead with lived reality — not clinical definitions.

Focus on what daily life actually feels like:
- planning around appointments and medication schedules
- worrying about whether a drug will stay on formulary
- fatigue, frustration with paperwork, fear of choosing wrong
- feeling misunderstood by insurance systems
- trying to stay independent while managing symptoms
- balancing health with caregiving, work, or everyday life

Do not sound clinical unless a medical fact is needed. Do not diagnose. Do not pity. Do not overdramatize. Do not assume everyone's situation is the same. Speak to the part of the reader that feels tired, unseen, or alone — without exploiting fear.

If the topic is NOT condition-specific, skip this section entirely. Do not force empathy where it does not belong.

LOCALIZATION RULES (local/city pages):
If the keyword targets a specific city or region, make the copy feel truly local — like it could only belong to that place.

Use real, verifiable local details:
- Major hospital systems and health networks in the area (e.g., Virtua, Hackensack Meridian, RWJBarnabas, Cooper, Jefferson, AtlantiCare — use only what is actually in or near the target city)
- Nearby communities and neighborhoods people identify with
- Regional healthcare realities (e.g., proximity to Philadelphia providers for South Jersey, NYC-area networks for North Jersey)
- Any relevant local Medicare enrollment patterns or common plan choices for the area

CRITICAL localization rules:
- Do NOT hallucinate hospitals, systems, or doctor networks. Only reference health systems you are confident serve that area.
- Do NOT stuff the city name. Use it 2-3 times naturally, plus nearby town names for geographic context.
- Do NOT create thin copy that could belong anywhere. Each local page must contain at least one detail that is specific and verifiable to that location.
- If you are unsure whether a health system serves the area, leave it out rather than guess.

If the keyword is NOT location-specific, skip this section entirely.

CTA RULES:
The CTA should feel like relief, not pressure. The reader should feel understood, less alone, more informed, and safer taking the next step.

Good CTA energy:
- "Talk through your options with a local licensed Medicare agent"
- "Get help comparing plans — no cost, no obligation"
- "See which plans fit your doctors, prescriptions, and budget"
- "Ask questions before you enroll"

Do not force urgency unless the enrollment window genuinely demands it. Do not make the CTA bigger than the trust you've earned in the copy. Do not sound pushy.

CONTENT RULES:
- 400-500 words of body content (not counting code/markup)
- Author: Anthony Orner, Licensed Medicare Broker
- Phone: 855-559-1700
- Do NOT mention competitor brand names
- Simple, clean layout — no multi-column grids, no sidebar CTAs, no fancy colored sections

TRUST RULES:
Be careful with claims. Do not overpromise. Do not imply universal acceptance, guaranteed savings, or guaranteed coverage unless those facts are verified. Trust is more important than hype.

MEDIGAP/MEDICARE SUPPLEMENT MESSAGING (new-to-Medicare pages only):
- If the page targets someone new to Medicare (turning 65, first getting Part B) AND the topic is Medicare Supplement/Medigap (NOT Medicare Advantage), use this angle:
  Anthony's practice is to have clients apply for their Medigap plan up to 6 months BEFORE their Part B start date. This locks in the rate early — protecting them from premium increases before coverage begins. Frame it as urgency: "the sooner you lock in, the better your rate." This is the primary conversion angle for new-to-Medicare Medigap pages.
- Never apply this framing to Medicare Advantage pages — it does not apply there.

VERIFIED 2026 MEDICARE FACTS — use only these, do not invent others:
- Part B premium: $202.90/month
- Part B deductible: $283/year
- Part A deductible: $1,676 per benefit period
- Medicare Advantage / Part D Open Enrollment: October 15 – December 7
- Medigap Open Enrollment Period: 6 months starting the month you are 65+ AND enrolled in Part B — guaranteed issue, no health questions, no higher premiums
- Federal Guaranteed Issue triggers (apply in specific situations only): losing employer/union coverage, losing Medicare Advantage coverage, insurance company goes bankrupt, moved out of plan's service area, plan violated its contract
- Skilled Nursing Facility coinsurance (2026): Days 21-100 = $209.50/day; Days 1-20 = $0 with Medicare
- Part B late enrollment penalty: 10% per 12-month period you delayed

MEDICARE FACTS — DO NOT INVENT:
- Do NOT claim any state offers year-round guaranteed issue Medigap enrollment (no state does this without restriction)
- Do NOT cite coverage percentages, approval rates, or statistics without a source
- Do NOT make claims about specific drug coverage under Part D (formularies vary by plan)
- Do NOT state specific carrier premium amounts — say "rates vary by carrier" and offer to compare
- If you are uncertain whether a Medicare rule applies in a specific state, say "rules vary by state — call to confirm" instead of stating a rule as fact
- Use basic Tailwind: max-w-4xl mx-auto px-4 py-8 for main content wrapper
- Optimization target: 96/100 (NOT 100 — leave room for natural language)
- The keyword must appear in: title (at the very start), H1, and the very first words of the first paragraph
- Do NOT force the keyword into H2 subheadings — H2s describe the section topic naturally
- Each page must be UNIQUE — do not clone the same intro/CTA/structure word-for-word across pages
- Always include the heading image as shown in IMAGE SEO above

AFTER WRITING — do a compression pass:
- Cut filler. Tighten sentences. Shorten wherever possible.
- Keep or increase meaning while reducing length.
- Ask: Does this sound like a real person wrote it? Is it written to one person? Did every sentence earn its place? Does the CTA feel easy and human?

CRITICAL: Output ONLY the complete .tsx file content. No markdown fences, no explanation.
Start with: import type { Metadata } from "next";`;
}

async function main() {
  if (!ANTHROPIC_API_KEY) { console.error("ANTHROPIC_API_KEY not set"); process.exit(1); }

  const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY });

  for (const bp of TEST_PAGES) {
    console.log(`\n${"=".repeat(70)}`);
    console.log(`REBUILDING: ${bp.slug} (${bp.type} page)`);
    console.log(`${"=".repeat(70)}`);

    // Research
    console.log("  Researching competitors...");
    const research = await researchKeyword(bp.keyword);

    console.log("  Researching patient/consumer sentiment...");
    const sentiment = await researchSentiment(bp.keyword);
    if (sentiment) {
      console.log("  Found real voices — feeding into copy.");
    } else {
      console.log("  No sentiment data — writing with broad empathy.");
    }

    // Generate
    console.log("  Generating with upgraded prompt + social listening...");
    const prompt = buildPrompt(bp, research, sentiment);

    try {
      const msg = await anthropic.messages.create({
        model: "claude-opus-4-6",
        max_tokens: 4096,
        messages: [{ role: "user", content: prompt }],
      });

      let content = msg.content[0].text.trim();
      content = content.replace(/^```(?:tsx?)?\n?/, "").replace(/\n?```$/, "");

      // Write as _new.tsx for comparison
      const pageDir = repoPath("app", "services", bp.slug);
      const newFile = path.join(pageDir, "page_new.tsx");
      fs.writeFileSync(newFile, content, "utf8");
      console.log(`  Written: app/services/${bp.slug}/page_new.tsx`);
      console.log(`  Compare with: app/services/${bp.slug}/page.tsx`);
    } catch (err) {
      console.error(`  ERROR: ${err.message}`);
    }
  }

  console.log("\n\nDone. Compare each page.tsx (old) vs page_new.tsx (new) to see the difference.");
  console.log("When satisfied, rename page_new.tsx → page.tsx to apply the upgrade.");
}

main().catch(console.error);
