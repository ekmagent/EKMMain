import fs from "node:fs";
import path from "node:path";

export type NJCountyPlanEntry = {
  carrierCount: number;
  low: number;
  high: number;
  spread: number;
  hhdLow: number | null;
};

export type NJCountySnapshot = {
  asOfDate: string;
  sourceApi: string;
  notes: string;
  counties: Record<string, { zip: string; plans: Record<string, NJCountyPlanEntry> }>;
};

let cached: NJCountySnapshot | null = null;
let loaded = false;

export function getNJCountySnapshot(): NJCountySnapshot | null {
  if (loaded) return cached;
  loaded = true;
  try {
    const jsonPath = path.resolve(process.cwd(), "nj-county-snapshot.json");
    if (!fs.existsSync(jsonPath)) return null;
    const parsed = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    if (!parsed?.asOfDate || !parsed?.counties) return null;
    if (Object.keys(parsed.counties).length < 15) return null;
    cached = parsed as NJCountySnapshot;
    return cached;
  } catch {
    return null;
  }
}

/**
 * True when every probed county returned the identical Plan G and Plan N
 * low/high — i.e. filed rates are uniform across New Jersey. Recomputed from
 * the snapshot on every build so the claim can never outlive the data.
 */
export function njRatesAreUniform(snapshot: NJCountySnapshot): boolean {
  const profiles = new Set(
    Object.values(snapshot.counties).map((c) =>
      JSON.stringify([
        c.plans.G?.low,
        c.plans.G?.high,
        c.plans.N?.low,
        c.plans.N?.high,
      ])
    )
  );
  return profiles.size === 1;
}
