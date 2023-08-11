/** @type {import('tailwindcss').Config} */

import { nextui } from '@nextui-org/react';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mainGreen: '#00ff7f',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
