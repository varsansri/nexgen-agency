import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const themePath = path.join(__dirname, "../src/config/theme.json");

function generateTailwindConfig() {
  const themeConfig = JSON.parse(fs.readFileSync(themePath, "utf8"));
  const { colors, fonts } = themeConfig;
  const { theme_color, text_color } = colors.default;
  const { font_family, font_size } = fonts;
  const scale = Number(font_size.scale || 1.2);

  const fontName = font_family.primary.replace(/\+/g, " ").replace(/:.*/, "");
  const fontType = font_family.primary_type || "sans-serif";

  const sizes = {};
  for (let i = 1; i <= 6; i++) {
    const size = Math.pow(scale, i);
    sizes[`h${i}`] = `${size.toFixed(4)}rem`;
    sizes[`h${i}-sm`] = `${(size * 0.9).toFixed(4)}rem`;
  }

  const config = `const fs = require("fs");
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
        primary: "${theme_color.primary}",
        body: "${theme_color.body}",
        border: "${theme_color.border}",
        light: "${theme_color.light}",
        text: {
          DEFAULT: "${text_color.text}",
          dark: "${text_color["text_dark"]}",
        },
      },
      fontFamily: {
        primary: [
          "${fontName}",
          "${fontType}",
        ],
      },
      fontSize: ${JSON.stringify(sizes, null, 8)},
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
`;

  fs.writeFileSync(
    path.join(__dirname, "../tailwind.config.js"),
    config
  );
  console.log("Tailwind config generated from theme.json");
}

try {
  generateTailwindConfig();
} catch (error) {
  console.error("Error:", error.message);
  process.exit(1);
}

if (process.argv.includes("--watch")) {
  let debounceTimer;
  const watcher = fs.watch(themePath, (eventType) => {
    if (eventType === "change") {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        try { generateTailwindConfig(); } catch (e) { console.error("Error:", e.message); }
      }, 300);
    }
  });
  console.log("Watching for changes to:", themePath);
  process.on("SIGINT", () => {
    clearTimeout(debounceTimer);
    watcher.close();
    process.exit(0);
  });
}
