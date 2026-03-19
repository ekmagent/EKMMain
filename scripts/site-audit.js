/**
 * site-audit.js
 * Edward Sturm Compact Keywords — Module 04: Getting Technical / Defensive SEO
 *
 * Crawls all app/**\/page.tsx files in the repo and audits each page for:
 *   - Title, meta description, H1, H2s, word count
 *   - Component usage (FAQSection, SchemaMarkup, PhoneCTA)
 *   - OG tags, internal links, crawl depth
 *
 * Flags common SEO issues and writes results to the Site Audit Google Sheet.
 * Also logs to site-audit-log.tsv and prints a summary to console.
 *
 * Run: node scripts/site-audit.js
 */

require("dotenv").config({ path: __dirname + "/.env" });

const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");
const { auditOwnSite, getUsageSummary } = require("./moz-api");

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const SITE_AUDIT_SHEET_ID = process.env.SITE_AUDIT_SHEET_ID;
const GOOGLE_CREDENTIALS_JSON = process.env.GOOGLE_CREDENTIALS_JSON;

const SITE_URL = process.env.SITE_URL || "https://medicareyourself.com";
const APP_DIR = path.resolve(__dirname, "..", "app");
const PROJECT_ROOT = path.resolve(__dirname, "..");
const LOG_FILE = path.resolve(__dirname, "..", "site-audit-log.tsv");
const TAB_NAME = "Site Audit";

// ---------------------------------------------------------------------------
// File system helpers
// ---------------------------------------------------------------------------

/** Recursively find all page.tsx files under a directory */
function findPageFiles(dir, results = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip node_modules, .next, etc.
      if (entry.name.startsWith(".") || entry.name === "node_modules") continue;
      findPageFiles(fullPath, results);
    } else if (entry.name === "page.tsx") {
      results.push(fullPath);
    }
  }
  return results;
}

/** Derive URL path from file path, e.g. app/medicare-supplement/new-jersey/page.tsx → /medicare-supplement/new-jersey */
function filePathToUrlPath(filePath) {
  const relative = path.relative(APP_DIR, filePath);
  // Remove the trailing /page.tsx
  const dir = path.dirname(relative);
  if (dir === ".") return "/";
  return "/" + dir.replace(/\\/g, "/");
}

// ---------------------------------------------------------------------------
// Source code extraction (regex-based)
// ---------------------------------------------------------------------------

/** Extract the value of `title:` from metadata export */
function extractTitle(source) {
  // Match title in metadata object: title: "..." or title: '...' or title: `...`
  const match = source.match(/title:\s*["'`]([^"'`]+)["'`]/);
  return match ? match[1].trim() : "";
}

/** Extract the value of `description:` from metadata export */
function extractDescription(source) {
  // Handle multiline description with string concatenation or template literals
  // First try single-line
  const singleLine = source.match(/description:\s*["'`]([^"'`]+)["'`]/);
  if (singleLine) return singleLine[1].trim();

  // Try multiline with description:\n"..."
  const multiLine = source.match(/description:\s*\n\s*["'`]([^"'`]+)["'`]/);
  if (multiLine) return multiLine[1].trim();

  return "";
}

/** Extract H1 text from JSX <h1>...</h1> or <h1 ...>...</h1> */
function extractH1(source) {
  const matches = [];
  const h1Regex = /<h1[^>]*>([^<]+)<\/h1>/g;
  let match;
  while ((match = h1Regex.exec(source)) !== null) {
    matches.push(match[1].trim());
  }

  // Also try multiline h1 with nested elements — grab text content
  if (matches.length === 0) {
    const blockRegex = /<h1[^>]*>([\s\S]*?)<\/h1>/g;
    while ((match = blockRegex.exec(source)) !== null) {
      // Strip JSX tags from inside the H1
      const text = match[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
      if (text) matches.push(text);
    }
  }

  return matches;
}

/** Extract H2 texts */
function extractH2s(source) {
  const matches = [];
  // Simple h2 tags
  const h2Regex = /<h2[^>]*>([\s\S]*?)<\/h2>/g;
  let match;
  while ((match = h2Regex.exec(source)) !== null) {
    const text = match[1].replace(/<[^>]+>/g, "").replace(/\{[^}]*\}/g, "").replace(/\s+/g, " ").trim();
    if (text) matches.push(text);
  }
  return matches;
}

/** Estimate word count by stripping JSX/imports and counting words */
function estimateWordCount(source) {
  let text = source;

  // Remove import statements
  text = text.replace(/^import\s+.*$/gm, "");
  // Remove export statements (but keep content)
  text = text.replace(/^export\s+(const|default|function)\s+/gm, "");
  // Remove metadata object block
  text = text.replace(/export\s+const\s+metadata[\s\S]*?};/g, "");
  // Remove schema objects
  text = text.replace(/const\s+\w+Schema\s*=\s*\{[\s\S]*?\};/g, "");
  // Remove FAQ data arrays
  text = text.replace(/const\s+faqs?\s*=\s*\[[\s\S]*?\];/g, "");
  // Remove JSX tags but keep text content
  text = text.replace(/<[^>]+>/g, " ");
  // Remove template literal expressions
  text = text.replace(/\{[^}]*\}/g, " ");
  // Remove string delimiters
  text = text.replace(/["'`]/g, " ");
  // Remove code artifacts
  text = text.replace(/const\s+\w+/g, "");
  text = text.replace(/return\s*\(/g, "");
  text = text.replace(/\)\s*;?\s*$/gm, "");
  // Remove special characters
  text = text.replace(/[{}()[\];=]/g, " ");
  // Collapse whitespace
  text = text.replace(/\s+/g, " ").trim();

  // Count words (only words with 2+ chars to filter noise)
  const words = text.split(/\s+/).filter((w) => w.length >= 2 && /[a-zA-Z]/.test(w));
  return words.length;
}

/** Check if source contains a component import/usage */
function hasComponent(source, componentName) {
  return (
    source.includes(`<${componentName}`) ||
    source.includes(`import ${componentName}`) ||
    source.includes(`import { ${componentName}`)
  );
}

/** Check for openGraph in metadata */
function hasOGTags(source) {
  return /openGraph\s*:/i.test(source);
}

/** Count internal links: <Link href= occurrences */
function countInternalLinks(source) {
  const matches = source.match(/<Link\s+href=/g);
  return matches ? matches.length : 0;
}

/** Crawl depth = number of path segments (/ = 0, /about = 1, /medicare-supplement/new-jersey = 2) */
function crawlDepth(urlPath) {
  if (urlPath === "/") return 0;
  return urlPath.split("/").filter(Boolean).length;
}

// ---------------------------------------------------------------------------
// Edward Sturm Defensive SEO — Site-wide checks
// ---------------------------------------------------------------------------

/** Check if SITE_URL uses HTTPS */
function checkHttps() {
  return SITE_URL.startsWith("https://") || SITE_URL.startsWith("https:");
}

/** Check if an XML sitemap file exists */
function checkSitemap() {
  return (
    fs.existsSync(path.join(APP_DIR, "sitemap.ts")) ||
    fs.existsSync(path.join(APP_DIR, "sitemap.xml")) ||
    fs.existsSync(path.join(PROJECT_ROOT, "public", "sitemap.xml"))
  );
}

/** Check if robots.txt exists */
function checkRobotsTxt() {
  return fs.existsSync(path.join(PROJECT_ROOT, "public", "robots.txt"));
}

/** Check if a custom 404 page exists */
function check404Page() {
  return fs.existsSync(path.join(APP_DIR, "not-found.tsx"));
}

/** Check if Terms of Service page exists */
function checkTermsPage() {
  return fs.existsSync(path.join(APP_DIR, "terms", "page.tsx"));
}

/** Check if Privacy Policy page exists */
function checkPrivacyPage() {
  return fs.existsSync(path.join(APP_DIR, "privacy", "page.tsx"));
}

/** Check Footer.tsx for social media links */
function checkSocialMediaLinks() {
  const footerCandidates = [
    path.join(APP_DIR, "components", "Footer.tsx"),
    path.join(APP_DIR, "components", "footer.tsx"),
    path.join(PROJECT_ROOT, "components", "Footer.tsx"),
    path.join(PROJECT_ROOT, "components", "footer.tsx"),
  ];
  let footerSource = "";
  for (const fp of footerCandidates) {
    if (fs.existsSync(fp)) {
      footerSource = fs.readFileSync(fp, "utf8");
      break;
    }
  }
  if (!footerSource) return { found: false, profiles: [] };

  const socialPatterns = [
    { name: "Twitter/X", regex: /twitter\.com|x\.com/i },
    { name: "Instagram", regex: /instagram\.com/i },
    { name: "LinkedIn", regex: /linkedin\.com/i },
    { name: "Facebook", regex: /facebook\.com/i },
    { name: "TikTok", regex: /tiktok\.com/i },
  ];
  const profiles = socialPatterns
    .filter((s) => s.regex.test(footerSource))
    .map((s) => s.name);
  return { found: profiles.length > 0, profiles };
}

/** Extract all Link href targets from a source file */
function extractLinkHrefs(source) {
  const hrefs = [];
  const regex = /<Link\s+[^>]*href=["']([^"']+)["']/g;
  let match;
  while ((match = regex.exec(source)) !== null) {
    hrefs.push(match[1]);
  }
  return hrefs;
}

/** Detect orphan pages — pages with no incoming internal links from other pages */
function detectOrphanPages(pages) {
  // Build a set of all URL paths
  const allPaths = new Set(pages.map((p) => p.urlPath));

  // Build incoming-link map: urlPath → count of pages that link TO it
  const incomingLinks = {};
  for (const p of pages) {
    incomingLinks[p.urlPath] = 0;
  }

  for (const p of pages) {
    const source = fs.readFileSync(p.filePath, "utf8");
    const hrefs = extractLinkHrefs(source);
    for (const href of hrefs) {
      // Normalize: strip trailing slash, handle relative paths
      let normalized = href.replace(/\/$/, "") || "/";
      if (allPaths.has(normalized) && normalized !== p.urlPath) {
        incomingLinks[normalized] = (incomingLinks[normalized] || 0) + 1;
      }
    }
  }

  // Root page "/" is never orphan (it's the homepage)
  const orphans = pages
    .filter((p) => p.urlPath !== "/" && incomingLinks[p.urlPath] === 0)
    .map((p) => p.urlPath);
  return orphans;
}

/** Detect duplicate titles across pages */
function detectDuplicateTitles(pages) {
  const titleMap = {};
  for (const p of pages) {
    if (!p.title) continue;
    const lower = p.title.toLowerCase();
    if (!titleMap[lower]) titleMap[lower] = [];
    titleMap[lower].push(p.urlPath);
  }
  // Return entries with more than one page sharing the same title
  const dupes = {};
  for (const [title, urls] of Object.entries(titleMap)) {
    if (urls.length > 1) dupes[title] = urls;
  }
  return dupes;
}

// ---------------------------------------------------------------------------
// Issue detection
// ---------------------------------------------------------------------------
function detectIssues(page, allH1s) {
  const issues = [];

  if (!page.title) issues.push("Missing title");
  if (page.title && page.title.length > 60) issues.push("Title too long (>60)");
  if (!page.metaDescription) issues.push("Missing meta description");
  if (page.metaDescription && page.metaDescLength < 120) issues.push("Meta desc too short (<120)");
  if (page.metaDescription && page.metaDescLength > 158) issues.push("Meta desc too long (>158)");
  if (page.h1List.length === 0) issues.push("Missing H1");
  if (page.h1List.length > 1) issues.push("Multiple H1s on page");
  if (page.wordCount < 350) issues.push("Word count below 350");
  if (page.internalLinks === 0) issues.push("No internal links");
  if (!page.hasSchema) issues.push("Missing SchemaMarkup");
  if (!page.hasPhoneCTA) issues.push("Missing PhoneCTA");
  if (page.crawlDepth > 3) issues.push("Crawl depth > 3");

  // Edward Module 06: hub pages must have a heading image
  if (page.url.includes("/hub/") && page.url !== "/hub") {
    const hasImage = page.source && (page.source.includes("<Image") || page.source.includes("<img"));
    if (!hasImage) issues.push("Missing heading image (Module 06)");
  }

  // Duplicate H1 check — compare this page's H1 against all others
  if (page.h1List.length > 0) {
    const h1Lower = page.h1List[0].toLowerCase();
    const dupeCount = allH1s.filter((h) => h.toLowerCase() === h1Lower).length;
    if (dupeCount > 1) issues.push("Duplicate H1 across pages");
  }

  return issues;
}

// ---------------------------------------------------------------------------
// Google Sheets helpers (same pattern as find-compact-keywords.js)
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

async function ensureSiteAuditTab(sheets, spreadsheetId) {
  const meta = await sheets.spreadsheets.get({ spreadsheetId });
  const exists = meta.data.sheets.some((s) => s.properties.title === TAB_NAME);
  if (!exists) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [{ addSheet: { properties: { title: TAB_NAME } } }],
      },
    });
  }
  // Always write the header row
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `'${TAB_NAME}'!A1`,
    valueInputOption: "RAW",
    requestBody: {
      values: [[
        "URL",
        "Title",
        "Title Length",
        "Meta Description",
        "Meta Desc Length",
        "H1",
        "H2 Count",
        "Word Count",
        "Crawl Depth",
        "Internal Links",
        "Has FAQ",
        "Has Schema",
        "Has PhoneCTA",
        "Has OG",
        "Is Orphan",
        "Duplicate Title",
        "Issues",
        "Last Audited",
      ]],
    },
  });
}

async function writeSiteAuditRows(sheets, spreadsheetId, rows) {
  // Clear existing data (except header)
  try {
    await sheets.spreadsheets.values.clear({
      spreadsheetId,
      range: `'${TAB_NAME}'!A2:R1000`,
    });
  } catch {
    // Tab might be empty, that's fine
  }

  if (rows.length > 0) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `'${TAB_NAME}'!A2`,
      valueInputOption: "RAW",
      requestBody: { values: rows },
    });
  }
}

// ---------------------------------------------------------------------------
// TSV logger
// ---------------------------------------------------------------------------
function logToTsv(pages) {
  const header = "date\turl\ttitle\tmeta_desc_length\th1\th2_count\tword_count\tcrawl_depth\tinternal_links\tissues\n";
  if (!fs.existsSync(LOG_FILE)) {
    fs.writeFileSync(LOG_FILE, header);
  }

  const today = new Date().toISOString().slice(0, 10);
  const rows = pages.map((p) =>
    [
      today,
      p.urlPath,
      p.title,
      p.metaDescLength,
      p.h1List[0] || "",
      p.h2Count,
      p.wordCount,
      p.crawlDepth,
      p.internalLinks,
      p.issues.join("; "),
    ].join("\t")
  );

  fs.appendFileSync(LOG_FILE, rows.join("\n") + "\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  console.log("Site Audit — Defensive SEO (Module 04)\n");

  // Step 1: Find all page.tsx files
  if (!fs.existsSync(APP_DIR)) {
    console.error(`App directory not found: ${APP_DIR}`);
    process.exit(1);
  }

  const pageFiles = findPageFiles(APP_DIR);
  console.log(`Found ${pageFiles.length} page.tsx files\n`);

  if (pageFiles.length === 0) {
    console.log("No pages to audit.");
    return;
  }

  // Step 2: Extract data from each page
  const pages = [];

  for (const filePath of pageFiles) {
    const source = fs.readFileSync(filePath, "utf8");
    const urlPath = filePathToUrlPath(filePath);

    const title = extractTitle(source);
    const metaDescription = extractDescription(source);
    const h1List = extractH1(source);
    const h2s = extractH2s(source);
    const wordCount = estimateWordCount(source);

    pages.push({
      filePath,
      urlPath,
      title,
      titleLength: title.length,
      metaDescription,
      metaDescLength: metaDescription.length,
      h1List,
      h1: h1List[0] || "",
      h2Count: h2s.length,
      wordCount,
      crawlDepth: crawlDepth(urlPath),
      internalLinks: countInternalLinks(source),
      hasFAQ: hasComponent(source, "FAQSection"),
      hasSchema: hasComponent(source, "SchemaMarkup"),
      hasPhoneCTA: hasComponent(source, "PhoneCTA"),
      hasOG: hasOGTags(source),
      issues: [], // populated below
    });
  }

  // Step 3: Detect issues (needs all H1s collected first for dupe detection)
  const allH1s = pages.flatMap((p) => p.h1List);
  for (const page of pages) {
    page.issues = detectIssues(page, allH1s);
  }

  // Step 3b: Edward Sturm defensive SEO — site-wide checks
  const siteWideChecks = {
    https: checkHttps(),
    sitemap: checkSitemap(),
    robotsTxt: checkRobotsTxt(),
    custom404: check404Page(),
    termsPage: checkTermsPage(),
    privacyPage: checkPrivacyPage(),
    socialMedia: checkSocialMediaLinks(),
  };

  // Orphan page detection
  const orphanPages = detectOrphanPages(pages);
  const orphanSet = new Set(orphanPages);
  for (const page of pages) {
    if (orphanSet.has(page.urlPath)) {
      page.issues.push("Orphan page (no incoming internal links)");
    }
  }

  // Duplicate title detection
  const dupeTitles = detectDuplicateTitles(pages);
  const dupeTitleUrls = new Set(Object.values(dupeTitles).flat());
  for (const page of pages) {
    if (dupeTitleUrls.has(page.urlPath)) {
      page.issues.push("Duplicate title across pages");
    }
  }

  // Sort by URL for consistent output
  pages.sort((a, b) => a.urlPath.localeCompare(b.urlPath));

  // Step 4: Write to Google Sheets
  const today = new Date().toISOString().slice(0, 10);

  if (SITE_AUDIT_SHEET_ID && GOOGLE_CREDENTIALS_JSON) {
    try {
      console.log("Writing to Google Sheets...");
      const sheets = await getSheetsClient();
      await ensureSiteAuditTab(sheets, SITE_AUDIT_SHEET_ID);

      const sheetRows = pages.map((p) => [
        p.urlPath,
        p.title,
        p.titleLength,
        p.metaDescription,
        p.metaDescLength,
        p.h1,
        p.h2Count,
        p.wordCount,
        p.crawlDepth,
        p.internalLinks,
        p.hasFAQ ? "Yes" : "No",
        p.hasSchema ? "Yes" : "No",
        p.hasPhoneCTA ? "Yes" : "No",
        p.hasOG ? "Yes" : "No",
        orphanSet.has(p.urlPath) ? "Yes" : "No",
        dupeTitleUrls.has(p.urlPath) ? "Yes" : "No",
        p.issues.join("; "),
        today,
      ]);

      await writeSiteAuditRows(sheets, SITE_AUDIT_SHEET_ID, sheetRows);
      console.log(`  Wrote ${sheetRows.length} rows to "${TAB_NAME}" tab\n`);
    } catch (err) {
      console.warn(`  Google Sheets write failed: ${err.message}`);
      console.warn("  (Results still logged to TSV)\n");
    }
  } else {
    console.log("  SITE_AUDIT_SHEET_ID or GOOGLE_CREDENTIALS_JSON not set — skipping Sheets write\n");
  }

  // Step 5: Log to TSV
  logToTsv(pages);
  console.log(`Logged to ${LOG_FILE}\n`);

  // Step 6: Moz Page Authority audit (if API token is set)
  let mozAuditResults = [];
  if (process.env.MOZ_API_TOKEN) {
    const usage = getUsageSummary();
    const pageCount = pages.length;
    // Only run if we have enough budget (each page = 1 row)
    if (usage.remaining >= pageCount + 200) {
      console.log(`Moz Page Authority audit (${pageCount} pages, ${usage.remaining} rows remaining)...`);
      try {
        mozAuditResults = await auditOwnSite({ appDir: APP_DIR });
        console.log(`  Got PA data for ${mozAuditResults.filter((r) => r.page_authority !== null).length} pages\n`);

        // Merge PA data back into pages for the summary
        const paByUrl = new Map();
        for (const r of mozAuditResults) {
          const urlPath = r.url.replace(SITE_URL, "").replace(/\/$/, "") || "/";
          paByUrl.set(urlPath, r);
        }
        for (const page of pages) {
          const mozData = paByUrl.get(page.urlPath);
          if (mozData) {
            page.pageAuthority = mozData.page_authority;
            page.spamScore = mozData.spam_score;
            if (mozData.needs_attention) {
              page.issues.push(`Low Page Authority (PA: ${mozData.page_authority ?? "unknown"})`);
            }
          }
        }
      } catch (err) {
        console.warn(`  Moz audit failed: ${err.message}\n`);
      }
    } else {
      console.log(`Skipping Moz PA audit — only ${usage.remaining} rows remaining this month (need ${pageCount + 200})\n`);
    }
  }

  // Step 7: Print summary
  const totalIssues = pages.reduce((sum, p) => sum + p.issues.length, 0);
  const pagesWithIssues = pages.filter((p) => p.issues.length > 0).length;

  console.log("=== SITE AUDIT SUMMARY ===\n");
  console.log(`Pages audited:        ${pages.length}`);
  console.log(`Pages with issues:    ${pagesWithIssues}`);
  console.log(`Total issues found:   ${totalIssues}`);
  console.log("");

  // Issue breakdown
  const issueCounts = {};
  for (const page of pages) {
    for (const issue of page.issues) {
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

  // Per-page detail for pages with issues
  const flagged = pages.filter((p) => p.issues.length > 0);
  if (flagged.length > 0) {
    console.log("Pages with issues:");
    for (const p of flagged) {
      console.log(`  ${p.urlPath}`);
      for (const issue of p.issues) {
        console.log(`    - ${issue}`);
      }
    }
    console.log("");
  }

  // Quick stats
  const avgWordCount = Math.round(pages.reduce((s, p) => s + p.wordCount, 0) / pages.length);
  const avgDepth = (pages.reduce((s, p) => s + p.crawlDepth, 0) / pages.length).toFixed(1);
  const withFAQ = pages.filter((p) => p.hasFAQ).length;
  const withSchema = pages.filter((p) => p.hasSchema).length;
  const withPhoneCTA = pages.filter((p) => p.hasPhoneCTA).length;
  const withOG = pages.filter((p) => p.hasOG).length;

  console.log("Coverage stats:");
  console.log(`  Avg word count:     ${avgWordCount}`);
  console.log(`  Avg crawl depth:    ${avgDepth}`);
  console.log(`  FAQSection:         ${withFAQ}/${pages.length}`);
  console.log(`  SchemaMarkup:       ${withSchema}/${pages.length}`);
  console.log(`  PhoneCTA:           ${withPhoneCTA}/${pages.length}`);
  console.log(`  OG tags:            ${withOG}/${pages.length}`);

  // Edward Sturm Defensive SEO checklist
  console.log("\n=== DEFENSIVE SEO CHECKLIST (Edward Sturm) ===\n");
  console.log(`  HTTPS:              ${siteWideChecks.https ? "PASS" : "FAIL — site URL does not use HTTPS"}`);
  console.log(`  XML Sitemap:        ${siteWideChecks.sitemap ? "PASS" : "FAIL — no sitemap found"}`);
  console.log(`  robots.txt:         ${siteWideChecks.robotsTxt ? "PASS" : "FAIL — public/robots.txt missing"}`);
  console.log(`  Custom 404:         ${siteWideChecks.custom404 ? "PASS" : "FAIL — app/not-found.tsx missing"}`);
  console.log(`  Terms of Service:   ${siteWideChecks.termsPage ? "PASS" : "FAIL — app/terms/page.tsx missing"}`);
  console.log(`  Privacy Policy:     ${siteWideChecks.privacyPage ? "PASS" : "FAIL — app/privacy/page.tsx missing"}`);
  if (siteWideChecks.socialMedia.found) {
    console.log(`  Social media links: PASS — found: ${siteWideChecks.socialMedia.profiles.join(", ")}`);
  } else {
    console.log(`  Social media links: FAIL — no social profiles found in Footer`);
  }

  // Moz Page Authority summary
  if (mozAuditResults.length > 0) {
    const withPA = mozAuditResults.filter((r) => r.page_authority !== null);
    if (withPA.length > 0) {
      const avgPA = Math.round(withPA.reduce((s, r) => s + r.page_authority, 0) / withPA.length);
      const weakPages = withPA.filter((r) => r.page_authority < 15);
      console.log(`\n=== MOZ PAGE AUTHORITY ===\n`);
      console.log(`  Pages with PA data: ${withPA.length}`);
      console.log(`  Average PA:         ${avgPA}`);
      console.log(`  Weak pages (PA<15): ${weakPages.length}`);
      if (weakPages.length > 0) {
        console.log(`  Pages needing link attention:`);
        for (const r of weakPages.slice(0, 10)) {
          const urlPath = r.url.replace(SITE_URL, "").replace(/\/$/, "") || "/";
          console.log(`    PA ${String(r.page_authority ?? 0).padStart(2)}  ${urlPath}`);
        }
      }

      // Moz budget status
      const usage = getUsageSummary();
      console.log(`\n  Moz budget: ${usage.rowsUsed}/${3000} rows used (${usage.remaining} remaining)`);
    }
  }

  if (orphanPages.length > 0) {
    console.log(`\n  Orphan pages (${orphanPages.length}):`);
    for (const op of orphanPages) {
      console.log(`    - ${op}`);
    }
  } else {
    console.log(`\n  Orphan pages:       None detected`);
  }

  const dupeTitleEntries = Object.entries(dupeTitles);
  if (dupeTitleEntries.length > 0) {
    console.log(`\n  Duplicate titles (${dupeTitleEntries.length}):`);
    for (const [title, urls] of dupeTitleEntries) {
      console.log(`    "${title}":`);
      for (const u of urls) {
        console.log(`      - ${u}`);
      }
    }
  } else {
    console.log(`  Duplicate titles:   None detected`);
  }

  console.log("\nSite audit complete.");
}

main().catch((err) => {
  console.error("site-audit failed:", err.message);
  process.exit(1);
});
