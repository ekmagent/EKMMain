import fs from "node:fs";
import path from "node:path";

export type CsgAgeEntry = {
  low: number;
  high: number;
  spread: number;
  carrierCount: number;
  hhd: {
    carriersOffering: number;
    low: number | null;
    high: number | null;
    minDiscountPct: number | null;
    maxDiscountPct: number | null;
  };
  tobacco: {
    carriersRatingTobacco: number;
    totalCarriersWithTobaccoQuote: number;
    minSurchargePct: number;
    maxSurchargePct: number;
    avgSurchargePct: number;
  } | null;
};

export type CsgStateEntry = {
  sampleZip: string;
  sampleCity: string;
  tobaccoNeutralOEP: boolean;
  plans: Record<string, Record<string, CsgAgeEntry>>;
};

export type CsgSnapshot = {
  asOfDate: string;
  sourceApi: string;
  notes: string;
  states: Record<string, CsgStateEntry>;
};

let cached: CsgSnapshot | null = null;
let loaded = false;

export function getSnapshot(): CsgSnapshot | null {
  if (loaded) return cached;
  loaded = true;
  try {
    const jsonPath = path.resolve(process.cwd(), "csg-snapshot.json");
    if (!fs.existsSync(jsonPath)) return null;
    const raw = fs.readFileSync(jsonPath, "utf8");
    const parsed = JSON.parse(raw);
    if (!parsed?.asOfDate || !parsed?.states) return null;
    cached = parsed as CsgSnapshot;
    return cached;
  } catch {
    return null;
  }
}

export function formatUsd(n: number): string {
  return `$${n.toFixed(0)}`;
}
