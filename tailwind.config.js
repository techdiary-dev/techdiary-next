const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#8A9CFE",
        secondary: "#FDF9F3",
        slate: colors.slate,
      },
      fontFamily: {
        KohinoorBangla: ["KohinoorBangla", "Nunito", "Arial"],
        siliguri: ["Hind Siliguri", "Nunito", "Arial"],
        mono: ["Fira Code", "techdiary-bangla", "monospace"],
        boshonto: ["Boshonto", "Kohinoor Bangla"],
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
