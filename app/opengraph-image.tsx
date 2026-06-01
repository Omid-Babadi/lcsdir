import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const alt = "London Climate Systems - heating, cooling, plumbing, and boiler engineers";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0F14",
          color: "#FFFFFF",
          padding: 72,
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#FF6A00",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 38,
              fontWeight: 700,
            }}
          >
            L
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: 34, fontWeight: 700 }}>{siteConfig.name}</div>
            <div style={{ fontSize: 22, color: "#C8D1DC" }}>Greater London engineers</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 72, lineHeight: 1.02, fontWeight: 800, maxWidth: 950 }}>
            Heating, cooling, plumbing & boiler specialists
          </div>
          <div style={{ display: "flex", gap: 18, fontSize: 26, color: "#FFE3D0" }}>
            <span>Gas Safe</span>
            <span>-</span>
            <span>F-Gas certified</span>
            <span>-</span>
            <span>London-wide service</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
