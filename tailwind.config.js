/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#4C76BD",
      purple: "#BE8BFF",
      "dark-purple": "#3E1D68",
      white: "#FFF",
      black: "#101010",
    },
    extend: {},
  },
  plugins: [],
};
