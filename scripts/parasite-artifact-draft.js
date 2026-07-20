#!/usr/bin/env node
/**
 * parasite-artifact-draft.js
 *
 * Generates a paste-ready Claude.ai artifact prompt + landing-page body for
 * the "Claude Parasite SEO" playbook. Target: Medicare Supplement (Medigap)
 * enrollment keywords; CTA destination: https://healthplans.now
 * (EasyKind Medicare's enrollment brand).
 *
 * Flow:
 *   1. Fetch top-10 SERP results for the keyword (Serper)
 *   2. Pull ~1200 chars from 3 competitor pages (skip our own domains)
 *   3. Ask Claude to extract high-relevance entities + draft a conversion
 *      landing page (~700 words) promoting healthplans.now
 *   4. Write artifacts/parasite-drafts/{slug}.md — user pastes the prompt
 *      block into claude.ai -> New Artifact -> Apps & Websites, publishes,
 *      then submits the published claude.ai URL to an indexing service.
 *
 * Run:
 *   node scripts/parasite-artifact-draft.js "best medicare supplement insurance"
 *   node scripts/parasite-artifact-draft.js --keyword "enroll in medigap plan g"
 *   node scripts/parasite-artifact-draft.js --seed   # write KEYWORD_QUEUE.md only
 *
 * Env (from scripts/.env): SERPER_API_KEY, ANTHROPIC_API_KEY
 */

require("dotenv").config({ path: __dirname + "/.env" });

const Anthropic = require("@anthropic-ai/sdk");
const fs = require("fs");
const path = require("path");
const FIG = require("./medicare-figures.js");

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const SERPER_API_KEY = process.env.SERPER_API_KEY;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

const OUT_DIR = path.resolve(__dirname, "..", "artifacts", "parasite-drafts");
const QUEUE_FILE = path.join(OUT_DIR, "KEYWORD_QUEUE.md");

const CTA_URL = "https://healthplans.now";
const PHONE = "855-559-1700";

const OWN_DOMAINS = ["medicareyourself.com", "healthplans.now", "easykindmedicare.com"];

const SEED_KEYWORDS = [
  "best medicare supplement insurance",
  "enroll in medigap plan g",
  "medigap plan g enrollment",
  "compare medicare supplement plans",
  "switch medicare supplement plans",
  "medicare supplement quotes online",
  "medicare supplement insurance for seniors",
  "how to sign up for medigap",
  "best medigap plan for new enrollees",
  "medigap open enrollment period",
];

// ---------------------------------------------------------------------------
// CLI parsing
// ---------------------------------------------------------------------------
const args = process.argv.slice(2);
const SEED_MODE = args.includes("--seed");

function getKeyword() {
  const i = args.indexOf("--keyword");
  if (i >= 0 && args[i + 1]) return args[i + 1];
  // First positional arg that doesn't start with --
  const positional = args.find((a) => !a.startsWith("--"));
  return positional || null;
}

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------
function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// ---------------------------------------------------------------------------
// SERP research
// ---------------------------------------------------------------------------
async function fetchSerp(keyword) {
  const res = await fetch("https://google.serper.dev/search", {
    method: "POST",
    headers: { "X-API-KEY": SERPER_API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ q: keyword, gl: "us", hl: "en", num: 10 }),
  });
  if (!res.ok) throw new Error(`Serper ${res.status}: ${await res.text()}`);
  return await res.json();
}

async function fetchCompetitorText(url) {
  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(7000),
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)",
      },
    });
    if (!res.ok) return null;
    const html = await res.text();
    return stripHtml(html).slice(0, 1200);
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Claude draft (entities + landing page)
// ---------------------------------------------------------------------------
async function draftWithClaude({ keyword, serpBrief, serpTitles }) {
  const client = new Anthropic();

  const prompt = `You are drafting a parasite-SEO landing page that will be published on claude.ai as a Claude Artifact. The goal is to rank for the keyword below and drive enrollment clicks to healthplans.now.

IMPORTANT CONTEXT — healthplans.now is a LIVE Medigap application platform, not a lead-capture form. Visitors can complete full end-to-end applications on-site for:
- Turning-65 enrollments (people entering their 6-month Medigap Open Enrollment Period)
- Carrier switches (existing Medigap members changing plans/carriers, which goes through medical underwriting)

Because the funnel is end-to-end, CTAs must use TRANSACTIONAL verbs ("Apply Now", "Enroll Today", "Switch Carriers in Minutes", "Start Your Application"), NOT research verbs like "Get a Free Quote" or "Learn More". Pick CTA copy that matches the keyword's intent: turning-65 keyword → "Enroll in Medigap →" / "Apply for Your Plan →"; switcher keyword → "Switch Carriers in Minutes →" / "Change Your Medigap Plan →"; general commercial keyword → "Apply Now at healthplans.now →" / "Start Your Medigap Application →".

TARGET KEYWORD: "${keyword}"

TOP-RANKING SERP TITLES (for intent matching):
${serpTitles.map((t, i) => `${i + 1}. ${t}`).join("\n")}

COMPETITOR CONTENT BRIEFS (verbatim excerpts to ground topical coverage):
${serpBrief}

YOUR TASK — return ONLY a JSON object with this shape (no markdown fences, no prose):

{
  "entities": [
    "15 high-relevance entities/subtopics the page must cover (plan letters, enrollment windows, CMS terms, common consumer questions). Short phrases only."
  ],
  "headline": "H1 for the landing page. Must contain the target keyword or a tight variant. Under 65 chars.",
  "meta_title": "SEO title tag. Under 60 chars. No phone number.",
  "meta_description": "SEO meta description. 150-160 chars. Ends with a soft CTA.",
  "body_html": "Full landing-page body as clean HTML (no <html>/<head>/<body> wrapper — just the inner content). 600-900 words. Use semantic tags: <h2>, <h3>, <p>, <ul>, <li>, <a>. STRUCTURE (strict): (1) First <p> is a 2-3 sentence direct, declarative answer to the query — optimized for Google AI Overview citation. No throat-clearing, no 'in this guide we'll explore...' openings. Plain factual sentences. (2) IMMEDIATELY after that first <p> — before any <h2> — place the primary CTA as a prominent anchor using a TRANSACTIONAL verb matched to the keyword intent (see context above). Example shapes: <a href=\"https://healthplans.now\">Apply Now at healthplans.now →</a> OR <a href=\"https://healthplans.now\">Switch Carriers in Minutes →</a> OR <a href=\"https://healthplans.now\">Enroll in Medigap Today →</a>. Do NOT use 'Get a Free Quote' or 'Learn More' — healthplans.now takes the full application, so the CTA must reflect that. This above-the-fold placement is non-negotiable. (3) Then the body: sections on cost, enrollment timing, plan comparison (G vs. N), and eligibility. Include 2 additional CTA anchors with href=\"https://healthplans.now\" using transactional verbs, embedded naturally in the body. (4) FAQ block at the end — use an <h2>Frequently Asked Questions</h2> header, then for EACH of the 3 questions in the 'faqs' array (same order, verbatim) render <h3>{question}</h3><p>{answer}</p>. The question text inside the <h3> and the answer text inside the <p> MUST match the 'faqs' array byte-for-byte so the generated JSON-LD FAQPage schema and the visible page stay in sync (Google revokes FAQ rich results if they diverge).",
  "faqs": [
    { "question": "First FAQ question — plain sentence ending with ?", "answer": "First FAQ answer — ≤ 50 words, declarative, suitable as a featured-snippet extract. Must appear verbatim in the body_html's FAQ block." },
    { "question": "Second FAQ question", "answer": "Second FAQ answer — ≤ 50 words, verbatim in body_html." },
    { "question": "Third FAQ question", "answer": "Third FAQ answer — ≤ 50 words, verbatim in body_html." }
  ],
  "internal_notes": "1-2 sentences on the intent angle chosen and why it fits the SERP."
}

COMPLIANCE RULES (hard constraints — violating any invalidates the output):
- All CTA buttons / "Learn More" / "Enroll" links must use href="https://healthplans.now". No claude.ai subdomains, no other destinations.
- Use ${FIG.year} Medicare figures only: ${FIG.promptLine}. Do NOT cite other years' figures.
- Do NOT claim New Jersey has year-round guaranteed-issue for Medigap. Reference only the standard 6-month Medigap OEP and federal guaranteed-issue triggers (e.g., loss of employer coverage, moving out of a plan's service area).
- Do NOT reference tobacco rate differentials during the NJ 6-month Medigap OEP (NJ prohibits them during OEP).
- Do NOT invent statistics, premiums, or carrier names. If unsure, speak in ranges or omit.
- The phone number ${PHONE} may appear in body text but MUST NOT appear in meta_title or headline.
- Do NOT mention competitor brand names (Boomer Benefits, MedicareFAQ, etc.).
- Tone: trustworthy, plain-spoken, no hype. Written for someone 62-68 making an enrollment decision.

Return JSON only.`;

  const msg = await client.messages.create({
    model: "claude-opus-4-8",
    max_tokens: 4096,
    messages: [{ role: "user", content: prompt }],
  });

  const raw = msg.content[0].text.trim();
  // Tolerate accidental ```json fences just in case
  const cleaned = raw.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "");
  return JSON.parse(cleaned);
}

// ---------------------------------------------------------------------------
// JSON-LD schema assembly (Article + FAQPage)
// ---------------------------------------------------------------------------
function buildSchemas({ draft, generatedAt }) {
  const today = generatedAt.slice(0, 10); // YYYY-MM-DD
  const faqs = Array.isArray(draft.faqs) ? draft.faqs : [];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: draft.headline,
    description: draft.meta_description,
    datePublished: today,
    dateModified: today,
    inLanguage: "en-US",
    author: {
      "@type": "Organization",
      name: "EasyKind Medicare",
      url: CTA_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "EasyKind Medicare",
      url: CTA_URL,
      telephone: `+1-${PHONE}`,
      sameAs: ["https://medicareyourself.com"],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  // Only include FAQPage schema if we actually have FAQs
  return faqs.length > 0 ? [articleSchema, faqSchema] : [articleSchema];
}

// ---------------------------------------------------------------------------
// Output rendering
// ---------------------------------------------------------------------------
function renderDraftFile({ keyword, serp, serpBrief, draft, generatedAt }) {
  const { entities, headline, meta_title, meta_description, body_html, internal_notes, faqs } = draft;
  const schemas = buildSchemas({ draft, generatedAt });
  const schemaJson = JSON.stringify(schemas, null, 2);

  const artifactPrompt = `Create a catchy, modern single-page landing page for the Medicare Supplement enrollment brand "healthplans.now" (operated by EasyKind Medicare). Target keyword: "${keyword}".

Use the Apps and Websites artifact format. Produce one responsive HTML page with inline CSS — clean, trustworthy design, high contrast, large readable fonts (this audience is 62-68). Primary color: teal #2D6E5F. Accent CTA color: orange #E8842A. Section background: #F6FAF8. Font: Montserrat or system sans-serif.

Page must include inside the <head>:
- <title>${meta_title}</title>
- <meta name="description" content="${meta_description}">
- <meta property="og:title" content="${meta_title}">
- <meta property="og:description" content="${meta_description}">
- <meta property="og:type" content="article">
- <meta property="og:url" content="https://healthplans.now">
- <meta name="twitter:card" content="summary_large_image">
- The JSON-LD schema block below, inserted VERBATIM inside a single <script type="application/ld+json">...</script> tag. This is a valid JSON array containing the Article and FAQPage schemas. Do not modify any field values.

JSON-LD SCHEMA BLOCK (insert verbatim inside <head>):

<script type="application/ld+json">
${schemaJson}
</script>

Page body must include:
- Exactly ONE <h1> on the page, in the hero: ${headline}
- The page body content below (insert verbatim into the main content area — keep all <a href="https://healthplans.now"> anchors exactly as written, and CRITICALLY preserve the order: the primary CTA anchor that sits directly under the first paragraph MUST remain directly under the first paragraph in the rendered page, above any H2. Do not move it to a sidebar, do not merge it into the hero, do not push it below the fold.)
- A sticky top bar with "healthplans.now" brand text on the left and an orange "Apply Now" button on the right linking to https://healthplans.now. (Note: healthplans.now takes the full Medigap application — turning-65 + switcher — on-site, so the top-bar CTA is transactional, not "Get a Quote".)
- A hero section containing the single H1 above, a short subhead, and a primary transactional CTA button linking to https://healthplans.now — match the button verb to the keyword intent (turning-65 → "Enroll in Medigap", switcher → "Switch Carriers", general → "Apply Now")
- A footer with "© EasyKind Medicare · healthplans.now · Licensed independent Medicare broker · ${PHONE}" and a final CTA link to https://healthplans.now

HEADING HIERARCHY RULES: exactly one <h1> (in the hero). All main sections in the body are <h2>. FAQ questions at the end are <h3>. Do not add any <h4> or deeper. Do not demote any heading.

CRITICAL LINKING RULE: every button, every "Learn More", every "Enroll Now", every CTA must use href="https://healthplans.now". Do NOT link to claude.ai, do NOT link to any claude.site subdomain, do NOT invent any other URL. If in doubt, link to https://healthplans.now.

CRITICAL CTA PLACEMENT RULE: The body content below opens with one short declarative paragraph followed by a prominent CTA anchor. Render the CTA as a large, high-contrast button (orange #E8842A background, white text, ~18px, generous padding, rounded corners) positioned directly beneath that first paragraph — this is above-the-fold ground zero for the page. Do not restructure the body order.

CRITICAL FAQ RULE: the body's FAQ block at the end contains 3 <h3> question headings followed by <p> answers. These must render EXACTLY as written — matching the text in the JSON-LD FAQPage schema byte-for-byte. Google revokes FAQ rich results if the visible text and schema diverge.

Do not include any "Made with Claude" style attribution. Do not add tracking scripts.

BODY CONTENT (insert into the main section verbatim):

${body_html}`;

  return `# Parasite Artifact Draft — ${keyword}

**Generated:** ${generatedAt}
**Target keyword:** ${keyword}
**CTA destination:** ${CTA_URL}
**Intent notes:** ${internal_notes}

---

## How to use this file

1. Go to https://claude.ai → **New Artifact** → select **Apps and Websites**.
2. Copy the entire **CLAUDE.AI PROMPT** block below (between the \`===\` markers) and paste it as your message.
3. Wait for the artifact to render. Inspect every CTA — confirm each one links to \`${CTA_URL}\` and NOT to any claude.ai / claude.site URL.
4. Click **Publish**. Copy the resulting claude.ai URL.
5. Submit that URL to your indexing service (Rabbit URL Indexer / SpeedLinks) and share on X / Reddit to accelerate discovery.
6. Note: every edit-and-republish generates a new URL — minimize edits post-publish.

---

## SERP snapshot (top 10)

${serp.organic
  ? serp.organic.slice(0, 10).map((r, i) => `${i + 1}. **${r.title || ""}** — ${r.link || ""}`).join("\n")
  : "(no organic results returned)"}

---

## Entities to cover (from Claude's extraction)

${entities.map((e) => `- ${e}`).join("\n")}

---

## Proposed metadata

- **Meta title:** ${meta_title}
- **Meta description:** ${meta_description}
- **H1:** ${headline}

---

## FAQ (must match schema verbatim)

${(faqs || []).map((f, i) => `**Q${i + 1}.** ${f.question}\n\n${f.answer}`).join("\n\n")}

---

## JSON-LD schema (auto-generated — Article + FAQPage)

\`\`\`json
${schemaJson}
\`\`\`

Validate after publish: paste the claude.ai URL into [search.google.com/test/rich-results](https://search.google.com/test/rich-results).

---

## === CLAUDE.AI PROMPT (copy everything between these markers) ===

${artifactPrompt}

## === END PROMPT ===

---

## Raw body HTML (for review / manual tweaks)

\`\`\`html
${body_html}
\`\`\`

---

## Competitor briefs used for grounding

${serpBrief}
`;
}

function renderQueueFile() {
  return `# Parasite Artifact Keyword Queue

High-intent Medicare Supplement enrollment keywords to process, one at a time.
For each keyword, run:

\`\`\`
node scripts/parasite-artifact-draft.js "<keyword>"
\`\`\`

Then open the generated file in \`artifacts/parasite-drafts/\`, follow the
"How to use this file" section, and check the box below once the artifact is
published + submitted for indexing.

## Queue

${SEED_KEYWORDS.map((k) => `- [ ] ${k}`).join("\n")}

## Notes

- Every published artifact should point CTAs to https://healthplans.now.
- Track which claude.ai URLs you published in \`artifacts/parasite-drafts/PUBLISHED.md\` (create manually — log URL + date + keyword).
- If Anthropic changes artifact publishing behavior or deindexes this tactic, this queue becomes a no-op; don't treat parasite URLs as durable assets.
`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  ensureDir(OUT_DIR);

  if (SEED_MODE || !getKeyword()) {
    fs.writeFileSync(QUEUE_FILE, renderQueueFile(), "utf8");
    console.log(`Wrote keyword queue: ${path.relative(process.cwd(), QUEUE_FILE)}`);
    if (!getKeyword()) {
      console.log(`\nUsage: node scripts/parasite-artifact-draft.js "<keyword>"`);
      console.log(`       node scripts/parasite-artifact-draft.js --seed`);
    }
    return;
  }

  if (!SERPER_API_KEY) throw new Error("SERPER_API_KEY not set in scripts/.env");
  if (!ANTHROPIC_API_KEY) throw new Error("ANTHROPIC_API_KEY not set in scripts/.env");

  const keyword = getKeyword();
  const slug = slugify(keyword);
  const outFile = path.join(OUT_DIR, `${slug}.md`);

  console.log(`Keyword: "${keyword}"`);
  console.log(`Output:  ${path.relative(process.cwd(), outFile)}`);

  // 1. SERP
  console.log("Fetching Serper top-10...");
  const serp = await fetchSerp(keyword);
  const organic = serp.organic || [];
  const serpTitles = organic.slice(0, 10).map((r) => r.title || "").filter(Boolean);

  // 2. Competitor content (top 3 excluding our own domains)
  const competitorUrls = organic
    .map((r) => r.link)
    .filter((u) => u && !OWN_DOMAINS.some((d) => u.includes(d)))
    .slice(0, 3);

  console.log(`Fetching ${competitorUrls.length} competitor pages...`);
  const briefs = [];
  for (const url of competitorUrls) {
    const text = await fetchCompetitorText(url);
    if (text) briefs.push(`SOURCE: ${url}\n${text}`);
  }
  const serpBrief = briefs.length ? briefs.join("\n\n---\n\n") : "(no competitor pages fetched)";

  // 3. Claude draft
  console.log("Drafting with Claude (this takes ~20s)...");
  const draft = await draftWithClaude({ keyword, serpBrief, serpTitles });

  // 4. Validate CTA rules before writing
  const body = draft.body_html || "";
  if (!body.includes('href="https://healthplans.now"')) {
    console.warn("WARN: drafted body does not contain a healthplans.now href — review carefully before publishing.");
  }
  if (/claude\.ai|claude\.site/i.test(body)) {
    console.warn("WARN: drafted body references a claude.ai/claude.site URL — strip before publishing.");
  }
  // Primary CTA must sit above the first <h2> and within the first ~450 chars
  // of the body (i.e., directly under paragraph 1) — parasite-SEO placement rule.
  const firstCtaIdx = body.indexOf('href="https://healthplans.now"');
  const firstH2Idx = body.search(/<h2\b/i);
  if (firstCtaIdx > 450) {
    console.warn(`WARN: primary CTA appears ${firstCtaIdx} chars into body — expected under ~450 (directly below paragraph 1). Consider re-running.`);
  }
  if (firstH2Idx >= 0 && firstCtaIdx > firstH2Idx) {
    console.warn("WARN: primary CTA appears AFTER the first <h2> — parasite-SEO rule is CTA above the first heading. Consider re-running.");
  }
  // FAQ verbatim match: each faqs[i].question must appear in body_html inside an <h3>
  // so the JSON-LD FAQPage schema and the rendered page stay in sync.
  const faqsOut = Array.isArray(draft.faqs) ? draft.faqs : [];
  for (const f of faqsOut) {
    if (!f.question || !body.includes(f.question)) {
      console.warn(`WARN: FAQ question not found verbatim in body_html — schema/page mismatch will kill FAQ rich results. Missing: "${(f.question || "").slice(0, 80)}"`);
    }
    if (!f.answer || !body.includes(f.answer)) {
      console.warn(`WARN: FAQ answer not found verbatim in body_html — schema/page mismatch. Missing answer to: "${(f.question || "").slice(0, 80)}"`);
    }
  }
  if (faqsOut.length !== 3) {
    console.warn(`WARN: expected 3 FAQs, got ${faqsOut.length}. FAQPage schema may be incomplete.`);
  }

  // 5. Write file
  const generatedAt = new Date().toISOString();
  const content = renderDraftFile({ keyword, serp, serpBrief, draft, generatedAt });
  fs.writeFileSync(outFile, content, "utf8");

  console.log(`Done. Open ${path.relative(process.cwd(), outFile)} and follow the "How to use this file" section.`);
}

main().catch((err) => {
  console.error("parasite-artifact-draft failed:", err.message);
  process.exit(1);
});
