/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Grandstander':'"Grandstander", cursive',
        'Poppins':'"Poppins", sans-serif',
      },
      boxShadow:{
        'Dropbtn':'0px 0px 5px 0px rgba(89,40,229,1)',
        'LinkBox':'0px 0px 5px 0px rgba(0,0,0,0.75)',
      },
    },
  },
  plugins: [],
}