import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import Icons from 'unplugin-icons/vite';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import critters from 'astro-critters';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeWidont from 'rehype-widont';
import rehypeSectionize from '@hbsnow/rehype-sectionize';

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
	markdown: {
		shikiConfig: {
			experimentalThemes: {
				dark: 'catppuccin-mocha',
				light: 'catppuccin-latte'
			}
		},
		rehypePlugins: [
			rehypeHeadingIds,
			[
				rehypeAutolinkHeadings,
				{
					behavior: 'wrap'
				}
			],
			rehypeWidont,
			rehypeSectionize
		]
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
