import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #1A2840 0%, #2A3A55 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "sans-serif",
          fontSize: 110,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          position: "relative",
        }}
      >
        S
        <span
          style={{
            color: "#FF7B47",
            position: "absolute",
            bottom: 24,
            right: 36,
            fontSize: 110,
            lineHeight: 0.4,
          }}
        >
          .
        </span>
      </div>
    ),
    { ...size }
  );
}
