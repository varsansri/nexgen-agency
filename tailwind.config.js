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
          "Plus Jakarta Sans",
          "sans-serif",
        ],
      },
      fontSize: {
        "h1": "4.1962rem",
        "h1-sm": "3.6240rem",
        "h2": "3.3569rem",
        "h2-sm": "2.8992rem",
        "h3": "2.6855rem",
        "h3-sm": "2.3193rem",
        "h4": "2.1484rem",
        "h4-sm": "1.8555rem",
        "h5": "1.7188rem",
        "h5-sm": "1.4844rem",
        "h6": "1.3750rem",
        "h6-sm": "1.1875rem"
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
