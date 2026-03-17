import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#2D6E5F",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, Arial, sans-serif",
          fontWeight: 900,
          fontSize: 20,
          color: "#ffffff",
          letterSpacing: "-1px",
        }}
      >
        M
      </div>
    ),
    { ...size }
  );
}
