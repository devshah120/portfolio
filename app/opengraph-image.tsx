import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role} portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101113",
          color: "#E8E5DE",
          padding: 72,
          border: "1px solid #2D3035",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 28,
            letterSpacing: 4,
            color: "#8F939A",
          }}
        >
          <span>{site.role.toUpperCase()}</span>
          <span>{site.location.toUpperCase()}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 120, fontWeight: 800, lineHeight: 1 }}>
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 24,
              fontSize: 44,
            }}
          >
            <span
              style={{
                background: "#FF6B55",
                padding: "8px 24px",
                color: "#101113",
                fontWeight: 800,
              }}
            >
              I BUILD DIGITAL SYSTEMS
            </span>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#8F939A" }}>
          React · Node.js · Flutter · MongoDB · GPS tracking · MERN
        </div>
      </div>
    ),
    size,
  );
}
