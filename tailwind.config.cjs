/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
     "./src/**/*.{js,jsx,ts,tsx}"
     ,],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '481px',
      'md': '768px',
      'lg': '1000px',
      'xl': '1201px',
      '2xl': '1536px'

    },
    extend: {
      colors: {
        'primaryone': '#718b82',
        'primarytwo': '#0E402D',
        'primarythree': '#EC8D3B',
        'background': '#F8F9FA',
        'backgroundtwo': '#FFF8EB'
      }
    },
  },
  plugins: [],
}
