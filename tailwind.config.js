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
        'thirdBgColor': '#EFEFEF',
        'ForuthBgColor': "#1f1f1fff",
        "linkColor": "#FFFF99"
      },
      cursor: {
        'cool': 'url(/src/assets/coolcursor.png), pointer',
        'pointer': 'url(/src/assets/pointer.png), pointer',
        'gun': 'url(/src/assets/gun1.png), pointer',
        'gunPointer': 'url(/src/assets/gun2.png), pointer'
      }
      ,
      fontFamily: {
        game: ["'Press Start 2P'", 'monospace']
      }
    }, screens: {
      'desktop': '1024px',
      'bigDesktop': '1600px'
    }
  },
  plugins: [],
}

