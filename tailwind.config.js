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
        'yellow-carneiro-e-carballido':'#fbc848',
        'blue-carneiro-e-carballido':'#337a97'
      }
    },
  },
  plugins: [],
}

