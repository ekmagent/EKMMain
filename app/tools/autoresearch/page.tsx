"use client";

import { useState, useEffect } from "react";

interface KeywordResult {
  cycle: number;
  keyword: string;
  totalScore: number;
  titleGap: number;
  daWeakness: number;
  intentMatch: number;
  brandMatch: number;
  volumePass: boolean;
  mozVolume: number | null;
  mozDifficulty: number | null;
  serpDomains: string[];
  das: (number | null)[];
  justification: string;
}

interface CycleData {
  cycle: number;
  avgScore: number;
  maxScore: number;
  minScore: number;
  winners: number;
  volPassRate: number;
  keywords: KeywordResult[];
}

interface DashboardData {
  state: { cyclesCompleted: number; bestAvgScore: number } | null;
  cycles: CycleData[];
  topKeywords: KeywordResult[];
  distribution: Record<string, number>;
  totalKeywords: number;
  totalWinners: number;
  totalVolPass: number;
  volPassRate: number;
}

function ScoreBar({ score, max, label, color }: { score: number; max: number; label: string; color: string }) {
  const pct = Math.round((score / max) * 100);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem" }}>
      <span style={{ color: "#999", width: "4rem", textAlign: "right" }}>{label}</span>
      <div style={{ flex: 1, height: "8px", background: "#222", borderRadius: "4px", overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: "4px" }} />
      </div>
      <span style={{ color: "#ccc", width: "2.5rem" }}>{score}/{max}</span>
    </div>
  );
}

function ScoreBadge({ score }: { score: number }) {
  const bg = score >= 75 ? "#166534" : score >= 60 ? "#1e40af" : score >= 45 ? "#854d0e" : "#7f1d1d";
  const border = score >= 75 ? "#22c55e" : score >= 60 ? "#3b82f6" : score >= 45 ? "#eab308" : "#ef4444";
  return (
    <span style={{
      background: bg, border: `1px solid ${border}`, color: "#fff",
      padding: "0.15rem 0.5rem", borderRadius: "6px", fontWeight: 700, fontSize: "0.875rem",
    }}>
      {score}
    </span>
  );
}

export default function AutoresearchDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [expandedCycle, setExpandedCycle] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/tools/autoresearch")
      .then((res) => res.json())
      .then((d) => { if (d) setData(d); })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div style={{ color: "#888", padding: "3rem", textAlign: "center" }}>Loading...</div>;
  if (error) return <div style={{ color: "#ef4444", padding: "3rem", textAlign: "center" }}>Error: {error}</div>;
  if (!data) return null;

  const maxDistrib = Math.max(...Object.values(data.distribution), 1);

  return (
    <div style={{ padding: "2rem", maxWidth: "1100px", margin: "0 auto", color: "#e5e5e5" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", margin: 0 }}>Autoresearch Dashboard</h1>
          <p style={{ color: "#888", fontSize: "0.875rem", margin: "0.25rem 0 0" }}>
            Keyword discovery loop — Edward Sturm 100-point rubric
          </p>
        </div>
        <a href="/tools/keyword-checker" style={{ color: "#3b82f6", fontSize: "0.875rem", textDecoration: "none" }}>
          Keyword Checker &rarr;
        </a>
      </div>

      {/* Summary Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "2rem" }}>
        {[
          { label: "Cycles", value: data.state?.cyclesCompleted ?? 0, color: "#3b82f6" },
          { label: "Keywords Tested", value: data.totalKeywords, color: "#8b5cf6" },
          { label: "Winners (70+ & Vol)", value: data.totalWinners, color: "#22c55e" },
          { label: "Vol Pass Rate", value: `${data.volPassRate}%`, color: "#eab308" },
        ].map((card) => (
          <div key={card.label} style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "10px", padding: "1.25rem" }}>
            <div style={{ color: "#888", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{card.label}</div>
            <div style={{ color: card.color, fontSize: "2rem", fontWeight: 700, marginTop: "0.25rem" }}>{card.value}</div>
          </div>
        ))}
      </div>

      {/* Score Progression Chart (ASCII-style bar chart) */}
      {data.cycles.length > 0 && (
        <div style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "10px", padding: "1.5rem", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#fff", marginBottom: "1rem" }}>Score Progression by Cycle</h2>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "0.5rem", height: "160px" }}>
            {data.cycles.map((c) => {
              const h = Math.round((c.avgScore / 90) * 140);
              const maxH = Math.round((c.maxScore / 90) * 140);
              return (
                <div
                  key={c.cycle}
                  style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}
                  onClick={() => setExpandedCycle(expandedCycle === c.cycle ? null : c.cycle)}
                >
                  <span style={{ color: "#888", fontSize: "0.6rem", marginBottom: "2px" }}>{c.avgScore}</span>
                  <div style={{ position: "relative", width: "100%", maxWidth: "48px" }}>
                    <div style={{
                      height: `${maxH}px`, background: "#1e3a5f", borderRadius: "4px 4px 0 0",
                      position: "absolute", bottom: 0, width: "100%", opacity: 0.4,
                    }} />
                    <div style={{
                      height: `${h}px`,
                      background: c.avgScore >= 65 ? "#22c55e" : c.avgScore >= 45 ? "#eab308" : "#3b82f6",
                      borderRadius: "4px 4px 0 0", position: "relative",
                    }} />
                  </div>
                  <span style={{ color: "#666", fontSize: "0.7rem", marginTop: "4px" }}>C{c.cycle}</span>
                </div>
              );
            })}
          </div>
          <div style={{ display: "flex", gap: "1.5rem", marginTop: "0.75rem", fontSize: "0.7rem", color: "#666" }}>
            <span>Bar = avg score</span>
            <span>Shadow = max score</span>
            <span>Click a cycle to expand</span>
          </div>
        </div>
      )}

      {/* Score Distribution */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
        <div style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "10px", padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#fff", marginBottom: "1rem" }}>Score Distribution</h2>
          {Object.entries(data.distribution).map(([range, count]) => {
            const color = range === "80-100" ? "#22c55e" : range === "60-79" ? "#3b82f6" : range === "40-59" ? "#eab308" : "#ef4444";
            return (
              <div key={range} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <span style={{ color: "#999", fontSize: "0.75rem", width: "3.5rem", textAlign: "right" }}>{range}</span>
                <div style={{ flex: 1, height: "16px", background: "#222", borderRadius: "4px", overflow: "hidden" }}>
                  <div style={{
                    width: `${Math.round((count / maxDistrib) * 100)}%`,
                    height: "100%", background: color, borderRadius: "4px", minWidth: count > 0 ? "4px" : "0",
                  }} />
                </div>
                <span style={{ color: "#ccc", fontSize: "0.75rem", width: "2rem" }}>{count}</span>
              </div>
            );
          })}
        </div>

        {/* Component Breakdown (avg across all keywords) */}
        <div style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "10px", padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#fff", marginBottom: "1rem" }}>Avg Component Scores (max 90)</h2>
          {data.totalKeywords > 0 && (() => {
            const avg = (field: keyof KeywordResult) =>
              Math.round(data.topKeywords.reduce((s, k) => s + (k[field] as number || 0), 0) / data.topKeywords.length);
            const volPct = Math.round(data.topKeywords.filter((k) => k.volumePass).length / data.topKeywords.length * 100);
            return (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <ScoreBar score={avg("titleGap")} max={35} label="Title Gap" color="#8b5cf6" />
                <ScoreBar score={avg("daWeakness")} max={25} label="DA Weak" color="#3b82f6" />
                <ScoreBar score={avg("intentMatch")} max={20} label="Intent" color="#22c55e" />
                <ScoreBar score={avg("brandMatch")} max={10} label="Brand" color="#eab308" />
                <ScoreBar score={volPct} max={100} label="Vol Gate" color="#ef4444" />
              </div>
            );
          })()}
        </div>
      </div>

      {/* Expanded Cycle Detail */}
      {expandedCycle && (() => {
        const cycle = data.cycles.find((c) => c.cycle === expandedCycle);
        if (!cycle) return null;
        return (
          <div style={{ background: "#1a1a1a", border: "1px solid #3b82f6", borderRadius: "10px", padding: "1.5rem", marginBottom: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#fff", margin: 0 }}>
                Cycle {cycle.cycle} — Avg: {cycle.avgScore}, Winners: {cycle.winners}
              </h2>
              <button onClick={() => setExpandedCycle(null)} style={{ background: "none", border: "none", color: "#888", cursor: "pointer", fontSize: "1.25rem" }}>
                &times;
              </button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {cycle.keywords.map((kw, i) => (
                <div key={i} style={{ background: "#111", borderRadius: "8px", padding: "0.75rem 1rem", border: "1px solid #222" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                    <span style={{ color: "#fff", fontWeight: 600 }}>{kw.keyword}</span>
                    <ScoreBadge score={kw.totalScore} />
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", fontSize: "0.7rem" }}>
                    {[
                      { label: "Title Gap", val: kw.titleGap, max: 35 },
                      { label: "DA", val: kw.daWeakness, max: 25 },
                      { label: "Intent", val: kw.intentMatch, max: 20 },
                      { label: "Brand", val: kw.brandMatch, max: 10 },
                    ].map((c) => (
                      <span key={c.label} style={{
                        background: c.val === c.max ? "#14532d" : c.val === 0 ? "#450a0a" : "#1e293b",
                        color: c.val === c.max ? "#4ade80" : c.val === 0 ? "#f87171" : "#94a3b8",
                        padding: "0.15rem 0.4rem", borderRadius: "4px",
                      }}>
                        {c.label}: {c.val}/{c.max}
                      </span>
                    ))}
                    <span style={{
                      background: kw.volumePass ? "#14532d" : "#450a0a",
                      color: kw.volumePass ? "#4ade80" : "#f87171",
                      padding: "0.15rem 0.4rem", borderRadius: "4px",
                    }}>
                      Vol: {kw.volumePass ? `PASS (${kw.mozVolume})` : "FAIL"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })()}

      {/* Top Keywords Table */}
      <div style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "10px", padding: "1.5rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#fff", marginBottom: "1rem" }}>
          Top Keywords (All Cycles)
        </h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8rem" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #333" }}>
                {["#", "Keyword", "Score", "Title", "DA", "Intent", "Brand", "Vol Gate", "Moz Vol", "Cycle"].map((h) => (
                  <th key={h} style={{ color: "#888", fontWeight: 600, padding: "0.5rem", textAlign: "left" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.topKeywords.map((kw, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #1a1a1a" }}>
                  <td style={{ padding: "0.5rem", color: "#666" }}>{i + 1}</td>
                  <td style={{ padding: "0.5rem", color: "#fff", fontWeight: 500 }}>{kw.keyword}</td>
                  <td style={{ padding: "0.5rem" }}><ScoreBadge score={kw.totalScore} /></td>
                  <td style={{ padding: "0.5rem", color: kw.titleGap === 35 ? "#4ade80" : "#f87171" }}>{kw.titleGap}/35</td>
                  <td style={{ padding: "0.5rem", color: kw.daWeakness >= 20 ? "#4ade80" : "#f87171" }}>{kw.daWeakness}/25</td>
                  <td style={{ padding: "0.5rem", color: kw.intentMatch >= 15 ? "#4ade80" : "#eab308" }}>{kw.intentMatch}/20</td>
                  <td style={{ padding: "0.5rem", color: kw.brandMatch === 10 ? "#4ade80" : "#f87171" }}>{kw.brandMatch}/10</td>
                  <td style={{ padding: "0.5rem", color: kw.volumePass ? "#4ade80" : "#f87171", fontWeight: 600 }}>{kw.volumePass ? "PASS" : "FAIL"}</td>
                  <td style={{ padding: "0.5rem", color: "#999" }}>{kw.mozVolume ?? "—"}</td>
                  <td style={{ padding: "0.5rem", color: "#666" }}>{kw.cycle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {data.topKeywords.length === 0 && (
          <p style={{ color: "#666", textAlign: "center", padding: "2rem" }}>
            No results yet. Run: <code style={{ color: "#3b82f6" }}>node scripts/autoresearch-keywords.js</code>
          </p>
        )}
      </div>
    </div>
  );
}
