/**
 * csg-nj-county-probe.js
 * County-level companion to csg-snapshot.js: pulls Medigap Plan G/N quotes
 * for one representative ZIP in each of NJ's 21 counties and writes
 * carrier-anonymous aggregates to nj-county-snapshot.json at the repo root.
 *
 * Same sanitization contract as csg-snapshot.js: carrier names never leave
 * the aggregate() function — only low/high/spread/counts are persisted.
 * Runs locally only (CSG auth must not reach CI). Wired into
 * scripts/refresh-csg-snapshot.sh for the monthly refresh.
 *
 * Usage:  CSG_API_KEY=... node scripts/csg-nj-county-probe.js
 */

const fs = require("fs");
const path = require("path");

// County list is parsed from lib/nj-geo.ts so page data and probe data can
// never disagree about which ZIP represents a county.
function loadCounties() {
  const src = fs.readFileSync(path.resolve(__dirname, "..", "lib", "nj-geo.ts"), "utf8");
  const block = src.split("NJ_COUNTIES")[1].split("NJ_CITIES")[0];
  const re = /name: "([^"]+)",\s*slug: "([^"]+)",\s*seat: "([^"]+)",\s*zip: "([^"]+)"/g;
  const counties = [];
  let m;
  while ((m = re.exec(block)) !== null) {
    counties.push({ name: m[1], slug: m[2], seat: m[3], zip: m[4] });
  }
  if (counties.length !== 21) {
    throw new Error(`Expected 21 NJ counties from lib/nj-geo.ts, got ${counties.length}`);
  }
  return counties;
}

const PLANS = ["G", "N"];
const AGE = 65;
const GENDER = "F";
const REQUEST_DELAY_MS = 1200;

// --- Auth + fetch (same flow as csg-snapshot.js) ---------------------------
const CSG_BASE = process.env.CSG_BASE_URL || "https://api.csgactuarial.com/v1";
const CSG_API_KEY = process.env.CSG_API_KEY || "";
const CSG_API_TOKEN = process.env.CSG_API_TOKEN || "";
const CSG_PORTAL = process.env.CSG_PORTAL_NAME || "csg_individual";

if (!CSG_API_KEY && !CSG_API_TOKEN) {
  console.error("Either CSG_API_KEY or CSG_API_TOKEN must be set");
  process.exit(1);
}

let cachedToken = null;
let tokenExpires = 0;

async function getToken() {
  if (!CSG_API_KEY && CSG_API_TOKEN) return CSG_API_TOKEN;
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

// --- Aggregation (identical contract to csg-snapshot.js) -------------------
function aggregate(quotes) {
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
  for (const entry of byCarrier.values()) {
    if (entry.base) baseRates.push(entry.base);
    if (entry.hhd) hhdRates.push(entry.hhd);
  }
  if (baseRates.length === 0) return null;

  const low = Math.min(...baseRates);
  const high = Math.max(...baseRates);
  return {
    carrierCount: baseRates.length,
    low: Math.round(low * 100) / 100,
    high: Math.round(high * 100) / 100,
    spread: Math.round((high - low) * 100) / 100,
    hhdLow: hhdRates.length ? Math.round(Math.min(...hhdRates) * 100) / 100 : null,
  };
}

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const counties = loadCounties();
  const out = {
    asOfDate: new Date().toISOString().split("T")[0],
    sourceApi: "CSG Actuarial v1",
    notes:
      "Aggregate ranges only; carrier names never exposed. One representative ZIP per NJ county (largest senior-population center). Female non-tobacco, age 65.",
    counties: {},
  };

  let ok = 0;
  for (const county of counties) {
    console.log(`\n=== ${county.name} (ZIP ${county.zip}) ===`);
    const countyOut = { zip: county.zip, plans: {} };
    for (const plan of PLANS) {
      try {
        const quotes = await csgFetch("med_supp/quotes.json", {
          zip5: county.zip,
          age: String(AGE),
          gender: GENDER,
          tobacco: "0",
          plan,
          apply_discounts: "0",
        });
        await delay(REQUEST_DELAY_MS);
        const agg = aggregate(quotes);
        if (agg) {
          countyOut.plans[plan] = agg;
          console.log(
            `  ${plan}: $${agg.low}-$${agg.high}/mo across ${agg.carrierCount} carriers`
          );
        } else {
          console.log(`  ${plan}: no carriers returned`);
        }
      } catch (err) {
        console.error(`  ${plan}: ${err.message}`);
      }
    }
    if (Object.keys(countyOut.plans).length > 0) {
      out.counties[county.slug] = countyOut;
      ok++;
    }
  }

  if (ok < 15) {
    console.error(
      `\nOnly ${ok}/21 counties returned data — refusing to write a degraded snapshot.`
    );
    process.exit(1);
  }

  const outPath = path.resolve(__dirname, "..", "nj-county-snapshot.json");
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + "\n");
  console.log(`\nWrote ${outPath} with ${ok}/21 counties.`);
}

main().catch((err) => {
  console.error("csg-nj-county-probe failed:", err.message);
  process.exit(1);
});
