#!/usr/bin/env node
/**
 * build-carrier-history.js
 * Extracts each carrier review page's `const stateData = [...]` block
 * (filed rate increases, loss-ratio trends, Plan G rates, market ranks)
 * into carrier-history.json, consumed by the MCP app's get_rate_history
 * tool. Single source of truth stays the review pages — rerun this after
 * editing them. Run automatically as part of the local build.
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const outFile = path.join(root, "carrier-history.json");

const REVIEWS = {
  humana: "app/medicare-supplement/humana-medigap-review/page.tsx",
  medico: "app/medicare-supplement/medico-medigap-review/page.tsx",
  "mutual-of-omaha": "app/medicare-supplement/mutual-of-omaha-medigap-review/page.tsx",
  woodmenlife: "app/medicare-supplement/woodmenlife-medigap-review/page.tsx",
};

function extractArray(src, varName) {
  const start = src.indexOf(`const ${varName} = [`);
  if (start === -1) return null;
  const open = src.indexOf("[", start);
  // Walk to the matching close bracket (review pages keep these blocks
  // literal — strings never contain unbalanced brackets, verified below by
  // vm evaluation failing loudly if this ever breaks).
  let depth = 0;
  let end = -1;
  for (let i = open; i < src.length; i++) {
    if (src[i] === "[") depth++;
    else if (src[i] === "]") {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  if (end === -1) return null;
  const literal = src.slice(open, end + 1);
  return vm.runInNewContext(`(${literal})`, {}, { timeout: 1000 });
}

const out = {};
for (const [slug, rel] of Object.entries(REVIEWS)) {
  const src = fs.readFileSync(path.join(root, rel), "utf8");
  const asOf = (src.match(/DATA_AS_OF = "([^"]+)"/) || [])[1] || null;
  const stateData = extractArray(src, "stateData");
  if (!stateData) {
    console.error(`carrier-history: no stateData found in ${rel}`);
    process.exit(1);
  }
  out[slug] = {
    asOfDate: asOf,
    reviewUrl: `https://medicareyourself.com/${rel.replace("app/", "").replace("/page.tsx", "")}`,
    states: Object.fromEntries(
      stateData.map((s) => [
        s.code,
        {
          name: s.name,
          planG65Monthly: s.planG65NonHHD ?? null,
          marketRank: s.rank ?? null,
          marketCarriers: s.marketCarriers ?? null,
          marketLow: s.marketLow ?? null,
          marketMedian: s.marketMedian ?? null,
          recentFilings: s.recentFilings ?? [],
          lossRatioTrend: s.lossRatioTrend ?? [],
          verdict: s.verdict ?? null,
        },
      ])
    ),
  };
}

fs.writeFileSync(outFile, JSON.stringify(out, null, 2) + "\n");
const carriers = Object.keys(out).length;
const states = Object.values(out).reduce((n, c) => n + Object.keys(c.states).length, 0);
console.log(`carrier-history.json: ${carriers} carriers, ${states} state records`);
