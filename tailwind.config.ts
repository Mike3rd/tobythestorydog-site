import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        background: "var(--color-background)",
        text: "var(--color-text)",
        text_hero_title: "var(--color-hero-title)",
        text_hero_subtitle: "var(--color-hero-subtitle)",
        buttons: "var(--color-buttons)",
        color_facebook: "var(--color-facebook)",
        color_instagram: "var(--color-instagram)",
      },
      fontFamily: {
        fredoka: ["var(--font-fredoka)", "cursive"],
        nunito: ["var(--font-nunito)", "sans-serif"],
        barriecito: ["var(--font-barriecito)", "sans-serif"],
        rubik: ["var(--font-rubik)", "sans-serif"],
        luckiestguy: ["var(--font-luckiestguy)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
