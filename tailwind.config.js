/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-5": {
      transform: "rotateY(15deg) skewY(3deg)",
    },
    ".-rotate-y-5": {
      transform: "rotateY(15deg) skewY(-3deg)",
    },
    "-rotate-y-3": {
      transform: "rotateY(30deg) skewY(2deg)",
    },
    ".perspective-2000": {
      perspective: "2000px",
    },
    ".transform-perserve-3d": {
      "transform-style": "preserve-3d",
    },
    ".bg-dark-mode": {
      "background-color": "#0a192f",
    },
    ".text-dark-mode": {
      color: "#76ABAE",
    },
    ".bg-dark-mode2nd": {
      "background-color": "#76ABAE",
    },
    ".transform-scale-x": {
      transform: "scaleX(.5)",
    },
  });
});

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [rotateX],
  darkMode: "class",
};
