"use client";

import { useState } from "react";

interface SerpResult {
  pos: number;
  title: string;
  domain: string;
  url: string;
  titleMatch: boolean;
  urlMatch: boolean;
  da: number | null;
}

interface CheckResult {
  keyword: string;
  moz: { volume: number | null; difficulty: number | null; ctr: number | null; priority: number | null } | null;
  serp: { kwInTitles: number; kwInUrls: number; kwWords: string[]; threshold: number; results: SerpResult[] };
  analysis: {
    intent: string;
    relevance: number;
    avgDA: number | null;
    minDA: number | null;
    maxDA: number | null;
    hasMah: boolean;
    score: number;
    verdict: string;
    reasons: string[];
  };
}

const verdictColors: Record<string, string> = {
  "GO! TARGET IT": "#22c55e",
  "WORTH TARGETING": "#3b82f6",
  "MAYBE / LOW PRI": "#eab308",
  DEPRIORITIZE: "#ef4444",
};

export default function KeywordChecker() {
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CheckResult | null>(null);
  const [error, setError] = useState("");
  const [history, setHistory] = useState<CheckResult[]>([]);

  async function handleCheck(e: React.FormEvent) {
    e.preventDefault();
    if (!keyword.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/tools/check-keyword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword: keyword.trim() }),
      });

      if (res.status === 401) {
        window.location.href = "/tools";
        return;
      }

      if (!res.ok) throw new Error(`Error ${res.status}`);

      const data = await res.json();
      setResult(data);
      setHistory((prev) => [data, ...prev.slice(0, 9)]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
    setLoading(false);
  }

  const s: Record<string, React.CSSProperties> = {
    page: { minHeight: "100vh", background: "#0a0a0a", color: "#e5e5e5", fontFamily: "system-ui, -apple-system, sans-serif", padding: "2rem" },
    container: { maxWidth: "800px", margin: "0 auto" },
    header: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" },
    title: { color: "#fff", fontSize: "1.5rem", fontWeight: 600, margin: 0 },
    form: { display: "flex", gap: "0.75rem", marginBottom: "2rem" },
    input: { flex: 1, padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid #444", background: "#111", color: "#fff", fontSize: "1rem" },
    btn: { padding: "0.75rem 1.5rem", borderRadius: "8px", border: "none", background: "#2563eb", color: "#fff", fontSize: "1rem", cursor: "pointer", whiteSpace: "nowrap" as const },
    card: { background: "#1a1a1a", borderRadius: "12px", border: "1px solid #333", padding: "1.5rem", marginBottom: "1.5rem" },
    label: { color: "#888", fontSize: "0.75rem", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: "0.5rem" },
    grid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" },
    stat: { textAlign: "center" as const },
    statVal: { fontSize: "1.5rem", fontWeight: 700, color: "#fff" },
    statLabel: { fontSize: "0.75rem", color: "#888" },
    table: { width: "100%", borderCollapse: "collapse" as const, fontSize: "0.875rem" },
    th: { textAlign: "left" as const, padding: "0.5rem", borderBottom: "1px solid #333", color: "#888", fontSize: "0.75rem" },
    td: { padding: "0.5rem", borderBottom: "1px solid #222" },
    tag: { display: "inline-block", padding: "0.125rem 0.5rem", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 600 },
    reason: { padding: "0.25rem 0", fontSize: "0.875rem", fontFamily: "monospace" },
    histItem: { padding: "0.5rem 0.75rem", cursor: "pointer", borderBottom: "1px solid #222", fontSize: "0.875rem", display: "flex", justifyContent: "space-between" },
  };

  return (
    <div style={s.page}>
      <div style={s.container}>
        <div style={s.header}>
          <h1 style={s.title}>Keyword Checker</h1>
        <p className="text-sm text-gray-500 mt-2">By <strong>Anthony Orner</strong>, Licensed Medicare Insurance Broker — NJ &amp; 34 states</p>
          <span style={{ color: "#666", fontSize: "0.75rem" }}>Edward Sturm Framework</span>
        </div>

        <form onSubmit={handleCheck} style={s.form}>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Enter a keyword to check..."
            autoFocus
            style={s.input}
          />
          <button type="submit" disabled={loading} style={{ ...s.btn, opacity: loading ? 0.7 : 1 }}>
            {loading ? "Checking..." : "Check"}
          </button>
        </form>

        {error && <p style={{ color: "#ef4444", marginBottom: "1rem" }}>{error}</p>}

        {result && (
          <>
            {/* Verdict banner */}
            <div style={{ ...s.card, borderColor: verdictColors[result.analysis.verdict] || "#333", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", fontWeight: 800, color: verdictColors[result.analysis.verdict] || "#fff" }}>
                {result.analysis.score}
              </div>
              <div style={{ fontSize: "1.25rem", fontWeight: 700, color: verdictColors[result.analysis.verdict] || "#fff", marginBottom: "0.25rem" }}>
                {result.analysis.verdict}
              </div>
              <div style={{ color: "#888", fontSize: "0.875rem" }}>
                {result.analysis.intent} intent &middot; relevance {result.analysis.relevance}/10
                {result.analysis.hasMah && <span style={{ color: "#22c55e" }}> &middot; MAH in SERP</span>}
              </div>
            </div>

            {/* Moz metrics */}
            <div style={s.card}>
              <div style={s.label}>Moz Metrics</div>
              <div style={s.grid}>
                <div style={s.stat}>
                  <div style={s.statVal}>{result.moz?.volume ?? "—"}</div>
                  <div style={s.statLabel}>Volume</div>
                </div>
                <div style={s.stat}>
                  <div style={s.statVal}>{result.moz?.difficulty ?? "—"}</div>
                  <div style={s.statLabel}>Difficulty</div>
                </div>
                <div style={s.stat}>
                  <div style={s.statVal}>{result.moz?.ctr ?? "—"}</div>
                  <div style={s.statLabel}>CTR</div>
                </div>
                <div style={s.stat}>
                  <div style={s.statVal}>{result.moz?.priority ?? "—"}</div>
                  <div style={s.statLabel}>Priority</div>
                </div>
              </div>
            </div>

            {/* SERP results */}
            <div style={s.card}>
              <div style={{ ...s.label, marginBottom: "0.75rem" }}>
                SERP Analysis &mdash; KW in Titles: {result.serp.kwInTitles}/5 &middot; KW in URLs: {result.serp.kwInUrls}/5
              </div>
              <table style={s.table}>
                <thead>
                  <tr>
                    <th style={s.th}>#</th>
                    <th style={s.th}>Domain</th>
                    <th style={s.th}>DA</th>
                    <th style={s.th}>KW</th>
                    <th style={s.th}>Title</th>
                  </tr>
                </thead>
                <tbody>
                  {result.serp.results.map((r) => (
                    <tr key={r.pos}>
                      <td style={s.td}>{r.pos}</td>
                      <td style={s.td}>
                        <span style={{ color: r.domain.includes("medicareagentshub") ? "#22c55e" : "#fff" }}>
                          {r.domain}
                        </span>
                      </td>
                      <td style={{ ...s.td, color: (r.da ?? 0) < 30 ? "#22c55e" : (r.da ?? 0) >= 70 ? "#ef4444" : "#eab308" }}>
                        {r.da ?? "?"}
                      </td>
                      <td style={s.td}>
                        {r.titleMatch && <span style={{ ...s.tag, background: "#1e3a2f", color: "#22c55e" }}>T</span>}
                        {r.urlMatch && <span style={{ ...s.tag, background: "#1e2d3a", color: "#3b82f6", marginLeft: "0.25rem" }}>U</span>}
                      </td>
                      <td style={{ ...s.td, maxWidth: "280px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {r.title}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ marginTop: "0.75rem", color: "#666", fontSize: "0.75rem" }}>
                DA colors: <span style={{ color: "#22c55e" }}>green &lt;30</span> &middot; <span style={{ color: "#eab308" }}>yellow 30-69</span> &middot; <span style={{ color: "#ef4444" }}>red 70+</span>
              </div>
            </div>

            {/* DA summary */}
            <div style={s.card}>
              <div style={s.label}>Domain Authority Summary</div>
              <div style={{ ...s.grid, gridTemplateColumns: "repeat(3, 1fr)" }}>
                <div style={s.stat}>
                  <div style={{ ...s.statVal, color: (result.analysis.minDA ?? 0) < 30 ? "#22c55e" : "#eab308" }}>
                    {result.analysis.minDA ?? "?"}
                  </div>
                  <div style={s.statLabel}>Min DA</div>
                </div>
                <div style={s.stat}>
                  <div style={s.statVal}>{result.analysis.avgDA ?? "?"}</div>
                  <div style={s.statLabel}>Avg DA</div>
                </div>
                <div style={s.stat}>
                  <div style={{ ...s.statVal, color: (result.analysis.maxDA ?? 0) >= 70 ? "#ef4444" : "#eab308" }}>
                    {result.analysis.maxDA ?? "?"}
                  </div>
                  <div style={s.statLabel}>Max DA</div>
                </div>
              </div>
            </div>

            {/* Scoring breakdown */}
            <div style={s.card}>
              <div style={s.label}>Score Breakdown</div>
              {result.analysis.reasons.map((r, i) => (
                <div key={i} style={{ ...s.reason, color: r.startsWith("+") ? (r.startsWith("+0") ? "#888" : "#22c55e") : "#ef4444" }}>
                  {r}
                </div>
              ))}
            </div>
          </>
        )}

        {/* History */}
        {history.length > 1 && (
          <div style={s.card}>
            <div style={s.label}>Recent Checks</div>
            {history.slice(1).map((h, i) => (
              <div
                key={i}
                style={s.histItem}
                onClick={() => { setKeyword(h.keyword); setResult(h); }}
              >
                <span>{h.keyword}</span>
                <span style={{ color: verdictColors[h.analysis.verdict], fontWeight: 600, fontSize: "0.75rem" }}>
                  {h.analysis.score} — {h.analysis.verdict}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
