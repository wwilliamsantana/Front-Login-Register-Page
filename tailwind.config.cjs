/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.tsx', 'index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        aurore: ["'La Belle Aurore'", 'cursive'],
      },
      backgroundImage: {
        gradient:
          'linear-gradient(90deg, rgba(2,191,247,1) 0%, rgba(47,38,253,1) 33%, rgba(179,21,160,1) 66%, rgba(252,10,110,1) 100%);',
      },
    },
  },
  plugins: [],
}
