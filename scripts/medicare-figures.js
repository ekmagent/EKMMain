#!/usr/bin/env node
/**
 * medicare-figures.js
 * Node-side accessor for lib/medicare-figures.ts — the single source of
 * truth for annual Medicare cost figures. Generator scripts can't import
 * the TS module directly, and hardcoding figures in prompts is how the
 * 2026-07-20 stale-figure incident happened: 13 scripts told the LLM the
 * 2025 values were "2026 figures", and every generated page inherited them.
 *
 * Parses the TS source at require time and throws if any figure can't be
 * found — a broken parse must never silently fall back to a stale number.
 */

const fs = require("fs");
const path = require("path");

const src = fs.readFileSync(
  path.join(__dirname, "..", "lib", "medicare-figures.ts"),
  "utf8"
);

function grab(re) {
  const m = src.match(re);
  if (!m) {
    throw new Error(
      `medicare-figures: could not parse ${re} out of lib/medicare-figures.ts — update this script's regexes alongside the lib`
    );
  }
  return Number(m[1]);
}

const year = grab(/year:\s*(\d{4})/);
const partADeductible = grab(/partA:\s*\{[^}]*deductible:\s*([\d.]+)/);
const partBPremium = grab(/partB:\s*\{[^}]*premium:\s*([\d.]+)/);
const partBDeductible = grab(/partB:\s*\{[^}]*deductible:\s*([\d.]+)/);
const partDOopCap = grab(/oopCap:\s*([\d.]+)/);
const snfCoinsurance = grab(/coinsurancePerDay:\s*([\d.]+)/);

/** Formatted strings matching the MF export in lib/medicare-figures.ts */
const FIG = {
  raw: { year, partADeductible, partBPremium, partBDeductible, partDOopCap, snfCoinsurance },
  year: String(year),
  partADeductible: `$${partADeductible.toLocaleString("en-US")}`,
  partBPremium: `$${partBPremium.toFixed(2)}`,
  partBDeductible: `$${partBDeductible}`,
  partDOopCap: `$${partDOopCap.toLocaleString("en-US")}`,
  snfCoinsurance: `$${snfCoinsurance.toFixed(2)}`,
  /** One-line summary for LLM prompts */
  promptLine: `Part B premium $${partBPremium.toFixed(2)}/mo, Part B deductible $${partBDeductible}, Part A deductible $${partADeductible.toLocaleString("en-US")}`,
};

module.exports = FIG;
