#!/usr/bin/env node
const fs = require("fs"), path = require("path");
try {
  const envText = fs.readFileSync(path.resolve(__dirname, "..", ".env.local"), "utf8");
  for (const line of envText.split("\n")) {
    const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
} catch {}

const CSG_BASE = "https://api.csgactuarial.com/v1";
const CSG_API_KEY = process.env.CSG_API_KEY;

(async () => {
  const auth = await fetch(`${CSG_BASE}/auth.json`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api_key: CSG_API_KEY, portal_name: "csg_individual" }),
  });
  const { token } = await auth.json();

  // Michigan ZIPs across the state
  const zips = [
    { zip: "48226", city: "Detroit" },
    { zip: "48201", city: "Detroit (midtown)" },
    { zip: "48103", city: "Ann Arbor" },
    { zip: "48084", city: "Troy" },
    { zip: "49503", city: "Grand Rapids" },
    { zip: "48603", city: "Saginaw" },
    { zip: "49855", city: "Marquette (UP)" },
  ];

  for (const { zip, city } of zips) {
    const qs = new URLSearchParams({
      zip5: zip, age: "65", gender: "F", tobacco: "0", plan: "G", apply_discounts: "0",
    });
    const res = await fetch(`${CSG_BASE}/med_supp/quotes.json?${qs}`, {
      headers: { "x-api-token": token },
    });
    const text = await res.text();
    let count = 0, carriers = 0, sampleName = "";
    try {
      const d = JSON.parse(text);
      count = Array.isArray(d) ? d.length : 0;
      carriers = Array.isArray(d) ? new Set(d.map((q) => q?.company_base?.name).filter(Boolean)).size : 0;
      sampleName = d?.[0]?.company_base?.name || "";
    } catch (e) {
      console.log(`${zip} (${city}): status ${res.status} - ERROR parsing: ${text.slice(0, 80)}`);
      continue;
    }
    console.log(`${zip} (${city.padEnd(22)}): status ${res.status} | ${String(count).padStart(3)} quotes | ${String(carriers).padStart(3)} carriers | ${sampleName}`);
  }
})().catch((e) => console.error(e.message));
