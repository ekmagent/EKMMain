/**
 * validate-pages.js
 *
 * Edward Sturm Module 05 (On-Page SEO) + Module 09 (After Publishing)
 * Compact Keywords scoring checklist validator.
 *
 * Scans all app/**\/page.tsx files, detects primary keywords, runs 12
 * weighted checks, and produces a console report + TSV export.
 *
 * Usage:  node scripts/validate-pages.js
 */

require("dotenv").config({ path: __dirname + "/.env" });

const fs = require("fs");
const path = require("path");
const { glob } = require("glob");

// ---------------------------------------------------------------------------
// Scoring weights (total = 100)
// ---------------------------------------------------------------------------
const CHECKS = [
  { id: "keywordInUrl",         label: "Keyword in URL slug",              weight: 10 },
  { id: "keywordInTitle",       label: "Keyword in title (first 3 words)", weight: 12 },
  { id: "keywordInMetaDesc",    label: "Keyword in meta description",      weight: 10 },
  { id: "keywordInH1",          label: "Keyword in H1",                    weight: 12 },
  { id: "keywordInFirst100",    label: "Keyword in first 100 words",       weight: 10 },
  { id: "altTextOnFirstImg",    label: "Alt text on first image",          weight:  5 },
  { id: "keywordIn2H2s",        label: "Keyword in 2+ H2s",               weight:  8 },
  { id: "wordCountInRange",     label: "Word count in range",              weight:  8 },
  { id: "metaDescLength",       label: "Meta desc 120-158 chars",          weight:  8 },
  { id: "titleLength",          label: "Title 50-60 chars",                weight:  7 },
  { id: "exactlyOneH1",         label: "Exactly 1 H1",                    weight:  5 },
  { id: "notKeywordStuffed",    label: "Not keyword-stuffed (<=6)",        weight:  5 },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Recursively find every page.tsx under app/. (Don't write the glob in this comment — a slash-star sequence inside it terminates the comment and breaks the file.) */
async function findPageFiles(appDir) {
  const pattern = path.join(appDir, "**", "page.tsx").replace(/\\/g, "/");
  return glob(pattern);
}

/** Derive a URL path from the file path relative to /app. */
function filePathToUrlPath(filePath, appDir) {
  let rel = path.relative(appDir, path.dirname(filePath));
  // Strip Next.js route-group parentheses e.g. (marketing)
  rel = rel.replace(/\([^)]+\)\/?/g, "");
  // Strip dynamic segments like [slug]
  rel = rel.replace(/\[.*?\]/g, "");
  // Normalise separators
  rel = rel.replace(/\\/g, "/").replace(/\/+/g, "/").replace(/\/$/, "");
  return "/" + rel;
}

/** Extract metadata exports from a page.tsx source string. */
function extractMetadata(src) {
  const meta = { title: "", description: "" };

  // Match: export const metadata = { title: "...", description: "..." }
  const metaBlock = src.match(/export\s+const\s+metadata\s*[:=]\s*\{([\s\S]*?)\}/);
  if (metaBlock) {
    const block = metaBlock[1];
    const titleMatch = block.match(/title\s*:\s*["'`]([^"'`]+)["'`]/);
    const descMatch = block.match(/description\s*:\s*["'`]([^"'`]+)["'`]/);
    if (titleMatch) meta.title = titleMatch[1];
    if (descMatch) meta.description = descMatch[1];
  }

  // Also try generateMetadata return
  const genMeta = src.match(/return\s*\{[\s\S]*?title\s*:\s*["'`]([^"'`]+)["'`]/);
  if (!meta.title && genMeta) meta.title = genMeta[1];

  const genDesc = src.match(/return\s*\{[\s\S]*?description\s*:\s*["'`]([^"'`]+)["'`]/);
  if (!meta.description && genDesc) meta.description = genDesc[1];

  return meta;
}

/** Extract visible text (very rough: strip JSX tags, braces, imports). */
function extractBodyText(src) {
  // Remove import lines
  let text = src.replace(/^import\s.*$/gm, "");
  // Remove export const metadata block
  text = text.replace(/export\s+const\s+metadata[\s\S]*?};/g, "");
  // Remove JSX/HTML tags
  text = text.replace(/<[^>]+>/g, " ");
  // Remove JS expressions in curly braces (single-level)
  text = text.replace(/\{[^{}]*\}/g, " ");
  // Remove remaining code noise
  text = text.replace(/["'`]/g, " ");
  // Collapse whitespace
  text = text.replace(/\s+/g, " ").trim();
  return text;
}

/** Count occurrences of keyword (case-insensitive, whole-ish word). */
function countKeyword(text, keyword) {
  if (!keyword) return 0;
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`\\b${escaped}\\b`, "gi");
  return (text.match(re) || []).length;
}

/** Extract all H1 texts from source. */
function extractHeadings(src, level) {
  const tag = `h${level}`;
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "gi");
  const results = [];
  let m;
  while ((m = re.exec(src)) !== null) {
    results.push(m[1].replace(/<[^>]+>/g, "").trim());
  }
  return results;
}

/** Check if the first <img or <Image has an alt attribute with content. */
function firstImageHasAlt(src) {
  const imgMatch = src.match(/<(?:img|Image)\b[^>]*>/i);
  if (!imgMatch) return null; // no image — neutral
  const altMatch = imgMatch[0].match(/alt\s*=\s*["']([^"']+)["']/i);
  return altMatch && altMatch[1].trim().length > 0;
}

/** Detect primary keyword for a page. */
function detectKeyword(urlPath, meta) {
  // Hub pages: keyword from slug
  if (urlPath.includes("/hub/")) {
    const slug = urlPath.split("/hub/")[1];
    if (slug) return slug.replace(/-/g, " ").toLowerCase();
  }

  // Other pages: use title minus brand suffix
  if (meta.title) {
    let kw = meta.title;
    // Strip common brand suffixes like " | Brand" or " — Brand"
    kw = kw.replace(/\s*[|—–-]\s*[^|—–-]+$/g, "").trim();
    return kw.toLowerCase();
  }

  // Fallback: last meaningful slug segment
  const segments = urlPath.split("/").filter(Boolean);
  if (segments.length) return segments[segments.length - 1].replace(/-/g, " ");

  return "";
}

// ---------------------------------------------------------------------------
// Validation engine
// ---------------------------------------------------------------------------

function validatePage(filePath, appDir) {
  const src = fs.readFileSync(filePath, "utf-8");
  const urlPath = filePathToUrlPath(filePath, appDir);
  const meta = extractMetadata(src);
  const keyword = detectKeyword(urlPath, meta);
  const bodyText = extractBodyText(src);
  const words = bodyText.split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const first100 = words.slice(0, 100).join(" ").toLowerCase();
  const h1s = extractHeadings(src, 1);
  const h2s = extractHeadings(src, 2);
  const isHub = urlPath.includes("/hub/");

  const results = {};

  // 1. Keyword in URL slug
  const slugWords = keyword.split(/\s+/);
  const urlLower = urlPath.toLowerCase();
  results.keywordInUrl = slugWords.every((w) => urlLower.includes(w));

  // 2. Keyword in title (first 3 words)
  const titleLower = (meta.title || "").toLowerCase();
  const titleFirst3 = titleLower.split(/\s+/).slice(0, 3).join(" ");
  results.keywordInTitle = titleFirst3.includes(keyword) || titleLower.startsWith(keyword);

  // 3. Keyword in meta description (early = first half)
  const descLower = (meta.description || "").toLowerCase();
  const descFirstHalf = descLower.slice(0, Math.ceil(descLower.length / 2));
  results.keywordInMetaDesc = descFirstHalf.includes(keyword);

  // 4. Keyword in H1
  results.keywordInH1 = h1s.some((h) => h.toLowerCase().includes(keyword));

  // 5. Keyword in first 100 words
  results.keywordInFirst100 = first100.includes(keyword);

  // 6. Alt text on first image
  const altCheck = firstImageHasAlt(src);
  // Edward Module 06: hub pages MUST have a heading image — no image = fail
  const isHubPage = urlPath.includes("/hub/");
  results.altTextOnFirstImg = altCheck === null ? !isHubPage : altCheck;

  // 7. Keyword in 2+ H2 headers
  const h2Matches = h2s.filter((h) => h.toLowerCase().includes(keyword)).length;
  results.keywordIn2H2s = h2Matches >= 2;

  // 8. Word count in range
  if (isHub) {
    results.wordCountInRange = wordCount >= 400 && wordCount <= 500;
  } else {
    results.wordCountInRange = wordCount >= 600;
  }

  // 9. Meta description length
  const descLen = (meta.description || "").length;
  results.metaDescLength = descLen >= 120 && descLen <= 158;

  // 10. Title length
  const titleLen = (meta.title || "").length;
  results.titleLength = titleLen >= 50 && titleLen <= 60;

  // 11. Exactly one H1
  results.exactlyOneH1 = h1s.length === 1;

  // 12. Not keyword-stuffed
  const kwCount = countKeyword(bodyText, keyword);
  results.notKeywordStuffed = kwCount <= 6;

  // Calculate score
  let score = 0;
  for (const check of CHECKS) {
    if (results[check.id]) score += check.weight;
  }

  return {
    filePath,
    urlPath,
    keyword,
    meta,
    wordCount,
    h1Count: h1s.length,
    kwOccurrences: countKeyword(bodyText, keyword),
    descLength: descLen,
    titleLength: titleLen,
    results,
    score,
  };
}

// ---------------------------------------------------------------------------
// Reporter
// ---------------------------------------------------------------------------

function printReport(pages) {
  const divider = "=".repeat(80);

  console.log("\n" + divider);
  console.log("  PAGE VALIDATION REPORT — Edward Sturm On-Page SEO Checklist");
  console.log(divider + "\n");

  let totalScore = 0;
  const needsWork = [];
  const overOptimized = [];

  for (const p of pages) {
    totalScore += p.score;

    const flag =
      p.score === 100
        ? " [OVER-OPTIMIZED — de-optimize to 96]"
        : p.score < 80
          ? " [NEEDS WORK]"
          : "";

    if (p.score === 100) overOptimized.push(p);
    if (p.score < 80) needsWork.push(p);

    console.log(`  ${p.urlPath}${flag}`);
    console.log(`  Keyword: "${p.keyword}"  |  Score: ${p.score}/100  |  Words: ${p.wordCount}`);
    console.log(`  Title (${p.titleLength} chars): ${p.meta.title || "(none)"}`);
    console.log(`  Meta desc (${p.descLength} chars): ${p.meta.description ? p.meta.description.slice(0, 60) + "..." : "(none)"}`);
    console.log("");

    for (const check of CHECKS) {
      const passed = p.results[check.id];
      const icon = passed ? "PASS" : "FAIL";
      console.log(`    [${icon}] ${check.label} (+${check.weight})`);
    }
    console.log("\n" + "-".repeat(80) + "\n");
  }

  // Summary
  const avg = pages.length ? (totalScore / pages.length).toFixed(1) : 0;
  console.log(divider);
  console.log("  SUMMARY");
  console.log(divider);
  console.log(`  Total pages scanned: ${pages.length}`);
  console.log(`  Average score:       ${avg}/100`);
  console.log(`  Over-optimized (100): ${overOptimized.length}`);
  console.log(`  Needs work (<80):     ${needsWork.length}`);

  if (overOptimized.length) {
    console.log("\n  Pages to DE-OPTIMIZE (score 100 — Edward says aim for 96):");
    for (const p of overOptimized) console.log(`    - ${p.urlPath}`);
  }
  if (needsWork.length) {
    console.log("\n  Pages needing attention (score < 80):");
    for (const p of needsWork) console.log(`    - ${p.urlPath} (${p.score}/100)`);
  }

  console.log("\n" + divider + "\n");
}

function saveTSV(pages, outPath) {
  const headers = [
    "URL",
    "Keyword",
    "Score",
    "WordCount",
    "TitleLength",
    "DescLength",
    "H1Count",
    "KWOccurrences",
    ...CHECKS.map((c) => c.label),
  ];

  const rows = pages.map((p) => [
    p.urlPath,
    p.keyword,
    p.score,
    p.wordCount,
    p.titleLength,
    p.descLength,
    p.h1Count,
    p.kwOccurrences,
    ...CHECKS.map((c) => (p.results[c.id] ? "PASS" : "FAIL")),
  ]);

  const tsv = [headers.join("\t"), ...rows.map((r) => r.join("\t"))].join("\n");
  fs.writeFileSync(outPath, tsv, "utf-8");
  console.log(`  Report saved to ${outPath}\n`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const projectRoot = path.resolve(__dirname, "..");
  const appDir = path.join(projectRoot, "app");

  if (!fs.existsSync(appDir)) {
    console.error(`ERROR: app/ directory not found at ${appDir}`);
    process.exit(1);
  }

  const files = await findPageFiles(appDir);
  if (!files.length) {
    console.log("No page.tsx files found.");
    return;
  }

  console.log(`Found ${files.length} page.tsx file(s).\n`);

  const pages = files
    .map((f) => validatePage(f, appDir))
    .sort((a, b) => a.score - b.score); // worst first

  printReport(pages);

  const reportPath = path.join(projectRoot, "page-validation-report.tsv");
  saveTSV(pages, reportPath);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
