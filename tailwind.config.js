/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-black":'#0A0A0A',
        'custom-yellow': '#C88D28',
        'custom-white': '#E6E6FA',
        'custom-gray':'#9C9C9C'
      },
      fontFamily: {
        seasons_r:['Seasons_r'],
        satoshi_v:['Satoshi_v'],
        bebas_neue:['Bebas']
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 15s linear infinite',
        float: "float 2s ease-in-out infinite",
        'scroll-right': 'scroll-right 10s linear infinite',
        'scroll-left': 'scroll-left 10s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          "100%": { transform: 'translateX(0)' },
          "0%": { transform: 'translateX(-91%)' },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-40px)" },
        },
        'scroll-right': {
          "0%": { transform: 'translateX(0)' },
          "100%": { transform: 'translateX(100%)' },
        },
        'scroll-left': {
          "0%": { transform: 'translateX(0)' },
          "100%": { transform: 'translateX(-100%)' },
        }
      }    
    }
  },
  plugins: [],
}
