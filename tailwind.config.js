/** @type {import('tailwindcss').Config} */

const theme = require('./src/theme').default;

module.exports = {
  content: ['./App.tsx', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],

  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: theme.fontFamily,
      fontSize: theme.fontSize,

      borderRadius: {
        card: '16px',
        button: '12px',
      },
    },
  },

  plugins: [],
};
