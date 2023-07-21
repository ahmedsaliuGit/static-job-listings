/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["League Spartan", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "hsl(180, 29%, 50%)",
        background: "hsl(180, 52%, 96%)",
        "filter-tablet": "hsl(180, 31%, 95%)",
        "dark-grayish-cygan": "hsl(180, 8%, 52%)",
        "v-dark-grayish-cygan": "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.l") },
      });
    }),
  ],
};
