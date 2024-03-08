import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import vercel from '@astrojs/vercel/static';
import Icons from 'unplugin-icons/vite';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import critters from 'astro-critters';

// https://astro.build/config
export default defineConfig({
	site: 'https://emilymedhurst.gay',
	integrations: [
		tailwind({
			nesting: true,
			applyBaseStyles: false
		}),
		sitemap(),
		robotsTxt(),
		svelte(),
		mdx(),
		critters()
	],
	prefetch: true,
	adapter: vercel({
		webAnalytics: true
	}),
	markdown: {
		shikiConfig: {
			experimentalThemes: {
				dark: 'catppuccin-mocha',
				light: 'catppuccin-latte'
			}
		}
	},
	vite: {
		resolve: {
			alias: [
				{
					find: 'icons:svelte',
					replacement: '~icons'
				},
				{
					find: 'icons:astro',
					replacement: '~icons'
				}
			]
		},
		plugins: [
			Icons({
				compiler: 'svelte',
				autoInstall: true
			}),
			Icons({
				compiler: 'astro',
				autoInstall: true
			})
		]
	}
});
