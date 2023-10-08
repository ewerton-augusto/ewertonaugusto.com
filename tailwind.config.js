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
      purplelight: "#BE8BFF60",
      "dark-purple": "#3E1D68",
      white: "#FFF",
      black: "#101010",
      red: "#ed1840",
    },
    extend: {
      backgroundImage: {
        'home': "url('/pdp/background.jpg')",
      }
    },
  },
  plugins: [],
};
