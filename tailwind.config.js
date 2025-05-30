// tailwind.config.js
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      colors: {
        background: "#f7f7f5",
        mint: "#cfe8cc",
        ocean: "#b3cdd1",
        blush: "#fcd5ce",
      },
    },
  },
  plugins: [],
};
