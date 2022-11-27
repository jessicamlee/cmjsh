/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px'
    },
    extend: {

      colors: {
        darkBlue: 'rgba(7, 8, 46, 1)',
        lightBlue: 'rgba(79, 177, 212, 1)',
        vlightBlue: 'rgba(162, 222, 237, 0.5)',
        roleDark: 'rgba(2, 4, 90, 1)',
        roleLight: 'rgba(209, 239, 247, 1)',
      },

      fontFamily: {
        Overpass: "'Overpass', sans-serif",
      },

      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        bold: '700',
      },
      
      zIndex: {
        '1':'1',
      }
    }
  },
  plugins: [],
}
