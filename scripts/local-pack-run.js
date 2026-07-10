#!/usr/bin/env node
/* eslint-disable */
// Standalone local-pack rank tracker — fires the same logic as /api/tools/local-pack
// Reads SERPER_API_KEY from scripts/.env
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const ENV_PATH = path.join(ROOT, "scripts", ".env");
const env = fs.readFileSync(ENV_PATH, "utf8");
const SERPER_API_KEY = env.match(/SERPER_API_KEY=([^\n]+)/)?.[1]?.trim();
if (!SERPER_API_KEY) { console.error("SERPER_API_KEY missing from scripts/.env"); process.exit(1); }

const config = {
  centerLat: 39.9165,
  centerLng: -75.0261,
  gridSize: 13,
  spacingMi: 3,
  mapZoom: 13,
  businessName: "easykind medicare",
  businessPhone: "8568889080",
  label: "cherry-hill-zoom13",
  concurrency: 8,
  keywords: [
    "medicare broker near me",
    "medicare agent near me",
    "medigap agent near me",
    "medicare supplement broker near me",
    "independent medicare agent near me",
    "medicare insurance agent near me",
    "medicare advisor near me",
    "medicare enrollment help near me",
    "medigap broker near me",
    "medicare specialist near me",
    "medicare broker",
    "medicare agent",
    "medigap broker",
    "medicare insurance broker",
    "independent medicare broker",
  ],
};

function buildGrid({ centerLat, centerLng, gridSize, spacingMi }) {
  const latPerMi = 1 / 69;
  const lngPerMi = 1 / (69 * Math.cos((centerLat * Math.PI) / 180));
  const half = (gridSize - 1) / 2;
  const cells = [];
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      cells.push({
        row, col,
        lat: +(centerLat + (half - row) * spacingMi * latPerMi).toFixed(6),
        lng: +(centerLng + (col - half) * spacingMi * lngPerMi).toFixed(6),
      });
    }
  }
  return cells;
}

async function serperMaps(query, lat, lng, zoom) {
  const res = await fetch("https://google.serper.dev/maps", {
    method: "POST",
    headers: { "X-API-KEY": SERPER_API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ q: query, ll: `@${lat},${lng},${zoom}z`, gl: "us", hl: "en" }),
  });
  if (!res.ok) throw new Error(`serper ${res.status}`);
  const d = await res.json();
  return Array.isArray(d.places) ? d.places : [];
}

function findRank(places, name, phone) {
  const needle = name.toLowerCase();
  const phoneTail = phone ? phone.replace(/\D/g, "").slice(-10) : null;
  for (let i = 0; i < places.length; i++) {
    const p = places[i];
    if ((p.title || "").toLowerCase().includes(needle)) return i + 1;
    if (phoneTail && p.phoneNumber) {
      const d = p.phoneNumber.replace(/\D/g, "");
      if (d && d.endsWith(phoneTail)) return i + 1;
    }
  }
  return null;
}

async function runConcurrent(items, limit, fn) {
  const out = new Array(items.length);
  let i = 0;
  async function worker() {
    while (true) {
      const idx = i++;
      if (idx >= items.length) return;
      out[idx] = await fn(items[idx], idx);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => worker()));
  return out;
}

function summarize(cells) {
  const ranks = cells.map((c) => c.rank).filter((r) => r != null);
  const total = cells.length;
  const top3 = ranks.filter((r) => r <= 3).length;
  const top10 = ranks.filter((r) => r <= 10).length;
  return {
    visiblePct: total ? Math.round((ranks.length / total) * 100) : 0,
    top3Pct: total ? Math.round((top3 / total) * 100) : 0,
    top10Pct: total ? Math.round((top10 / total) * 100) : 0,
    avgRank: ranks.length ? +(ranks.reduce((a, b) => a + b, 0) / ranks.length).toFixed(2) : null,
    bestRank: ranks.length ? Math.min(...ranks) : null,
    worstRank: ranks.length ? Math.max(...ranks) : null,
    visibleCount: ranks.length,
    total,
  };
}

(async () => {
  const cells = buildGrid(config);
  console.log(`Grid: ${config.gridSize}×${config.gridSize} = ${cells.length} cells | spacing ${config.spacingMi}mi | zoom ${config.mapZoom} | ${config.keywords.length} keywords`);
  console.log(`Total queries: ${cells.length * config.keywords.length} (~$${(cells.length * config.keywords.length * 0.0003).toFixed(2)})`);
  console.log("");

  const startedAt = Date.now();
  const results = [];
  for (const kw of config.keywords) {
    const t0 = Date.now();
    process.stdout.write(`  [${(results.length + 1).toString().padStart(2)}/${config.keywords.length}] ${kw.padEnd(40)} ... `);
    const cellResults = await runConcurrent(cells, config.concurrency, async (cell) => {
      try {
        const places = await serperMaps(kw, cell.lat, cell.lng, config.mapZoom);
        return { row: cell.row, col: cell.col, lat: cell.lat, lng: cell.lng, rank: findRank(places, config.businessName, config.businessPhone), totalResults: places.length };
      } catch {
        return { row: cell.row, col: cell.col, lat: cell.lat, lng: cell.lng, rank: null, totalResults: 0 };
      }
    });
    const stats = summarize(cellResults);
    results.push({ keyword: kw, cells: cellResults, stats });
    console.log(`avg ${stats.avgRank ?? "—"} | top3 ${stats.top3Pct}% | top10 ${stats.top10Pct}% | visible ${stats.visiblePct}% (${(Date.now() - t0) / 1000}s)`);
  }

  const elapsedMs = Date.now() - startedAt;
  const queryCount = cells.length * config.keywords.length;
  const payload = {
    label: config.label,
    runAt: new Date().toISOString(),
    elapsedMs,
    config: {
      centerLat: config.centerLat, centerLng: config.centerLng,
      gridSize: config.gridSize, spacingMi: config.spacingMi, mapZoom: config.mapZoom,
      businessName: config.businessName, businessPhone: config.businessPhone,
    },
    queryCount,
    estimatedCostUsd: +(queryCount * 0.0003).toFixed(4),
    results,
  };

  const dir = path.join(ROOT, "artifacts", "local-pack");
  fs.mkdirSync(dir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const file = path.join(dir, `${stamp}-${config.label}.json`);
  fs.writeFileSync(file, JSON.stringify(payload, null, 2), "utf8");

  console.log("");
  console.log("─".repeat(80));
  console.log("RANKED BY TOP-10 COVERAGE:");
  console.log("─".repeat(80));
  [...results].sort((a, b) => b.stats.top10Pct - a.stats.top10Pct).forEach((r) => {
    console.log(`  ${(r.stats.top10Pct + "%").padStart(4)} top10 | ${(r.stats.top3Pct + "%").padStart(4)} top3 | avg ${(r.stats.avgRank ?? "—").toString().padStart(5)} | best ${(r.stats.bestRank ?? "—").toString().padStart(2)} | ${r.keyword}`);
  });
  console.log("");
  console.log(`Saved to: ${file}`);
  console.log(`Elapsed: ${(elapsedMs / 1000).toFixed(1)}s | Queries: ${queryCount} | Est. cost: $${payload.estimatedCostUsd.toFixed(2)}`);
})();
