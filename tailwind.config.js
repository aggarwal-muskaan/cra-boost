// /** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    ...defaultTheme,
    screens: {
      xs: '340px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        // customise your font-family
        display: ['Montserrat', ...defaultTheme.fontFamily.serif],
        body: ['Montserrat', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.vertical-lr': {
          'writing-mode': ' vertical-lr',
        },
        '.vertical-rl': {
          'writing-mode': ' vertical-rl',
        },
      });
    }),
  ],
};
