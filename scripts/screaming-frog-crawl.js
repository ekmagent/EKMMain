/**
 * screaming-frog-crawl.js
 * Edward Sturm Compact Keywords — Module 04: Getting Technical (Steps 4–6)
 *
 * Runs Screaming Frog SEO Spider headless against the live site, exports CSVs,
 * parses the results into the Site Audit Template format, and writes to
 * Google Sheets + TSV log.
 *
 * Edward's Defensive SEO Checklist:
 *   Step 4 — Crawl main domain, filter to HTML content pages
 *   Step 5 — Check indexing & technical health (404s, 301s, noindex)
 *   Step 6 — Export into Site Audit Template columns
 *
 * Requires: Screaming Frog SEO Spider installed locally (macOS).
 * This script runs LOCALLY (not in GitHub Actions) because SF requires
 * a desktop installation.
 *
 * Run:  node scripts/screaming-frog-crawl.js
 * Cron: 0 8 * * 1  node /path/to/scripts/screaming-frog-crawl.js
 */

require("dotenv").config({ path: __dirname + "/.env" });

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const SF_BIN =
  "/Applications/Screaming Frog SEO Spider.app/Contents/MacOS/ScreamingFrogSEOSpiderLauncher";

const SITE_URL = process.env.SITE_URL || "https://www.medicareyourself.com";
const PROJECT_ROOT = path.resolve(__dirname, "..");
const OUTPUT_DIR = path.resolve(PROJECT_ROOT, "screaming-frog-reports");
const LOG_FILE = path.resolve(PROJECT_ROOT, "screaming-frog-log.tsv");
const SITE_AUDIT_SHEET_ID = process.env.SITE_AUDIT_SHEET_ID;
const GOOGLE_CREDENTIALS_JSON = process.env.GOOGLE_CREDENTIALS_JSON;
const SF_TAB_NAME = "Screaming Frog Crawl";

// Config file (optional — save one from SF GUI for custom settings)
const CONFIG_FILE = process.env.SF_CONFIG_FILE || "";

// Tabs to export (Edward's Step 6 columns)
const EXPORT_TABS = [
  "Internal:HTML",
  "Response Codes:Client Error (4xx)",
  "Response Codes:Redirection (3xx)",
  "Directives:Noindex",
  "Page Titles:All",
  "Page Titles:Duplicate",
  "Meta Description:All",
  "Meta Description:Missing",
  "H1:All",
  "H1:Missing",
  "H1:Duplicate",
  "H2:All",
  "Images:Missing Alt Text",
].join(",");

// Bulk exports for deeper analysis
const BULK_EXPORTS = [
  "Response Codes:Internal:Internal Client Error (4xx) Inlinks",
  "Response Codes:Internal:Internal Redirection (3xx) Inlinks",
  "Response Codes:Internal:Internal Redirect Chain Inlinks",
].join(",");

// ---------------------------------------------------------------------------
// CSV parser (handles quoted fields with commas)
// ---------------------------------------------------------------------------
function readCSV(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const text = fs.readFileSync(filePath, "utf8");
  const rows = [];
  let currentRow = [];
  let currentField = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') {
      if (inQuotes && text[i + 1] === '"') {
        currentField += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      currentRow.push(currentField);
      currentField = "";
    } else if ((ch === "\n" || ch === "\r") && !inQuotes) {
      currentRow.push(currentField);
      currentField = "";
      if (currentRow.some((f) => f.length > 0)) {
        rows.push(currentRow);
      }
      currentRow = [];
      if (ch === "\r" && text[i + 1] === "\n") i++;
    } else {
      currentField += ch;
    }
  }
  // last row
  if (currentField || currentRow.length) {
    currentRow.push(currentField);
    if (currentRow.some((f) => f.length > 0)) {
      rows.push(currentRow);
    }
  }
  return rows;
}

/** Convert CSV rows to array of objects using first row as headers */
function csvToObjects(rows) {
  if (rows.length < 2) return [];
  const headers = rows[0].map((h) => h.trim());
  return rows.slice(1).map((row) => {
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = (row[i] || "").trim();
    });
    return obj;
  });
}

// ---------------------------------------------------------------------------
// Screaming Frog CLI runner
// ---------------------------------------------------------------------------
function runScreamingFrog() {
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Clean previous exports
  const existingFiles = fs.readdirSync(OUTPUT_DIR);
  for (const f of existingFiles) {
    if (f.endsWith(".csv") || f.endsWith(".xlsx")) {
      fs.unlinkSync(path.join(OUTPUT_DIR, f));
    }
  }

  // Build command
  const args = [
    `"${SF_BIN}"`,
    "--headless",
    `--crawl ${SITE_URL}`,
    `--output-folder "${OUTPUT_DIR}"`,
    `--export-tabs "${EXPORT_TABS}"`,
    `--bulk-export "${BULK_EXPORTS}"`,
    "--export-format csv",
    "--overwrite",
    "--save-crawl",
    `--task-name "weekly-audit"`,
    `--project-name "medicareyourself"`,
  ];

  if (CONFIG_FILE && fs.existsSync(CONFIG_FILE)) {
    args.push(`--config "${CONFIG_FILE}"`);
  }

  const cmd = args.join(" ");
  console.log("Running Screaming Frog headless crawl...");
  console.log(`  Site: ${SITE_URL}`);
  console.log(`  Output: ${OUTPUT_DIR}\n`);

  try {
    execSync(cmd, {
      stdio: "inherit",
      timeout: 10 * 60 * 1000, // 10 minute timeout
    });
    console.log("\nCrawl complete.\n");
  } catch (err) {
    console.error("Screaming Frog crawl failed:", err.message);
    process.exit(1);
  }
}

// ---------------------------------------------------------------------------
// Parse crawl results (Edward's Steps 5–6)
// ---------------------------------------------------------------------------
function parseCrawlResults() {
  console.log("Parsing crawl CSV exports...\n");

  // Find exported CSV files
  const csvFiles = fs.readdirSync(OUTPUT_DIR).filter((f) => f.endsWith(".csv"));
  console.log(`  Found ${csvFiles.length} CSV files:`);
  csvFiles.forEach((f) => console.log(`    - ${f}`));
  console.log("");

  // --- Step 5: Technical health ---
  const results = {
    pages: [],
    errors_4xx: [],
    redirects_3xx: [],
    noindex: [],
    duplicate_titles: [],
    missing_meta: [],
    missing_h1: [],
    duplicate_h1: [],
    missing_alt: [],
    issues: [],
  };

  // Parse Internal:HTML — the main crawl data (Edward's Step 6 column mapping)
  const internalFile = csvFiles.find(
    (f) => f.startsWith("internal_") && f.includes("html")
  );
  if (internalFile) {
    const rows = readCSV(path.join(OUTPUT_DIR, internalFile));
    const pages = csvToObjects(rows);
    console.log(`  Internal HTML pages: ${pages.length}`);

    for (const p of pages) {
      results.pages.push({
        // Edward's template column mapping:
        url: p["Address"] || "",                           // Address → URL
        title: p["Title 1"] || "",                         // Title 1 → Current Page Title
        titleLength: parseInt(p["Title 1 Length"] || "0"),
        metaDescription: p["Meta Description 1"] || "",    // Meta Description 1 → Current Meta Description
        metaDescLength: parseInt(p["Meta Description 1 Length"] || "0"),
        h1: p["H1-1"] || "",                               // H1-1 → Current H1
        h1_2: p["H1-2"] || "",                             // H1-2 → Current H1-2 (should flag red)
        h2_1: p["H2-1"] || "",                             // H2-1 → Current H2-1
        h2_2: p["H2-2"] || "",                             // H2-2 → Current H2-2
        statusCode: parseInt(p["Status Code"] || "0"),
        wordCount: parseInt(p["Word Count"] || "0"),        // Word Count
        crawlDepth: parseInt(p["Crawl Depth"] || "0"),      // Crawl Depth
        inlinks: parseInt(p["Inlinks"] || "0"),              // Inlinks
        indexability: p["Indexability"] || "",
        canonical: p["Canonical Link Element 1"] || "",
      });
    }
  }

  // Parse 4xx errors (Edward Step 5: "404s — Fix broken URLs")
  const error4xxFile = csvFiles.find(
    (f) => f.includes("client_error") || (f.includes("response_codes") && f.includes("4xx"))
  );
  if (error4xxFile) {
    const rows = readCSV(path.join(OUTPUT_DIR, error4xxFile));
    results.errors_4xx = csvToObjects(rows);
    console.log(`  4xx errors: ${results.errors_4xx.length}`);
  }

  // Parse 3xx redirects (Edward Step 5: "301s — Make sure redirected URLs are accurate")
  const redirect3xxFile = csvFiles.find(
    (f) => f.includes("redirection") || (f.includes("response_codes") && f.includes("3xx"))
  );
  if (redirect3xxFile) {
    const rows = readCSV(path.join(OUTPUT_DIR, redirect3xxFile));
    results.redirects_3xx = csvToObjects(rows);
    console.log(`  3xx redirects: ${results.redirects_3xx.length}`);
  }

  // Parse noindex pages (Edward Step 5: "Confirm you intentionally excluded pages marked 'noindex'")
  const noindexFile = csvFiles.find(
    (f) => f.includes("noindex") || (f.includes("directives") && f.includes("noindex"))
  );
  if (noindexFile) {
    const rows = readCSV(path.join(OUTPUT_DIR, noindexFile));
    results.noindex = csvToObjects(rows);
    console.log(`  Noindex pages: ${results.noindex.length}`);
  }

  // Parse duplicate titles
  const dupeTitleFile = csvFiles.find(
    (f) => f.includes("page_titles") && f.includes("duplicate")
  );
  if (dupeTitleFile) {
    const rows = readCSV(path.join(OUTPUT_DIR, dupeTitleFile));
    results.duplicate_titles = csvToObjects(rows);
    console.log(`  Duplicate titles: ${results.duplicate_titles.length}`);
  }

  // Parse missing meta descriptions
  const missingMetaFile = csvFiles.find(
    (f) => f.includes("meta_description") && f.includes("missing")
  );
  if (missingMetaFile) {
    const rows = readCSV(path.join(OUTPUT_DIR, missingMetaFile));
    results.missing_meta = csvToObjects(rows);
    console.log(`  Missing meta descriptions: ${results.missing_meta.length}`);
  }

  // Parse missing H1
  const missingH1File = csvFiles.find(
    (f) => f.includes("h1") && f.includes("missing")
  );
  if (missingH1File) {
    const rows = readCSV(path.join(OUTPUT_DIR, missingH1File));
    results.missing_h1 = csvToObjects(rows);
    console.log(`  Missing H1: ${results.missing_h1.length}`);
  }

  // Parse duplicate H1
  const dupeH1File = csvFiles.find(
    (f) => f.includes("h1") && f.includes("duplicate")
  );
  if (dupeH1File) {
    const rows = readCSV(path.join(OUTPUT_DIR, dupeH1File));
    results.duplicate_h1 = csvToObjects(rows);
    console.log(`  Duplicate H1s: ${results.duplicate_h1.length}`);
  }

  // Parse missing alt text
  const missingAltFile = csvFiles.find(
    (f) => f.includes("images") && f.includes("missing_alt")
  );
  if (missingAltFile) {
    const rows = readCSV(path.join(OUTPUT_DIR, missingAltFile));
    results.missing_alt = csvToObjects(rows);
    console.log(`  Images missing alt text: ${results.missing_alt.length}`);
  }

  console.log("");
  return results;
}

// ---------------------------------------------------------------------------
// Edward's Step 6: Check & flag issues per page
// ---------------------------------------------------------------------------
function analyzePages(results) {
  const flaggedUrls = new Set();

  // Collect URLs with known issues
  for (const p of results.duplicate_titles) flaggedUrls.add(p["Address"]);
  for (const p of results.missing_meta) flaggedUrls.add(p["Address"]);
  for (const p of results.missing_h1) flaggedUrls.add(p["Address"]);
  for (const p of results.duplicate_h1) flaggedUrls.add(p["Address"]);

  // Analyze each page
  for (const page of results.pages) {
    const issues = [];

    // Edward's checks:
    // "Page titles: Make sure they're all there, they're unique, they're meaningful,
    //  and end with '| Brand Name'"
    if (!page.title) issues.push("Missing title");
    if (page.titleLength > 60) issues.push("Title too long (>60)");
    if (!page.title.includes("|")) issues.push("Title missing '| Brand Name' format");

    // "Meta descriptions: Present, 120–158 characters"
    if (!page.metaDescription) issues.push("Missing meta description");
    if (page.metaDescLength > 0 && page.metaDescLength < 120) issues.push("Meta desc too short (<120)");
    if (page.metaDescLength > 158) issues.push("Meta desc too long (>158)");

    // "H1: One per page, clear and relevant"
    if (!page.h1) issues.push("Missing H1");
    if (page.h1_2) issues.push("Multiple H1s (should flag red)");

    // "Duplicate H1s: Flag and fix"
    if (results.duplicate_h1.some((d) => d["Address"] === page.url)) {
      issues.push("Duplicate H1");
    }

    // Word count
    if (page.wordCount < 350) issues.push(`Low word count (${page.wordCount})`);

    // Crawl depth
    if (page.crawlDepth > 3) issues.push(`Crawl depth > 3 (${page.crawlDepth})`);

    // Orphan check (no inlinks from other pages on the site)
    if (page.inlinks === 0) issues.push("Orphan page (0 inlinks)");

    // Indexability
    if (page.indexability === "Non-Indexable") issues.push("Non-indexable");

    page.issues = issues;
  }

  return results;
}

// ---------------------------------------------------------------------------
// Google Sheets writer (matches site-audit.js pattern)
// ---------------------------------------------------------------------------
async function writeToSheets(results) {
  if (!SITE_AUDIT_SHEET_ID || !GOOGLE_CREDENTIALS_JSON) {
    console.log("  Sheets credentials not set — skipping Google Sheets write\n");
    return;
  }

  try {
    const { google } = require("googleapis");
    const keyFile = GOOGLE_CREDENTIALS_JSON.replace(/^~/, process.env.HOME);
    const auth = new google.auth.GoogleAuth({
      keyFile,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({ version: "v4", auth });

    // Ensure tab exists
    const meta = await sheets.spreadsheets.get({ spreadsheetId: SITE_AUDIT_SHEET_ID });
    const exists = meta.data.sheets.some((s) => s.properties.title === SF_TAB_NAME);
    if (!exists) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SITE_AUDIT_SHEET_ID,
        requestBody: {
          requests: [{ addSheet: { properties: { title: SF_TAB_NAME } } }],
        },
      });
    }

    // Write header (Edward's Site Audit Template columns)
    const header = [
      "URL",
      "Current Page Title",
      "Title Length",
      "Current Meta Description",
      "Meta Desc Length",
      "Current H1",
      "Current H1-2",
      "Current H2-1",
      "Current H2-2",
      "Crawl Depth",
      "Word Count",
      "InLinks",
      "Status Code",
      "Indexability",
      "Issues",
      "Internal Use",
      "New Slug",
      "New Page Title",
      "New Meta Description",
      "New H1",
      "Notes",
      "Updated & Submitted",
      "Last Crawled",
    ];

    await sheets.spreadsheets.values.update({
      spreadsheetId: SITE_AUDIT_SHEET_ID,
      range: `'${SF_TAB_NAME}'!A1`,
      valueInputOption: "RAW",
      requestBody: { values: [header] },
    });

    // Clear old data
    try {
      await sheets.spreadsheets.values.clear({
        spreadsheetId: SITE_AUDIT_SHEET_ID,
        range: `'${SF_TAB_NAME}'!A2:W1000`,
      });
    } catch { /* tab might be empty */ }

    // Write rows
    const today = new Date().toISOString().slice(0, 10);
    const rows = results.pages.map((p) => [
      p.url,
      p.title,
      p.titleLength,
      p.metaDescription,
      p.metaDescLength,
      p.h1,
      p.h1_2,
      p.h2_1,
      p.h2_2,
      p.crawlDepth,
      p.wordCount,
      p.inlinks,
      p.statusCode,
      p.indexability,
      (p.issues || []).join("; "),
      "", // Internal Use (manual)
      "", // New Slug (manual)
      "", // New Page Title (manual)
      "", // New Meta Description (manual)
      "", // New H1 (manual)
      "", // Notes (manual)
      "", // Updated & Submitted (manual)
      today,
    ]);

    if (rows.length > 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId: SITE_AUDIT_SHEET_ID,
        range: `'${SF_TAB_NAME}'!A2`,
        valueInputOption: "RAW",
        requestBody: { values: rows },
      });
    }

    console.log(`  Wrote ${rows.length} rows to "${SF_TAB_NAME}" tab in Google Sheets\n`);
  } catch (err) {
    console.warn(`  Google Sheets write failed: ${err.message}\n`);
  }
}

// ---------------------------------------------------------------------------
// TSV logger
// ---------------------------------------------------------------------------
function logToTsv(results) {
  const header =
    "date\turl\ttitle\ttitle_length\tmeta_desc_length\th1\tword_count\tcrawl_depth\tinlinks\tstatus_code\tindexability\tissues\n";

  if (!fs.existsSync(LOG_FILE)) {
    fs.writeFileSync(LOG_FILE, header);
  }

  const today = new Date().toISOString().slice(0, 10);
  const rows = results.pages.map((p) =>
    [
      today,
      p.url,
      (p.title || "").replace(/\t/g, " "),
      p.titleLength,
      p.metaDescLength,
      (p.h1 || "").replace(/\t/g, " "),
      p.wordCount,
      p.crawlDepth,
      p.inlinks,
      p.statusCode,
      p.indexability,
      (p.issues || []).join("; "),
    ].join("\t")
  );

  fs.appendFileSync(LOG_FILE, rows.join("\n") + "\n");
  console.log(`Logged ${rows.length} rows to ${LOG_FILE}\n`);
}

// ---------------------------------------------------------------------------
// Print summary (Edward's Step 5 review)
// ---------------------------------------------------------------------------
function printSummary(results) {
  console.log("=== SCREAMING FROG CRAWL SUMMARY ===\n");
  console.log(`Site:                 ${SITE_URL}`);
  console.log(`HTML pages crawled:   ${results.pages.length}`);
  console.log(`4xx errors:           ${results.errors_4xx.length}`);
  console.log(`3xx redirects:        ${results.redirects_3xx.length}`);
  console.log(`Noindex pages:        ${results.noindex.length}`);
  console.log(`Duplicate titles:     ${results.duplicate_titles.length}`);
  console.log(`Missing meta desc:    ${results.missing_meta.length}`);
  console.log(`Missing H1:           ${results.missing_h1.length}`);
  console.log(`Duplicate H1s:        ${results.duplicate_h1.length}`);
  console.log(`Images missing alt:   ${results.missing_alt.length}`);
  console.log("");

  // Edward Step 5 — flag critical items
  if (results.errors_4xx.length > 0) {
    console.log("=== 404s — FIX BROKEN URLs (Edward Step 5) ===");
    for (const e of results.errors_4xx.slice(0, 20)) {
      console.log(`  ${e["Status Code"] || "4xx"}  ${e["Address"] || "?"}`);
    }
    if (results.errors_4xx.length > 20) {
      console.log(`  ... and ${results.errors_4xx.length - 20} more`);
    }
    console.log("");
  }

  if (results.redirects_3xx.length > 0) {
    console.log("=== 301s — VERIFY REDIRECTS ARE ACCURATE (Edward Step 5) ===");
    for (const r of results.redirects_3xx.slice(0, 20)) {
      console.log(`  ${r["Status Code"] || "3xx"}  ${r["Address"] || "?"} → ${r["Redirect URL"] || "?"}`);
    }
    if (results.redirects_3xx.length > 20) {
      console.log(`  ... and ${results.redirects_3xx.length - 20} more`);
    }
    console.log("");
  }

  if (results.noindex.length > 0) {
    console.log("=== NOINDEX — CONFIRM INTENTIONALLY EXCLUDED (Edward Step 5) ===");
    for (const n of results.noindex.slice(0, 20)) {
      console.log(`  ${n["Address"] || "?"}`);
    }
    console.log("");
  }

  // Per-page issues
  const pagesWithIssues = results.pages.filter((p) => p.issues && p.issues.length > 0);
  const totalIssues = pagesWithIssues.reduce((s, p) => s + p.issues.length, 0);

  console.log("=== PAGE-LEVEL ISSUES (Edward Step 6) ===\n");
  console.log(`Pages with issues:    ${pagesWithIssues.length}/${results.pages.length}`);
  console.log(`Total issues:         ${totalIssues}`);
  console.log("");

  // Issue breakdown
  const issueCounts = {};
  for (const p of results.pages) {
    for (const issue of p.issues || []) {
      issueCounts[issue] = (issueCounts[issue] || 0) + 1;
    }
  }
  if (Object.keys(issueCounts).length > 0) {
    console.log("Issue breakdown:");
    const sorted = Object.entries(issueCounts).sort((a, b) => b[1] - a[1]);
    for (const [issue, count] of sorted) {
      console.log(`  ${count}x  ${issue}`);
    }
    console.log("");
  }

  // Flag pages with issues
  if (pagesWithIssues.length > 0) {
    console.log("Pages needing attention:");
    for (const p of pagesWithIssues) {
      const urlPath = p.url.replace(SITE_URL, "") || "/";
      console.log(`  ${urlPath}`);
      for (const issue of p.issues) {
        console.log(`    - ${issue}`);
      }
    }
    console.log("");
  }

  // Quick stats
  if (results.pages.length > 0) {
    const avgWordCount = Math.round(
      results.pages.reduce((s, p) => s + p.wordCount, 0) / results.pages.length
    );
    const avgDepth = (
      results.pages.reduce((s, p) => s + p.crawlDepth, 0) / results.pages.length
    ).toFixed(1);

    console.log("Coverage stats:");
    console.log(`  Avg word count:     ${avgWordCount}`);
    console.log(`  Avg crawl depth:    ${avgDepth}`);
    console.log(`  Max crawl depth:    ${Math.max(...results.pages.map((p) => p.crawlDepth))}`);
  }

  console.log("\nScreening Frog crawl complete.");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  console.log("Screaming Frog Site Crawl — Edward Sturm Module 04 (Steps 4–6)\n");

  // Check SF is installed
  if (!fs.existsSync(SF_BIN)) {
    console.error(`Screaming Frog not found at: ${SF_BIN}`);
    console.error("Install from: https://www.screamingfrog.co.uk/seo-spider/");
    process.exit(1);
  }

  // Step 4: Run the crawl
  runScreamingFrog();

  // Step 5 & 6: Parse and analyze
  const results = parseCrawlResults();
  analyzePages(results);

  // Write to Google Sheets (Edward's Site Audit Template)
  await writeToSheets(results);

  // Log to TSV
  logToTsv(results);

  // Print summary
  printSummary(results);
}

main().catch((err) => {
  console.error("screaming-frog-crawl failed:", err.message);
  process.exit(1);
});
