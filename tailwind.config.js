/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customRed: '#FF0000',
        customGreen: '#00BF63',
        customBg: '#2D2D2D',
      },
      fontFamily: {
        handlee: ['Handlee'],
      },
      fontSize: {
        48: ['48px', '64px'],
        52: ['52px', '69px'],
        64: ['64px', '85px'],
        82: ['82px', '109px'],
        90: ['90px', '112px'],
        128: ['128px', '171px'],
      },
    },
  },
  plugins: [],
};
