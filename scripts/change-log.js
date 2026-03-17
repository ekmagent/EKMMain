/**
 * change-log.js
 * Edward Sturm Module 09 — After Publishing a Page
 *
 * Tracks every edit to a page: date, what changed, why, expected result, actual result.
 * Enables reverting failed experiments by maintaining a TSV change log.
 *
 * Designed to run AFTER a commit, analyzing what just changed.
 * Safe to run standalone — gracefully handles missing history.
 *
 * Usage:  node scripts/change-log.js
 *         node scripts/change-log.js --commits 3   (look back 3 commits)
 */

require("dotenv").config({ path: __dirname + "/.env" });

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const LOG_FILE = path.join(ROOT, "change-log.tsv");
const APP_DIR = "app/";
const MAX_VALUE_LEN = 120; // truncate old/new values in TSV

// ---------------------------------------------------------------------------
// Git helpers
// ---------------------------------------------------------------------------

function git(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf-8", maxBuffer: 10 * 1024 * 1024 }).trim();
  } catch {
    return null;
  }
}

function hasCommits() {
  return git("git rev-parse HEAD") !== null;
}

function hasPreviousCommit(n = 1) {
  return git(`git rev-parse HEAD~${n}`) !== null;
}

function getCommitAuthor() {
  return git("git log -1 --format=%an") || "unknown";
}

function getCommitDate() {
  const raw = git("git log -1 --format=%aI");
  if (!raw) return new Date().toISOString().slice(0, 10);
  return raw.slice(0, 10);
}

function getChangedFiles(commits = 1) {
  // --diff-filter=ACMR: Added, Copied, Modified, Renamed (skip Deleted)
  const raw = git(`git diff --name-only --diff-filter=ACMR HEAD~${commits} -- ${APP_DIR}`);
  if (!raw) return [];
  return raw
    .split("\n")
    .filter(Boolean)
    .filter((f) => !isBinary(f));
}

function getNewFiles(commits = 1) {
  const raw = git(`git diff --name-only --diff-filter=A HEAD~${commits} -- ${APP_DIR}`);
  if (!raw) return [];
  return raw.split("\n").filter(Boolean);
}

function getFileDiff(file, commits = 1) {
  return git(`git diff HEAD~${commits} -- "${file}"`) || "";
}

function isBinary(file) {
  const ext = path.extname(file).toLowerCase();
  const binaryExts = [
    ".png", ".jpg", ".jpeg", ".gif", ".webp", ".avif", ".ico",
    ".woff", ".woff2", ".ttf", ".eot",
    ".pdf", ".zip", ".gz", ".mp4", ".webm",
  ];
  return binaryExts.includes(ext);
}

// ---------------------------------------------------------------------------
// Change categorization
// ---------------------------------------------------------------------------

/**
 * Analyze a unified diff string and return an array of change objects.
 * Each object: { type, oldValue, newValue }
 */
function categorizeChanges(diff, isNew) {
  if (isNew) {
    return [{ type: "new_page", oldValue: "", newValue: "(new file)" }];
  }

  const changes = [];
  const removedLines = [];
  const addedLines = [];

  for (const line of diff.split("\n")) {
    if (line.startsWith("-") && !line.startsWith("---")) {
      removedLines.push(line.slice(1));
    } else if (line.startsWith("+") && !line.startsWith("+++")) {
      addedLines.push(line.slice(1));
    }
  }

  const removedText = removedLines.join("\n");
  const addedText = addedLines.join("\n");

  // Title change — Next.js metadata
  if (hasPattern(removedText, addedText, /title\s*[:=]/i)) {
    changes.push({
      type: "title_change",
      oldValue: extractValue(removedLines, /title\s*[:=]\s*["'`]?([^"'`\n,}]+)/i),
      newValue: extractValue(addedLines, /title\s*[:=]\s*["'`]?([^"'`\n,}]+)/i),
    });
  }

  // Description change
  if (hasPattern(removedText, addedText, /description\s*[:=]/i)) {
    changes.push({
      type: "description_change",
      oldValue: extractValue(removedLines, /description\s*[:=]\s*["'`]?([^"'`\n,}]+)/i),
      newValue: extractValue(addedLines, /description\s*[:=]\s*["'`]?([^"'`\n,}]+)/i),
    });
  }

  // H1 change
  if (hasPattern(removedText, addedText, /<h1[^>]*>/i) || hasPattern(removedText, addedText, /^#\s+/m)) {
    changes.push({
      type: "h1_change",
      oldValue: extractValue(removedLines, /<h1[^>]*>([^<]+)/i) || extractValue(removedLines, /^#\s+(.+)/m),
      newValue: extractValue(addedLines, /<h1[^>]*>([^<]+)/i) || extractValue(addedLines, /^#\s+(.+)/m),
    });
  }

  // H2 change
  if (hasPattern(removedText, addedText, /<h2[^>]*>/i) || hasPattern(removedText, addedText, /^##\s+/m)) {
    changes.push({
      type: "h2_change",
      oldValue: extractValue(removedLines, /<h2[^>]*>([^<]+)/i) || extractValue(removedLines, /^##\s+(.+)/m),
      newValue: extractValue(addedLines, /<h2[^>]*>([^<]+)/i) || extractValue(addedLines, /^##\s+(.+)/m),
    });
  }

  // FAQ change
  if (hasPattern(removedText, addedText, /faq/i) || hasPattern(removedText, addedText, /question|answer/i)) {
    changes.push({
      type: "faq_change",
      oldValue: extractSnippet(removedLines, /faq|question|answer/i),
      newValue: extractSnippet(addedLines, /faq|question|answer/i),
    });
  }

  // Schema / JSON-LD change
  if (
    hasPattern(removedText, addedText, /@type/i) ||
    hasPattern(removedText, addedText, /application\/ld\+json/i) ||
    hasPattern(removedText, addedText, /jsonLd|structuredData|schema/i)
  ) {
    changes.push({
      type: "schema_change",
      oldValue: extractSnippet(removedLines, /@type|jsonLd|structuredData|schema/i),
      newValue: extractSnippet(addedLines, /@type|jsonLd|structuredData|schema/i),
    });
  }

  // If nothing specific matched but there ARE changes, log as content_change
  if (changes.length === 0 && (removedLines.length > 0 || addedLines.length > 0)) {
    changes.push({
      type: "content_change",
      oldValue: truncate(removedLines.slice(0, 3).join(" ").trim()),
      newValue: truncate(addedLines.slice(0, 3).join(" ").trim()),
    });
  }

  return changes;
}

function hasPattern(removedText, addedText, pattern) {
  return pattern.test(removedText) || pattern.test(addedText);
}

function extractValue(lines, pattern) {
  for (const line of lines) {
    const m = line.match(pattern);
    if (m) return truncate(m[1].trim());
  }
  return "";
}

function extractSnippet(lines, pattern) {
  const matches = lines.filter((l) => pattern.test(l));
  return truncate(matches.slice(0, 2).join(" ").trim());
}

function truncate(str) {
  if (!str) return "";
  const clean = str.replace(/\t/g, " ").replace(/\r?\n/g, " ");
  if (clean.length <= MAX_VALUE_LEN) return clean;
  return clean.slice(0, MAX_VALUE_LEN - 3) + "...";
}

// ---------------------------------------------------------------------------
// File → page URL mapping
// ---------------------------------------------------------------------------

function fileToPageUrl(file) {
  // app/medicare-supplement-plans-nj/page.tsx → /medicare-supplement-plans-nj
  let url = file
    .replace(/^app\//, "/")
    .replace(/\/page\.(tsx?|jsx?|mdx?)$/, "")
    .replace(/\/layout\.(tsx?|jsx?)$/, "")
    .replace(/\.(tsx?|jsx?|mdx?)$/, "");

  if (url === "/" || url === "") url = "/";
  return url;
}

// ---------------------------------------------------------------------------
// TSV logger
// ---------------------------------------------------------------------------

const TSV_HEADER = [
  "Date",
  "Page URL",
  "Change Type",
  "Old Value",
  "New Value",
  "Changed By",
  "Expected Result",
  "Actual Result",
].join("\t");

function ensureLogFile() {
  if (!fs.existsSync(LOG_FILE)) {
    fs.writeFileSync(LOG_FILE, TSV_HEADER + "\n", "utf-8");
  }
}

function appendRow(row) {
  const line =
    [
      row.date,
      row.pageUrl,
      row.changeType,
      row.oldValue,
      row.newValue,
      row.changedBy,
      row.expectedResult,
      row.actualResult,
    ].join("\t") + "\n";

  fs.appendFileSync(LOG_FILE, line, "utf-8");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  // Parse --commits flag
  const args = process.argv.slice(2);
  let commits = 1;
  const idx = args.indexOf("--commits");
  if (idx !== -1 && args[idx + 1]) {
    commits = parseInt(args[idx + 1], 10) || 1;
  }

  console.log("=== Change Log — Edward Sturm Module 09 ===\n");

  if (!hasCommits()) {
    console.log("No commits found in this repository. Nothing to log.");
    return;
  }

  if (!hasPreviousCommit(commits)) {
    console.log(
      `Not enough commit history (need HEAD~${commits}). ` +
        "This is likely the initial commit. Nothing to compare against."
    );
    return;
  }

  const changedFiles = getChangedFiles(commits);
  const newFiles = new Set(getNewFiles(commits));
  const author = getCommitAuthor();
  const date = getCommitDate();

  if (changedFiles.length === 0) {
    console.log(`No page files changed in app/ in the last ${commits} commit(s).`);
    return;
  }

  console.log(`Found ${changedFiles.length} changed file(s) in app/\n`);

  ensureLogFile();

  let totalChanges = 0;
  const summary = {};

  for (const file of changedFiles) {
    const isNew = newFiles.has(file);
    const diff = isNew ? "" : getFileDiff(file, commits);
    const pageUrl = fileToPageUrl(file);
    const changes = categorizeChanges(diff, isNew);

    for (const change of changes) {
      appendRow({
        date,
        pageUrl,
        changeType: change.type,
        oldValue: change.oldValue,
        newValue: change.newValue,
        changedBy: author,
        expectedResult: "pending",
        actualResult: "pending",
      });

      totalChanges++;
      summary[change.type] = (summary[change.type] || 0) + 1;

      console.log(`  ${pageUrl}  →  ${change.type}`);
      if (change.oldValue) console.log(`    old: ${change.oldValue}`);
      if (change.newValue) console.log(`    new: ${change.newValue}`);
    }
  }

  console.log(`\n--- Summary ---`);
  console.log(`Total changes logged: ${totalChanges}`);
  for (const [type, count] of Object.entries(summary).sort()) {
    console.log(`  ${type}: ${count}`);
  }
  console.log(`\nLog file: ${LOG_FILE}`);
}

main();
