/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        menu_text:['Roboto Condensed', 'sans-serif' ]
      }
    },
  },
  plugins: [],
}

