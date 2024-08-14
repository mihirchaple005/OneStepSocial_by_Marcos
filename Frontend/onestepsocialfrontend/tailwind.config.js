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
        'brand-red':'#ff0909',
          '0086A3': '#0086A3',
          'f1f9f9': '#f1f9f9',
        'brand-pink':'#fae3e2'
      }
    },
  },
  plugins: [],
}

