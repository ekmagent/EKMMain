import { NextRequest, NextResponse } from "next/server";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

export async function GET(req: NextRequest) {
  // No auth required — internal dashboard only

  const resultsPath = join(process.cwd(), "autoresearch-results.jsonl");
  const statePath = join(process.cwd(), "autoresearch-state.json");

  // Parse JSONL results
  let results: Record<string, unknown>[] = [];
  if (existsSync(resultsPath)) {
    const lines = readFileSync(resultsPath, "utf8").trim().split("\n").filter(Boolean);
    results = lines.map((line) => {
      try { return JSON.parse(line); } catch { return null; }
    }).filter(Boolean) as Record<string, unknown>[];
  }

  // Parse state
  let state = null;
  if (existsSync(statePath)) {
    try { state = JSON.parse(readFileSync(statePath, "utf8")); } catch {}
  }

  // Compute per-cycle stats
  const cycleMap = new Map<number, { scores: number[]; keywords: Record<string, unknown>[] }>();
  for (const r of results) {
    const cycle = r.cycle as number;
    if (!cycleMap.has(cycle)) cycleMap.set(cycle, { scores: [], keywords: [] });
    const entry = cycleMap.get(cycle)!;
    entry.scores.push(r.totalScore as number);
    entry.keywords.push(r);
  }

  const cycles = [...cycleMap.entries()].map(([cycle, data]) => ({
    cycle,
    avgScore: Math.round(data.scores.reduce((a, b) => a + b, 0) / data.scores.length),
    maxScore: Math.max(...data.scores),
    minScore: Math.min(...data.scores),
    winners: data.keywords.filter((k) => (k.totalScore as number) >= 70 && k.volumePass === true).length,
    volPassRate: Math.round((data.keywords.filter((k) => k.volumePass === true).length / data.keywords.length) * 100),
    keywords: data.keywords.sort((a, b) => (b.totalScore as number) - (a.totalScore as number)),
  }));

  // Top keywords across all cycles
  const topKeywords = [...results]
    .sort((a, b) => (b.totalScore as number) - (a.totalScore as number))
    .slice(0, 20);

  // Score distribution (out of 90 now)
  const distribution = { "0-17": 0, "18-35": 0, "36-53": 0, "54-71": 0, "72-90": 0 };
  for (const r of results) {
    const s = r.totalScore as number;
    if (s < 18) distribution["0-17"]++;
    else if (s < 36) distribution["18-35"]++;
    else if (s < 54) distribution["36-53"]++;
    else if (s < 72) distribution["54-71"]++;
    else distribution["72-90"]++;
  }

  // Volume pass rate
  const totalVolPass = results.filter((r) => r.volumePass === true).length;

  return NextResponse.json({
    state,
    cycles,
    topKeywords,
    distribution,
    totalKeywords: results.length,
    totalWinners: results.filter((r) => (r.totalScore as number) >= 70 && r.volumePass === true).length,
    totalVolPass: totalVolPass,
    volPassRate: results.length > 0 ? Math.round((totalVolPass / results.length) * 100) : 0,
  });
}
