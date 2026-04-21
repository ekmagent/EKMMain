/**
 * csg-snapshot.js
 * Pulls Medigap pricing spreads from the CSG Actuarial API for a fixed set
 * of states / plans / ages, aggregates them into anonymous summary stats
 * (low / high / spread / HHD delta / tobacco delta), and writes the result
 * to csg-snapshot.json at the repo root.
 *
 * The snapshot is consumed at build time by the state-pricing pages under
 * /medicare-supplement/{state}/. It deliberately strips all carrier names
 * and individual rates — only aggregate ranges and counts are exposed, so
 * visitors who want a carrier-by-carrier breakdown still have to call.
 *
 * Usage:
 *   CSG_API_KEY=... node scripts/csg-snapshot.js
 *
 * Environment variables (same as app/api/quotes/route.ts):
 *   CSG_API_KEY       — required
 *   CSG_PORTAL_NAME   — optional, defaults to "csg_individual"
 *   CSG_BASE_URL      — optional, defaults to "https://api.csgactuarial.com/v1"
 */

const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// Configuration — one flagship ZIP per state, 2 plans, 3 sample ages
// ---------------------------------------------------------------------------
const STATES = [
  { code: "NJ", sampleZip: "08002", sampleCity: "Cherry Hill",   tobaccoNeutralOEP: true  },
  { code: "PA", sampleZip: "19103", sampleCity: "Philadelphia",  tobaccoNeutralOEP: false },
  { code: "OH", sampleZip: "44101", sampleCity: "Cleveland",     tobaccoNeutralOEP: false },
  { code: "TX", sampleZip: "77002", sampleCity: "Houston",       tobaccoNeutralOEP: false },
];
const PLANS = ["G", "N"];
const AGES = [65, 67, 69];
const GENDER = "F"; // Female 65+ is the majority cohort; Medigap is gender-neutral for most carriers
const REQUEST_DELAY_MS = 500; // be gentle on CSG

// ---------------------------------------------------------------------------
// CSG auth
// ---------------------------------------------------------------------------
const CSG_BASE = process.env.CSG_BASE_URL || "https://api.csgactuarial.com/v1";
const CSG_API_KEY = process.env.CSG_API_KEY || "";
const CSG_PORTAL = process.env.CSG_PORTAL_NAME || "csg_individual";

if (!CSG_API_KEY) {
  console.error("CSG_API_KEY env var is required");
  process.exit(1);
}

let cachedToken = null;
let tokenExpires = 0;

async function getToken() {
  const now = Date.now();
  const buffer = 15 * 60 * 1000;
  if (cachedToken && tokenExpires > now + buffer) return cachedToken;

  const res = await fetch(`${CSG_BASE}/auth.json`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api_key: CSG_API_KEY, portal_name: CSG_PORTAL }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`CSG auth failed: ${res.status} ${text}`);
  }
  const data = await res.json();
  cachedToken = data.token;
  const expires = new Date(data.expires_date).getTime();
  tokenExpires = isNaN(expires) ? now + 3600000 : expires;
  return cachedToken;
}

async function csgFetch(endpoint, params) {
  const token = await getToken();
  const qs = new URLSearchParams(params).toString();
  let res = await fetch(`${CSG_BASE}/${endpoint}?${qs}`, {
    headers: { "x-api-token": token },
  });
  if (res.status === 401 || res.status === 403) {
    cachedToken = null;
    tokenExpires = 0;
    const freshToken = await getToken();
    res = await fetch(`${CSG_BASE}/${endpoint}?${qs}`, {
      headers: { "x-api-token": freshToken },
    });
  }
  if (!res.ok) throw new Error(`CSG ${endpoint} failed: ${res.status}`);
  return res.json();
}

// ---------------------------------------------------------------------------
// Aggregation — strip carrier names, compute ranges only
// ---------------------------------------------------------------------------

/**
 * Turn a raw CSG quote array into a { low, high, spread, carrierCount,
 * hhd: { carriersOffering, low, high, minDiscountPct, maxDiscountPct } }
 * aggregate. Carrier names never leave this function.
 */
function aggregate(quotes) {
  // Match each carrier's sans-HHD rate with its with-HHD rate (same carrier name)
  const byCarrier = new Map();
  for (const q of quotes) {
    const name = q?.company_base?.name;
    if (!name) continue;
    const monthly = Math.round(((q?.rate?.month ?? 0) / 100) * 100) / 100;
    if (!Number.isFinite(monthly) || monthly <= 0) continue;

    const viewTypes = Array.isArray(q.view_type) ? q.view_type : [];
    const isHHD = viewTypes.includes("with_hhd");

    if (!byCarrier.has(name)) byCarrier.set(name, {});
    const entry = byCarrier.get(name);
    if (isHHD) {
      entry.hhd = entry.hhd == null ? monthly : Math.min(entry.hhd, monthly);
    } else {
      entry.base = entry.base == null ? monthly : Math.min(entry.base, monthly);
    }
  }

  const baseRates = [];
  const hhdRates = [];
  const discountPcts = [];

  for (const entry of byCarrier.values()) {
    if (entry.base) baseRates.push(entry.base);
    if (entry.hhd) hhdRates.push(entry.hhd);
    if (entry.base && entry.hhd && entry.hhd < entry.base) {
      discountPcts.push(((entry.base - entry.hhd) / entry.base) * 100);
    }
  }

  if (baseRates.length === 0) return null;

  const low = Math.min(...baseRates);
  const high = Math.max(...baseRates);

  return {
    carrierCount: baseRates.length,
    low: Math.round(low * 100) / 100,
    high: Math.round(high * 100) / 100,
    spread: Math.round((high - low) * 100) / 100,
    hhd: {
      carriersOffering: hhdRates.length,
      low: hhdRates.length ? Math.round(Math.min(...hhdRates) * 100) / 100 : null,
      high: hhdRates.length ? Math.round(Math.max(...hhdRates) * 100) / 100 : null,
      minDiscountPct: discountPcts.length ? Math.round(Math.min(...discountPcts) * 10) / 10 : null,
      maxDiscountPct: discountPcts.length ? Math.round(Math.max(...discountPcts) * 10) / 10 : null,
    },
  };
}

/** Compute tobacco vs non-tobacco surcharge stats by matching carriers */
function tobaccoStats(nonTobaccoQuotes, tobaccoQuotes) {
  const nonTobaccoByCarrier = new Map();
  for (const q of nonTobaccoQuotes) {
    const name = q?.company_base?.name;
    if (!name) continue;
    const vt = Array.isArray(q.view_type) ? q.view_type : [];
    if (vt.includes("with_hhd")) continue;
    const r = Math.round(((q?.rate?.month ?? 0) / 100) * 100) / 100;
    if (!Number.isFinite(r) || r <= 0) continue;
    if (!nonTobaccoByCarrier.has(name)) nonTobaccoByCarrier.set(name, r);
  }

  const surchargePcts = [];
  let tobaccoCarriers = 0;
  for (const q of tobaccoQuotes) {
    const name = q?.company_base?.name;
    if (!name) continue;
    const vt = Array.isArray(q.view_type) ? q.view_type : [];
    if (vt.includes("with_hhd")) continue;
    const tobaccoRate = Math.round(((q?.rate?.month ?? 0) / 100) * 100) / 100;
    const baseRate = nonTobaccoByCarrier.get(name);
    if (!Number.isFinite(tobaccoRate) || tobaccoRate <= 0 || !baseRate) continue;
    tobaccoCarriers++;
    if (tobaccoRate > baseRate) {
      surchargePcts.push(((tobaccoRate - baseRate) / baseRate) * 100);
    }
  }

  if (surchargePcts.length === 0) return null;
  return {
    carriersRatingTobacco: surchargePcts.length,
    totalCarriersWithTobaccoQuote: tobaccoCarriers,
    minSurchargePct: Math.round(Math.min(...surchargePcts) * 10) / 10,
    maxSurchargePct: Math.round(Math.max(...surchargePcts) * 10) / 10,
    avgSurchargePct: Math.round((surchargePcts.reduce((a, b) => a + b, 0) / surchargePcts.length) * 10) / 10,
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
function delay(ms) { return new Promise((r) => setTimeout(r, ms)); }

async function main() {
  const out = {
    asOfDate: new Date().toISOString().split("T")[0],
    sourceApi: "CSG Actuarial v1",
    notes: "Aggregate ranges only. Carrier names are never exposed. Based on one flagship ZIP per state; in-state ZIPs may vary. Gender sampled: Female 65+.",
    states: {},
  };

  for (const state of STATES) {
    console.log(`\n=== ${state.code} (${state.sampleCity}, ZIP ${state.sampleZip}) ===`);
    const stateOut = {
      sampleZip: state.sampleZip,
      sampleCity: state.sampleCity,
      tobaccoNeutralOEP: state.tobaccoNeutralOEP,
      plans: {},
    };

    for (const plan of PLANS) {
      stateOut.plans[plan] = {};

      for (const age of AGES) {
        try {
          // Non-tobacco quote — includes both sans-HHD and with-HHD view_types
          const nonTobaccoQuotes = await csgFetch("med_supp/quotes.json", {
            zip5: state.sampleZip,
            age: String(age),
            gender: GENDER,
            tobacco: "0",
            plan,
            apply_discounts: "0",
          });
          await delay(REQUEST_DELAY_MS);

          const agg = aggregate(nonTobaccoQuotes);
          if (!agg) {
            console.log(`  ${plan} age ${age}: no carriers returned`);
            continue;
          }

          const ageEntry = { ...agg, tobacco: null };

          // Tobacco spread only for states that rate tobacco during OEP
          if (!state.tobaccoNeutralOEP) {
            const tobaccoQuotes = await csgFetch("med_supp/quotes.json", {
              zip5: state.sampleZip,
              age: String(age),
              gender: GENDER,
              tobacco: "1",
              plan,
              apply_discounts: "0",
            });
            await delay(REQUEST_DELAY_MS);
            ageEntry.tobacco = tobaccoStats(nonTobaccoQuotes, tobaccoQuotes);
          }

          stateOut.plans[plan][String(age)] = ageEntry;
          console.log(`  ${plan} age ${age}: $${agg.low}–$${agg.high} spread $${agg.spread} across ${agg.carrierCount} carriers`);
        } catch (err) {
          console.error(`  ${plan} age ${age}: error — ${err.message}`);
        }
      }
    }

    out.states[state.code] = stateOut;
  }

  const outPath = path.resolve(__dirname, "..", "csg-snapshot.json");
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + "\n", "utf8");
  console.log(`\n✓ Snapshot written to ${outPath}`);
}

main().catch((err) => {
  console.error("csg-snapshot failed:", err.message);
  process.exit(1);
});
