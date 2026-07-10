#!/usr/bin/env node
/**
 * csg-raw-probe.js
 * Single CSG API call, dumps one raw quote verbatim so we can see every
 * field the API returns (rate history, company metadata, everything).
 *
 * Usage: node scripts/csg-raw-probe.js
 */

const fs = require("fs");
const path = require("path");

try {
  const envText = fs.readFileSync(path.resolve(__dirname, "..", ".env.local"), "utf8");
  for (const line of envText.split("\n")) {
    const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
} catch { /* ambient */ }

const CSG_BASE = process.env.CSG_BASE_URL || "https://api.csgactuarial.com/v1";
const CSG_API_KEY = process.env.CSG_API_KEY;
const CSG_PORTAL = process.env.CSG_PORTAL_NAME || "csg_individual";

async function getToken() {
  const res = await fetch(`${CSG_BASE}/auth.json`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api_key: CSG_API_KEY, portal_name: CSG_PORTAL }),
  });
  if (!res.ok) throw new Error(`auth failed: ${res.status}`);
  return (await res.json()).token;
}

async function main() {
  const token = await getToken();
  const qs = new URLSearchParams({
    zip5: "19103",
    age: "65",
    gender: "F",
    tobacco: "0",
    plan: "G",
    apply_discounts: "0",
  }).toString();
  const res = await fetch(`${CSG_BASE}/med_supp/quotes.json?${qs}`, {
    headers: { "x-api-token": token },
  });
  if (!res.ok) throw new Error(`quote fetch failed: ${res.status}`);
  const data = await res.json();

  // Find the Humana quote specifically (richest metadata usually)
  const humana = Array.isArray(data) ? data.find((q) => /humana/i.test(q?.company_base?.name || "")) : null;

  if (humana) {
    console.log("=== HUMANA FULL QUOTE (all fields) ===");
    console.log(JSON.stringify(humana, null, 2));
  } else {
    console.log("No Humana quote — dumping first quote instead");
    console.log(JSON.stringify(data[0], null, 2));
  }

  console.log(`\n=== Top-level keys present on the quote object ===`);
  const keys = humana ? Object.keys(humana) : Object.keys(data[0] || {});
  for (const k of keys) console.log(`  ${k}`);

  if (humana?.company_base) {
    console.log(`\n=== company_base keys ===`);
    for (const k of Object.keys(humana.company_base)) console.log(`  ${k}`);
  }
}

main().catch((err) => { console.error(err.message); process.exit(1); });
