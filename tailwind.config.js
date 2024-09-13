/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        'mainTextColor': '#FFFFFF',
        'secondryTextColor': '#6F4BFF',
        'mainBgColor': '#141414',
        'secondryBgColor': '#000000',
        'thirdBgColor': '#AAAAAA',
      }
    },
  },
  plugins: [],
}

