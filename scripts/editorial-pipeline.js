/**
 * editorial-pipeline.js
 * Editorial quality gate for AI-generated Medicare content.
 *
 * Pipeline stages for each page:
 *  1. SANITIZE    — strip HTML AI markers + replace AI signature phrases
 *  2. FACT-CHECK  — validate Medicare-specific claims against 2026 CMS values
 *  3. EEAT-CHECK  — verify E-E-A-T signals (author byline, citations, update date)
 *  4. REPORT      — write editorial-log.tsv + editorial-report.json
 *
 * AI detection is handled upstream — write better prompts, not detectors.
 * See VOICE & STYLE rules in build-compact-pages.js and build-faq-pages.js.
 *
 * Usage:
 *   node editorial-pipeline.js                          (all pages)
 *   node editorial-pipeline.js app/hub/some/page.tsx   (single page)
 *
 * No API keys required.
 *
 * Output:
 *   editorial-log.tsv     — one row per page with scores and actions
 *   editorial-report.json — full results (machine-readable)
 */

const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..");
const APP_DIR = path.join(REPO_ROOT, "app");

// extractPlainText is used by the fact-checker to get prose from TSX files
const { extractPlainText } = require("./ai-detector.js");

// ---------------------------------------------------------------------------
// 2026 CMS Authoritative Medicare Values for fact-checking
// Update this object each year when CMS releases Annual Notice of Change
// Source: https://www.cms.gov/newsroom/fact-sheets/2026-medicare-parts-b-premiums-deductibles
// ---------------------------------------------------------------------------
const CMS_2026_VALUES = {
  partB: {
    standardPremium: 185.00,        // $/month (standard)
    incomeSurcharge: "IRMAA",       // for high-income beneficiaries
    deductible: 257,                // $/year
    coinsurance: 0.20,              // 20% after deductible
  },
  partA: {
    deductible: 1676,               // $/benefit period
    skilledNursingCoinsuranceDays21to100: 209.50, // $/day
    hospitalCoinsuranceDays61to90: 419,    // $/day
  },
  partD: {
    catastrophicThreshold: 2000,    // out-of-pocket cap (IRA 2022 provision)
    deductibleMax: 590,             // max initial deductible
  },
  enrollmentPeriods: {
    iepMonthsBeforeTurning65: 3,
    iepMonthsAfterTurning65: 3,
    aepStart: "October 15",
    aepEnd: "December 7",
    oepStart: "January 1",
    oepEnd: "March 31",
  },
  medigap: {
    planGCoversPartBExcessCharges: true,
    planNHasCopays: true,           // up to $20 office, $50 ER
    planFNewEnrollees: false,       // Plan F closed to new beneficiaries since Jan 1, 2020
    planCNewEnrollees: false,       // Plan C closed to new beneficiaries since Jan 1, 2020
    openEnrollmentWindow: "6 months after Part B effective date",
  },
};

// Regex patterns to detect specific Medicare claim types in text
const FACT_PATTERNS = [
  {
    label: "Part B premium",
    pattern: /\$(\d{2,3}(?:\.\d{2})?)\s*(?:per month|\/month|a month)?\s*(?:Part B|Medicare Part B)\s*premium/i,
    validate: (match) => {
      const amount = parseFloat(match[1]);
      // Flag if more than $20 off the standard 2026 premium
      if (Math.abs(amount - CMS_2026_VALUES.partB.standardPremium) > 20) {
        return `Possible outdated Part B premium: $${amount} vs 2026 standard $${CMS_2026_VALUES.partB.standardPremium}`;
      }
      return null;
    },
  },
  {
    label: "Part B deductible",
    pattern: /\$(\d{2,3})\s*(?:annual\s*)?(?:Part B\s*)?deductible/i,
    validate: (match) => {
      const amount = parseFloat(match[1]);
      if (Math.abs(amount - CMS_2026_VALUES.partB.deductible) > 30) {
        return `Possible outdated Part B deductible: $${amount} vs 2026 value $${CMS_2026_VALUES.partB.deductible}`;
      }
      return null;
    },
  },
  {
    label: "Part A deductible",
    pattern: /\$(\d{4,5})\s*(?:Part A\s*)?(?:hospital\s*)?deductible/i,
    validate: (match) => {
      const amount = parseFloat(match[1]);
      if (Math.abs(amount - CMS_2026_VALUES.partA.deductible) > 100) {
        return `Possible outdated Part A deductible: $${amount} vs 2026 value $${CMS_2026_VALUES.partA.deductible}`;
      }
      return null;
    },
  },
  {
    label: "Part D out-of-pocket cap",
    pattern: /\$(\d{4,5})\s*(?:out-of-pocket|OOP)\s*(?:cap|limit|maximum)/i,
    validate: (match) => {
      const amount = parseFloat(match[1]);
      if (Math.abs(amount - CMS_2026_VALUES.partD.catastrophicThreshold) > 200) {
        return `Part D OOP cap may be outdated: $${amount} vs 2026 cap $${CMS_2026_VALUES.partD.catastrophicThreshold}`;
      }
      return null;
    },
  },
  {
    label: "Plan F closed enrollment",
    pattern: /Plan F.*(?:available|enroll|sign up|get)/i,
    validate: () => {
      return "Plan F has been closed to new Medicare beneficiaries since Jan 1, 2020. Verify this claim is appropriately caveated.";
    },
  },
  {
    label: "80% coverage claim",
    pattern: /Medicare\s+(?:covers?|pays?)\s+(\d{2})%/i,
    validate: (match) => {
      const pct = parseInt(match[1]);
      if (pct !== 80) {
        return `Medicare Part B covers 80% after deductible. Claimed: ${pct}%`;
      }
      return null;
    },
  },
  {
    label: "AEP dates",
    pattern: /(?:Annual Enrollment Period|AEP).*?(?:October|November|December)/i,
    validate: (match, source) => {
      // Check for correct AEP window (Oct 15 – Dec 7)
      const hasOct15 = /October 15/.test(source);
      const hasDec7 = /December 7/.test(source);
      if (!hasOct15 || !hasDec7) {
        return `Verify AEP dates: Annual Enrollment Period runs October 15 – December 7.`;
      }
      return null;
    },
  },
];

// ---------------------------------------------------------------------------
// E-E-A-T checks for YMYL Medicare content
// ---------------------------------------------------------------------------
function checkEeaT(source, filePath) {
  const issues = [];
  const rel = path.relative(REPO_ROOT, filePath);

  // Author byline — must have Anthony Orner attribution
  if (!/Anthony Orner/i.test(source)) {
    issues.push("Missing author byline (Anthony Orner)");
  }

  // Date visibility — must have a visible last-updated date in content
  if (!/<[^>]*>(?:Last (?:updated|reviewed)|Updated)[\s:]*(?:January|February|March|April|May|June|July|August|September|October|November|December|\d{4})/i.test(source)) {
    issues.push("Missing visible last-updated date in page body");
  }

  // Government citation (medicare.gov, cms.gov, ssa.gov)
  if (!/(medicare\.gov|cms\.gov|ssa\.gov)/i.test(source)) {
    issues.push("No government source link (medicare.gov, cms.gov, ssa.gov)");
  }

  // Disclaimer / broker disclosure
  if (!/(licensed insurance|broker|commission|compensation disclosure|educational purposes)/i.test(source)) {
    issues.push("Missing broker/compensation disclosure or educational disclaimer");
  }

  // FAQPage schema
  if (!/@type.*FAQPage/i.test(source) && !/FAQPage/i.test(source)) {
    issues.push("Missing FAQPage schema markup");
  }

  // Phone number visible
  if (!/(855|800|888|877)-\d{3}-\d{4}/.test(source)) {
    issues.push("No visible phone number on page");
  }

  return issues;
}

// ---------------------------------------------------------------------------
// Fact-check a page source
// ---------------------------------------------------------------------------
function factCheckPage(source, filePath) {
  const issues = [];
  const text = extractPlainText(source);

  for (const check of FACT_PATTERNS) {
    const match = text.match(check.pattern);
    if (match) {
      const issue = check.validate(match, text);
      if (issue) {
        issues.push({ label: check.label, issue });
      }
    }
  }

  return issues;
}

// ---------------------------------------------------------------------------
// Discover pages
// ---------------------------------------------------------------------------
function discoverPages(dir, results = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith(".") || entry.name === "node_modules" || entry.name === "api") continue;
      discoverPages(full, results);
    } else if (entry.name === "page.tsx") {
      results.push(full);
    }
  }
  return results;
}

// ---------------------------------------------------------------------------
// Path validation
// ---------------------------------------------------------------------------
function safeResolvePath(inputPath) {
  const resolved = path.resolve(REPO_ROOT, inputPath);
  if (!resolved.startsWith(APP_DIR + path.sep) && resolved !== APP_DIR) {
    throw new Error(`Path outside allowed app/ directory: ${inputPath}`);
  }
  return resolved;
}

// ---------------------------------------------------------------------------
// Inline sanitize (mirrors sanitize-content.js logic without spawning process)
// ---------------------------------------------------------------------------
function sanitizeSource(source) {
  let result = source;
  let changeCount = 0;

  // Strip AI data attributes
  const AI_DATA_ATTRS = ["data-start","data-end","data-pm-slice","data-pm-doc-index",
    "data-pm-node-type","data-block-id","data-content-id","data-token-index",
    "data-index-in-node","data-path-to-node","data-sourcepos"];
  for (const attr of AI_DATA_ATTRS) {
    const before = result.length;
    result = result
      .replace(new RegExp(`\\s*${attr}="[^"]*"`, "g"), "")
      .replace(new RegExp(`\\s*${attr}=\\{[^}]*\\}`, "g"), "")
      .replace(new RegExp(`\\s+${attr}(?=[\\s/>])`, "g"), "");
    if (result.length !== before) changeCount++;
  }

  // Google Docs GUID
  result = result.replace(/\s*id="docs-internal-guid-[a-f0-9-]+"/g, "");

  // MSO artifacts
  result = result
    .replace(/\s*className="Mso[^"]*"/g, "")
    .replace(/\s*mso-[a-z-]+:[^;";]+;?/g, "")
    .replace(/<\/?o:p>/g, "");

  // AI comments
  result = result
    .replace(/<!--\s*Generated by[^-]*-->/gi, "")
    .replace(/<!--\s*AI_BLOCK_(START|END)\s*-->/gi, "")
    .replace(/<!--\s*AI[_\s]generated[^-]*-->/gi, "");

  // AI phrases (core list)
  const phrases = [
    [/\bIt(?:'s| is) (?:important|critical|essential) to note that\b/gi, ""],
    [/\bIt(?:'s| is) worth noting that\b/gi, ""],
    [/\bdelve(?:s|d|ing)?\b/gi, "look"],
    [/\btapestry\b/gi, "mix"],
    [/\bintricate(?:ly)?\b/gi, "complex"],
    [/\bmeticulous(?:ly)?\b/gi, "careful"],
    [/\bmultifaceted\b/gi, "complex"],
    [/\bunderscore(?:s|d)?\b/gi, "highlight"],
    [/\bpivotal\b/gi, "key"],
    [/\bseamless(?:ly)?\b/gi, "smooth"],
    [/\brobust\b/gi, "strong"],
    [/\bIn conclusion[,.]?\s*/gi, ""],
    [/\bIn summary[,.]?\s*/gi, ""],
    [/\bHaving said that[,.]?\s*/gi, ""],
    [/\bThat being said[,.]?\s*/gi, ""],
    [/\bNavigate the Medicare landscape\b/gi, "Understand your Medicare options"],
  ];
  for (const [re, repl] of phrases) {
    result = result.replace(re, repl);
  }

  return result;
}

// ---------------------------------------------------------------------------
// TSV logging
// ---------------------------------------------------------------------------
const LOG_FILE = path.join(REPO_ROOT, "editorial-log.tsv");
const LOG_HEADERS = [
  "date", "file", "sanitized_changes", "fact_check_issues", "eeat_issues", "overall_status"
].join("\t");

function initLog() {
  if (!fs.existsSync(LOG_FILE)) {
    fs.writeFileSync(LOG_FILE, LOG_HEADERS + "\n", "utf8");
  }
}

function appendLog(row) {
  fs.appendFileSync(LOG_FILE, Object.values(row).join("\t") + "\n", "utf8");
}

// ---------------------------------------------------------------------------
// Run pipeline on a single file
// ---------------------------------------------------------------------------
async function runPipeline(filePath, opts = {}) {
  const rel = path.relative(REPO_ROOT, filePath);
  const result = {
    file: rel,
    date: new Date().toISOString().split("T")[0],
    sanitizeChanges: 0,
    factCheckIssues: [],
    eeatIssues: [],
    status: "ok",
  };

  console.log(`\n── ${rel}`);

  // ── Stage 1: Sanitize ──────────────────────────────────────────────────
  process.stdout.write("  [1/6] Sanitize…  ");
  const originalSource = fs.readFileSync(filePath, "utf8");
  const sanitized = sanitizeSource(originalSource);
  if (sanitized !== originalSource) {
    fs.writeFileSync(filePath, sanitized, "utf8");
    // Count approximate changes by diff length
    result.sanitizeChanges = Math.max(1, Math.round(Math.abs(sanitized.length - originalSource.length) / 10));
    console.log(`${result.sanitizeChanges} changes`);
  } else {
    console.log("clean");
  }

  // ── Stage 2: CMS Fact-check ────────────────────────────────────────────
  process.stdout.write("  [2/3] Fact-check… ");
  const currentSource = fs.readFileSync(filePath, "utf8");
  result.factCheckIssues = factCheckPage(currentSource, filePath);
  if (result.factCheckIssues.length === 0) {
    console.log("no issues");
  } else {
    console.log(`${result.factCheckIssues.length} issue(s)`);
    for (const issue of result.factCheckIssues) {
      console.log(`    ⚠  [${issue.label}] ${issue.issue}`);
    }
    if (result.status === "ok") result.status = "fact_check_warnings";
  }

  // ── Stage 3: E-E-A-T check ────────────────────────────────────────────
  process.stdout.write("  [3/3] E-E-A-T…   ");
  result.eeatIssues = checkEeaT(currentSource, filePath);
  if (result.eeatIssues.length === 0) {
    console.log("all signals present");
  } else {
    console.log(`${result.eeatIssues.length} issue(s)`);
    for (const issue of result.eeatIssues) {
      console.log(`    ⚠  ${issue}`);
    }
    if (result.status === "ok") result.status = "eeat_warnings";
  }

  // Log result
  appendLog({
    date: result.date,
    file: result.file,
    sanitized_changes: result.sanitizeChanges,
    fact_check_issues: result.factCheckIssues.length,
    eeat_issues: result.eeatIssues.length,
    overall_status: result.status,
  });

  return result;
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------
async function run() {
  const args = process.argv.slice(2);
  const opts = {};

  const fileArgs = args.filter(a => !a.startsWith("--"));
  let files = [];

  if (fileArgs.length > 0) {
    for (const arg of fileArgs) {
      try {
        const resolved = safeResolvePath(arg);
        files.push(resolved);
      } catch (e) {
        console.error(`Error: ${e.message}`);
        process.exit(1);
      }
    }
  } else {
    files = discoverPages(APP_DIR);
    console.log(`Editorial pipeline — ${files.length} pages\n`);
  }

  initLog();
  const allResults = [];

  for (const filePath of files) {
    try {
      const result = await runPipeline(filePath, opts);
      allResults.push(result);
    } catch (err) {
      console.error(`\nFatal error on ${path.relative(REPO_ROOT, filePath)}: ${err.message}`);
    }
  }

  // Write full JSON report
  const reportPath = path.join(REPO_ROOT, "editorial-report.json");
  fs.writeFileSync(reportPath, JSON.stringify(allResults, null, 2), "utf8");

  // Summary
  const byStatus = {};
  for (const r of allResults) {
    byStatus[r.status] = (byStatus[r.status] || 0) + 1;
  }

  console.log("\n══ Editorial Pipeline Summary ══════════════════════════════");
  console.log(`Pages processed: ${allResults.length}`);
  for (const [status, count] of Object.entries(byStatus)) {
    const icon = status === "ok" ? "✓" : "⚠";
    console.log(`  ${icon}  ${status}: ${count}`);
  }

  const factIssues = allResults.filter(r => r.factCheckIssues.length > 0).length;
  const eeatIssues = allResults.filter(r => r.eeatIssues.length > 0).length;
  if (factIssues > 0) console.log(`\n  ⚠  ${factIssues} pages have CMS fact-check warnings — review editorial-report.json`);
  if (eeatIssues > 0) console.log(`  ⚠  ${eeatIssues} pages have E-E-A-T gaps — review editorial-report.json`);

  console.log(`\nLogs: editorial-log.tsv`);
  console.log(`Full report: editorial-report.json`);
}

run().catch((err) => {
  console.error(`Fatal: ${err.message}`);
  process.exit(1);
});
