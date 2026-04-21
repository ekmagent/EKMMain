/**
 * batch-approve-blueprints.js
 * Marks all "not built" blueprints as "approved" in a single batch update.
 *
 * Run: node scripts/batch-approve-blueprints.js
 */

require("dotenv").config({ path: __dirname + "/.env" });

const { google } = require("googleapis");

const GOOGLE_CREDENTIALS_JSON = process.env.GOOGLE_CREDENTIALS_JSON;
const INTERNAL_SEO_SHEET_ID = process.env.INTERNAL_SEO_SHEET_ID;

async function main() {
  const keyFile = GOOGLE_CREDENTIALS_JSON.replace(/^~/, process.env.HOME);
  const auth = new google.auth.GoogleAuth({
    keyFile,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  // Read all rows
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: INTERNAL_SEO_SHEET_ID,
    range: "Page Blueprints!A:K",
  });

  const rows = res.data.values || [];
  const data = [];

  for (let i = 1; i < rows.length; i++) {
    const status = (rows[i][10] || "").toLowerCase().trim();
    if (status === "not built") {
      data.push({
        range: `Page Blueprints!K${i + 1}`,
        values: [["approved"]],
      });
    }
  }

  if (data.length === 0) {
    console.log("No blueprints to approve.");
    return;
  }

  await sheets.spreadsheets.values.batchUpdate({
    spreadsheetId: INTERNAL_SEO_SHEET_ID,
    requestBody: {
      valueInputOption: "RAW",
      data,
    },
  });

  console.log(`✓ Approved ${data.length} blueprints in one batch`);
}

main().catch(console.error);
