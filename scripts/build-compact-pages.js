/**
 * build-compact-pages.js
 * Builds Next.js pages from approved Compact Keyword blueprints.
 *
 * APPROVAL GATE: Only builds pages where Status = "approved" in the
 * Internal SEO Template Google Sheet (Page Blueprints tab).
 * Anthony marks rows "approved" in the sheet → this script builds them.
 *
 * Each run:
 *  1. Reads approved blueprints from the Internal SEO Template sheet
 *  2. Skips any that already have a built page on disk
 *  3. Researches competitor content via Serper for each keyword
 *  4. Asks Claude Opus to generate a 400-500 word Next.js page
 *  5. Writes page to app/hub/[slug]/page.tsx
 *  6. Updates sheet status to "built"
 *  7. Logs to compact-pages-log.tsv
 *
 * Template: Edward Sturm's Compact Keyword Landing Page layout
 * (H1 → keyword intro → CTA #1 → 6 H2 sections → CTA #2 → FAQ → footer).
 *
 * Run: node scripts/build-compact-pages.js
 */

require("dotenv").config({ path: __dirname + "/.env" });

const Anthropic = require("@anthropic-ai/sdk");
const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const SERPER_API_KEY = process.env.SERPER_API_KEY;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const GOOGLE_CREDENTIALS_JSON = process.env.GOOGLE_CREDENTIALS_JSON;
const INTERNAL_SEO_SHEET_ID = process.env.INTERNAL_SEO_SHEET_ID;

const LOG_FILE = path.join(__dirname, "..", "compact-pages-log.tsv");

function repoPath(...parts) {
  return path.resolve(__dirname, "..", ...parts);
}

// ---------------------------------------------------------------------------
// Serper research — ground content in what's actually ranking
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
  } catch {
    return "";
  }

  const urls = (serpResults.organic || [])
    .slice(0, 3)
    .map((r) => r.link)
    .filter((u) => u && !u.includes("medicareyourself.com"));

  // Also grab People Also Ask for FAQ ideas
  const paaQuestions = (serpResults.peopleAlsoAsk || [])
    .slice(0, 4)
    .map((p) => p.question)
    .filter(Boolean);

  const snippets = [];
  for (const url of urls) {
    try {
      const res = await fetch(url, {
        signal: AbortSignal.timeout(6000),
        headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)" },
      });
      if (!res.ok) continue;
      const html = await res.text();
      const text = stripHtml(html).slice(0, 1200);
      snippets.push(`SOURCE: ${url}\n${text}`);
    } catch {
      // skip unreachable pages
    }
  }

  let research = "";
  if (snippets.length) {
    research += `TOP-RANKING COMPETITOR CONTENT:\n\n${snippets.join("\n\n---\n\n")}`;
  }
  if (paaQuestions.length) {
    research += `\n\nPEOPLE ALSO ASK (use these for FAQ section):\n${paaQuestions.map((q) => `- ${q}`).join("\n")}`;
  }
  return research;
}

// ---------------------------------------------------------------------------
// Google Sheets helpers
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

/**
 * Read all rows from Page Blueprints tab, return those with Status = "approved"
 * Columns: Keyword | Title | URL Slug | H1 | H2-1 | H2-2 | H2-3 | H2-4 | Meta Description | Priority | Status | Date Added | Avg DA | Beatable
 * Note: Blueprint has 4 H2s from sheet; Claude prompt expands to 6 total H2 sections.
 */
async function getApprovedBlueprints(sheets, { skipDaGate = false } = {}) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: INTERNAL_SEO_SHEET_ID,
    range: "Page Blueprints!A:O",
  });

  const rows = res.data.values || [];
  if (rows.length <= 1) return []; // header only

  const approved = [];
  const skippedNoDA = [];
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const status = (row[10] || "").toLowerCase().trim();
    if (status !== "approved") continue;

    const beatable = (row[13] || "").toUpperCase().trim();
    const avgDA = row[12] || "";

    // DA gate: refuse to build pages explicitly marked unbeatable
    if (beatable === "NO") {
      skippedNoDA.push(row[0] || "(unknown keyword)");
      continue;
    }
    // If DA data is missing, skip unless --skip-da-gate was passed
    if (!skipDaGate && (!beatable || !avgDA)) {
      skippedNoDA.push(`${row[0] || "(unknown keyword)"} (missing DA data)`);
      continue;
    }

    approved.push({
      rowIndex: i + 1, // 1-indexed for Sheets API
      keyword: row[0] || "",
      title: row[1] || "",
      slug: (row[2] || "").replace(/^\/(hub|services)\//, ""), // strip /hub/ or /services/ prefix if present
      h1: row[3] || "",
      h2s: [row[4], row[5], row[6], row[7]].filter(Boolean),
      metaDescription: row[8] || "",
      priority: row[9] || "",
      avgDA,
      beatable,
      contentNotes: (row[14] || "").trim(), // col O — inspiration notes from Keywords tab col P
    });
  }

  if (skippedNoDA.length > 0) {
    console.log(`\n🚫 Skipped ${skippedNoDA.length} approved keyword(s) — failed DA gate:`);
    for (const kw of skippedNoDA) {
      console.log(`  - ${kw}`);
    }
  }

  return approved;
}

/**
 * Ensure Page Blueprints header row has labels for all columns.
 * Writes to cols M–R without touching A–L (existing data).
 * Safe to run on every build — only updates if cell is empty.
 */
async function ensureBlueprintHeaders(sheets) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: INTERNAL_SEO_SHEET_ID,
    range: "Page Blueprints!M1:R1",
  });
  const existing = (res.data.values || [[]])[0] || [];
  // Only write headers that are blank
  const headers = [
    existing[0] || "Difficulty",   // M
    existing[1] || "Beatable",     // N
    existing[2] || "Content Notes", // O
    existing[3] || "On-Page Score", // P
    existing[4] || "Score Date",    // Q
    existing[5] || "Score Issues",  // R
  ];
  await sheets.spreadsheets.values.update({
    spreadsheetId: INTERNAL_SEO_SHEET_ID,
    range: "Page Blueprints!M1",
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [headers] },
  });
}

/**
 * Write on-page SEO score back to the blueprint row.
 * Cols: P = score/100, Q = date scored, R = comma-separated issues
 */
async function writeOnPageScore(sheets, rowIndex, score, missing, today) {
  await sheets.spreadsheets.values.update({
    spreadsheetId: INTERNAL_SEO_SHEET_ID,
    range: `Page Blueprints!P${rowIndex}`,
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [[`${score}/100`, today, missing.join(", ")]] },
  });
}

/** Mark Page Blueprints row as built (col K) */
async function markAsBuilt(sheets, rowIndex) {
  await sheets.spreadsheets.values.update({
    spreadsheetId: INTERNAL_SEO_SHEET_ID,
    range: `Page Blueprints!K${rowIndex}`,
    valueInputOption: "RAW",
    requestBody: { values: [["built"]] },
  });
}

/**
 * Mark the matching keyword row in the Keywords tab as "published" (col L).
 * Reads the full Keywords tab once, finds the matching keyword, updates it.
 * Silently skips if the keyword isn't found (some pages may have been built
 * before the Keywords tab workflow existed).
 */
async function markKeywordPublished(sheets, keyword) {
  try {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: INTERNAL_SEO_SHEET_ID,
      range: "Keywords!A:L",
    });
    const rows = res.data.values || [];
    const kwLower = keyword.toLowerCase().trim();
    for (let i = 1; i < rows.length; i++) {
      if ((rows[i][0] || "").toLowerCase().trim() === kwLower) {
        await sheets.spreadsheets.values.update({
          spreadsheetId: INTERNAL_SEO_SHEET_ID,
          range: `Keywords!L${i + 1}`,
          valueInputOption: "RAW",
          requestBody: { values: [["built"]] },
        });
        return;
      }
    }
  } catch (err) {
    // Non-fatal — page was built, Keywords tab update is best-effort
    console.warn(`  ⚠  Could not update Keywords tab for "${keyword}": ${err.message}`);
  }
}

// ---------------------------------------------------------------------------
// Escape helpers
// ---------------------------------------------------------------------------
function escapeForJsx(str) {
  return str
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${")
    .replace(/"/g, '\\"');
}

// ---------------------------------------------------------------------------
// Claude: generate full page content
// ---------------------------------------------------------------------------
async function generatePageContent(blueprint, competitorResearch, anthropic) {
  const today = new Date().toISOString().split("T")[0];

  const prompt = `You are building a Next.js page for medicareyourself.com (EasyKind Medicare).
This is a Compact Keyword page: 400-500 words of high-quality, factual content targeting one bottom-of-funnel keyword.

BLUEPRINT FROM SHEET:
- Keyword: "${blueprint.keyword}"
- Title: "${blueprint.title}"
- URL: /services/${blueprint.slug}
- H1: "${blueprint.h1}"
- H2s: ${blueprint.h2s.map((h) => `"${h}"`).join(", ")}
- Meta Description: "${blueprint.metaDescription}"
${blueprint.contentNotes ? `\nCONTENT NOTES (use as inspiration and angle — do not copy verbatim):\n${blueprint.contentNotes}\n` : ""}

${competitorResearch ? competitorResearch + "\n\nUse the above competitor content to verify facts and identify content gaps. Do NOT copy — rewrite in our voice. Only include claims you can verify from these sources or from medicare.gov.\n" : ""}
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
   - articleSchema author: Anthony Orner, url: https://www.medicareyourself.com/about
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
- "vs" or "alternative" keywords: Include a 2-column comparison table (simple HTML table with Tailwind)
- Fragment keywords (e.g. "plan g cost 65 year old nj"): Write naturally — do NOT force the exact fragment into sentences. Break it into natural language.
- "for + plural modifier" keywords (e.g. "medicare for veterans"): Use the modifier group as the audience frame throughout

IMAGE SEO (Edward Sturm Module 06):
- Every page MUST have a heading image using Next.js Image component
- Image src: "/images/hub_${blueprint.slug}.webp"
- Alt text for the heading image: the keyword (or a natural variant)
- Place the Image right after the H1, before the intro paragraph
- Image dimensions: width={800} height={400}
- Example: <Image src="/images/hub_medicare-plan-g-cost.webp" alt="Medicare Plan G cost comparison" width={800} height={400} className="rounded-lg mb-6 w-full" />

IMPORTS (use exactly these):
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

VOICE & STYLE — follow these exactly or the content will be rejected:
- Write as Anthony Orner, a working Medicare broker in NJ. Practical, direct, slightly conversational.
- Use ACTIVE VOICE. "You pay 20% after the deductible" not "20% is paid by the beneficiary."
- VARY sentence length. Mix short punchy sentences (under 10 words) with longer ones. Never three long sentences in a row.
- Be SPECIFIC. Use actual dollar amounts, plan names (Plan G, Plan N), enrollment windows (Oct 15-Dec 7), and state rules. Vague = rejected.
- NEVER use these words: delve, tapestry, realm, intricate, meticulous, multifaceted, nuanced, pivotal, seamless, robust, foster, garner, bolster, interplay, underscore, vibrant, embark, testament, transformative, game-changer, landscape (as metaphor), empower/empowering
- NEVER use these phrases: "it's worth noting", "it is important to", "having said that", "that being said", "in conclusion", "in summary", "from a broader perspective", "navigate the complexities", "ensuring peace of mind", "comprehensive coverage for your needs"
- Do NOT use em dashes. Use a regular dash or rewrite the sentence.
- Do NOT open paragraphs with "Furthermore," "Moreover," or "Additionally,"
- Paragraph length: 2-3 sentences max. One-sentence paragraphs are fine and encouraged for emphasis.
- Write for a 65-year-old in New Jersey making a real financial decision, not for SEO robots.

CONTENT RULES:
- 400-500 words of body content (not counting code/markup)
- Author: Anthony Orner, Licensed Medicare Broker
- Phone: 855-559-1700
- Do NOT mention competitor brand names
- Simple, clean layout — no multi-column grids, no sidebar CTAs, no fancy colored sections

MEDIGAP/MEDICARE SUPPLEMENT MESSAGING (new-to-Medicare pages only):
- If the page targets someone new to Medicare (turning 65, first getting Part B) AND the topic is Medicare Supplement/Medigap (NOT Medicare Advantage), use this angle:
  Anthony's practice is to have clients apply for their Medigap plan up to 6 months BEFORE their Part B start date. This locks in the rate early — protecting them from premium increases before coverage begins. Frame it as urgency: "the sooner you lock in, the better your rate." This is the primary conversion angle for new-to-Medicare Medigap pages.
- Never apply this framing to Medicare Advantage pages — it does not apply there.

VERIFIED 2026 MEDICARE FACTS — use only these, do not invent others:
- Part B premium: $185/month
- Part B deductible: $257/year
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

CRITICAL: Output ONLY the complete .tsx file content. No markdown fences, no explanation.
Start with: import type { Metadata } from "next";`;

  const msg = await anthropic.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 4096,
    messages: [{ role: "user", content: prompt }],
  });

  let content = msg.content[0].text.trim();
  // Strip markdown fences if Claude added them
  content = content.replace(/^```(?:tsx?)?\n?/, "").replace(/\n?```$/, "");
  return content;
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------
function validatePage(content, blueprint) {
  const issues = [];

  // Must have required imports
  if (!content.includes('import type { Metadata }')) issues.push("Missing Metadata import");
  if (!content.includes('import Image from')) issues.push("Missing Image import (Module 06)");
  if (!content.includes('<Image')) issues.push("Missing heading image (Module 06)");
  if (!content.includes("PhoneCTA")) issues.push("Missing PhoneCTA");
  if (!content.includes("FAQSection")) issues.push("Missing FAQSection");
  if (!content.includes("SchemaMarkup")) issues.push("Missing SchemaMarkup");

  // Must have metadata export
  if (!content.includes("export const metadata")) issues.push("Missing metadata export");

  // Must have default export function
  if (!content.includes("export default function")) issues.push("Missing default export function");

  // Edward's template requires dual CTAs (PhoneCTA above fold + blue CTA banner)
  const phoneCTACount = (content.match(/PhoneCTA/g) || []).length;
  if (phoneCTACount < 2) issues.push("Missing dual CTA placement (need PhoneCTA above fold + CTA banner)");

  // Word count check (rough — strip JSX tags and count)
  const textOnly = content
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[^}]*\}/g, " ")
    .replace(/import .+;/g, "")
    .replace(/export .+\{/g, "")
    .replace(/const .+ = \{[\s\S]*?\};/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = textOnly.split(" ").length;

  // Keyword presence check
  const kwLower = blueprint.keyword.toLowerCase();
  const contentLower = content.toLowerCase();
  if (!contentLower.includes(kwLower)) {
    issues.push(`Keyword "${blueprint.keyword}" not found in content`);
  }

  return { valid: issues.length === 0, issues, wordCount };
}

// ---------------------------------------------------------------------------
// On-Page SEO Scorer (replaces Moz On-Page Grader — no API available)
// Edward's target: 96-98 out of 100. NOT 100 (over-optimization).
// ---------------------------------------------------------------------------
function calculateOnPageScore(content, blueprint) {
  const kwLower = blueprint.keyword.toLowerCase();
  const contentLower = content.toLowerCase();
  const details = [];
  const missing = [];
  let score = 0;

  // 1. Keyword in title tag (28 points — front-loaded per Edward Sturm)
  const titleMatch = content.match(/title:\s*"([^"]+)"/) || content.match(/title:\s*'([^']+)'/);
  const titleText = titleMatch ? titleMatch[1].toLowerCase() : "";
  if (titleText.includes(kwLower)) {
    score += 28;
    details.push("+ Title contains keyword (28pts)");
  } else {
    // Check if most keyword words are present
    const kwWords = kwLower.split(/\s+/).filter((w) => w.length > 2);
    const titleHits = kwWords.filter((w) => titleText.includes(w)).length;
    if (titleHits >= Math.ceil(kwWords.length * 0.6)) {
      score += 20;
      details.push(`~ Title contains ${titleHits}/${kwWords.length} keyword words (20pts)`);
    } else {
      missing.push("keyword in title");
      details.push("- Title missing keyword (0pts)");
    }
  }

  // 2. Keyword in meta description (10 points)
  const descMatch = content.match(/description:\s*\n?\s*"([^"]+)"/) || content.match(/description:\s*\n?\s*'([^']+)'/);
  const descText = descMatch ? descMatch[1].toLowerCase() : "";
  if (descText.includes(kwLower)) {
    score += 10;
    details.push("+ Meta description contains keyword (10pts)");
  } else {
    const kwWords = kwLower.split(/\s+/).filter((w) => w.length > 2);
    const descHits = kwWords.filter((w) => descText.includes(w)).length;
    if (descHits >= Math.ceil(kwWords.length * 0.6)) {
      score += 7;
      details.push(`~ Meta description contains ${descHits}/${kwWords.length} keyword words (7pts)`);
    } else {
      missing.push("keyword in meta description");
      details.push("- Meta description missing keyword (0pts)");
    }
  }

  // 3. Keyword in H1 (15 points)
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h1Text = h1Match ? h1Match[1].replace(/<[^>]+>/g, "").toLowerCase() : "";
  if (h1Text.includes(kwLower)) {
    score += 15;
    details.push("+ H1 contains keyword (15pts)");
  } else {
    const kwWords = kwLower.split(/\s+/).filter((w) => w.length > 2);
    const h1Hits = kwWords.filter((w) => h1Text.includes(w)).length;
    if (h1Hits >= Math.ceil(kwWords.length * 0.6)) {
      score += 10;
      details.push(`~ H1 contains ${h1Hits}/${kwWords.length} keyword words (10pts)`);
    } else {
      missing.push("keyword in H1");
      details.push("- H1 missing keyword (0pts)");
    }
  }

  // 4. Keyword in URL slug (10 points)
  const slugLower = (blueprint.slug || "").toLowerCase();
  const kwSlug = kwLower.replace(/\s+/g, "-");
  if (slugLower.includes(kwSlug) || slugLower.includes(kwLower.replace(/\s+/g, "-"))) {
    score += 10;
    details.push("+ URL slug contains keyword (10pts)");
  } else {
    missing.push("keyword in URL");
    details.push("- URL slug missing keyword (0pts)");
  }

  // 5. Keyword in first 200 chars of body content (15 points)
  // Find first paragraph-like text after the component function
  const bodyStart = content.indexOf("export default function");
  const first500 = bodyStart > 0 ? contentLower.slice(bodyStart, bodyStart + 500) : "";
  if (first500.includes(kwLower)) {
    score += 15;
    details.push("+ Keyword in first paragraph (15pts)");
  } else {
    const kwWords = kwLower.split(/\s+/).filter((w) => w.length > 2);
    const bodyHits = kwWords.filter((w) => first500.includes(w)).length;
    if (bodyHits >= Math.ceil(kwWords.length * 0.6)) {
      score += 10;
      details.push(`~ First paragraph contains ${bodyHits}/${kwWords.length} keyword words (10pts)`);
    } else {
      missing.push("keyword in first paragraph");
      details.push("- First paragraph missing keyword (0pts)");
    }
  }

  // 6. Image alt text contains keyword (10 points)
  const altRegex = /alt=["']([^"']+)["']/gi;
  let altMatch;
  let kwInAlt = false;
  while ((altMatch = altRegex.exec(content)) !== null) {
    if (altMatch[1].toLowerCase().includes(kwLower)) {
      kwInAlt = true;
      break;
    }
  }
  if (kwInAlt) {
    score += 10;
    details.push("+ Image alt text contains keyword (10pts)");
  } else {
    // Partial credit if keyword words in alt
    const allAlts = content.match(/alt=["']([^"']+)["']/gi) || [];
    const kwWords = kwLower.split(/\s+/).filter((w) => w.length > 2);
    const anyPartialAlt = allAlts.some((a) => {
      const altText = a.replace(/alt=["']/i, "").replace(/["']$/, "").toLowerCase();
      return kwWords.filter((w) => altText.includes(w)).length >= Math.ceil(kwWords.length * 0.5);
    });
    if (anyPartialAlt) {
      score += 7;
      details.push("~ Image alt text partially matches keyword (7pts)");
    } else {
      missing.push("keyword in image alt text");
      details.push("- No image alt text contains keyword (0pts)");
    }
  }

  // 8. Header hierarchy — exactly one H1, proper H2 structure (5 points)
  const h1Count = (content.match(/<h1[\s>]/gi) || []).length;
  const h2Count = (content.match(/<h2[\s>]/gi) || []).length;
  if (h1Count === 1 && h2Count >= 3) {
    score += 5;
    details.push(`+ Header structure: 1 H1, ${h2Count} H2s (5pts)`);
  } else if (h1Count === 1) {
    score += 3;
    details.push(`~ Header structure: 1 H1 but only ${h2Count} H2s (3pts)`);
  } else {
    missing.push(`${h1Count} H1 tags (should be 1)`);
    details.push(`- ${h1Count} H1 tags found (0pts)`);
  }

  // 9. Meta description length 120-158 chars (8 points — Edward Sturm target)
  if (descMatch) {
    const descLen = descMatch[1].length;
    if (descLen >= 120 && descLen <= 158) {
      score += 8;
      details.push(`+ Meta desc length ${descLen} chars — optimal (8pts)`);
    } else if (descLen >= 100 && descLen <= 165) {
      score += 5;
      details.push(`~ Meta desc length ${descLen} chars — acceptable (5pts)`);
    } else {
      missing.push(`meta desc length ${descLen} (target 120-158)`);
      details.push(`- Meta desc length ${descLen} chars (0pts)`);
    }
  }

  // 11. Internal links present — at least 2 (3 points)
  const internalLinkCount = (content.match(/<Link\s+href=/gi) || []).length;
  if (internalLinkCount >= 3) {
    score += 3;
    details.push(`+ ${internalLinkCount} internal links (3pts)`);
  } else if (internalLinkCount >= 1) {
    score += 1;
    details.push(`~ ${internalLinkCount} internal link(s) — add more (1pt)`);
  } else {
    missing.push("no internal links");
    details.push("- No internal links (0pts)");
  }

  // 12. Keyword density check — flag over-optimization (penalty)
  // Moz flags keyword stuffing. Edward says target 96-98, NOT 100.
  // Count keyword occurrences in body text
  const bodyText = content
    .replace(/<[^>]+>/g, " ")
    .replace(/import .+;/g, "")
    .replace(/\{[^}]*\}/g, " ")
    .toLowerCase();
  const bodyWords = bodyText.split(/\s+/).filter((w) => w.length > 1).length;
  const kwOccurrences = (bodyText.match(new RegExp(kwLower.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi")) || []).length;
  const kwDensity = bodyWords > 0 ? (kwOccurrences / bodyWords) * 100 : 0;

  if (kwDensity > 3.0) {
    score -= 5;
    details.push(`! Keyword density ${kwDensity.toFixed(1)}% — OVER-OPTIMIZED, reduce mentions (-5pts)`);
    missing.push("keyword stuffing detected");
  } else if (kwDensity >= 1.0 && kwDensity <= 3.0) {
    score += 3;
    details.push(`+ Keyword density ${kwDensity.toFixed(1)}% — natural range (3pts)`);
  } else if (kwDensity > 0) {
    score += 2;
    details.push(`~ Keyword density ${kwDensity.toFixed(1)}% — could mention keyword more (2pts)`);
  }

  // 13. Content length — at least 400 words (Edward's Compact Keyword target)
  const contentWords = bodyText.split(/\s+/).filter((w) => /[a-zA-Z]/.test(w) && w.length > 1).length;
  if (contentWords >= 400) {
    score += 2;
    details.push(`+ Content length ~${contentWords} words (2pts)`);
  } else {
    missing.push(`content length ~${contentWords} words (target 400+)`);
    details.push(`- Content length ~${contentWords} words — below 400 target (0pts)`);
  }

  // Cap at 100
  score = Math.min(Math.max(score, 0), 100);

  return { score, missing, details };
}

// ---------------------------------------------------------------------------
// OG Tag Validator (replaces Meta Sharing Debugger)
// ---------------------------------------------------------------------------
function validateOGTags(content, blueprint) {
  const issues = [];

  // Check for openGraph in metadata
  if (!content.includes("openGraph")) {
    issues.push("Missing openGraph in metadata export");
  }

  // Check OG title
  const ogTitleMatch = content.match(/openGraph[\s\S]*?title:\s*["'`]([^"'`]+)["'`]/);
  if (!ogTitleMatch) {
    issues.push("Missing openGraph title");
  }

  // Check OG description
  const ogDescMatch = content.match(/openGraph[\s\S]*?description:\s*\n?\s*["'`]([^"'`]+)["'`]/);
  if (!ogDescMatch) {
    issues.push("Missing openGraph description");
  }

  // Check for Image component (will provide OG image via Next.js)
  if (!content.includes("<Image")) {
    issues.push("Missing Image component (needed for OG image)");
  }

  return { valid: issues.length === 0, issues };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  if (!ANTHROPIC_API_KEY) { console.error("ANTHROPIC_API_KEY not set"); process.exit(1); }
  if (!INTERNAL_SEO_SHEET_ID) { console.error("INTERNAL_SEO_SHEET_ID not set"); process.exit(1); }

  const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY });

  const skipDaGate = process.argv.includes("--skip-da-gate");
  if (skipDaGate) console.log("⚠️  --skip-da-gate: building approved rows without DA data\n");

  console.log("Reading approved blueprints from Internal SEO Template...");
  const sheets = await getSheetsClient();
  const blueprints = await getApprovedBlueprints(sheets, { skipDaGate });

  if (blueprints.length === 0) {
    console.log("No approved blueprints found. Mark rows as 'approved' in the sheet to build pages.");
    return;
  }

  console.log(`Found ${blueprints.length} approved blueprint(s) to build.\n`);

  // Ensure sheet headers for cols M–R
  await ensureBlueprintHeaders(sheets);

  // Ensure log file
  if (!fs.existsSync(LOG_FILE)) {
    fs.writeFileSync(LOG_FILE, "date\tkeyword\tslug\tstatus\tissues\n");
  }

  const today = new Date().toISOString().split("T")[0];
  let built = 0;

  for (const bp of blueprints) {
    const pageDir = repoPath("app", "services", bp.slug);
    const pageFile = path.join(pageDir, "page.tsx");

    // Skip if page already exists on disk
    if (fs.existsSync(pageFile)) {
      console.log(`  SKIP: /services/${bp.slug} — page already exists on disk`);
      // Still mark as built in sheet
      try { await markAsBuilt(sheets, bp.rowIndex); } catch {}
      await markKeywordPublished(sheets, bp.keyword);
      continue;
    }

    console.log(`Building: /services/${bp.slug}`);
    console.log(`  Keyword: "${bp.keyword}"`);
    console.log(`  Title: ${bp.title}`);

    // Research competitor content
    console.log(`  Researching competitor content...`);
    const research = await researchKeyword(bp.keyword);

    // Generate page
    console.log(`  Generating page with Claude Opus...`);
    let pageContent;
    try {
      pageContent = await generatePageContent(bp, research, anthropic);
    } catch (err) {
      console.error(`  ERROR: Claude API failed: ${err.message}`);
      fs.appendFileSync(LOG_FILE, [today, bp.keyword, bp.slug, "error", err.message].join("\t") + "\n");
      continue;
    }

    // Validate
    const validation = validatePage(pageContent, bp);
    if (!validation.valid) {
      console.warn(`  WARNING: Validation issues: ${validation.issues.join(", ")}`);
      console.warn(`  Page will still be written — review manually.`);
    }

    // Edward Module 08: Grammar + spelling check via Claude
    console.log(`  Running grammar/spelling check (Edward 08-01)...`);
    try {
      const grammarMsg = await anthropic.messages.create({
        model: "claude-sonnet-4-6",
        max_tokens: 1024,
        messages: [{ role: "user", content: `Tell me spelling, grammar, and other errors in this content. Do not rewrite the whole thing to me. Just tell me spelling, grammar, and other errors. If there are no errors, say "No errors found."\n\n${pageContent}` }],
      });
      const grammarResult = grammarMsg.content[0].text.trim();
      if (!grammarResult.toLowerCase().includes("no errors")) {
        console.warn(`  GRAMMAR ISSUES FOUND:`);
        console.warn(`  ${grammarResult.split("\n").join("\n  ")}`);
        console.warn(`  Fix these before deploying.`);
      } else {
        console.log(`  Grammar check passed.`);
      }
    } catch (err) {
      console.warn(`  Grammar check failed (non-blocking): ${err.message}`);
    }

    // Write page
    fs.mkdirSync(pageDir, { recursive: true });
    fs.writeFileSync(pageFile, pageContent, "utf8");
    console.log(`  Written: app/services/${bp.slug}/page.tsx`);

    // Edward Module 06 — Image SEO: create placeholder image if missing
    // File naming convention: hub_{slug}.webp (subfolder_slug per Edward)
    const imgDir = repoPath("public", "images");
    const imgFile = path.join(imgDir, `hub_${bp.slug}.webp`);
    if (!fs.existsSync(imgFile)) {
      // Create a minimal placeholder SVG (to be replaced with real branded WebP)
      // This ensures the page renders without broken images during development
      const svgPlaceholder = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
  <rect width="800" height="400" fill="#1e40af"/>
  <text x="400" y="180" text-anchor="middle" fill="white" font-family="sans-serif" font-size="24" font-weight="bold">MedicareYourself</text>
  <text x="400" y="220" text-anchor="middle" fill="#93c5fd" font-family="sans-serif" font-size="16">${bp.keyword.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</text>
</svg>`;
      fs.mkdirSync(imgDir, { recursive: true });
      // Write as SVG for now — log that WebP conversion is needed
      const svgFile = imgFile.replace(".webp", ".svg");
      fs.writeFileSync(svgFile, svgPlaceholder, "utf8");
      console.log(`  Image placeholder: public/images/hub_${bp.slug}.svg (convert to WebP)`);
    } else {
      console.log(`  Image exists: public/images/hub_${bp.slug}.webp`);
    }

    // -----------------------------------------------------------------------
    // Edward Module 08: Automated Post-Build QA
    // Replaces manual HITL steps with programmatic checks
    // -----------------------------------------------------------------------

    // QA 1: On-Page SEO Score (replaces Moz On-Page Grader — no API available)
    // Target: 96-98 out of 100. Edward says "stay away from 100."
    console.log(`  Running on-page SEO score (Edward 08-01, target 96-98)...`);
    const onPageScore = calculateOnPageScore(pageContent, bp);
    console.log(`  On-Page Score: ${onPageScore.score}/100`);
    if (onPageScore.score === 100) {
      console.warn(`  WARNING: Score is 100 — Edward says this is over-optimization.`);
      console.warn(`  Consider removing one keyword mention to bring it to 96-98.`);
    } else if (onPageScore.score < 90) {
      console.warn(`  WARNING: Score below 90. Missing: ${onPageScore.missing.join(", ")}`);
    } else {
      console.log(`  On-page optimization is in the sweet spot.`);
    }
    for (const detail of onPageScore.details) {
      console.log(`    ${detail}`);
    }

    // Write score back to Page Blueprints sheet (cols P, Q, R)
    try {
      await writeOnPageScore(sheets, bp.rowIndex, onPageScore.score, onPageScore.missing, today);
      console.log(`  Sheet: score ${onPageScore.score}/100 written to cols P–R`);
    } catch (err) {
      console.warn(`  Sheet score write failed (non-blocking): ${err.message}`);
    }

    // QA 2: OG Tag Validation (replaces Meta Sharing Debugger)
    console.log(`  Validating OG tags (replaces Meta Sharing Debugger)...`);
    const ogCheck = validateOGTags(pageContent, bp);
    if (ogCheck.valid) {
      console.log(`  OG tags: PASS — title, description, and image present.`);
    } else {
      console.warn(`  OG tag issues: ${ogCheck.issues.join(", ")}`);
    }

    // QA 3: AI Detection Check (via Claude — checks if content reads as human-written)
    console.log(`  Running AI detection check (Edward 08-01)...`);
    try {
      const aiCheckMsg = await anthropic.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 256,
        messages: [{ role: "user", content: `You are an AI content detection tool. Rate the following web page content on a scale of 1-10 where 1 = "clearly human-written" and 10 = "clearly AI-generated". Consider: does it have natural voice, varied sentence structure, specific (not generic) claims, and personality? Respond with ONLY a JSON object: {"score": N, "reason": "brief reason"}\n\n${pageContent.slice(0, 3000)}` }],
      });
      const aiResult = JSON.parse(aiCheckMsg.content[0].text.trim());
      if (aiResult.score <= 4) {
        console.log(`  AI detection: PASS (score ${aiResult.score}/10 — reads as human)`);
      } else if (aiResult.score <= 6) {
        console.warn(`  AI detection: BORDERLINE (score ${aiResult.score}/10) — ${aiResult.reason}`);
        console.warn(`  Consider editing for more natural voice before deploying.`);
      } else {
        console.warn(`  AI detection: FAIL (score ${aiResult.score}/10) — ${aiResult.reason}`);
        console.warn(`  This page needs significant human editing before deploying.`);
      }
    } catch (err) {
      console.warn(`  AI detection check failed (non-blocking): ${err.message}`);
    }

    // QA 4: GSC Submission Reminder (can't fully automate — Google rate-limits)
    const liveUrl = `https://www.medicareyourself.com/services/${bp.slug}`;
    console.log(`  GSC: After deploying, submit this URL for indexing:`);
    console.log(`  → ${liveUrl}`);
    console.log(`  → https://search.google.com/search-console/inspect?resource_id=sc-domain:medicareyourself.com`);

    // Mark as built in Page Blueprints + published in Keywords tab
    try {
      await markAsBuilt(sheets, bp.rowIndex);
      console.log(`  Sheet updated: status → "built"`);
    } catch (err) {
      console.warn(`  WARNING: Could not update Page Blueprints sheet: ${err.message}`);
    }
    await markKeywordPublished(sheets, bp.keyword);

    // Log (with on-page score)
    fs.appendFileSync(
      LOG_FILE,
      [today, bp.keyword, bp.slug, validation.valid ? "built" : "built-with-warnings", `score:${onPageScore.score}`, validation.issues.join("; ")].join("\t") + "\n"
    );

    built++;
    console.log("");
  }

  console.log(`\nDone. Built ${built} page(s) from ${blueprints.length} approved blueprint(s).`);
  if (built > 0) {
    console.log("Review the generated pages, then commit via the workflow.");
    console.log("\nPost-deploy checklist (manual):");
    console.log("  1. Submit each new URL to Google Search Console");
    console.log("  2. Add target keywords to Moz tracking with hub page labels");
  }
}

main().catch((err) => {
  console.error("build-compact-pages failed:", err.message);
  process.exit(1);
});
