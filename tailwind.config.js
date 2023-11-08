/** @type {import('tailwindcss').Config} */

import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        sora: ["Sora"],
        inter: ["Inter Regular"],
        interBold: ["Inter Bold"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    //   {
    //   prefix: "nextui", // prefix for themes variables
    //   addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
    //   defaultTheme: "light", // default theme from the themes object
    //   defaultExtendTheme: "light",
    //   themes: {
    //     light: {
    //       layout: {}, // light theme layout tokens
    //       colors: {}, // light theme colors
    //     },
    //     dark: {
    //       layout: {}, // dark theme layout tokens
    //       colors: {}, // dark theme colors
    //     },
    //     // ... custom themes
    //   },
    // }
  ],
};
