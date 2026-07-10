#!/usr/bin/env node
/**
 * stamp-page-dates.js
 * Stamps today's date into page-dates.json for pages the bot just edited in
 * CI. build-page-dates.js deliberately refuses to regenerate in CI (shallow
 * clone would stamp today on everything); this is the surgical counterpart —
 * it updates ONLY the routes whose page files show as modified in git, so a
 * legitimate CI edit still moves the page's sitemap lastmod.
 *
 * Run in the workflow after page-editing scripts, before the commit step.
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = path.join(__dirname, "..");
const outFile = path.join(root, "page-dates.json");

const changed = execSync("git diff --name-only HEAD -- app/", { cwd: root })
  .toString()
  .split("\n")
  .filter((f) => /^app\/.*\/?page\.(tsx|mdx|md)$/.test(f));

if (!changed.length) {
  console.log("stamp-page-dates: no page files changed, nothing to stamp");
  process.exit(0);
}

let dates = {};
try {
  dates = JSON.parse(fs.readFileSync(outFile, "utf8"));
} catch {
  // missing file — stamp into a fresh object
}

const today = new Date().toISOString().split("T")[0];
for (const f of changed) {
  const key = path.dirname(f).replace(/^app\/?/, "");
  dates[key] = today;
  console.log(`stamp-page-dates: ${key || "(home)"} -> ${today}`);
}

fs.writeFileSync(outFile, JSON.stringify(dates, null, 2) + "\n");
