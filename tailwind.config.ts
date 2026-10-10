import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        dark: "var(--color-dark)",
        "on-dark": "var(--color-on-dark)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
