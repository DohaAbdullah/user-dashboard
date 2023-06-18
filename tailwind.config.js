/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fec7d7",
        headline: "#0e172c",
        paragraph: "#0e172c",
        button: "#0e172c",
        "button-text": "#fffffe",
        illustration: {
          stroke: "#0e172c",
        },
        main: "#f9f8fc",
        highlight: "#fec7d7",
        secondary: "#d9d4e7",
        tertiary: "#a786df",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
