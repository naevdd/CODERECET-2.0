/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      seasons_r:['Seasons_r'],
      satoshi_v:['Satoshi_v'],
      bebas_neue:['Bebas']
    },
    animation: {
      'infinite-scroll': 'infinite-scroll 15s linear infinite',
    },
    keyframes: {
      'infinite-scroll': {
        "100%": { transform: 'translateX(0)' },
        "0%": { transform: 'translateX(-91%)' },
      }
    }    
  },
  },
  plugins: [],
}