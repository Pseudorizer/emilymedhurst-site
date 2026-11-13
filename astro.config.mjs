import { readFileSync } from 'node:fs';

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

/**
 * Production headers live in public/_headers (served by Cloudflare). Parse the
 * `/*` block so the dev server uses the same values instead of a second copy.
 */
const readProductionHeaders = () => {
	const lines = readFileSync(new URL('./public/_headers', import.meta.url), 'utf8').split('\n');
	const headers = {};
	let inAllPaths = false;

	for (const line of lines) {
		if (!line.trim()) continue;
		if (!/^\s/.test(line)) {
			inAllPaths = line.trim() === '/*';
			continue;
		}
		if (!inAllPaths) continue;

		const separator = line.indexOf(':');
		headers[line.slice(0, separator).trim().toLowerCase()] = line.slice(separator + 1).trim();
	}

	return headers;
};

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
		// Mirror the production headers in dev so CSP problems show up locally.
		headers: readProductionHeaders()
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
