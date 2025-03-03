/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000', // Púrpura profundo
          light: '#3B0B5F',
          dark: '#000000',
        },
        accent: {
          DEFAULT: '#7d43ea', // Rosa neón
          light: '#FF5983',
          dark: '#D91B4D',
        },
        interactive: {
          DEFAULT: '#3EDBF0', // Azul eléctrico
          light: '#62E2F4',
          dark: '#1CC4DC',
        },
        surface: {
          DEFAULT: '#F0F0F0', // Blanco perla
          dark: '#1A1A1A',
          light: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
