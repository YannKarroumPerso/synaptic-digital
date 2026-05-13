import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette A — Confiance & Chaleur
        primary: {
          DEFAULT: "#1A2840",
          soft: "#2A3A55",
          light: "#3B4A66",
        },
        accent: {
          DEFAULT: "#FF7B47",
          soft: "#FF9670",
          light: "#FFB698",
        },
        bg: {
          light: "#FAF7F2",
          card: "#FFFFFF",
          dark: "#0F1828",
          warm: "#FDF4ED",
        },
        text: {
          dark: "#1F1F1F",
          light: "#F5F2EC",
          muted: "#6B7280",
          soft: "#9CA3AF",
        },
        border: {
          DEFAULT: "#E8E3DA",
        },
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        sm: "0 2px 8px rgba(15, 24, 40, 0.04)",
        md: "0 8px 32px rgba(15, 24, 40, 0.08)",
        lg: "0 24px 64px rgba(15, 24, 40, 0.12)",
        xl: "0 32px 96px rgba(15, 24, 40, 0.16)",
        accent: "0 4px 16px rgba(255, 123, 71, 0.25)",
        "accent-hover": "0 12px 28px rgba(255, 123, 71, 0.35)",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "ping-slow": "ping-slow 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "ping-slow": {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
