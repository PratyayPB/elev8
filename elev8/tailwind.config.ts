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

        // shadcn standard semantic tokens
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
          // legacy landing page accents
          cyan: "var(--accent-cyan)",
          coral: "var(--accent-coral)",
          gold: "var(--accent-gold)",
          cream: "var(--accent-cream)",
          red: "var(--accent-red)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: {
          DEFAULT: "var(--border)",
          subtle: "var(--border-subtle)",
          strong: "var(--border-strong)",
        },
        input: "var(--input)",
        ring: "var(--ring)",

        // Full brand tonal scales
        brand: {
          primary: {
            50: "var(--brand-primary-50)",
            100: "var(--brand-primary-100)",
            200: "var(--brand-primary-200)",
            300: "var(--brand-primary-300)",
            400: "var(--brand-primary-400)",
            500: "var(--brand-primary-500)",
            600: "var(--brand-primary-600)",
            700: "var(--brand-primary-700)",
            800: "var(--brand-primary-800)",
            900: "var(--brand-primary-900)",
            950: "var(--brand-primary-950)",
          },
          secondary: {
            50: "var(--brand-secondary-50)",
            100: "var(--brand-secondary-100)",
            200: "var(--brand-secondary-200)",
            300: "var(--brand-secondary-300)",
            400: "var(--brand-secondary-400)",
            500: "var(--brand-secondary-500)",
            600: "var(--brand-secondary-600)",
            700: "var(--brand-secondary-700)",
            800: "var(--brand-secondary-800)",
            900: "var(--brand-secondary-900)",
            950: "var(--brand-secondary-950)",
          },
          accent: {
            50: "var(--brand-accent-50)",
            100: "var(--brand-accent-100)",
            200: "var(--brand-accent-200)",
            300: "var(--brand-accent-300)",
            400: "var(--brand-accent-400)",
            500: "var(--brand-accent-500)",
            600: "var(--brand-accent-600)",
            700: "var(--brand-accent-700)",
            800: "var(--brand-accent-800)",
            900: "var(--brand-accent-900)",
            950: "var(--brand-accent-950)",
          },
        },

        // Legacy surfaces & tokens for backward compatibility
        surface: {
          DEFAULT: "var(--surface-primary)",
          muted: "var(--surface-muted)",
        },
        neutral: {
          wrapper: "var(--color-neutral)",
          DEFAULT: "var(--color-neutral)",
        },
        dashboard: {
          sidebar: "var(--sidebar-bg)",
          navActive: "var(--nav-active-bg)",
          navActiveText: "var(--nav-active-text)",
          card: "var(--card-bg)",
          cardBorder: "var(--card-border)",
          pageBg: "var(--page-bg)",
          metricHighlight: "var(--metric-highlight)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
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
        gutter: "24px",
      },
    },
  },
  plugins: [],
};

export default config;
