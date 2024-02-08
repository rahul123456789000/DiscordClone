/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 960px) { ... }

      'lg': '991px',
      // => @media (min-width: 1440px) { ... }
      'xl': '1496px',
    },
    extend: {},
  },
  plugins: [],
  fontFamily:{
    Whitney:["Whitney"],
    Ginto:["Ginto"],
    ggSans:["ggSans"],
  },
}