import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		mdsvex({ extensions: ['.md', '.svx'] }),
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: vercel(),
		prerender: {entries: ["*"],  },
		csp: {
			directives: {
				'script-src': ['self', 'unsafe-inline'],
				'frame-src': ['self', 'https://restreamer.pseudorizer.com/'],
				'object-src': ['none'],
				'base-uri': ['self'],
				'require-trusted-types-for': ['script']
			}
		}
	}
};

export default config;
