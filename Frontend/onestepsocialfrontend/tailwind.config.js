/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'custom-gradient': 'linear-gradient(to right, #ff0909, #666666)'
      },
      colors:{
        'brand-red':'#ff0909'
      }
    },
  },
  plugins: [],
}

