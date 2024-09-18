/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        saira:['Saira','sans-serif'],
        muli: ['Muli','sans-serif'],
      },
      colors:{
        'primary':'#bd5e34',
        'secondary': '#353c40',
        'tert': '#73738b',
      },
      fontSize:{
        'textSM': '18px',
      }
    },
  },
  plugins: [],
}

