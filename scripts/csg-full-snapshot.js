#!/usr/bin/env node
/**
 * csg-full-snapshot.js
 *
 * Pulls the full Medigap quote dataset across Anthony's 5 appointment states
 * (PA/NJ/OH/MI/TX) for Plan G / Plan N / HDG at reference ages 65/67/69,
 * keeping CARRIER NAMES so we can build per-carrier review pages from one
 * snapshot. Sister script to csg-snapshot.js, which strips carrier names for
 * aggregate public pricing pages.
 *
 * Output (GITIGNORED — commercially licensed rate data, never commit):
 *   artifacts/csg-probes/full-snapshot.json     — complete raw dataset
 *   artifacts/csg-probes/by-carrier/{slug}.json — per-carrier slices with
 *                                                  market context (rank, spread)
 *   artifacts/csg-probes/carriers.md            — index of carriers found,
 *                                                  sorted by number of states
 *                                                  they appear in
 *
 * Usage:
 *   node scripts/csg-full-snapshot.js
 *
 * Env (from .env.local at repo root, NOT scripts/.env):
 *   CSG_API_KEY      — required
 *   CSG_PORTAL_NAME  — optional, defaults to "csg_individual"
 *   CSG_BASE_URL     — optional, defaults to "https://api.csgactuarial.com/v1"
 */

const fs = require("fs");
const path = require("path");
const { csgFetch } = require("./csg-auth"); // shared auth with disk-backed token cache

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const STATES = [
  { code: "PA", sampleZip: "19103", sampleCity: "Philadelphia", tobaccoNeutralOEP: false },
  { code: "NJ", sampleZip: "08002", sampleCity: "Cherry Hill",  tobaccoNeutralOEP: true  },
  { code: "OH", sampleZip: "44101", sampleCity: "Cleveland",    tobaccoNeutralOEP: false },
  { code: "NC", sampleZip: "28202", sampleCity: "Charlotte",    tobaccoNeutralOEP: false },
  { code: "TX", sampleZip: "77002", sampleCity: "Houston",      tobaccoNeutralOEP: false },
];
// Plan G, Plan N, and Plan F are the plans worth tracking. F is federally
// closed to people first eligible for Medicare on/after 2020-01-01 but is
// still widely held by pre-2020 enrollees — rate filings and loss ratios
// on F are relevant for existing policyholders weighing switch decisions.
// A/K/L/M have <10 carriers filing; HDG can be added back if needed.
const PLANS = ["G", "N", "F"];
const AGES = [65, 67, 70, 75, 80];
const GENDERS = ["F", "M"];
// Tobacco: always run non-tobacco; also run tobacco=1 for states that rate
// tobacco during OEP (skipped in states with tobacco-neutral OEP like NJ).
const REQUEST_DELAY_MS = 500;

const OUT_DIR = path.resolve(__dirname, "..", "artifacts", "csg-probes");
const BY_CARRIER_DIR = path.join(OUT_DIR, "by-carrier");
const SNAPSHOT_FILE = path.join(OUT_DIR, "full-snapshot.json");
const CARRIERS_INDEX = path.join(OUT_DIR, "carriers.md");

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function delay(ms) { return new Promise((r) => setTimeout(r, ms)); }

function slugify(s) {
  return (s || "unknown")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

/** Compute derived market-history metrics from med_supp_market_data (CSG's 7-year carrier history). */
function deriveMarketTrend(medSuppMarketData) {
  if (!Array.isArray(medSuppMarketData) || medSuppMarketData.length === 0) return null;
  const byYearByState = {};
  const byYearNational = {};
  for (const yearEntry of medSuppMarketData) {
    const year = yearEntry?.year;
    if (!year) continue;
    // National rollup
    const nat = yearEntry.med_supp_national_market_data;
    if (nat && nat.premiums > 0 && nat.lives > 0) {
      byYearNational[year] = {
        claims: nat.claims,
        lives: nat.lives,
        premiums: nat.premiums,
        marketShare: nat.market_share,
        lossRatio: Math.round((nat.claims / nat.premiums) * 1000) / 1000,
        annualPremPerLife: Math.round(nat.premiums / nat.lives),
      };
    }
    // State rollup
    const states = Array.isArray(yearEntry.med_supp_state_market_data) ? yearEntry.med_supp_state_market_data : [];
    for (const s of states) {
      if (!s?.state || !s.premiums || !s.lives) continue;
      byYearByState[s.state] = byYearByState[s.state] || {};
      byYearByState[s.state][year] = {
        claims: s.claims,
        lives: s.lives,
        premiums: s.premiums,
        marketShare: s.market_share,
        lossRatio: Math.round((s.claims / s.premiums) * 1000) / 1000,
        annualPremPerLife: Math.round(s.premiums / s.lives),
      };
    }
  }
  return { national: byYearNational, byState: byYearByState };
}

// Carrier metadata registry — populated once per carrier during the run, not
// duplicated per quote. Keeping this separate from per-quote rates keeps the
// output JSON writable under Node's V8 string-length cap.
const carrierRegistry = new Map(); // carrierName -> { ...metadata, marketTrend }

function registerCarrier(cb) {
  if (!cb?.name) return;
  if (carrierRegistry.has(cb.name)) return; // already captured
  carrierRegistry.set(cb.name, {
    carrierName: cb.name,
    carrierNameFull: cb.name_full || cb.name,
    naicCode: cb.naic || null,
    amBestRating: cb.ambest_rating || null,
    amBestOutlook: cb.ambest_outlook || null,
    spRating: cb.sp_rating || null,
    customerSatisfactionRatio: typeof cb.customer_satisfaction_ratio === "number" ? cb.customer_satisfaction_ratio : null,
    customerComplaintRatio: typeof cb.customer_complaint_ratio === "number" ? cb.customer_complaint_ratio : null,
    companyType: cb.type || null,
    businessType: cb.business_type || null,
    establishedYear: cb.established_year || null,
    yearsInBusiness: cb.established_year ? new Date().getFullYear() - cb.established_year : null,
    parentCompanyName: cb.parent_company_base?.name || null,
    parentEstablishedYear: cb.parent_company_base?.established_year || null,
    stateMarketingData: Array.isArray(cb.state_marketing_data) ? cb.state_marketing_data : [],
    marketTrend: deriveMarketTrend(cb.med_supp_market_data),
    eAppLink: cb.default_resources?.["medicare-supplement"]?.e_app_link || null,
  });
}

/**
 * Normalize a raw CSG quote — rate + filing fields only. Carrier metadata
 * (AM Best, market history, etc.) is stored once per carrier in
 * carrierRegistry, looked up by carrierName. This keeps the per-state JSON
 * output compact enough to JSON.stringify without hitting V8's string cap.
 */
function normalizeQuote(q) {
  const cb = q?.company_base;
  if (!cb?.name) return null;
  const rate = q?.rate?.month;
  if (!Number.isFinite(rate) || rate <= 0) return null;
  const viewTypes = Array.isArray(q.view_type) ? q.view_type : [];

  registerCarrier(cb);

  const rateIncreases = Array.isArray(q.rate_increases)
    ? q.rate_increases
        .map((r) => ({
          date: r.date ? String(r.date).slice(0, 10) : null,
          increasePct: typeof r.rate_increase === "number" ? Math.round(r.rate_increase * 10000) / 100 : null,
        }))
        .filter((r) => r.date && r.increasePct != null)
        .sort((a, b) => a.date.localeCompare(b.date))
    : [];

  const ageIncreases = Array.isArray(q.age_increases) ? q.age_increases : [];

  return {
    carrierName: cb.name, // look up full metadata via snapshot.carriers[carrierName]
    plan: q.plan || null,
    age: q.age || null,
    gender: q.gender || null,
    tobacco: q.tobacco === true || q.tobacco === "1",
    rateMonthlyDollars: Math.round((rate / 100) * 100) / 100,
    rateAnnualDollars: q.rate?.annual ? Math.round((q.rate.annual / 100) * 100) / 100 : null,
    rateType: q.rate_type || null,
    ratingClass: q.rating_class || null,
    isHhd: viewTypes.includes("with_hhd"),
    effectiveDate: q.effective_date ? String(q.effective_date).slice(0, 10) : null,
    rateIncreases, // [{ date, increasePct }] — per-product, stays on the quote
    ageIncreases,
    discountCategory: q.discount_category || null,
  };
}

/** For a given set of carrier rates, compute market-context stats */
function marketContextByCarrier(quotes) {
  // One "best base rate" per carrier (non-HHD, take minimum if multiple rating classes)
  const byCarrier = new Map();
  for (const q of quotes) {
    if (q.isHhd) continue;
    const existing = byCarrier.get(q.carrierName);
    if (!existing || q.rateMonthlyDollars < existing.rateMonthlyDollars) {
      byCarrier.set(q.carrierName, q);
    }
  }
  const entries = [...byCarrier.values()].sort((a, b) => a.rateMonthlyDollars - b.rateMonthlyDollars);
  if (entries.length === 0) return { ranked: [], low: null, high: null, median: null };
  const rates = entries.map((e) => e.rateMonthlyDollars);
  const median = rates.length % 2 === 0
    ? (rates[rates.length / 2 - 1] + rates[rates.length / 2]) / 2
    : rates[Math.floor(rates.length / 2)];
  return {
    ranked: entries.map((e, i) => ({ ...e, rank: i + 1 })),
    low: rates[0],
    high: rates[rates.length - 1],
    median: Math.round(median * 100) / 100,
    count: entries.length,
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  ensureDir(OUT_DIR);
  ensureDir(BY_CARRIER_DIR);

  const snapshot = {
    asOfDate: new Date().toISOString().split("T")[0],
    sourceApi: "CSG Actuarial v1",
    notes:
      "Raw carrier-level Medigap quote data. Commercially licensed via CSG Actuarial. " +
      "DO NOT publish raw rates or carrier rate tables on public pages. " +
      "Only derived, contextualized, broker-edited content may appear on published content.",
    params: { genders: GENDERS, ages: AGES, plans: PLANS, tobacco: "0/1 (state-dependent)" },
    carriers: {}, // populated from carrierRegistry at end of run
    states: {},
  };

  // Reset registry in case main is called more than once
  carrierRegistry.clear();

  let totalCalls = 0;
  let totalCarrierRows = 0;

  for (const state of STATES) {
    console.log(`\n=== ${state.code} (${state.sampleCity}, ZIP ${state.sampleZip}) ===`);
    snapshot.states[state.code] = {
      sampleZip: state.sampleZip,
      sampleCity: state.sampleCity,
      tobaccoNeutralOEP: state.tobaccoNeutralOEP,
      plans: {},
    };

    // Tobacco=1 only in states that rate tobacco during OEP
    const tobaccoValues = state.tobaccoNeutralOEP ? ["0"] : ["0", "1"];

    for (const plan of PLANS) {
      snapshot.states[state.code].plans[plan] = {};

      for (const age of AGES) {
        snapshot.states[state.code].plans[plan][String(age)] = {};

        for (const gender of GENDERS) {
          for (const tobacco of tobaccoValues) {
            const bucketKey = `${gender}_tobacco${tobacco}`;
            try {
              const raw = await csgFetch("med_supp/quotes.json", {
                zip5: state.sampleZip,
                age: String(age),
                gender,
                tobacco,
                plan,
                apply_discounts: "0",
              });
              totalCalls++;
              await delay(REQUEST_DELAY_MS);

              const normalized = Array.isArray(raw)
                ? raw.map(normalizeQuote).filter(Boolean)
                : [];
              totalCarrierRows += normalized.length;

              const ctx = marketContextByCarrier(normalized);

              snapshot.states[state.code].plans[plan][String(age)][bucketKey] = {
                quotes: normalized,
                market: {
                  count: ctx.count,
                  low: ctx.low,
                  high: ctx.high,
                  median: ctx.median,
                },
              };

              // Only log the F/non-tobacco bucket to keep console output readable
              if (gender === "F" && tobacco === "0") {
                console.log(
                  `  ${plan.padEnd(3)} age ${age}: ${String(normalized.length).padStart(3)} F-non-tob quotes | ${ctx.count} carriers | ` +
                  (ctx.low != null ? `$${ctx.low}–$${ctx.high} (median $${ctx.median})` : "no data")
                );
              }
            } catch (err) {
              console.error(`  ${plan} age ${age} ${gender} tob=${tobacco}: error — ${err.message}`);
            }
          }
        }
      }
    }
  }

  // Flatten registry into snapshot.carriers (keyed by carrier name) so per-quote
  // entries can look up full metadata without duplicating it in every row.
  for (const [name, data] of carrierRegistry.entries()) {
    snapshot.carriers[name] = data;
  }

  // Write full snapshot
  fs.writeFileSync(SNAPSHOT_FILE, JSON.stringify(snapshot, null, 2) + "\n", "utf8");
  console.log(`\n✓ Full snapshot: ${path.relative(process.cwd(), SNAPSHOT_FILE)}`);
  console.log(`  ${totalCalls} API calls · ${totalCarrierRows} carrier-rate rows · ${carrierRegistry.size} distinct carriers`);

  // Build per-carrier slices with state-by-state market context
  // Iterates over (state × plan × age × gender/tobacco bucket).
  const perCarrier = new Map();
  for (const [stateCode, stateData] of Object.entries(snapshot.states)) {
    for (const [plan, ageMap] of Object.entries(stateData.plans)) {
      for (const [age, bucketMap] of Object.entries(ageMap)) {
        for (const [bucketKey, entry] of Object.entries(bucketMap)) {
          const [gender, tobaccoPart] = bucketKey.split("_");
          const tobacco = tobaccoPart === "tobacco1";
          const ranked = marketContextByCarrier(entry.quotes || []).ranked;
          for (const row of ranked) {
            if (!perCarrier.has(row.carrierName)) {
              const meta = carrierRegistry.get(row.carrierName) || {};
              perCarrier.set(row.carrierName, {
                carrierName: row.carrierName,
                naicCode: meta.naicCode || null,
                amBestRating: meta.amBestRating || null,
                amBestOutlook: meta.amBestOutlook || null,
                spRating: meta.spRating || null,
                establishedYear: meta.establishedYear || null,
                yearsInBusiness: meta.yearsInBusiness || null,
                customerSatisfactionRatio: meta.customerSatisfactionRatio ?? null,
                marketTrend: meta.marketTrend || null,
                stateMarketingData: meta.stateMarketingData || [],
                entries: [],
              });
            }
            const carrier = perCarrier.get(row.carrierName);
            carrier.entries.push({
              state: stateCode,
              plan,
              age: parseInt(age, 10),
              gender,
              tobacco,
              monthlyRate: row.rateMonthlyDollars,
              marketRank: row.rank,
              marketOf: entry.market?.count ?? null,
              marketLow: entry.market?.low ?? null,
              marketHigh: entry.market?.high ?? null,
              marketMedian: entry.market?.median ?? null,
              deltaVsLow: entry.market?.low != null
                ? Math.round((row.rateMonthlyDollars - entry.market.low) * 100) / 100
                : null,
              pctVsLow: entry.market?.low
                ? Math.round(((row.rateMonthlyDollars / entry.market.low - 1) * 100) * 10) / 10
                : null,
            });
          }
        }
      }
    }
  }

  // Write per-carrier JSON files
  for (const [name, data] of perCarrier.entries()) {
    const slug = slugify(name);
    const outFile = path.join(BY_CARRIER_DIR, `${slug}.json`);
    fs.writeFileSync(outFile, JSON.stringify(data, null, 2) + "\n", "utf8");
  }
  console.log(`✓ ${perCarrier.size} per-carrier files in ${path.relative(process.cwd(), BY_CARRIER_DIR)}/`);

  // Write carrier index (sorted by # of states they appear in)
  const indexRows = [...perCarrier.values()].map((c) => {
    const meta = carrierRegistry.get(c.carrierName) || {};
    return {
      name: c.carrierName,
      slug: slugify(c.carrierName),
      states: [...new Set(c.entries.map((e) => e.state))].sort(),
      amBest: meta.amBestRating || c.amBestRating || "—",
      established: meta.establishedYear || c.establishedYear || "—",
      totalEntries: c.entries.length,
    };
  }).sort((a, b) => b.states.length - a.states.length || a.name.localeCompare(b.name));

  const indexMd = [
    `# CSG Snapshot — Carrier Index`,
    ``,
    `**As of:** ${snapshot.asOfDate}`,
    `**States probed:** ${STATES.map((s) => s.code).join(", ")}`,
    `**Plans:** ${PLANS.join(", ")}`,
    `**Ages:** ${AGES.join(", ")}`,
    `**Genders:** ${GENDERS.join(", ")}`,
    `**Tobacco:** non-tobacco always; tobacco also pulled in states rating tobacco during OEP`,
    `**Total carriers discovered:** ${perCarrier.size}`,
    ``,
    `Sorted by number of states each carrier appears in.`,
    ``,
    `| # | Carrier | States | AM Best | Est. | Entries |`,
    `|---|---------|--------|---------|------|---------|`,
    ...indexRows.map((c, i) =>
      `| ${i + 1} | ${c.name} | ${c.states.join(", ")} | ${c.amBest} | ${c.established} | ${c.totalEntries} |`
    ),
  ].join("\n");

  fs.writeFileSync(CARRIERS_INDEX, indexMd + "\n", "utf8");
  console.log(`✓ Carrier index: ${path.relative(process.cwd(), CARRIERS_INDEX)}`);

  // Quick console summary of the carriers we'd most likely build review pages for
  console.log(`\nTop 15 carriers by state coverage:`);
  for (const c of indexRows.slice(0, 15)) {
    console.log(`  ${c.name.padEnd(45)} ${c.states.length} state${c.states.length === 1 ? "" : "s"}: ${c.states.join(",")}`);
  }
}

main().catch((err) => {
  console.error("csg-full-snapshot failed:", err.message);
  process.exit(1);
});
