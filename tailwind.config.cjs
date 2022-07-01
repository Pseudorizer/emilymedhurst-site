/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#1a202c',
        light: '#f5f5f5',
        highlight: '#ffc107',
      }
    }
  },
  plugins: []
};

