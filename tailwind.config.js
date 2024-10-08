/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'green-wpp':'#25D366',
        'yellow-carneiro-e-carballido':'#fec632',
        'blue-carneiro-e-carballido':'#337a97',
        'dark-blue': '#002936',
        'dark-yellow': '#725915',
        'light-gray': '#EBEBEB'
      }
    },
  },
  plugins: [],
}

