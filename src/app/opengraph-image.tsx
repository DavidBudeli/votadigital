import { ImageResponse } from "next/og";
import { SEO_DESCRIPTION } from "@/lib/constants";

export const runtime = "edge";
export const alt = "VotaDigital - estrutura digital para campanhas políticas 2026";
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
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 14% 10%, rgba(37, 99, 255, 0.45), transparent 36%), radial-gradient(circle at 86% 18%, rgba(0, 208, 132, 0.28), transparent 30%), #07111F",
          color: "#F6F8FF",
          fontFamily: "Arial, sans-serif",
          padding: 72,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid rgba(168,179,199,0.22)",
            borderRadius: 38,
            padding: 52,
            background: "rgba(14,23,38,0.72)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <div
              style={{
                width: 74,
                height: 74,
                borderRadius: 22,
                background: "#0B1423",
                border: "1px solid #1B2A44",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  transform: "rotate(42deg)",
                  borderRight: "8px solid #00D084",
                  borderBottom: "8px solid #2563FF",
                  borderRadius: 4,
                }}
              />
            </div>
            <div style={{ display: "flex", fontSize: 42, fontWeight: 700 }}>
              <span>Vota</span>
              <span style={{ color: "#00D084" }}>Digital</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                display: "flex",
                width: "fit-content",
                borderRadius: 999,
                padding: "10px 18px",
                background: "rgba(0,208,132,0.12)",
                color: "#00D084",
                fontSize: 24,
                fontWeight: 700,
              }}
            >
              Marketing político digital 2026
            </div>
            <div
              style={{
                maxWidth: 900,
                fontSize: 72,
                lineHeight: 1.04,
                fontWeight: 800,
              }}
            >
              Sua campanha digital não pode começar atrasada.
            </div>
            <div style={{ maxWidth: 860, color: "#A8B3C7", fontSize: 28, lineHeight: 1.45 }}>
              {SEO_DESCRIPTION}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
