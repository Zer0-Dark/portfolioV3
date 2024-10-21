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
      },
      cursor: {
        'cool': 'url(/src/assets/coolcursor.png) , pointer',
        'pointer': 'url(/src/assets/pointer.png) , pointer',
        'gun': 'url(/src/assets/gun1.png) , pointer',
        'gunPointer': 'url(/src/assets/gun2.png),pointer'
      }
    }, screens: {
      'desktop': '1024px',
      'bigDesktop': '1600px'
    }
  },
  plugins: [],
}

