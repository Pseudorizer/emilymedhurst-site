import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import Icons from 'unplugin-icons/vite';
import mdx from '@astrojs/mdx';
import critters from 'astro-critters';
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
		expressiveCode({
			plugins: [pluginLineNumbers(), pluginCollapsibleSections()],
			themes: ['catppuccin-mocha', 'catppuccin-latte']
		}),
		mdx({
			optimize: true
		}),
		critters()
	],
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
			Icons({
				compiler: 'astro',
				autoInstall: true
			})
		]
	}
});
