import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import Icons from 'unplugin-icons/vite';
import mdx from '@astrojs/mdx';
import critters from '@playform/inline';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeWidont from 'rehype-widont';
import rehypeSectionize from '@hbsnow/rehype-sectionize';
import remarkCapitalizeHeadings from 'remark-capitalize-headings';
import a11yEmoji from '@fec/remark-a11y-emoji';
import remarkToc from 'remark-toc';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import expressiveCode from 'astro-expressive-code';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://emilymedhurst.gay',
	integrations: [
		sitemap(),
		robotsTxt({
			sitemap: ['https://emilymedhurst.gay/sitemap-index.xml']
		}),
		expressiveCode({
			plugins: [pluginLineNumbers(), pluginCollapsibleSections()],
			themes: ['catppuccin-mocha', 'catppuccin-latte']
		}),
		mdx({
			optimize: true
		}),
		critters()
	],
	server: {
		headers: {
			'x-frame-options': 'SAMEORIGIN',
			'content-security-policy':
				"frame-src 'self' https://restreamer.pseudorizer.com/; object-src 'none'; base-uri 'self'; script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com/; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data:; font-src 'self' data:; default-src 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;"
		}
	},
	prefetch: true,
	markdown: {
		remarkPlugins: [remarkCapitalizeHeadings, a11yEmoji, remarkToc],
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
		plugins: [
			tailwindcss(),
			Icons({
				compiler: 'astro',
				autoInstall: true
			})
		]
	}
});
