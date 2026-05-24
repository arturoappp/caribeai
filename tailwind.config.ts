import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0A0E14",
          surface: "#11161E",
          elevated: "#161C26",
        },
        border: {
          DEFAULT: "#1F2937",
          strong: "#2A3441",
        },
        fg: {
          DEFAULT: "#E5E7EB",
          dim: "#94A3B8",
          muted: "#64748B",
        },
        accent: {
          DEFAULT: "#06B6D4",
          hover: "#22D3EE",
          dim: "#0891B2",
        },
        warn: "#F59E0B",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, #1F2937 1px, transparent 1px), linear-gradient(to bottom, #1F2937 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
