/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#BF7AE7',
      'dark-purple': '#3E1D68',
      'light-purple': '#BE8BFF60',
      white: '#DADADA',
      black: '#060606',
    },
    extend: {
      backgroundImage: {
        home: "url('/pdp/background.jpg')",
      },
    },
    screens: {
      desktop: '1728px',
    },
  },
  plugins: [],
};
