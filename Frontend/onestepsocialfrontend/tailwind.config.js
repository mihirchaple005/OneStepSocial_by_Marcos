/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        indie: ['Indie-Flower', 'sans-serif'], // Example with a custom font name
        julius: ['Julius Sans One'],
        lato: ['Lato', 'sans-serif'],
      },

      backgroundImage:{
        'custom-gradient': 'linear-gradient(to right, #ff0909, #666666)'
      },
      colors:{
        'brand-red':'#ff0909'
      }

    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',  /* Internet Explorer 10+ */
          'scrollbar-width': 'none',  /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none',  /* Safari and Chrome */
          },
        },
      });
    },
  ],
}

