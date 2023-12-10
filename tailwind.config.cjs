const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F8F9FA',
          100: '#F0F2F4',
          200: '#DEE2E6',
          300: '#C4C4C4',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        },
        primary: { ...colors.blue, 900: '#041E42' },
        secondary: colors.slate,
        accent: colors.sky,
        success: colors.emerald,
        danger: colors.rose,
        blue: { ...colors.blue, 900: '#041E42' },
      },
    },
  },
  plugins: [require('@kobalte/tailwindcss')],
};
