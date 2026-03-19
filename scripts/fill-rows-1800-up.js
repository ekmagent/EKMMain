/**
 * fill-rows-1800-up.js
 * Fills missing columns for rows 1800-2125 of the Keywords tab.
 *
 * Two modes per row:
 *  - EMPTY rows (1800-2003): full fill — category, intent, relevance, targeted, Moz, Serper
 *  - PARTIAL rows (2004-2125): only fill empty Moz cols (D/E/F/G) and missing Serper cols (M/N/O)
 *
 * Never overwrites existing data.
 *
 * Run: node fill-rows-1800-up.js
 */

require("dotenv").config({ path: __dirname + "/.env" });
const { google } = require("googleapis");
const { getKeywordMetrics } = require("./moz-api");

const SHEET_ID    = process.env.INTERNAL_SEO_SHEET_ID;
const SERPER_KEY  = process.env.SERPER_API_KEY;
const GOOGLE_CREDS = process.env.GOOGLE_CREDENTIALS_JSON;

const START_ROW = parseInt(process.env.FILL_START_ROW) || 1126;
const END_ROW   = parseInt(process.env.FILL_END_ROW)   || 1147;

// ---------------------------------------------------------------------------
// Auto-classify a keyword (only used when the row has NO existing metadata)
// ---------------------------------------------------------------------------
function autoClassify(kw) {
  const k = kw.toLowerCase();

  // "Medicare broker for [condition]" — explicitly bottom-of-funnel
  if (/medicare broker for/.test(k)) {
    // Caregiver variants are still relevant but slightly lower relevance
    const relevance = /caregiver/.test(k) ? 8 : 9;
    return { cat1: "Services", intent: "purchase", relevance, targeted: "yes" };
  }

  // "Quickest way to enroll" / "enroll in plan"
  if (/quickest way to enroll|enroll into plan/.test(k)) {
    const isMA = /advantage/.test(k);
    return { cat1: "Services", intent: "purchase", relevance: isMA ? 7 : 9, targeted: "yes" };
  }

  // Default fallback for any other empty row
  return { cat1: "", intent: "informational", relevance: 5, targeted: "No" };
}

// ---------------------------------------------------------------------------
// Serper
// ---------------------------------------------------------------------------
async function serperSearch(query) {
  const res = await fetch("https://google.serper.dev/search", {
    method: "POST",
    headers: { "X-API-KEY": SERPER_KEY, "Content-Type": "application/json" },
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
    const url   = (r.link  || "").toLowerCase();
    const threshold = Math.ceil(kwWords.length / 2);
    if (kwWords.filter(w => title.includes(w)).length >= threshold) kwInTitles++;
    if (kwWords.filter(w => url.includes(w)).length   >= threshold) kwInUrls++;
    try { domains.push(new URL(r.link).hostname.replace(/^www\./, "")); }
    catch { domains.push("?"); }
  }
  return { kwInTitles: `${kwInTitles}/5`, kwInUrls: `${kwInUrls}/5`, topDomains: domains.join(", ") };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  if (!SHEET_ID)   throw new Error("INTERNAL_SEO_SHEET_ID not set");
  if (!SERPER_KEY) throw new Error("SERPER_API_KEY not set");

  const keyFile = GOOGLE_CREDS.replace(/^~/, process.env.HOME);
  const auth = new google.auth.GoogleAuth({ keyFile, scopes: ["https://www.googleapis.com/auth/spreadsheets"] });
  const sheets = google.sheets({ version: "v4", auth });

  // Read all rows
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: `Keywords!A${START_ROW}:O${END_ROW}`,
  });
  const rows = res.data.values || [];
  console.log(`Read ${rows.length} rows (${START_ROW}–${END_ROW})\n`);

  const updates = [];
  let processed = 0, skipped = 0;

  for (let i = 0; i < rows.length; i++) {
    const sheetRow = START_ROW + i;
    const row = rows[i] || [];
    const keyword = (row[0] || "").trim();

    if (!keyword) { skipped++; continue; }

    // Existing values (empty string = missing)
    const existingCat1      = (row[1]  || "").trim();
    const existingVol       = (row[3]  || "").trim();
    const existingDiff      = (row[4]  || "").trim();
    const existingCTR       = (row[5]  || "").trim();
    const existingPri       = (row[6]  || "").trim();
    const existingRelevance = (row[7]  || "").trim();
    const existingIntent    = (row[8]  || "").trim();
    const existingTargeted  = (row[11] || "").trim();
    const existingTitles    = (row[12] || "").trim();
    const existingUrls      = (row[13] || "").trim();
    const existingDomains   = (row[14] || "").trim();

    // Is this a fully empty row (no metadata at all)?
    const isEmpty = !existingRelevance && !existingIntent && !existingTargeted;

    // --- Classification (only for empty rows) ---
    let cat1      = existingCat1;
    let relevance = existingRelevance;
    let intent    = existingIntent;
    let targeted  = existingTargeted;

    if (isEmpty) {
      const cls = autoClassify(keyword);
      cat1      = cls.cat1;
      relevance = cls.relevance;
      intent    = cls.intent;
      targeted  = cls.targeted;
    }

    // --- Moz (only if at least one of D/E/F/G is missing) ---
    let volume = existingVol, difficulty = existingDiff, ctr = existingCTR, priority = existingPri;
    const needsMoz = !existingVol || !existingDiff || !existingCTR || !existingPri;

    if (needsMoz) {
      try {
        const moz = await getKeywordMetrics(keyword);
        if (moz) {
          if (!existingVol)  volume     = moz.volume       ?? "";
          if (!existingDiff) difficulty = moz.difficulty   ?? "";
          if (!existingCTR)  ctr        = moz.organic_ctr  != null ? Math.round(moz.organic_ctr) : "";
          if (!existingPri)  priority   = moz.priority     ?? "";
        }
      } catch (err) {
        console.warn(`  Row ${sheetRow} Moz error: ${err.message}`);
      }
    }

    // --- Serper (only if M/N/O missing) ---
    let kwInTitles = existingTitles, kwInUrls = existingUrls, topDomains = existingDomains;
    const needsSerper = !existingTitles || !existingUrls || !existingDomains;

    if (needsSerper) {
      try {
        const serpData = await serperSearch(keyword);
        const analysis = analyzeSERP(keyword, serpData);
        kwInTitles = analysis.kwInTitles;
        kwInUrls   = analysis.kwInUrls;
        topDomains = analysis.topDomains;
      } catch (err) {
        console.warn(`  Row ${sheetRow} Serper error: ${err.message}`);
      }
    }

    // Progress log
    processed++;
    const mozStr = volume ? `vol=${volume} diff=${difficulty}` : "no Moz data";
    const serpStr = kwInTitles ? `titles=${kwInTitles}` : "no SERP";
    console.log(`Row ${sheetRow}: "${keyword.slice(0, 60)}" | ${mozStr} | ${serpStr}`);

    // Build update — write B through O
    updates.push({
      range: `Keywords!B${sheetRow}:O${sheetRow}`,
      values: [[
        cat1,       // B
        "",         // C - Category 2 (leave blank)
        volume,     // D
        difficulty, // E
        ctr,        // F
        priority,   // G
        relevance,  // H
        intent,     // I
        "",         // J - Min Volume
        "",         // K - Max Volume
        targeted,   // L
        kwInTitles, // M
        kwInUrls,   // N
        topDomains, // O
      ]],
    });

    // Write in batches of 25
    if (updates.length >= 25) {
      await sheets.spreadsheets.values.batchUpdate({
        spreadsheetId: SHEET_ID,
        requestBody: { valueInputOption: "RAW", data: [...updates] },
      });
      console.log(`  ✓ Wrote batch of 25`);
      updates.length = 0;
    }

    // Rate limit
    await new Promise(r => setTimeout(r, 400));
  }

  // Write remaining
  if (updates.length > 0) {
    await sheets.spreadsheets.values.batchUpdate({
      spreadsheetId: SHEET_ID,
      requestBody: { valueInputOption: "RAW", data: [...updates] },
    });
    console.log(`  ✓ Wrote final batch of ${updates.length}`);
  }

  console.log(`\nDone. Processed: ${processed}, Skipped (empty): ${skipped}`);
}

main().catch(err => { console.error("Fatal:", err); process.exit(1); });
