/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
  theme: {
    extend: {
      fontFamily: {
        mos: ['"mostra-nuova"', "sans-serif"],
        mont: ['"montserrat"', "sans-serif"],
      },
      colors: {
        red: {
          50: "#FBECE9",
          100: "#F8DAD3",
          200: "#F0B5A8",
          300: "#E9907C",
          400: "#E26B50",
          500: "#DB4726",
          600: "#AF381D",
          700: "#832A16",
          800: "#571C0F",
          900: "#2C0E07",
        },
        yellow: {
          50: "#FFF8EB",
          100: "#FFF3DB",
          200: "#FFE5B3",
          300: "#FFDA8F",
          400: "#FFCE6B",
          500: "#FFC145",
          600: "#FFAC05",
          700: "#C28100",
          800: "#805500",
          900: "#422C00",
        },
        darkblue: {
          50: "#ECF3F2",
          100: "#DAE7E5",
          200: "#B7D1CD",
          300: "#92B9B2",
          400: "#6DA298",
          500: "#538279",
          600: "#426760",
          700: "#324E49",
          800: "#223531",
          900: "#101917",
        },
        blue: {
          50: "#F2F7F6",
          100: "#E6F0EE",
          200: "#CCE0DD",
          300: "#B3D1CB",
          400: "#99C1BA",
          500: "#80B2A9",
          600: "#5C988D",
          700: "#45726A",
          800: "#2E4C47",
          900: "#172623",
        },
        dark: {
          500: "#1D0803",
        },
        beige: {
          100: "#FEFBF6",
          200: "#FCF7ED",
          300: "#FBF0E0",
          400: "#F9ECD7",
          500: "#F8E8CE",
        },
        grey: {
          100: "#818181",
        },
      },
      dropShadow: {
        drop: "0 0 2px 2px rgba(0, 0, 0, 0.25)",
      },
      boxShadow: {
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
};
