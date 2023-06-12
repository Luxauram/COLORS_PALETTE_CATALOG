/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      sans: ['Roboto Condensed', "sans-serif"]
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px'
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
