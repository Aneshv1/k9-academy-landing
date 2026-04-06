/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        k9: {
          orange: '#E8611A',
          'orange-dark': '#C44D10',
          'orange-light': '#FFF4ED',
          green: '#28A745',
        },
        brand: {
          charcoal: '#1A1A1A',
          'charcoal-light': '#2A2A2A',
          dark: '#111111',
          muted: '#F5F5F4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
