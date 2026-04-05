/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        k9: {
          green: '#16A34A',
          'green-dark': '#052E16',
          'green-light': '#F0FDF4',
          'green-mid': '#15803D',
        },
        surface: {
          DEFAULT: '#FAFAF9',
          card: '#FFFFFF',
        },
        neutral: {
          950: '#0A0A0A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
