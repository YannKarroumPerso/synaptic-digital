import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #FF7B47 0%, #FF9670 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "sans-serif",
          fontSize: 24,
          fontWeight: 800,
          letterSpacing: "-0.03em",
          borderRadius: 6,
        }}
      >
        S
      </div>
    ),
    { ...size }
  );
}
