import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MedicareYourself — Free, Independent Medicare Guidance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, Arial, sans-serif",
          position: "relative",
        }}
      >
        {/* Top color bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            background: "#2D6E5F",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "#EFF6F3",
            border: "3px solid #2D6E5F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 28,
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="#2D6E5F">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            letterSpacing: "-2px",
            color: "#1C2B27",
            display: "flex",
            gap: 0,
          }}
        >
          <span>Medicare</span>
          <span style={{ color: "#2D6E5F" }}>Yourself</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            color: "#3A5048",
            marginTop: 16,
            letterSpacing: "-0.5px",
          }}
        >
          Free, Independent Medicare Guidance
        </div>

        {/* Pill badges */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 36,
          }}
        >
          {["Licensed in 35 States", "No Cost to You", "Unbiased Advice"].map((text) => (
            <div
              key={text}
              style={{
                background: "#EFF6F3",
                border: "1.5px solid #D0E4DE",
                borderRadius: 100,
                padding: "8px 20px",
                fontSize: 20,
                fontWeight: 600,
                color: "#2D6E5F",
              }}
            >
              {text}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            fontSize: 20,
            color: "#3A5048",
            fontWeight: 500,
          }}
        >
          medicareyourself.com · 855-559-1700
        </div>
      </div>
    ),
    { ...size }
  );
}
