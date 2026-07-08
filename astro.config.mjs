import { rehypeHeadingIds, unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import a11yEmoji from '@fec/remark-a11y-emoji';
import rehypeSectionize from '@hbsnow/rehype-sectionize';
import tailwindcss from '@tailwindcss/vite';
import expressiveCode from 'astro-expressive-code';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkCapitalizeHeadings from 'remark-capitalize-headings';
import remarkToc from 'remark-toc';
import Icons from 'unplugin-icons/vite';

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
			themes: ['catppuccin-mocha', 'catppuccin-latte'],
			styleOverrides: {
				uiFontFamily: 'Atkinson Hyperlegible, system-ui, sans-serif',
				codeFontFamily: '"Atkinson Hyperlegible Mono Variable", Consolas'
			}
		}),
		mdx({
			optimize: true
		})
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
		processor: unified({
			remarkPlugins: [remarkCapitalizeHeadings, a11yEmoji, remarkToc],
			rehypePlugins: [
				rehypeHeadingIds,
				[
					rehypeAutolinkHeadings,
					{
						behavior: 'wrap'
					}
				],
				rehypeSectionize
			]
		})
	},
	build: {
		inlineStylesheets: 'always'
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
