/**
 * directory-tracker.js
 * Implements Edward Sturm's Module 12 (Link Building — Directories).
 *
 * Manages directory submission tracking via the Directory SEO Google Sheet.
 * Each run:
 *  1. Ensures the "Directories" tab exists with proper headers
 *  2. Reads existing entries to see what's already submitted
 *  3. Finds the next 2–3 unsubmitted directories
 *  4. Adds them as "pending" rows in the sheet
 *  5. Prints clear submission instructions for Anthony
 *  6. Logs to directory-log.tsv
 *
 * Edward's guidance: 1–2 directory submissions per month.
 * Run: node directory-tracker.js
 */

require("dotenv").config({ path: __dirname + "/.env" });

const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const DIRECTORY_SEO_SHEET_ID = process.env.DIRECTORY_SEO_SHEET_ID;
const GOOGLE_CREDENTIALS_JSON = process.env.GOOGLE_CREDENTIALS_JSON;

const LOG_FILE = path.join(__dirname, "..", "directory-log.tsv");
const TAB_NAME = "Directories";

// ---------------------------------------------------------------------------
// Business info (hardcoded for EasyKind Medicare)
// ---------------------------------------------------------------------------
const BUSINESS = {
  name: "EasyKind Medicare",
  address: "1309 Route 70 West, Cherry Hill, NJ 08002",
  phone: "855-559-1700",
  website: "medicareyourself.com",
  category: "Insurance Broker / Medicare Insurance",
  npi: "1902584006",
};

// ---------------------------------------------------------------------------
// Master directory list — real, relevant directories for a Medicare broker
// ---------------------------------------------------------------------------
const MASTER_DIRECTORIES = [
  {
    name: "Google Business Profile",
    url: "https://business.google.com/",
    category: "General / Local",
    daEstimate: 100,
    notes: "Most critical listing. Drives local pack results and Google Maps visibility.",
  },
  {
    name: "Bing Places",
    url: "https://www.bingplaces.com/",
    category: "General / Local",
    daEstimate: 95,
    notes: "Import from Google Business Profile for quick setup. Bing market share growing.",
  },
  {
    name: "Apple Maps Connect",
    url: "https://mapsconnect.apple.com/",
    category: "General / Local",
    daEstimate: 100,
    notes: "Covers Siri, Apple Maps, and Safari suggestions. Sign in with Apple ID.",
  },
  {
    name: "Yelp",
    url: "https://biz.yelp.com/",
    category: "General / Local",
    daEstimate: 94,
    notes: "Claim or create business page. High DA backlink even without reviews.",
  },
  {
    name: "Better Business Bureau (BBB)",
    url: "https://www.bbb.org/get-listed",
    category: "Trust / Authority",
    daEstimate: 93,
    notes: "Paid accreditation optional; free listing still provides DA 93 backlink.",
  },
  {
    name: "Yellow Pages / YP.com",
    url: "https://www.yp.com/",
    category: "General / Local",
    daEstimate: 91,
    notes: "Free basic listing. Use Insurance Agents & Brokers category.",
  },
  {
    name: "MapQuest",
    url: "https://www.mapquest.com/",
    category: "General / Local",
    daEstimate: 89,
    notes: "Listings powered by Yext; can add directly or via data aggregator.",
  },
  {
    name: "Foursquare / Swarm",
    url: "https://business.foursquare.com/",
    category: "General / Local",
    daEstimate: 88,
    notes: "Claim listing on Foursquare. Data feeds into Apple Maps and Uber.",
  },
  {
    name: "Healthgrades",
    url: "https://www.healthgrades.com/",
    category: "Healthcare / Insurance",
    daEstimate: 87,
    notes: "Primarily for providers but insurance advisors can list under related services.",
  },
  {
    name: "Vitals.com",
    url: "https://www.vitals.com/",
    category: "Healthcare / Insurance",
    daEstimate: 72,
    notes: "Healthcare directory. Claim or create profile for insurance advisory services.",
  },
  {
    name: "NPI Registry",
    url: "https://npiregistry.cms.hhs.gov/",
    category: "Healthcare / Insurance",
    daEstimate: 80,
    notes: "Already listed (NPI: 1902584006). Verify info is current and consistent.",
  },
  {
    name: "Medicare.gov Plan Finder",
    url: "https://www.medicare.gov/plan-compare/",
    category: "Healthcare / Insurance",
    daEstimate: 95,
    notes: "If applicable — check if broker/agent listing is available for your area.",
  },
  {
    name: "Manta.com",
    url: "https://www.manta.com/claim",
    category: "General / Local",
    daEstimate: 72,
    notes: "Free business listing. Straightforward claim process.",
  },
  {
    name: "Hotfrog.com",
    url: "https://www.hotfrog.com/",
    category: "General / Local",
    daEstimate: 58,
    notes: "Free listing. Quick signup process. Decent citation signal.",
  },
  {
    name: "EZlocal.com",
    url: "https://www.ezlocal.com/",
    category: "General / Local",
    daEstimate: 55,
    notes: "Free local directory listing. Consistent NAP is the main goal here.",
  },
  {
    name: "Brownbook.net",
    url: "https://www.brownbook.net/",
    category: "General / Local",
    daEstimate: 60,
    notes: "International business directory with free listings. Quick add.",
  },
  {
    name: "Cylex.us",
    url: "https://www.cylex.us.com/",
    category: "General / Local",
    daEstimate: 52,
    notes: "Free US business directory. Add under Insurance category.",
  },
  {
    name: "Waze Local",
    url: "https://www.waze.com/business/",
    category: "General / Local",
    daEstimate: 85,
    notes: "Owned by Google. Pin your location for Waze navigation users.",
  },
  {
    name: "Chamber of Commerce (NJ)",
    url: "https://www.njchamber.com/",
    category: "Local / Authority",
    daEstimate: 50,
    notes: "Join NJ Chamber of Commerce for a .org backlink and local authority signal.",
  },
  {
    name: "NAIFA (National Association of Insurance and Financial Advisors)",
    url: "https://www.naifa.org/",
    category: "Industry / Authority",
    daEstimate: 55,
    notes: "Industry association. Membership includes directory listing and credibility signal.",
  },
  {
    name: "InsuranceAgentsNearMe.com",
    url: "https://www.insuranceagentsnearme.com/",
    category: "Industry",
    daEstimate: 30,
    notes: "Niche insurance agent directory. Free listing for local insurance professionals.",
  },
];

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

const HEADERS = [
  "Directory Name",
  "URL",
  "Category",
  "Status",
  "Date Submitted",
  "Date Verified",
  "NAP Consistent",
  "DA Estimate",
  "Notes",
];

async function ensureDirectoriesTab(sheets, spreadsheetId) {
  const meta = await sheets.spreadsheets.get({ spreadsheetId });
  const exists = meta.data.sheets.some((s) => s.properties.title === TAB_NAME);
  if (!exists) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [{ addSheet: { properties: { title: TAB_NAME } } }],
      },
    });
    // Write headers
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `${TAB_NAME}!A1`,
      valueInputOption: "RAW",
      requestBody: { values: [HEADERS] },
    });
    console.log(`Created "${TAB_NAME}" tab with headers.`);
  }
}

async function getExistingDirectories(sheets, spreadsheetId) {
  try {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${TAB_NAME}!A:D`,
    });
    const rows = res.data.values || [];
    // Skip header row, collect directory names and their statuses
    const existing = new Map();
    for (let i = 1; i < rows.length; i++) {
      const name = (rows[i][0] || "").toLowerCase().trim();
      const status = (rows[i][3] || "").toLowerCase().trim();
      if (name) existing.set(name, status);
    }
    return existing;
  } catch {
    return new Map();
  }
}

async function appendPendingRows(sheets, spreadsheetId, directories) {
  const today = new Date().toISOString().split("T")[0];
  const rows = directories.map((d) => [
    d.name,
    d.url,
    d.category,
    "pending",
    "",          // Date Submitted — filled when Anthony actually submits
    "",          // Date Verified
    "",          // NAP Consistent
    String(d.daEstimate),
    d.notes,
  ]);

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${TAB_NAME}!A:I`,
    valueInputOption: "RAW",
    requestBody: { values: rows },
  });
}

// ---------------------------------------------------------------------------
// Logging
// ---------------------------------------------------------------------------
function ensureLogFile() {
  if (!fs.existsSync(LOG_FILE)) {
    fs.writeFileSync(
      LOG_FILE,
      "date\taction\tdirectory\tstatus\tda_estimate\n",
      "utf8"
    );
  }
}

function logEntries(entries) {
  const today = new Date().toISOString().split("T")[0];
  const lines = entries
    .map((e) => [today, e.action, e.name, e.status, e.daEstimate].join("\t"))
    .join("\n");
  fs.appendFileSync(LOG_FILE, lines + "\n", "utf8");
}

// ---------------------------------------------------------------------------
// Submission instructions printer
// ---------------------------------------------------------------------------
function printInstructions(directories) {
  console.log("\n" + "=".repeat(70));
  console.log("DIRECTORY SUBMISSION INSTRUCTIONS");
  console.log("Edward Sturm Module 12 — aim for 1-2 submissions per month");
  console.log("=".repeat(70));

  console.log("\nBusiness Info to Submit:");
  console.log(`  Business Name:  ${BUSINESS.name}`);
  console.log(`  Address:        ${BUSINESS.address}`);
  console.log(`  Phone:          ${BUSINESS.phone}`);
  console.log(`  Website:        ${BUSINESS.website}`);
  console.log(`  Category:       ${BUSINESS.category}`);
  console.log(`  NPI:            ${BUSINESS.npi}`);

  directories.forEach((d, i) => {
    console.log(`\n${"—".repeat(70)}`);
    console.log(`${i + 1}. ${d.name}`);
    console.log(`   URL:          ${d.url}`);
    console.log(`   Category:     ${d.category}`);
    console.log(`   DA Estimate:  ~${d.daEstimate}`);
    console.log(`   Notes:        ${d.notes}`);
    console.log(`   Steps:`);
    console.log(`     1. Go to ${d.url}`);
    console.log(`     2. Search for existing listing or click "Add/Claim Business"`);
    console.log(`     3. Enter business info exactly as shown above (NAP consistency is key)`);
    console.log(`     4. Set category to: ${BUSINESS.category}`);
    console.log(`     5. Add website URL: https://${BUSINESS.website}`);
    console.log(`     6. Once submitted, update the sheet status from "pending" to "submitted"`);
    console.log(`     7. After verified/live, update status to "verified" and mark NAP Consistent = Yes`);
  });

  console.log(`\n${"=".repeat(70)}`);
  console.log("IMPORTANT: Keep NAP (Name, Address, Phone) identical across all directories.");
  console.log("Inconsistent NAP hurts local SEO. Use the exact values shown above.");
  console.log("=".repeat(70) + "\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  if (!DIRECTORY_SEO_SHEET_ID) {
    throw new Error("DIRECTORY_SEO_SHEET_ID env var is required");
  }

  const sheets = await getSheetsClient();

  // 1. Ensure the Directories tab exists with headers
  await ensureDirectoriesTab(sheets, DIRECTORY_SEO_SHEET_ID);

  // 2. Read existing entries
  const existing = await getExistingDirectories(sheets, DIRECTORY_SEO_SHEET_ID);
  console.log(`Found ${existing.size} existing directory entries in sheet.`);

  // 3. Find 2–3 not-yet-submitted directories (prioritize by DA, highest first)
  const candidates = MASTER_DIRECTORIES
    .filter((d) => !existing.has(d.name.toLowerCase().trim()))
    .sort((a, b) => b.daEstimate - a.daEstimate);

  const toSubmit = candidates.slice(0, 3);

  if (toSubmit.length === 0) {
    console.log("\nAll directories in the master list have been added to the sheet.");
    console.log("Review the sheet for any still in 'pending' status that need submission.");

    // Log that we checked but had nothing new
    ensureLogFile();
    logEntries([{ action: "check", name: "all-submitted", status: "complete", daEstimate: 0 }]);
    return;
  }

  console.log(`\nFound ${candidates.length} unsubmitted directories.`);
  console.log(`Suggesting top ${toSubmit.length} by estimated DA:\n`);
  toSubmit.forEach((d) => console.log(`  - ${d.name} (DA ~${d.daEstimate})`));

  // 4. Add them as "pending" rows in the sheet
  await appendPendingRows(sheets, DIRECTORY_SEO_SHEET_ID, toSubmit);
  console.log(`\nAdded ${toSubmit.length} "pending" rows to the "${TAB_NAME}" tab.`);

  // 5. Print submission instructions
  printInstructions(toSubmit);

  // 6. Log to directory-log.tsv
  ensureLogFile();
  logEntries(
    toSubmit.map((d) => ({
      action: "suggested",
      name: d.name,
      status: "pending",
      daEstimate: d.daEstimate,
    }))
  );

  console.log(`Logged to ${LOG_FILE}`);
}

main().catch((err) => {
  console.error("directory-tracker failed:", err.message);
  process.exit(1);
});
