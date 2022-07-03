/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#191716',
        light: '#f5f5f5',
        darkHighlight: '#2B2826',
        lightHighlight: '#E3E3E3',
        highlight: '#EEB5C1'
      }
    }
  },
  plugins: []
};

