import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

const SERPER_API_KEY = process.env.SERPER_API_KEY || "";
const TOOLS_PASSWORD = process.env.TOOLS_PASSWORD || "";

const HARD_QUERY_CAP = 1500;
const SERPER_CONCURRENCY = 8;
const SERPER_PRICE_PER_QUERY = 0.0003;

function isAuthed(req: NextRequest): boolean {
  const cookie = req.cookies.get("tools_auth")?.value;
  return !!TOOLS_PASSWORD && cookie === TOOLS_PASSWORD;
}

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

function buildGrid(centerLat: number, centerLng: number, gridSize: number, spacingMi: number) {
  // 1° latitude ≈ 69 mi; 1° longitude ≈ 69 × cos(lat) mi
  const latPerMi = 1 / 69;
  const lngPerMi = 1 / (69 * Math.cos((centerLat * Math.PI) / 180));
  const half = (gridSize - 1) / 2;

  const cells: { row: number; col: number; lat: number; lng: number }[] = [];
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const dLat = (half - row) * spacingMi * latPerMi;
      const dLng = (col - half) * spacingMi * lngPerMi;
      cells.push({
        row,
        col,
        lat: +(centerLat + dLat).toFixed(6),
        lng: +(centerLng + dLng).toFixed(6),
      });
    }
  }
  return cells;
}

interface SerperPlace {
  position?: number;
  title?: string;
  phoneNumber?: string;
  address?: string;
}

async function serperMaps(query: string, lat: number, lng: number, zoom: number): Promise<SerperPlace[]> {
  const res = await fetch("https://google.serper.dev/maps", {
    method: "POST",
    headers: { "X-API-KEY": SERPER_API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ q: query, ll: `@${lat},${lng},${zoom}z`, gl: "us", hl: "en" }),
  });
  if (!res.ok) throw new Error(`serper ${res.status}`);
  const data = await res.json();
  return Array.isArray(data.places) ? data.places : [];
}

function findRank(places: SerperPlace[], matchName: string, matchPhone: string | null): number | null {
  const nameNeedle = matchName.toLowerCase();
  const phoneDigits = matchPhone ? matchPhone.replace(/\D/g, "") : null;
  for (let i = 0; i < places.length; i++) {
    const p = places[i];
    const title = (p.title || "").toLowerCase();
    if (title.includes(nameNeedle)) return i + 1;
    if (phoneDigits && p.phoneNumber) {
      const digits = p.phoneNumber.replace(/\D/g, "");
      if (digits && digits.endsWith(phoneDigits.slice(-10))) return i + 1;
    }
  }
  return null;
}

async function runWithConcurrency<T, R>(items: T[], limit: number, fn: (item: T, idx: number) => Promise<R>): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let cursor = 0;
  async function worker() {
    while (true) {
      const i = cursor++;
      if (i >= items.length) return;
      results[i] = await fn(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => worker()));
  return results;
}

function summarize(cells: GridCell[]) {
  const ranks = cells.map((c) => c.rank).filter((r): r is number => r != null);
  const top3 = ranks.filter((r) => r <= 3).length;
  const top10 = ranks.filter((r) => r <= 10).length;
  const total = cells.length;
  return {
    visibleCount: ranks.length,
    visiblePct: total ? Math.round((ranks.length / total) * 100) : 0,
    top3Count: top3,
    top3Pct: total ? Math.round((top3 / total) * 100) : 0,
    top10Count: top10,
    top10Pct: total ? Math.round((top10 / total) * 100) : 0,
    avgRank: ranks.length ? +(ranks.reduce((a, b) => a + b, 0) / ranks.length).toFixed(2) : null,
    bestRank: ranks.length ? Math.min(...ranks) : null,
    worstRank: ranks.length ? Math.max(...ranks) : null,
  };
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
}

export async function GET(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const dir = path.join(process.cwd(), "artifacts", "local-pack");
    const files = await fs.readdir(dir).catch(() => [] as string[]);
    const jsonFiles = files.filter((f) => f.endsWith(".json")).sort();
    if (!jsonFiles.length) return NextResponse.json({ runs: [], latest: null });

    const latestFile = jsonFiles[jsonFiles.length - 1];
    const url = new URL(req.url);
    const action = url.searchParams.get("action");

    if (action === "list") {
      const summaries = await Promise.all(jsonFiles.map(async (f) => {
        try {
          const raw = await fs.readFile(path.join(dir, f), "utf8");
          const data = JSON.parse(raw);
          return { file: f, label: data.label, runAt: data.runAt, keywordCount: data.results?.length ?? 0, queryCount: data.queryCount };
        } catch { return { file: f, label: null, runAt: null, keywordCount: 0, queryCount: 0 }; }
      }));
      return NextResponse.json({ runs: summaries.reverse(), latest: latestFile });
    }

    const requested = url.searchParams.get("file");
    const target = requested && jsonFiles.includes(requested) ? requested : latestFile;
    const raw = await fs.readFile(path.join(dir, target), "utf8");
    return NextResponse.json(JSON.parse(raw));
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "load failed" }, { status: 500 });
  }
}

interface PostBody {
  keywords?: unknown;
  centerLat?: unknown;
  centerLng?: unknown;
  gridSize?: unknown;
  spacingMi?: unknown;
  businessName?: unknown;
  businessPhone?: unknown;
  label?: unknown;
  mapZoom?: unknown;
}

export async function POST(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!SERPER_API_KEY) return NextResponse.json({ error: "SERPER_API_KEY not configured" }, { status: 500 });

  const body = (await req.json()) as PostBody;
  const keywords = Array.isArray(body.keywords) ? body.keywords.filter((k): k is string => typeof k === "string" && k.trim().length > 0).map((k) => k.trim()) : [];
  const centerLat = Number(body.centerLat);
  const centerLng = Number(body.centerLng);
  const gridSize = Math.max(3, Math.min(21, Math.floor(Number(body.gridSize) || 0)));
  const spacingMi = Math.max(0.25, Math.min(20, Number(body.spacingMi) || 0));
  const businessName = typeof body.businessName === "string" ? body.businessName.trim() : "";
  const businessPhone = typeof body.businessPhone === "string" ? body.businessPhone.trim() : "";
  const label = typeof body.label === "string" ? body.label.trim() : "";
  const mapZoomRaw = Math.floor(Number(body.mapZoom));
  const mapZoom = Number.isFinite(mapZoomRaw) && mapZoomRaw >= 10 && mapZoomRaw <= 15 ? mapZoomRaw : 13;

  if (!keywords.length) return NextResponse.json({ error: "At least one keyword required" }, { status: 400 });
  if (!Number.isFinite(centerLat) || !Number.isFinite(centerLng)) return NextResponse.json({ error: "Valid centerLat/centerLng required" }, { status: 400 });
  if (!businessName) return NextResponse.json({ error: "businessName required for matching" }, { status: 400 });
  if (gridSize % 2 === 0) return NextResponse.json({ error: "gridSize must be odd" }, { status: 400 });

  const cells = buildGrid(centerLat, centerLng, gridSize, spacingMi);
  const totalQueries = cells.length * keywords.length;
  if (totalQueries > HARD_QUERY_CAP) {
    return NextResponse.json({ error: `Query cap exceeded (${totalQueries} > ${HARD_QUERY_CAP}). Reduce grid or keywords.` }, { status: 400 });
  }

  const startedAt = Date.now();
  const results: KeywordResult[] = [];
  for (const keyword of keywords) {
    const cellResults = await runWithConcurrency(cells, SERPER_CONCURRENCY, async (cell) => {
      try {
        const places = await serperMaps(keyword, cell.lat, cell.lng, mapZoom);
        return {
          row: cell.row,
          col: cell.col,
          lat: cell.lat,
          lng: cell.lng,
          rank: findRank(places, businessName, businessPhone || null),
          totalResults: places.length,
        } satisfies GridCell;
      } catch {
        return { row: cell.row, col: cell.col, lat: cell.lat, lng: cell.lng, rank: null, totalResults: 0 } satisfies GridCell;
      }
    });
    results.push({ keyword, cells: cellResults, stats: summarize(cellResults) });
  }
  const elapsedMs = Date.now() - startedAt;

  const payload = {
    label: label || "local-pack-run",
    runAt: new Date().toISOString(),
    elapsedMs,
    config: { centerLat, centerLng, gridSize, spacingMi, businessName, businessPhone: businessPhone || null, mapZoom },
    queryCount: totalQueries,
    estimatedCostUsd: +(totalQueries * SERPER_PRICE_PER_QUERY).toFixed(4),
    results,
  };

  try {
    const dir = path.join(process.cwd(), "artifacts", "local-pack");
    await fs.mkdir(dir, { recursive: true });
    const stamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filename = `${stamp}-${slugify(label || keywords[0])}.json`;
    await fs.writeFile(path.join(dir, filename), JSON.stringify(payload, null, 2), "utf8");
  } catch {
    // non-fatal: still return results to client
  }

  return NextResponse.json(payload);
}
