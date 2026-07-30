const fs = require("fs");
const path = require("path");

const themeConfig = JSON.parse(
  fs.readFileSync(path.join(__dirname, "src/config/theme.json"), "utf8")
);

const { colors, fonts } = themeConfig;
const { theme_color, text_color } = colors.default;
const { font_family, font_size } = fonts;
const scale = Number(font_size.scale || 1.2);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8b5cf6",
        body: "#08081a",
        border: "#2e2e55",
        light: "#11112a",
        text: {
          DEFAULT: "#c4c4e0",
          dark: "#fafafa",
        },
      },
      fontFamily: {
        primary: [
          "Inter",
          "sans-serif",
        ],
      },
      fontSize: {
        "h1": "1.2000rem",
        "h1-sm": "1.0800rem",
        "h2": "1.4400rem",
        "h2-sm": "1.2960rem",
        "h3": "1.7280rem",
        "h3-sm": "1.5552rem",
        "h4": "2.0736rem",
        "h4-sm": "1.8662rem",
        "h5": "2.4883rem",
        "h5-sm": "2.2395rem",
        "h6": "2.9860rem",
        "h6-sm": "2.6874rem"
},
      spacing: {
        1.25: "0.3125rem",
        2.25: "0.5625rem",
        4.25: "1.0625rem",
        10.5: "2.625rem",
        17.5: "4.375rem",
      },
      lineHeight: {
        4.5: "1.125rem",
      },
      maxWidth: {
        285: "71.25rem",
      },
      boxShadow: {
        DEFAULT: "0 12px 24px -6px rgba(45, 67, 121, 0.1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-bootstrap-grid")({ generateContainer: false }),
  ],
};
