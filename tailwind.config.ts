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
        primary: "#FFB347",         // Direct color values work better
        secondary: "#FF7E6B",
        accent: "#FFD56B",
        background: "#FFF8F0",
        text: "#333333",
        buttons: "#FFB347",
      },
      fontFamily: {
          rubik: ["Rubik", "sans-serif"],
           londrinashadow: ["Londrina Shadow", "sans-serif"],
  fredoka: ["Fredoka One", "cursive"],
  nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;