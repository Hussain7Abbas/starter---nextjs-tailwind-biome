/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0071c2',
          dark: '#00509a',
        },
        secondary: '#f5a623',
        background: '#ffffff',
        foreground: '#333333',
        'light-gray': '#f5f5f5',
        gray: {
          DEFAULT: '#cccccc',
          dark: '#777777',
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        outfit: ['var(--font-outfit)'],
      },
      borderRadius: {
        'xl': '1rem',
      },
      boxShadow: {
        'card': '0 4px 15px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}; 