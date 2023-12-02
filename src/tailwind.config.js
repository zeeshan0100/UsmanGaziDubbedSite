/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '680px',
      'md': '768px', // redefined to 768px
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      screens: {
        'xs': {'min':'300px','max':'680px'},
        'xxs': {'min':'300px','max':'450px'},
        'xxxs': {'min':'100px','max':'300px'},
      },
    },
    
  },
  plugins: [],
}