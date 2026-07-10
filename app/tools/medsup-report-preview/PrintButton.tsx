"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      style={{
        background: "#2D6E5F",
        color: "white",
        border: "none",
        padding: "8px 16px",
        borderRadius: 6,
        fontSize: 13,
        fontWeight: 600,
        cursor: "pointer",
      }}
    >
      Print / Save as PDF
    </button>
  );
}
