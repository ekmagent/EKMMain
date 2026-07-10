"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";

const MapView = dynamic(() => import("./MapView"), { ssr: false, loading: () => <div style={{ height: 500, background: "#111", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#666" }}>Loading map...</div> });

interface GridCell {
  row: number;
  col: number;
  lat: number;
  lng: number;
  rank: number | null;
  totalResults: number;
}

interface KeywordResult {
  keyword: string;
  cells: GridCell[];
  stats: {
    visibleCount: number;
    visiblePct: number;
    top3Count: number;
    top3Pct: number;
    top10Count: number;
    top10Pct: number;
    avgRank: number | null;
    bestRank: number | null;
    worstRank: number | null;
  };
}

interface RunPayload {
  label: string;
  runAt: string;
  elapsedMs: number;
  config: { centerLat: number; centerLng: number; gridSize: number; spacingMi: number; businessName: string; businessPhone: string | null };
  queryCount: number;
  estimatedCostUsd: number;
  results: KeywordResult[];
}

const DEFAULT_KEYWORDS = [
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
].join("\n");

function rankColor(rank: number | null): string {
  if (rank == null) return "#2a2a2a";
  if (rank === 1) return "#15803d";
  if (rank <= 3) return "#22c55e";
  if (rank <= 10) return "#84cc16";
  if (rank <= 20) return "#eab308";
  return "#ef4444";
}

function rankTextColor(rank: number | null): string {
  if (rank == null) return "#666";
  if (rank <= 10) return "#000";
  return "#000";
}

export default function LocalPackTool() {
  const [keywords, setKeywords] = useState(DEFAULT_KEYWORDS);
  const [centerLat, setCenterLat] = useState("39.9165");
  const [centerLng, setCenterLng] = useState("-75.0261");
  const [gridSize, setGridSize] = useState(13);
  const [spacingMi, setSpacingMi] = useState(3);
  const [mapZoom, setMapZoom] = useState(13);
  const [businessName, setBusinessName] = useState("easyKind Medicare");
  const [businessPhone, setBusinessPhone] = useState("(856) 888-9080");
  const [label, setLabel] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState("");
  const [error, setError] = useState("");
  const [run, setRun] = useState<RunPayload | null>(null);
  const [view, setView] = useState<"grid" | "map">("map");

  useEffect(() => {
    fetch("/api/tools/local-pack")
      .then((r) => r.ok ? r.json() : null)
      .then((data) => {
        if (data && data.results && Array.isArray(data.results)) setRun(data);
      })
      .catch(() => { /* no saved runs yet — fine */ });
  }, []);

  const keywordList = useMemo(() => keywords.split("\n").map((k) => k.trim()).filter(Boolean), [keywords]);
  const cellCount = gridSize * gridSize;
  const totalQueries = cellCount * keywordList.length;
  const estCost = (totalQueries * 0.0003).toFixed(2);
  const radiusMi = ((gridSize - 1) / 2) * spacingMi;

  async function handleRun(e: React.FormEvent) {
    e.preventDefault();
    if (!keywordList.length) return;
    if (totalQueries > 1500) {
      setError(`Too many queries (${totalQueries}). Cap is 1500. Reduce grid or keywords.`);
      return;
    }

    setLoading(true);
    setError("");
    setRun(null);
    setProgress(`Firing ${totalQueries} queries... this can take 30-90s`);

    try {
      const res = await fetch("/api/tools/local-pack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          keywords: keywordList,
          centerLat: parseFloat(centerLat),
          centerLng: parseFloat(centerLng),
          gridSize,
          spacingMi,
          mapZoom,
          businessName,
          businessPhone,
          label: label || `${gridSize}x${gridSize}-${spacingMi}mi-z${mapZoom}`,
        }),
      });
      if (res.status === 401) { window.location.href = "/tools"; return; }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || `Error ${res.status}`);
      setRun(data);
      setProgress("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setProgress("");
    }
    setLoading(false);
  }

  const s: Record<string, React.CSSProperties> = {
    page: { minHeight: "100vh", background: "#0a0a0a", color: "#e5e5e5", fontFamily: "system-ui, -apple-system, sans-serif", padding: "2rem" },
    container: { maxWidth: "1100px", margin: "0 auto" },
    title: { color: "#fff", fontSize: "1.5rem", fontWeight: 600, margin: 0 },
    subtitle: { color: "#888", fontSize: "0.875rem", margin: "0.25rem 0 1.5rem" },
    card: { background: "#1a1a1a", borderRadius: "12px", border: "1px solid #333", padding: "1.5rem", marginBottom: "1.5rem" },
    label: { color: "#888", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem", display: "block" },
    input: { width: "100%", padding: "0.6rem 0.75rem", borderRadius: "6px", border: "1px solid #444", background: "#111", color: "#fff", fontSize: "0.875rem", boxSizing: "border-box" },
    textarea: { width: "100%", padding: "0.6rem 0.75rem", borderRadius: "6px", border: "1px solid #444", background: "#111", color: "#fff", fontSize: "0.875rem", boxSizing: "border-box", fontFamily: "monospace", minHeight: "180px", resize: "vertical" },
    btn: { padding: "0.75rem 1.5rem", borderRadius: "8px", border: "none", background: "#2563eb", color: "#fff", fontSize: "1rem", cursor: "pointer", fontWeight: 600 },
    formGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" },
    formGrid4: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "1rem" },
    statBlock: { background: "#0f0f0f", border: "1px solid #333", borderRadius: "8px", padding: "0.75rem", textAlign: "center" },
    statVal: { fontSize: "1.5rem", fontWeight: 700, color: "#fff" },
    statLabel: { fontSize: "0.7rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "0.25rem" },
    keywordHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" },
    keywordTitle: { fontSize: "1.1rem", fontWeight: 600, color: "#fff" },
    statRow: { display: "flex", gap: "0.75rem", flexWrap: "wrap" },
    statPill: { background: "#111", border: "1px solid #333", borderRadius: "6px", padding: "0.4rem 0.75rem", fontSize: "0.8rem" },
    statPillLabel: { color: "#888", marginRight: "0.4rem" },
    statPillVal: { color: "#fff", fontWeight: 600 },
  };

  return (
    <div style={s.page}>
      <div style={s.container}>
        <nav style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", fontSize: "0.875rem" }}>
          <a href="/tools/keyword-checker" style={{ color: "#888", textDecoration: "none" }}>Keyword Checker</a>
          <a href="/tools/local-pack" style={{ color: "#fff", fontWeight: 600 }}>Local Pack Tracker</a>
          <a href="/tools/autoresearch" style={{ color: "#888", textDecoration: "none" }}>Autoresearch</a>
        </nav>
        <h1 style={s.title}>Local Pack Rank Tracker</h1>
        <p style={s.subtitle}>
          Grid-based local pack tracking via Serper Maps. Each cell fires a Maps query at that lat/lng and records where your GBP ranks.
        </p>

        <form onSubmit={handleRun} style={s.card}>
          <div style={s.formGrid}>
            <div>
              <label style={s.label}>Center Latitude</label>
              <input style={s.input} value={centerLat} onChange={(e) => setCenterLat(e.target.value)} />
            </div>
            <div>
              <label style={s.label}>Center Longitude</label>
              <input style={s.input} value={centerLng} onChange={(e) => setCenterLng(e.target.value)} />
            </div>
          </div>

          <div style={s.formGrid4}>
            <div>
              <label style={s.label}>Grid Size (odd)</label>
              <select style={s.input} value={gridSize} onChange={(e) => setGridSize(Number(e.target.value))}>
                {[5, 7, 9, 11, 13, 15, 17, 19, 21].map((n) => <option key={n} value={n}>{n}×{n} ({n * n} cells)</option>)}
              </select>
            </div>
            <div>
              <label style={s.label}>Spacing (mi)</label>
              <input type="number" step="0.5" min="0.5" max="20" style={s.input} value={spacingMi} onChange={(e) => setSpacingMi(Number(e.target.value))} />
            </div>
            <div>
              <label style={s.label}>Map Zoom (10-15)</label>
              <select style={s.input} value={mapZoom} onChange={(e) => setMapZoom(Number(e.target.value))}>
                <option value={10}>10 — state level (~155mi view)</option>
                <option value={11}>11 — large region (~78mi view)</option>
                <option value={12}>12 — metro (~39mi view)</option>
                <option value={13}>13 — city (~19mi view, recommended)</option>
                <option value={14}>14 — district (~10mi view, hyperlocal)</option>
                <option value={15}>15 — neighborhood (~5mi view)</option>
              </select>
            </div>
            <div>
              <label style={s.label}>Coverage Radius / Label</label>
              <input style={s.input} value={label} onChange={(e) => setLabel(e.target.value)} placeholder={`${radiusMi}mi · label`} />
            </div>
          </div>

          <div style={s.formGrid}>
            <div>
              <label style={s.label}>Business Name (match)</label>
              <input style={s.input} value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
            </div>
            <div>
              <label style={s.label}>Business Phone (fallback)</label>
              <input style={s.input} value={businessPhone} onChange={(e) => setBusinessPhone(e.target.value)} />
            </div>
          </div>

          <label style={s.label}>Keywords (one per line)</label>
          <textarea style={s.textarea} value={keywords} onChange={(e) => setKeywords(e.target.value)} />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem", flexWrap: "wrap", gap: "0.75rem" }}>
            <div style={{ color: "#888", fontSize: "0.875rem" }}>
              <strong style={{ color: "#fff" }}>{keywordList.length}</strong> keywords ×{" "}
              <strong style={{ color: "#fff" }}>{cellCount}</strong> cells ={" "}
              <strong style={{ color: totalQueries > 1500 ? "#ef4444" : "#22c55e" }}>{totalQueries}</strong> queries ≈{" "}
              <strong style={{ color: "#fff" }}>${estCost}</strong>
            </div>
            <button type="submit" disabled={loading || totalQueries === 0 || totalQueries > 1500} style={{ ...s.btn, opacity: loading ? 0.6 : 1, cursor: loading ? "wait" : "pointer" }}>
              {loading ? "Running..." : `Fire ${totalQueries} queries`}
            </button>
          </div>
        </form>

        {progress && <div style={{ ...s.card, color: "#3b82f6" }}>{progress}</div>}
        {error && <div style={{ ...s.card, color: "#ef4444", borderColor: "#7f1d1d" }}>{error}</div>}

        {run && (
          <>
            <div style={s.card}>
              <div style={s.label}>Run Summary</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem" }}>
                <div style={s.statBlock}><div style={s.statVal}>{run.queryCount}</div><div style={s.statLabel}>Queries</div></div>
                <div style={s.statBlock}><div style={s.statVal}>${run.estimatedCostUsd.toFixed(2)}</div><div style={s.statLabel}>Est. Cost</div></div>
                <div style={s.statBlock}><div style={s.statVal}>{(run.elapsedMs / 1000).toFixed(1)}s</div><div style={s.statLabel}>Elapsed</div></div>
                <div style={s.statBlock}><div style={s.statVal}>{run.results.length}</div><div style={s.statLabel}>Keywords</div></div>
              </div>
              <div style={{ marginTop: "1rem", fontSize: "0.75rem", color: "#666" }}>
                Color legend:{" "}
                <span style={{ background: "#15803d", color: "#000", padding: "0.1rem 0.4rem", marginRight: "0.25rem" }}>1</span>
                <span style={{ background: "#22c55e", color: "#000", padding: "0.1rem 0.4rem", marginRight: "0.25rem" }}>2-3</span>
                <span style={{ background: "#84cc16", color: "#000", padding: "0.1rem 0.4rem", marginRight: "0.25rem" }}>4-10</span>
                <span style={{ background: "#eab308", color: "#000", padding: "0.1rem 0.4rem", marginRight: "0.25rem" }}>11-20</span>
                <span style={{ background: "#2a2a2a", color: "#666", padding: "0.1rem 0.4rem" }}>not found</span>
              </div>
              <div style={{ marginTop: "1rem", display: "inline-flex", border: "1px solid #333", borderRadius: 8, overflow: "hidden" }}>
                <button onClick={() => setView("map")} style={{ padding: "0.5rem 1rem", background: view === "map" ? "#2563eb" : "#111", color: "#fff", border: "none", cursor: "pointer", fontSize: "0.85rem" }}>Map</button>
                <button onClick={() => setView("grid")} style={{ padding: "0.5rem 1rem", background: view === "grid" ? "#2563eb" : "#111", color: "#fff", border: "none", cursor: "pointer", fontSize: "0.85rem" }}>Grid</button>
              </div>
            </div>

            {[...run.results].sort((a, b) => (b.stats.top10Pct - a.stats.top10Pct)).map((r) => (
              <div key={r.keyword} style={s.card}>
                <div style={s.keywordHeader}>
                  <div style={s.keywordTitle}>{r.keyword}</div>
                  <div style={s.statRow}>
                    <span style={s.statPill}><span style={s.statPillLabel}>visible</span><span style={s.statPillVal}>{r.stats.visiblePct}%</span></span>
                    <span style={s.statPill}><span style={s.statPillLabel}>top 3</span><span style={s.statPillVal}>{r.stats.top3Pct}%</span></span>
                    <span style={s.statPill}><span style={s.statPillLabel}>top 10</span><span style={s.statPillVal}>{r.stats.top10Pct}%</span></span>
                    <span style={s.statPill}><span style={s.statPillLabel}>avg rank</span><span style={s.statPillVal}>{r.stats.avgRank ?? "—"}</span></span>
                    <span style={s.statPill}><span style={s.statPillLabel}>best</span><span style={s.statPillVal}>{r.stats.bestRank ?? "—"}</span></span>
                  </div>
                </div>

                {view === "map" ? (
                  <MapView
                    cells={r.cells}
                    centerLat={run.config.centerLat}
                    centerLng={run.config.centerLng}
                    gridSize={run.config.gridSize}
                    spacingMi={run.config.spacingMi}
                    keyword={r.keyword}
                    businessName={run.config.businessName}
                  />
                ) : (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: `repeat(${run.config.gridSize}, 1fr)`,
                      gap: "2px",
                      maxWidth: `${run.config.gridSize * 42}px`,
                      margin: "0 auto",
                    }}
                  >
                    {r.cells.map((c) => (
                      <div
                        key={`${c.row}-${c.col}`}
                        title={`(${c.row},${c.col}) ${c.lat.toFixed(4)},${c.lng.toFixed(4)} — ${c.rank ?? "not found"} of ${c.totalResults}`}
                        style={{
                          aspectRatio: "1",
                          background: rankColor(c.rank),
                          color: rankTextColor(c.rank),
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          borderRadius: "2px",
                          cursor: "help",
                        }}
                      >
                        {c.rank ?? "—"}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
