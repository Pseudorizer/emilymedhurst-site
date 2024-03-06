import adapter from '@sveltejs/adapter-static';
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
		adapter: adapter(),
		csp: {
			directives: {
				'script-src': ['self', 'unsafe-inline', 'https://va.vercel-scripts.com/'],
				'frame-src': ['self', 'https://restreamer.pseudorizer.com/'],
				'object-src': ['none'],
				'base-uri': ['self']
			}
		},
		alias: {
			"$lib/*": "src/lib/*",
			"$content/*": "src/content/*",
			"$src/*": "src/*",
			"$routes/*": "src/routes/*",
		}
	}
};

export default config;
