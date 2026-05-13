import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Synaptic Digital — Agence web pour petites PME, livré en 3 semaines";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #FAF7F2 0%, #FDF4ED 100%)",
          position: "relative",
        }}
      >
        {/* Decorative circle */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,123,71,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: "44px",
            fontWeight: 800,
            color: "#1A2840",
            letterSpacing: "-0.02em",
          }}
        >
          Synaptic<span style={{ color: "#FF7B47" }}>.</span>
        </div>

        {/* Main message */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "28px",
              color: "#FF7B47",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Agence web pour petites PME
          </div>
          <div
            style={{
              fontSize: "78px",
              color: "#1A2840",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Des sites beaux, rapides, trouvés sur Google.
          </div>
          <div
            style={{
              fontSize: "42px",
              color: "#FF7B47",
              fontWeight: 700,
              marginTop: "8px",
            }}
          >
            Livrés en 3 semaines.
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "20px",
            borderTop: "1px solid #E8E3DA",
          }}
        >
          <div style={{ fontSize: "22px", color: "#6B7280" }}>
            synaptic-digital.fr
          </div>
          <div
            style={{
              display: "flex",
              gap: "32px",
              fontSize: "20px",
              color: "#1A2840",
              fontWeight: 600,
            }}
          >
            <span>Design</span>
            <span>·</span>
            <span>Performance</span>
            <span>·</span>
            <span>SEO</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
