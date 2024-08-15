/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      // primary: '#BF7AE7',
    // primary: '#6B4226',
    primary: '#8B5E34',
      'dark-purple': '#5A3E2B',
      'light-purple': '#704214',
      white: '#FAFAFA',
      // black: '#060606',
      black: '#2C2C2C',
      'blue': '#4169E1',
      'marrom':'#6B4226'
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      backgroundImage: {
        home: "url('https://images.unsplash.com/photo-1623853434105-8e7a72898180?q=80&w=3462&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'home-2':
          "url('https://images.unsplash.com/photo-1623853589874-864b1dd4d922?q=80&w=3442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
    },
  },
};
