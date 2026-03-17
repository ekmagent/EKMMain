/**
 * backfill-serp-analysis.js
 * Reads all keywords from the Internal SEO Keywords tab, checks the top 5
 * Google results via Serper, and writes SERP analysis columns:
 *   - KW in Titles (x/5)
 *   - KW in URLs (x/5)
 *   - Top 5 Domains
 *
 * Uses ~766 Serper credits (1 per keyword).
 * Run: node backfill-serp-analysis.js
 */

require("dotenv").config({ path: __dirname + "/.env" });
const { google } = require("googleapis");

const SERPER_API_KEY = process.env.SERPER_API_KEY;
const GOOGLE_CREDENTIALS_JSON = process.env.GOOGLE_CREDENTIALS_JSON;
const INTERNAL_SEO_SHEET_ID = process.env.INTERNAL_SEO_SHEET_ID;

// ---------------------------------------------------------------------------
// Serper search
// ---------------------------------------------------------------------------
async function serperSearch(query) {
  const res = await fetch("https://google.serper.dev/search", {
    method: "POST",
    headers: {
      "X-API-KEY": SERPER_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ q: query, gl: "us", hl: "en", num: 5 }),
  });
  if (!res.ok) throw new Error(`Serper ${res.status}: ${res.statusText}`);
  return res.json();
}

// ---------------------------------------------------------------------------
// Analyze a single keyword's SERP
// ---------------------------------------------------------------------------
function analyzeSERP(keyword, serpData) {
  const organic = (serpData.organic || []).slice(0, 5);
  // Extract significant words (3+ chars, no stop words)
  const stops = new Set(["the", "and", "for", "are", "with", "how", "what", "does", "can", "you", "your", "from", "that", "this", "have", "will", "about"]);
  const kwWords = keyword
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length >= 3 && !stops.has(w));

  let kwInTitles = 0;
  let kwInUrls = 0;
  const domains = [];

  for (const r of organic) {
    const title = (r.title || "").toLowerCase();
    const url = (r.link || "").toLowerCase();

    // Count as match if >= half of significant keyword words appear
    const threshold = Math.ceil(kwWords.length / 2);
    const titleMatches = kwWords.filter((w) => title.includes(w)).length;
    const urlMatches = kwWords.filter((w) => url.includes(w)).length;

    if (titleMatches >= threshold) kwInTitles++;
    if (urlMatches >= threshold) kwInUrls++;

    try {
      domains.push(new URL(r.link).hostname.replace(/^www\./, ""));
    } catch {
      domains.push("?");
    }
  }

  return {
    kwInTitles: `${kwInTitles}/5`,
    kwInUrls: `${kwInUrls}/5`,
    topDomains: domains.join(", "),
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  if (!SERPER_API_KEY) { console.error("SERPER_API_KEY not set"); process.exit(1); }
  if (!INTERNAL_SEO_SHEET_ID) { console.error("INTERNAL_SEO_SHEET_ID not set"); process.exit(1); }

  const keyFile = GOOGLE_CREDENTIALS_JSON.replace(/^~/, process.env.HOME);
  const auth = new google.auth.GoogleAuth({
    keyFile,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  // Read header + all rows
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: INTERNAL_SEO_SHEET_ID,
    range: "Keywords!A:O", // A-L existing + M-O for new columns
  });
  const rows = res.data.values || [];
  const header = rows[0];
  console.log("Current header:", header.join(" | "));
  console.log("Total rows:", rows.length - 1);

  // Add new column headers if not present
  const colM = header.indexOf("KW in Titles");
  if (colM === -1) {
    // Add headers in M, N, O
    await sheets.spreadsheets.values.update({
      spreadsheetId: INTERNAL_SEO_SHEET_ID,
      range: "Keywords!M1:O1",
      valueInputOption: "RAW",
      requestBody: { values: [["KW in Titles", "KW in URLs", "Top 5 Domains"]] },
    });
    console.log("Added new column headers: KW in Titles, KW in URLs, Top 5 Domains");
  }

  // Find rows that need backfill (column M is empty or missing)
  const toProcess = [];
  for (let i = 1; i < rows.length; i++) {
    const keyword = (rows[i][0] || "").trim();
    const existing = (rows[i][12] || "").trim(); // col M (index 12)
    if (keyword && !existing) {
      toProcess.push({ rowIndex: i, keyword });
    }
  }
  console.log("Rows needing SERP analysis:", toProcess.length);

  if (toProcess.length === 0) {
    console.log("Nothing to backfill!");
    return;
  }

  // Process in batches, writing every 25 rows
  const BATCH_SIZE = 25;
  let processed = 0;
  let errors = 0;
  const updates = [];

  for (let j = 0; j < toProcess.length; j++) {
    const { rowIndex, keyword } = toProcess[j];
    try {
      const serpData = await serperSearch(keyword);
      const analysis = analyzeSERP(keyword, serpData);
      const sheetRow = rowIndex + 1; // 1-indexed
      updates.push({
        range: `Keywords!M${sheetRow}:O${sheetRow}`,
        values: [[analysis.kwInTitles, analysis.kwInUrls, analysis.topDomains]],
      });
      processed++;
    } catch (err) {
      console.warn(`  Error for "${keyword}": ${err.message}`);
      errors++;
    }

    // Progress update every 50
    if ((j + 1) % 50 === 0 || j === toProcess.length - 1) {
      console.log(`  Progress: ${j + 1}/${toProcess.length} (${processed} ok, ${errors} errors)`);
    }

    // Write batch to sheet every 25 rows
    if (updates.length >= BATCH_SIZE || j === toProcess.length - 1) {
      if (updates.length > 0) {
        await sheets.spreadsheets.values.batchUpdate({
          spreadsheetId: INTERNAL_SEO_SHEET_ID,
          requestBody: { valueInputOption: "RAW", data: [...updates] },
        });
        updates.length = 0;
      }
    }

    // Rate limit: 300ms between Serper calls
    await new Promise((r) => setTimeout(r, 300));
  }

  console.log(`\nDone! ${processed} keywords analyzed, ${errors} errors.`);
  console.log("Check the Keywords tab — columns M, N, O.");
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
