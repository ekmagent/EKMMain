#!/usr/bin/env node
/**
 * check-stale-figures.js
 * Build gate: fails the build if any page under app/ contains a known-stale
 * Medicare dollar figure from a prior plan year. These numbers were the root
 * cause of the 2026-07-20 accuracy audit — ~130 pages presented 2024/2025
 * figures as current. Update BOTH lib/medicare-figures.ts and this blacklist
 * at each annual figure refresh (move the old year's values into STALE).
 *
 * Current (2026) correct values for reference:
 *   Part B premium $202.90 · Part B deductible $283 · Part A deductible $1,736
 *   SNF coinsurance $217.00 · Part D OOP cap $2,100 · MA MOOP max $9,250
 *   IRMAA tier-1 threshold $109,000 single / $218,000 joint
 */

const fs = require("fs");
const path = require("path");

const APP_DIR = path.join(__dirname, "..", "app");

// Each entry: regex (matched against file text) + what it means.
// Dollar signs appear in pages both raw ($185) and entity-encoded (&#36;185),
// so patterns match the digits with either prefix and a word boundary after.
const STALE = [
  { re: /(\$|&#36;)1,676\b/, why: "Part A deductible $1,676 is 2025; 2026 is $1,736" },
  { re: /(\$|&#36;)1,632\b/, why: "Part A deductible $1,632 is 2024; 2026 is $1,736" },
  { re: /(\$|&#36;)209\.50\b/, why: "SNF coinsurance $209.50 is 2025; 2026 is $217.00" },
  // $185 and $257 also appear legitimately as Medigap premium range endpoints,
  // so those two only fire when "Part B" appears on the same line.
  { re: /(\$|&#36;)185(?:\.00)?\b(?![\d%–-])/, why: "Part B premium $185 is 2025; 2026 is $202.90", needs: /Part B/ },
  { re: /(\$|&#36;)174\.70\b/, why: "Part B premium $174.70 is 2024; 2026 is $202.90" },
  { re: /(\$|&#36;)257(?:\.00)?\b(?![\d%–-])/, why: "Part B deductible $257 is 2025; 2026 is $283", needs: /Part B|deductible/ },
  { re: /(\$|&#36;)8,850\b/, why: "MA MOOP $8,850 is 2024; 2026 max is $9,250" },
  { re: /(\$|&#36;)9,350\b/, why: "MA MOOP $9,350 is 2025; 2026 max is $9,250" },
  { re: /(\$|&#36;)106,000\b/, why: "IRMAA tier-1 $106,000 is 2025; 2026 is $109,000" },
  { re: /(\$|&#36;)103,000\b/, why: "IRMAA tier-1 $103,000 is 2024; 2026 is $109,000" },
];

// A page may legitimately cite an old figure when explicitly labeled as the
// prior year ("up from $185.00 in 2025"). Allow a line when the match sits
// within 40 chars of an explicit prior-year label.
const PRIOR_YEAR_NEAR = /(in|for|was|from)\s+20(24|25)\b/;

function walk(dir, out) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) walk(p, out);
    else if (/\.(tsx|ts|mdx?)$/.test(name)) out.push(p);
  }
  return out;
}

const failures = [];
for (const file of walk(APP_DIR, [])) {
  const lines = fs.readFileSync(file, "utf8").split("\n");
  lines.forEach((line, i) => {
    // JSX prose hard-wraps, so context checks use a 3-line window
    const windowText = lines.slice(Math.max(0, i - 1), i + 2).join(" ");
    for (const { re, why, needs } of STALE) {
      const m = line.match(re);
      if (!m) continue;
      if (needs && !needs.test(windowText)) continue;
      if (PRIOR_YEAR_NEAR.test(windowText)) continue;
      failures.push({ file: path.relative(path.join(__dirname, ".."), file), line: i + 1, why });
    }
  });
}

if (failures.length) {
  console.error(`check-stale-figures: FAILED — ${failures.length} stale figure(s) found:\n`);
  for (const f of failures) console.error(`  ${f.file}:${f.line} — ${f.why}`);
  console.error("\nFix the figure (see lib/medicare-figures.ts) or label it with its prior year.");
  process.exit(1);
}
console.log("check-stale-figures: OK — no stale Medicare figures in app/");
