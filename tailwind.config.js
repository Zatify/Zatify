/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '1.5xl': '1440px',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
