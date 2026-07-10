"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

interface GridCell {
  row: number;
  col: number;
  lat: number;
  lng: number;
  rank: number | null;
  totalResults: number;
}

interface Props {
  cells: GridCell[];
  centerLat: number;
  centerLng: number;
  gridSize: number;
  spacingMi: number;
  keyword: string;
  businessName: string;
}

function rankColor(rank: number | null): string {
  if (rank == null) return "#444";
  if (rank === 1) return "#15803d";
  if (rank <= 3) return "#22c55e";
  if (rank <= 10) return "#84cc16";
  if (rank <= 20) return "#eab308";
  return "#ef4444";
}

function rankRadius(rank: number | null): number {
  if (rank == null) return 8;
  if (rank === 1) return 22;
  if (rank <= 3) return 20;
  if (rank <= 10) return 17;
  return 14;
}

export default function MapView({ cells, centerLat, centerLng, gridSize, spacingMi, keyword, businessName }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current) return;

      // Create map (initial view sized to grid radius + small padding)
      const radiusMi = ((gridSize - 1) / 2) * spacingMi;
      const initialZoom = radiusMi <= 3 ? 13 : radiusMi <= 8 ? 12 : radiusMi <= 18 ? 11 : 10;

      const map = L.map(containerRef.current, { scrollWheelZoom: false, zoomControl: true }).setView([centerLat, centerLng], initialZoom);
      mapRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      // Office marker (center)
      const officeIcon = L.divIcon({
        className: "",
        html: `<div style="background:#dc2626;color:#fff;border:2px solid #fff;border-radius:50%;width:14px;height:14px;box-shadow:0 0 0 2px #dc2626"></div>`,
        iconSize: [18, 18],
        iconAnchor: [9, 9],
      });
      L.marker([centerLat, centerLng], { icon: officeIcon, zIndexOffset: 1000 })
        .addTo(map)
        .bindPopup(`<strong>${escapeHtml(businessName)}</strong><br/>Office (center)`);

      // Cell markers
      for (const cell of cells) {
        const color = rankColor(cell.rank);
        const radius = rankRadius(cell.rank);
        const label = cell.rank == null ? "" : String(cell.rank);
        const textColor = cell.rank == null ? "#999" : "#000";

        const icon = L.divIcon({
          className: "",
          html: `<div style="background:${color};color:${textColor};width:${radius * 2}px;height:${radius * 2}px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:${radius >= 17 ? 13 : 11}px;border:1px solid rgba(0,0,0,0.3);box-shadow:0 1px 2px rgba(0,0,0,0.4)">${label}</div>`,
          iconSize: [radius * 2, radius * 2],
          iconAnchor: [radius, radius],
        });

        const popup = cell.rank == null
          ? `<strong>Not in top ${cell.totalResults}</strong><br/>${cell.lat.toFixed(4)}, ${cell.lng.toFixed(4)}<br/>Grid (${cell.row},${cell.col})`
          : `<strong>Rank #${cell.rank}</strong> of ${cell.totalResults}<br/>${cell.lat.toFixed(4)}, ${cell.lng.toFixed(4)}<br/>Grid (${cell.row},${cell.col})`;

        L.marker([cell.lat, cell.lng], { icon }).addTo(map).bindPopup(popup);
      }
    })();

    return () => {
      cancelled = true;
      const m = mapRef.current as { remove?: () => void } | null;
      if (m && typeof m.remove === "function") m.remove();
      mapRef.current = null;
    };
  }, [cells, centerLat, centerLng, gridSize, spacingMi, keyword, businessName]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "500px",
        borderRadius: "8px",
        border: "1px solid #333",
        background: "#0a0a0a",
      }}
    />
  );
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}
