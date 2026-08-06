import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: {
          DEFAULT: "var(--surface-primary)",
          muted: "var(--surface-muted)",
        },
        neutral: {
          wrapper: "var(--color-neutral)",
          DEFAULT: "var(--color-neutral)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        border: {
          subtle: "var(--border-subtle)",
          strong: "var(--border-strong)",
        },
        accent: {
          cyan: "var(--accent-cyan)",
          coral: "var(--accent-coral)",
          gold: "var(--accent-gold)",
          cream: "var(--accent-cream)",
          red: "var(--accent-red)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        display: ["var(--font-albert-sans)", "sans-serif"],
        mono: ["Fragment Mono", "monospace"],
      },
      maxWidth: {
        "container-max": "1200px",
      },
      spacing: {
        "section-gap": "128px",
        "gutter": "24px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
