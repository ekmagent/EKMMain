/**
 * generate-blueprints.js
 * Stage 2 of the keyword pipeline — generates Page Blueprints from approved keywords.
 *
 * Flow:
 *   find-compact-keywords.js  →  Keywords tab (Status = "pending")
 *                                    ↓  you change "pending" → "target"
 *   generate-blueprints.js    →  Page Blueprints tab (Status = "not built")
 *                                    ↓  you change "not built" → "approved"
 *   build-compact-pages.js    →  app/hub/[slug]/page.tsx
 *
 * What this script does:
 *  1. Reads all rows from Keywords tab where Status (col L) = "target"
 *  2. For each keyword: calls Claude to generate Title, URL slug, H1, 4 H2s, Meta Description
 *  3. Writes the blueprint to Page Blueprints tab (Status = "not built")
 *  4. Updates Keywords tab Status from "target" → "blueprint_generated"
 *  5. Logs to blueprint-log.tsv
 *
 * Required env vars (in scripts/.env):
 *   ANTHROPIC_API_KEY
 *   GOOGLE_CREDENTIALS_JSON
 *   INTERNAL_SEO_SHEET_ID
 *
 * Run: node generate-blueprints.js
 * Idempotent — skips keywords already in Page Blueprints tab.
 */

require("dotenv").config({ path: __dirname + "/.env" });

const Anthropic = require("@anthropic-ai/sdk");
const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const GOOGLE_CREDENTIALS_JSON = process.env.GOOGLE_CREDENTIALS_JSON;
const INTERNAL_SEO_SHEET_ID = process.env.INTERNAL_SEO_SHEET_ID;

const LOG_FILE = path.join(__dirname, "..", "blueprint-log.tsv");

// Process up to this many keywords per run — override with --limit N
const DEFAULT_MAX = 50;

// Batch size for Claude calls
const BATCH_SIZE = 10;

// ---------------------------------------------------------------------------
// Google Sheets client
// ---------------------------------------------------------------------------
async function getSheetsClient() {
  const keyFile = GOOGLE_CREDENTIALS_JSON.replace(/^~/, process.env.HOME);
  const auth = new google.auth.GoogleAuth({
    keyFile,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

// ---------------------------------------------------------------------------
// Read Keywords tab — return rows where Status = "target"
// Columns (0-indexed):
//   A=keyword, B=cat1, C=cat2, D=volume, E=difficulty, F=ctr, G=moz_priority,
//   H=relevance, I=notes, J=min_vol, K=max_vol, L=status, M=..., N=..., O=..., P=content_notes
// ---------------------------------------------------------------------------
async function getTargetKeywords(sheets) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: INTERNAL_SEO_SHEET_ID,
    range: "Keywords!A:P",
  });

  const rows = res.data.values || [];
  const targets = [];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const keyword = (row[0] || "").trim();
    const status = (row[11] || "").toLowerCase().trim();
    if (!keyword || status !== "yes") continue;

    targets.push({
      rowIndex: i + 1, // 1-based for Sheets API
      keyword,
      difficulty: row[4] || "",
      relevance: row[7] || "",
      intent: row[8] || "",
      contentNotes: (row[15] || "").trim(), // col P — inspiration/angle notes
    });
  }

  return targets;
}

// ---------------------------------------------------------------------------
// Read Page Blueprints tab — return Set of keywords already blueprinted
// ---------------------------------------------------------------------------
async function getExistingBlueprints(sheets) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: INTERNAL_SEO_SHEET_ID,
    range: "Page Blueprints!A:A",
  });
  const rows = res.data.values || [];
  return new Set(rows.slice(1).map((r) => (r[0] || "").toLowerCase().trim()));
}

// ---------------------------------------------------------------------------
// Claude: generate blueprints for a batch of keywords
// Returns array of { keyword, title, slug, h1, h2s, meta_description }
// ---------------------------------------------------------------------------
async function generateBlueprints(keywords, anthropic) {
  const prompt = `You are an SEO specialist for medicareyourself.com — Anthony Orner's licensed Medicare insurance broker site in New Jersey.

Generate a Page Blueprint for each keyword below using the Compact Keywords formula (Edward Sturm methodology).

RULES:
- Title: keyword MUST be the very first words. Format: "[Keyword] | [Strong CTA like 'Free' or 'No Sign-Up'] | MedicareYourself". No character limit — Edward only requires keyword first.
- URL slug: lowercase, hyphens only, exact keyword phrasing (no /hub/ prefix — just the slug)
- H1: keyword stated naturally at the start, unique from the title
- H2s: 4 section headings, sentence case, specific and scannable (not generic). Do NOT force the keyword into H2s.
- Meta description: 120-158 chars (hard requirement), keyword in first half, specific benefit, ends with soft CTA
- Voice: broker, not content farm. Specific facts over vague claims.
- Do NOT generate blueprints for pages that already exist on the site

EXISTING PAGES (skip if keyword is too similar):
/medicare-supplement, /medicare-supplement/plan-g, /medicare-supplement/plan-n,
/medicare-supplement/switch-carriers, /medicare-supplement/new-jersey,
/medicare-supplement/pennsylvania, /medicare-advantage, /learn, /quote

Return ONLY a JSON array. One object per keyword:
{
  "keyword": "original keyword",
  "title": "Medicare Plan G Cost NJ | Compare Rates by Age | MedicareYourself",
  "slug": "medicare-plan-g-cost-nj",
  "h1": "Medicare Plan G Cost in New Jersey: What to Expect at 65, 70, and 75",
  "h2s": [
    "How Plan G Premiums Are Set in NJ",
    "Average Plan G Costs by Age in 2026",
    "Why Rates Differ Between Carriers",
    "How to Get the Lowest Plan G Rate in NJ"
  ],
  "meta_description": "See real Plan G Medicare Supplement rates in New Jersey by age. Anthony Orner compares top carriers and finds the lowest rate. Free quote in 2 minutes.",
  "skip": false
}

No markdown fences. No explanation. Just the JSON array.

KEYWORDS:
${keywords.map((k, i) => {
    const notes = k.contentNotes ? ` [Notes: ${k.contentNotes}]` : "";
    return `${i + 1}. ${k.keyword}${notes}`;
  }).join("\n")}`;

  const msg = await anthropic.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 4096,
    messages: [{ role: "user", content: prompt }],
  });

  const text = msg.content[0].text.trim();
  const json = text.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
  return JSON.parse(json);
}

// ---------------------------------------------------------------------------
// Write blueprints to Page Blueprints tab
// Columns: A=Keyword | B=Title | C=URL | D=H1 | E=H2-1 | F=H2-2 | G=H2-3 | H=H2-4 | I=Meta | J=Priority | K=Status | L=Date | M=Difficulty | N=Beatable | O=Content Notes
// ---------------------------------------------------------------------------
async function writeBlueprintsToSheet(sheets, blueprints, keywordMeta, today) {
  const rows = blueprints
    .filter((b) => !b.skip && b.title && b.slug)
    .map((b) => {
      const meta = keywordMeta.get(b.keyword.toLowerCase()) || {};
      const diff = meta.difficulty ? parseInt(meta.difficulty) : null;
      return [
        b.keyword,
        b.title,
        `/services/${b.slug.replace(/^\/?(services\/)?/, "")}`,
        b.h1,
        (b.h2s || [])[0] || "",
        (b.h2s || [])[1] || "",
        (b.h2s || [])[2] || "",
        (b.h2s || [])[3] || "",
        b.meta_description,
        meta.relevance >= 8 ? "high" : meta.relevance >= 6 ? "medium" : "low",
        "not built",
        today,
        diff ?? "",
        diff !== null ? (diff <= 40 ? "YES" : "NO") : "",
        meta.contentNotes || "",  // col O — passes through from Keywords tab col P
      ];
    });

  if (rows.length === 0) return 0;

  await sheets.spreadsheets.values.append({
    spreadsheetId: INTERNAL_SEO_SHEET_ID,
    range: "Page Blueprints!A:A",
    valueInputOption: "USER_ENTERED",
    resource: { values: rows },
  });

  return rows.length;
}

// ---------------------------------------------------------------------------
// Update Keywords tab Status for a batch of rows
// ---------------------------------------------------------------------------
async function markKeywordsProcessed(sheets, rowIndices) {
  const data = rowIndices.map((rowIndex) => ({
    range: `Keywords!L${rowIndex}`,
    values: [["blueprint_generated"]],
  }));

  await sheets.spreadsheets.values.batchUpdate({
    spreadsheetId: INTERNAL_SEO_SHEET_ID,
    resource: { valueInputOption: "USER_ENTERED", data },
  });
}

// ---------------------------------------------------------------------------
// TSV log
// ---------------------------------------------------------------------------
function initLog() {
  if (!fs.existsSync(LOG_FILE)) {
    fs.writeFileSync(LOG_FILE, "date\tkeyword\ttitle\tslug\tstatus\n", "utf8");
  }
}

function appendLog(rows) {
  const lines = rows.map((r) =>
    [new Date().toISOString().slice(0, 10), r.keyword, r.title || "", r.slug || "", r.status].join("\t")
  );
  fs.appendFileSync(LOG_FILE, lines.join("\n") + "\n", "utf8");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function run() {
  if (!ANTHROPIC_API_KEY) { console.error("ANTHROPIC_API_KEY not set"); process.exit(1); }
  if (!INTERNAL_SEO_SHEET_ID) { console.error("INTERNAL_SEO_SHEET_ID not set"); process.exit(1); }
  if (!GOOGLE_CREDENTIALS_JSON) { console.error("GOOGLE_CREDENTIALS_JSON not set"); process.exit(1); }

  const limitIdx = process.argv.indexOf("--limit");
  const MAX_PER_RUN = limitIdx !== -1 ? parseInt(process.argv[limitIdx + 1]) || DEFAULT_MAX : DEFAULT_MAX;

  const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY });
  const sheets = await getSheetsClient();
  const today = new Date().toISOString().slice(0, 10);

  initLog();

  // 1. Get keywords marked "target"
  console.log("Reading Keywords tab...");
  const targets = await getTargetKeywords(sheets);

  if (targets.length === 0) {
    console.log('No keywords marked "target" in the Keywords tab.');
    console.log('Open the Keywords tab, change "pending" → "target" on keywords you want, then re-run.');
    return;
  }

  // 2. Skip any already in Page Blueprints
  const existing = await getExistingBlueprints(sheets);
  const toProcess = targets
    .filter((t) => !existing.has(t.keyword.toLowerCase()))
    .slice(0, MAX_PER_RUN);

  const skippedExisting = targets.length - toProcess.length - Math.max(0, targets.length - toProcess.length - (targets.length > MAX_PER_RUN ? targets.length - MAX_PER_RUN : 0));

  console.log(`Found ${targets.length} target keywords`);
  if (existing.size > 0) console.log(`  Skipping ${targets.length - toProcess.length} already in Page Blueprints`);
  if (targets.length > MAX_PER_RUN) console.log(`  Capped at ${MAX_PER_RUN} per run — ${targets.length - MAX_PER_RUN} queued for next run`);
  console.log(`Generating blueprints for ${toProcess.length} keywords...\n`);

  // Build a metadata map for the sheet writes
  const keywordMeta = new Map(toProcess.map((t) => [t.keyword.toLowerCase(), t]));

  // 3. Generate blueprints in batches
  const allBlueprints = [];
  const processedRowIndices = [];

  for (let i = 0; i < toProcess.length; i += BATCH_SIZE) {
    const batch = toProcess.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(toProcess.length / BATCH_SIZE);
    process.stdout.write(`  Batch ${batchNum}/${totalBatches} (${batch.length} keywords)... `);

    try {
      const results = await generateBlueprints(batch, anthropic);
      const valid = results.filter((r) => !r.skip && r.title && r.slug);
      allBlueprints.push(...results);
      processedRowIndices.push(...batch.map((t) => t.rowIndex));
      console.log(`${valid.length} blueprints generated`);
    } catch (err) {
      console.log(`ERROR: ${err.message}`);
    }
  }

  // 4. Write blueprints to Page Blueprints tab
  if (allBlueprints.length > 0) {
    const written = await writeBlueprintsToSheet(sheets, allBlueprints, keywordMeta, today);
    console.log(`\n✓ ${written} blueprints written to Page Blueprints tab`);
  }

  // 5. Update Keywords tab status
  if (processedRowIndices.length > 0) {
    await markKeywordsProcessed(sheets, processedRowIndices);
    console.log(`✓ ${processedRowIndices.length} Keywords tab rows updated → "blueprint_generated"`);
  }

  // 6. Log results
  appendLog(allBlueprints.map((b) => ({ ...b, status: b.skip ? "skipped" : "written" })));

  // 7. Summary
  const written = allBlueprints.filter((b) => !b.skip).length;
  const skipped = allBlueprints.filter((b) => b.skip).length;

  console.log(`\n── Summary ──────────────────────────────────`);
  console.log(`  Blueprints written:  ${written}`);
  if (skipped > 0) console.log(`  Skipped (too similar to existing pages): ${skipped}`);
  console.log(`\nNext step: Open Page Blueprints tab, review the new rows,`);
  console.log(`  change "not built" → "approved" in Column K, then run:`);
  console.log(`  node build-compact-pages.js`);
}

run().catch((err) => {
  console.error(`Fatal: ${err.message}`);
  process.exit(1);
});
