/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			sans: ['Atkinson Hyperlegible', 'Helvetica'],
			mono: ['Jetbrains Mono Variable', 'Consolas']
		},
		extend: {
			colors: {
				dark: '#191716',
				light: '#f5f5f5',
				darkHighlight: '#2B2826',
				lightHighlight: '#E3E3E3',
				darkStandout: '#EEB5C1',
				lightStandout: '#70192C'
			}
		}
	},
	plugins: []
};
