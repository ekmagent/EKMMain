/**
 * fill-new-keywords.js
 * Fills in missing columns for rows 1782-1803 of the Keywords tab.
 *
 * Columns filled:
 *   B  - Category 1
 *   D  - Avg Volume  (Moz)
 *   E  - Difficulty  (Moz)
 *   F  - SERP CTR    (Moz)
 *   G  - Moz Priority(Moz)
 *   H  - SITE On Site Relevance (scored by intent logic)
 *   I  - Notes / search intent
 *   L  - Targeted?
 *   M  - KW in Titles (Serper)
 *   N  - KW in URLs   (Serper)
 *   O  - Top 5 Domains(Serper)
 *
 * Run: node fill-new-keywords.js
 */

require("dotenv").config({ path: __dirname + "/.env" });
const { google } = require("googleapis");
const { getKeywordMetrics } = require("./moz-api");

const SHEET_ID = process.env.INTERNAL_SEO_SHEET_ID;
const SERPER_API_KEY = process.env.SERPER_API_KEY;
const GOOGLE_CREDENTIALS_JSON = process.env.GOOGLE_CREDENTIALS_JSON;

const START_ROW = 1782;
const END_ROW = 1803;

// ---------------------------------------------------------------------------
// Manual classification for these 22 keywords
// (Category 1, intent, relevance, targeted)
// ---------------------------------------------------------------------------
const CLASSIFICATIONS = {
  "medicare agent that helps with paperwork near me":    { cat1: "Services", intent: "purchase", relevance: 9, targeted: "yes" },
  "medicare broker for people with asthma":             { cat1: "Services", intent: "purchase", relevance: 9, targeted: "yes" },
  "medicare broker for people with cll":                { cat1: "Services", intent: "purchase", relevance: 9, targeted: "yes" },
  "medicare broker for heart disease patients":         { cat1: "Services", intent: "purchase", relevance: 9, targeted: "yes" },
  "medicare broker for people with lupus":              { cat1: "Services", intent: "purchase", relevance: 9, targeted: "yes" },
  "medicare supplement brokers":                        { cat1: "Services", intent: "purchase", relevance: 9, targeted: "yes" },
  "great medicare insurance broker":                    { cat1: "Services", intent: "purchase", relevance: 8, targeted: "yes" },
  "how much is plan f 2020 az":                         { cat1: "Services", intent: "informational", relevance: 6, targeted: "No" },
  "enroll in plan g online":                            { cat1: "Services", intent: "purchase", relevance: 9, targeted: "yes" },
  "how much is plan g in nj":                           { cat1: "Services", intent: "informational", relevance: 8, targeted: "yes" },
  "how much is plan f in nj":                           { cat1: "Services", intent: "informational", relevance: 8, targeted: "yes" },
  "compare and enroll in plan g online":                { cat1: "Services", intent: "purchase", relevance: 9, targeted: "yes" },
  "quote and enroll in plan g online":                  { cat1: "Services", intent: "purchase", relevance: 9, targeted: "yes" },
  "medicare supplement plans alabama":                  { cat1: "",          intent: "comparison", relevance: 6, targeted: "No" },
  "medicare supplement plans in louisiana":             { cat1: "",          intent: "comparison", relevance: 6, targeted: "No" },
  "arizona medicare supplement plans":                  { cat1: "",          intent: "comparison", relevance: 6, targeted: "No" },
  "most stable medicare supplement companies.":         { cat1: "",          intent: "informational", relevance: 7, targeted: "No" },
  "most stable medicare supplement companies":          { cat1: "",          intent: "informational", relevance: 7, targeted: "No" },
  "most stable medicare supplement plan g":             { cat1: "",          intent: "informational", relevance: 7, targeted: "No" },
  "pennsylvania medicare supplement plans":             { cat1: "",          intent: "comparison", relevance: 6, targeted: "No" },
  "medicare quotes":                                    { cat1: "Services", intent: "purchase", relevance: 9, targeted: "yes" },
  "medigap plan plus alabama":                          { cat1: "",          intent: "informational", relevance: 5, targeted: "No" },
};

function classify(keyword) {
  const key = keyword.toLowerCase().trim().replace(/\.$/, "").trim();
  return (
    CLASSIFICATIONS[key] ||
    CLASSIFICATIONS[key + "."] ||
    { cat1: "", intent: "informational", relevance: 5, targeted: "No" }
  );
}

// ---------------------------------------------------------------------------
// Serper
// ---------------------------------------------------------------------------
async function serperSearch(query) {
  const res = await fetch("https://google.serper.dev/search", {
    method: "POST",
    headers: { "X-API-KEY": SERPER_API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ q: query, gl: "us", hl: "en", num: 5 }),
  });
  if (!res.ok) throw new Error(`Serper ${res.status}: ${res.statusText}`);
  return res.json();
}

function analyzeSERP(keyword, serpData) {
  const organic = (serpData.organic || []).slice(0, 5);
  const stops = new Set(["the","and","for","are","with","how","what","does","can","you","your","from","that","this","have","will","about"]);
  const kwWords = keyword.toLowerCase().split(/\s+/).filter(w => w.length >= 3 && !stops.has(w));

  let kwInTitles = 0, kwInUrls = 0;
  const domains = [];

  for (const r of organic) {
    const title = (r.title || "").toLowerCase();
    const url = (r.link || "").toLowerCase();
    const threshold = Math.ceil(kwWords.length / 2);
    if (kwWords.filter(w => title.includes(w)).length >= threshold) kwInTitles++;
    if (kwWords.filter(w => url.includes(w)).length >= threshold) kwInUrls++;
    try { domains.push(new URL(r.link).hostname.replace(/^www\./, "")); }
    catch { domains.push("?"); }
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
  if (!SHEET_ID) throw new Error("INTERNAL_SEO_SHEET_ID not set");
  if (!SERPER_API_KEY) throw new Error("SERPER_API_KEY not set");

  const keyFile = GOOGLE_CREDENTIALS_JSON.replace(/^~/, process.env.HOME);
  const auth = new google.auth.GoogleAuth({ keyFile, scopes: ["https://www.googleapis.com/auth/spreadsheets"] });
  const sheets = google.sheets({ version: "v4", auth });

  // Read current data for rows 1782-1803
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: `Keywords!A${START_ROW}:O${END_ROW}`,
  });
  const rows = res.data.values || [];
  console.log(`Read ${rows.length} rows (${START_ROW}–${END_ROW})`);

  const updates = [];

  for (let i = 0; i < rows.length; i++) {
    const sheetRow = START_ROW + i;
    const keyword = (rows[i][0] || "").trim();
    if (!keyword) { console.log(`  Row ${sheetRow}: empty keyword, skipping`); continue; }

    console.log(`\nRow ${sheetRow}: "${keyword}"`);

    const cls = classify(keyword);

    // --- Moz keyword metrics ---
    let volume = "", difficulty = "", ctr = "", priority = "";
    try {
      const moz = await getKeywordMetrics(keyword);
      if (moz) {
        volume     = moz.volume        ?? "";
        difficulty = moz.difficulty    ?? "";
        ctr        = moz.organic_ctr   != null ? Math.round(moz.organic_ctr) : "";
        priority   = moz.priority      ?? "";
        console.log(`  Moz: vol=${volume} diff=${difficulty} ctr=${ctr} pri=${priority}`);
      } else {
        console.log("  Moz: no data");
      }
    } catch (err) {
      console.warn(`  Moz error: ${err.message}`);
    }

    // --- Serper SERP analysis ---
    let kwInTitles = "", kwInUrls = "", topDomains = "";
    try {
      const serpData = await serperSearch(keyword);
      const analysis = analyzeSERP(keyword, serpData);
      kwInTitles = analysis.kwInTitles;
      kwInUrls   = analysis.kwInUrls;
      topDomains = analysis.topDomains;
      console.log(`  SERP: titles=${kwInTitles} urls=${kwInUrls}`);
    } catch (err) {
      console.warn(`  Serper error: ${err.message}`);
    }

    // Build the full row update (B through O, i.e. cols 2-15)
    // B=cat1, C=(skip), D=vol, E=diff, F=ctr, G=pri, H=relevance, I=intent, J="", K="", L=targeted, M=titl, N=urls, O=domains
    updates.push({
      range: `Keywords!B${sheetRow}:O${sheetRow}`,
      values: [[
        cls.cat1,      // B - Category 1 (only write if currently blank)
        "",            // C - Category 2 (leave blank)
        volume,        // D - Avg Volume
        difficulty,    // E - Difficulty
        ctr,           // F - SERP CTR
        priority,      // G - Moz Priority
        cls.relevance, // H - SITE On Site Relevance
        cls.intent,    // I - Notes / intent
        "",            // J - Min Volume
        "",            // K - Max Volume
        cls.targeted,  // L - Targeted?
        kwInTitles,    // M - KW in Titles
        kwInUrls,      // N - KW in URLs
        topDomains,    // O - Top 5 Domains
      ]],
    });

    // Rate limit
    await new Promise(r => setTimeout(r, 400));
  }

  if (updates.length === 0) {
    console.log("\nNo updates to write.");
    return;
  }

  console.log(`\nWriting ${updates.length} rows to sheet...`);
  await sheets.spreadsheets.values.batchUpdate({
    spreadsheetId: SHEET_ID,
    requestBody: { valueInputOption: "RAW", data: updates },
  });
  console.log("Done! Rows 1782-1803 updated.");
}

main().catch(err => { console.error("Fatal:", err); process.exit(1); });
