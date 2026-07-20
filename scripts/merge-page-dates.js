#!/usr/bin/env node
/**
 * merge-page-dates.js
 * Git merge driver for page-dates.json (route -> ISO date map).
 *
 * CI checkpoints and local sessions both stamp dates into this file, so
 * concurrent pushes conflict constantly (killed the 2026-07-20 weekly run
 * mid-checkpoint). The correct merge is mechanical: union of routes, and
 * where both sides stamped the same route, the later date wins — a page
 * edited on both sides was, at minimum, modified on the later date.
 *
 * Invoked by git as: node scripts/merge-page-dates.js %O %A %B
 *   %O ancestor, %A ours (result must be written here), %B theirs.
 * Exit 0 = resolved. Registered in .github/workflows/seo-research.yml.
 */

const fs = require("fs");

const [ancestorPath, oursPath, theirsPath] = process.argv.slice(2);

function readMap(p) {
  try {
    const v = JSON.parse(fs.readFileSync(p, "utf8"));
    return v && typeof v === "object" && !Array.isArray(v) ? v : {};
  } catch {
    return {};
  }
}

const ours = readMap(oursPath);
const theirs = readMap(theirsPath);

const merged = { ...ours };
for (const [route, date] of Object.entries(theirs)) {
  if (!(route in merged) || String(date) > String(merged[route])) {
    merged[route] = date;
  }
}

fs.writeFileSync(oursPath, JSON.stringify(merged, null, 2) + "\n");
console.log(
  `merge-page-dates: resolved (${Object.keys(ours).length} ours, ${Object.keys(theirs).length} theirs -> ${Object.keys(merged).length} merged)`
);
