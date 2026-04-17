/**
 * rebuild-copy.js
 * Regenerates body copy for existing pages using the upgraded prompt + social listening.
 * Reads blueprints from the Page Blueprints sheet (status = "built"), regenerates copy,
 * and overwrites page.tsx directly.
 *
 * SEO SAFETY:
 * - Does NOT change URLs/slugs
 * - Preserves keyword placement in title, H1, first paragraph
 * - Only regenerates copy — structure stays the same
 *
 * Usage:
 *   node scripts/rebuild-copy.js                    # rebuild all built pages
 *   node scripts/rebuild-copy.js --limit 5          # rebuild first 5 pages
 *   node scripts/rebuild-copy.js --slug cherry-hill # rebuild pages matching slug
 *   node scripts/rebuild-copy.js --dry-run          # show what would be rebuilt, don't write
 */

require("dotenv").config({ path: __dirname + "/.env" });

const Anthropic = require("@anthropic-ai/sdk");
const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

const SERPER_API_KEY = process.env.SERPER_API_KEY;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const GOOGLE_CREDENTIALS_JSON = process.env.GOOGLE_CREDENTIALS_JSON;
const INTERNAL_SEO_SHEET_ID = process.env.INTERNAL_SEO_SHEET_ID;

const LOG_FILE = path.join(__dirname, "..", "rebuild-copy-log.tsv");

function repoPath(...parts) {
  return path.resolve(__dirname, "..", ...parts);
}

// ---------------------------------------------------------------------------
// Shared helpers (from build-compact-pages.js)
// ---------------------------------------------------------------------------
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
  ];

  const kwLower = keyword.toLowerCase();
  const queries = [];

  const matchedCondition = conditions.find((c) => kwLower.includes(c));
  if (matchedCondition) {
    queries.push(`"medicare" "${matchedCondition}" frustrating OR worried OR "nobody told me" OR "wish I knew" site:reddit.com`);
    queries.push(`"medicare" "${matchedCondition}" coverage OR cost OR "out of pocket" site:reddit.com OR site:inspire.com`);
  }

  const planTypes = ["supplement", "medigap", "advantage", "plan g", "plan n", "plan f", "part d"];
  const matchedPlan = planTypes.find((p) => kwLower.includes(p));
  if (matchedPlan) {
    queries.push(`"medicare ${matchedPlan}" "I wish" OR "mistake" OR "surprised" OR "didn't realize" site:reddit.com`);
  }

  const njCities = keyword.match(/\b(cherry hill|camden|trenton|newark|jersey city|edison|brick|toms river|lakewood|paterson|clifton|hackensack|morristown|princeton|freehold|mount laurel|marlton|voorhees|haddonfield|vineland|atlantic city|egg harbor|bridgewater|piscataway|plainfield|belleville|burlington|fort lee|jackson|woodbridge|old bridge|hamilton|east brunswick|neptune|montclair|north bergen|passaic|new brunswick|north brunswick|irvington|kearny|linden|sayreville|sewell|sicklerville|teaneck|union city|union|wayne|west new york|west orange|hoboken|hillsborough|howell|cranford|bayonne|bloomfield|bridgeton|elizabeth|franklin|atlantic city)\b/i);
  if (njCities) {
    queries.push(`"medicare" "${njCities[1]}" OR "south jersey" OR "north jersey" hospital OR doctor OR "health system" site:reddit.com`);
  }

  if (kwLower.includes("turning 65") || kwLower.includes("new to medicare") || kwLower.includes("enroll")) {
    queries.push(`"turning 65" "medicare" overwhelmed OR confused OR "where do I start" OR "nobody explains" site:reddit.com`);
  }

  const topicWords = keyword.toLowerCase()
    .replace(/\b(medicare|insurance|agents?|brokers?|near me|in|nj|new jersey|best|top|find|local|free)\b/g, "")
    .replace(/\s+/g, " ").trim();
  if (queries.length === 0 && topicWords.length > 3) {
    queries.push(`"medicare" "${topicWords}" frustrated OR confusing OR "real experience" site:reddit.com`);
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
// Google Sheets
// ---------------------------------------------------------------------------
async function getSheetsClient() {
  if (!GOOGLE_CREDENTIALS_JSON) throw new Error("GOOGLE_CREDENTIALS_JSON not set");
  const keyFile = GOOGLE_CREDENTIALS_JSON.replace(/^~/, process.env.HOME);
  const auth = new google.auth.GoogleAuth({
    keyFile,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

async function getBuiltBlueprints(sheets) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: INTERNAL_SEO_SHEET_ID,
    range: "Page Blueprints!A:O",
  });

  const rows = res.data.values || [];
  if (rows.length <= 1) return [];

  const built = [];
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const status = (row[10] || "").toLowerCase().trim();
    if (status !== "built") continue;

    built.push({
      rowIndex: i + 1,
      keyword: row[0] || "",
      title: row[1] || "",
      slug: (row[2] || "").replace(/^\/(hub|services)\//, ""),
      h1: row[3] || "",
      h2s: [row[4], row[5], row[6], row[7]].filter(Boolean),
      metaDescription: row[8] || "",
      contentNotes: (row[14] || "").trim(),
    });
  }
  return built;
}

// ---------------------------------------------------------------------------
// Prompt (exact same as build-compact-pages.js upgraded version)
// ---------------------------------------------------------------------------
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

- Use contractions naturally.
- Use ACTIVE VOICE.
- VARY sentence length. Mix short punches with slightly longer explanatory lines. Never three long sentences in a row.
- Be SPECIFIC. Use actual dollar amounts, plan names, enrollment windows, and state rules. Vague = rejected.
- Paragraph length: 2-3 sentences max. One-sentence paragraphs are encouraged for emphasis.
- Sound human, not polished to death.
- Write to someone, not for someone.

CUT THESE HABITS — instant rejection if found:
- Throat-clearing intros ("When it comes to Medicare..." / "Are you looking for...")
- Generic SEO openings that could apply to any city or topic
- Obvious statements without immediately useful follow-up
- Corporate jargon or empty empathy
- Fear-based pressure or hype language
- NEVER use these words: delve, tapestry, realm, intricate, meticulous, multifaceted, nuanced, pivotal, seamless, robust, foster, garner, bolster, interplay, underscore, vibrant, embark, testament, transformative, game-changer, landscape (as metaphor), empower/empowering, comprehensive (when vague), journey
- NEVER use these phrases: "it's worth noting", "it is important to", "having said that", "that being said", "in conclusion", "in summary", "from a broader perspective", "navigate the complexities", "ensuring peace of mind", "comprehensive coverage for your needs", "peace of mind"
- Do NOT use em dashes.
- Do NOT open paragraphs with "Furthermore," "Moreover," or "Additionally,"

EMPATHY RULES (condition and concern pages):
When the topic involves a chronic illness, disability, or ongoing health challenge, lead with lived reality — not clinical definitions.
Focus on what daily life actually feels like. Do not sound clinical unless necessary. Do not diagnose. Do not pity. Do not overdramatize.
If the topic is NOT condition-specific, skip this section entirely.

LOCALIZATION RULES (local/city pages):
If the keyword targets a specific city or region, make the copy feel truly local.
Use real, verifiable local details: hospital systems, nearby communities, regional healthcare realities.
Do NOT hallucinate hospitals or health systems. Do NOT stuff the city name.
If the keyword is NOT location-specific, skip this section entirely.

CTA RULES:
The CTA should feel like relief, not pressure.
Do not force urgency unless the enrollment window genuinely demands it.

CONTENT RULES:
- 400-500 words of body content (not counting code/markup)
- Author: Anthony Orner, Licensed Medicare Broker
- Phone: 855-559-1700
- Do NOT mention competitor brand names
- Simple, clean layout

TRUST RULES:
Do not overpromise. Trust is more important than hype.

MEDIGAP/MEDICARE SUPPLEMENT MESSAGING (new-to-Medicare pages only):
- If the page targets someone new to Medicare AND the topic is Medigap: apply 6 months BEFORE Part B start date to lock in rate.
- Never apply this framing to Medicare Advantage pages.

VERIFIED 2026 MEDICARE FACTS — use only these, do not invent others:
- Part B premium: $202.90/month
- Part B deductible: $283/year
- Part A deductible: $1,676 per benefit period
- Medicare Advantage / Part D Open Enrollment: October 15 – December 7
- Medigap Open Enrollment Period: 6 months starting the month you are 65+ AND enrolled in Part B
- Federal Guaranteed Issue triggers: losing employer/union coverage, losing MA coverage, carrier bankruptcy, moved out of service area, plan violated contract
- SNF coinsurance (2026): Days 21-100 = $209.50/day; Days 1-20 = $0
- Part B late enrollment penalty: 10% per 12-month period you delayed

MEDICARE FACTS — DO NOT INVENT:
- Do NOT claim any state offers year-round guaranteed issue Medigap enrollment without restriction
- Do NOT cite coverage percentages or statistics without a source
- Do NOT make claims about specific drug coverage under Part D
- Do NOT state specific carrier premium amounts — say "rates vary by carrier"
- If uncertain about a state rule, say "rules vary by state — call to confirm"
- Optimization target: 96/100 (NOT 100)
- Keyword must appear in: title (start), H1, first words of first paragraph
- Do NOT force keyword into H2 subheadings
- Each page must be UNIQUE
- Always include heading image

AFTER WRITING — do a compression pass:
Cut filler. Tighten sentences. Keep or increase meaning while reducing length.

CRITICAL: Output ONLY the complete .tsx file content. No markdown fences, no explanation.
Start with: import type { Metadata } from "next";`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  if (!ANTHROPIC_API_KEY) { console.error("ANTHROPIC_API_KEY not set"); process.exit(1); }
  if (!INTERNAL_SEO_SHEET_ID) { console.error("INTERNAL_SEO_SHEET_ID not set"); process.exit(1); }

  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const limitIdx = args.indexOf("--limit");
  const limit = limitIdx >= 0 ? parseInt(args[limitIdx + 1], 10) : Infinity;
  const slugIdx = args.indexOf("--slug");
  const slugFilter = slugIdx >= 0 ? args[slugIdx + 1].toLowerCase() : null;

  const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY });

  console.log("Reading built blueprints from Page Blueprints tab...");
  const sheets = await getSheetsClient();
  const blueprints = await getBuiltBlueprints(sheets);

  let filtered = blueprints;
  if (slugFilter) {
    filtered = blueprints.filter((bp) => bp.slug.toLowerCase().includes(slugFilter));
    console.log(`Filtered to ${filtered.length} page(s) matching "${slugFilter}"`);
  }
  if (limit < filtered.length) {
    filtered = filtered.slice(0, limit);
    console.log(`Limited to first ${limit} page(s)`);
  }

  // Only rebuild pages that exist on disk
  filtered = filtered.filter((bp) => {
    const pageFile = repoPath("app", "services", bp.slug, "page.tsx");
    return fs.existsSync(pageFile);
  });

  console.log(`Found ${filtered.length} page(s) to rebuild.\n`);

  if (dryRun) {
    console.log("DRY RUN — would rebuild these pages:");
    for (const bp of filtered) {
      console.log(`  /services/${bp.slug} — "${bp.keyword}"`);
    }
    return;
  }

  // Ensure log file
  if (!fs.existsSync(LOG_FILE)) {
    fs.writeFileSync(LOG_FILE, "date\tkeyword\tslug\tstatus\tsentiment_found\n");
  }

  const today = new Date().toISOString().split("T")[0];
  let rebuilt = 0;
  let errors = 0;

  for (const bp of filtered) {
    const pageDir = repoPath("app", "services", bp.slug);
    const pageFile = path.join(pageDir, "page.tsx");
    const backupFile = path.join(pageDir, "page_old.tsx");

    console.log(`Rebuilding: /services/${bp.slug}`);
    console.log(`  Keyword: "${bp.keyword}"`);

    // Backup existing page
    fs.copyFileSync(pageFile, backupFile);

    // Research
    console.log(`  Researching competitors...`);
    const research = await researchKeyword(bp.keyword);

    console.log(`  Researching patient/consumer sentiment...`);
    const sentiment = await researchSentiment(bp.keyword);
    const hasSentiment = !!sentiment;
    if (hasSentiment) {
      console.log(`  Found real voices — feeding into copy.`);
    } else {
      console.log(`  No sentiment data — writing with broad empathy.`);
    }

    // Generate
    console.log(`  Generating with upgraded prompt...`);
    const prompt = buildPrompt(bp, research, sentiment);

    try {
      const msg = await anthropic.messages.create({
        model: "claude-opus-4-7",
        max_tokens: 4096,
        messages: [{ role: "user", content: prompt }],
      });

      let content = msg.content[0].text.trim();
      content = content.replace(/^```(?:tsx?)?\n?/, "").replace(/\n?```$/, "");

      // Basic validation
      if (!content.includes("export const metadata") || !content.includes("export default function")) {
        console.error(`  ERROR: Generated content missing required exports — skipping`);
        fs.copyFileSync(backupFile, pageFile); // restore
        errors++;
        continue;
      }

      // Write new page
      fs.writeFileSync(pageFile, content, "utf8");
      console.log(`  Rebuilt: app/services/${bp.slug}/page.tsx`);
      console.log(`  Backup: app/services/${bp.slug}/page_old.tsx`);

      fs.appendFileSync(LOG_FILE, [today, bp.keyword, bp.slug, "rebuilt", hasSentiment ? "yes" : "no"].join("\t") + "\n");
      rebuilt++;
    } catch (err) {
      console.error(`  ERROR: ${err.message}`);
      fs.copyFileSync(backupFile, pageFile); // restore on error
      fs.appendFileSync(LOG_FILE, [today, bp.keyword, bp.slug, "error", err.message].join("\t") + "\n");
      errors++;
    }

    console.log("");
  }

  console.log(`\nDone. Rebuilt ${rebuilt} page(s), ${errors} error(s).`);
  if (rebuilt > 0) {
    console.log("Each original page is backed up as page_old.tsx.");
    console.log("Review the changes, then delete page_old.tsx files when satisfied.");
  }
}

main().catch((err) => {
  console.error("rebuild-copy failed:", err.message);
  process.exit(1);
});
