/**
 * backfill-domain-authority.js
 * Reads Top 5 Domains (column O) from the Keywords tab, looks up Domain Authority
 * via Moz API, and writes DA scores to a new column P ("Top 5 DAs").
 *
 * Deduplicates domains to minimize API calls (50 per batch via getUrlMetrics).
 *
 * Run: node backfill-domain-authority.js
 */

require("dotenv").config({ path: __dirname + "/.env" });
const { google } = require("googleapis");
const { getUrlMetrics } = require("./moz-api");

const SHEET_ID     = process.env.INTERNAL_SEO_SHEET_ID;
const GOOGLE_CREDS = process.env.GOOGLE_CREDENTIALS_JSON;

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  if (!SHEET_ID) throw new Error("INTERNAL_SEO_SHEET_ID not set");

  const keyFile = GOOGLE_CREDS.replace(/^~/, process.env.HOME);
  const auth    = new google.auth.GoogleAuth({ keyFile, scopes: ["https://www.googleapis.com/auth/spreadsheets"] });
  const sheets  = google.sheets({ version: "v4", auth });

  // 1. Read column O (Top 5 Domains) and column P (Top 5 DAs) for all rows
  console.log("Reading Keywords tab...");
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: "Keywords!O:P",
  });
  const rows = res.data.values || [];
  console.log(`Total rows: ${rows.length}`);

  // 2. Add header if needed
  const header = (rows[0] || [])[1] || "";
  if (header !== "Top 5 DAs") {
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEET_ID,
      range: "Keywords!P1",
      valueInputOption: "RAW",
      requestBody: { values: [["Top 5 DAs"]] },
    });
    console.log("Added 'Top 5 DAs' header in P1");
  }

  // 3. Collect all unique domains and find rows needing DA
  const domainSet = new Set();
  const rowsToFill = []; // { sheetRow, domains[] }

  for (let i = 1; i < rows.length; i++) {
    const domainsStr = (rows[i]?.[0] || "").trim();
    const existingDA = (rows[i]?.[1] || "").trim();

    if (!domainsStr || existingDA) continue; // skip if no domains or already has DA

    const domains = domainsStr.split(",").map(d => d.trim()).filter(Boolean);
    if (domains.length === 0) continue;

    domains.forEach(d => domainSet.add(d));
    rowsToFill.push({ sheetRow: i + 1, domains });
  }

  const uniqueDomains = [...domainSet];
  console.log(`Rows needing DA: ${rowsToFill.length}`);
  console.log(`Unique domains to look up: ${uniqueDomains.length}`);

  if (uniqueDomains.length === 0) {
    console.log("Nothing to do!");
    return;
  }

  // 4. Batch lookup DA (50 at a time)
  const daMap = new Map(); // domain -> DA score
  const BATCH_SIZE = 50;

  for (let i = 0; i < uniqueDomains.length; i += BATCH_SIZE) {
    const batch = uniqueDomains.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(uniqueDomains.length / BATCH_SIZE);
    console.log(`  Moz batch ${batchNum}/${totalBatches} (${batch.length} domains)...`);

    try {
      const metrics = await getUrlMetrics(batch);
      batch.forEach((domain, j) => {
        const m = metrics[j];
        daMap.set(domain, m?.domain_authority != null ? Math.round(m.domain_authority) : "?");
      });
    } catch (err) {
      console.warn(`  Batch ${batchNum} error: ${err.message}`);
      batch.forEach(d => daMap.set(d, "?"));
    }

    // Rate limit between batches
    if (i + BATCH_SIZE < uniqueDomains.length) {
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  console.log(`DA lookup complete. Got scores for ${daMap.size} domains.`);

  // 5. Build updates
  const updates = [];
  for (const { sheetRow, domains } of rowsToFill) {
    const daScores = domains.map(d => daMap.get(d) ?? "?").join(", ");
    updates.push({
      range: `Keywords!P${sheetRow}`,
      values: [[daScores]],
    });
  }

  // 6. Write in batches of 100
  const WRITE_BATCH = 100;
  for (let i = 0; i < updates.length; i += WRITE_BATCH) {
    const batch = updates.slice(i, i + WRITE_BATCH);
    await sheets.spreadsheets.values.batchUpdate({
      spreadsheetId: SHEET_ID,
      requestBody: { valueInputOption: "RAW", data: batch },
    });
    console.log(`  Wrote ${Math.min(i + WRITE_BATCH, updates.length)}/${updates.length} rows`);
  }

  console.log(`\nDone! ${updates.length} rows updated with DA scores in column P.`);
}

main().catch(err => { console.error("Fatal:", err); process.exit(1); });
