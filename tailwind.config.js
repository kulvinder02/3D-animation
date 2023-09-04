/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".dist/index.html"],
  theme: {
    extend: {
      fontfamily: {
        'Gilroy': ['Gilroybold'],
        'Gilroy': ['Gilroylight'],
      }
    },
  },
  plugins: [],
}

