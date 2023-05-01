import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		mdsvex({
			extensions: ['.md', '.svx'],
			layout: 'src/lib/Layout.svelte',
		}),
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: vercel(),
		prerender: {entries: ["*","/posts/slacked-part-1"],  },
		csp: {
			directives: {
				'script-src': ['self', 'unsafe-inline', 'https://va.vercel-scripts.com/'],
				'frame-src': ['self', 'https://restreamer.pseudorizer.com/'],
				'object-src': ['none'],
				'base-uri': ['self']
			}
		}
	}
};

export default config;
