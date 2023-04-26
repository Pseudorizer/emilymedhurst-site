import { resolve } from 'path';
import mkcert from 'vite-plugin-mkcert';
import entitiesGenerator from 'vite-plugin-svelte-entries-generator';
import transform from './transform';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		mkcert(),
		entitiesGenerator({
			paths: [
				{
					apiPath: '/posts/[slug]',
					transform,
				},
			]
		}),
		ViteImageOptimizer({
			exclude: /\.svg$/i,
		}),
	],
	resolve: {
		alias: {
			$lib: resolve('./src/lib'),
			$content: resolve('./src/content'),
			$src: resolve('./src'),
			$routes: resolve('./src/routes'),
		}
	},
	css: { devSourcemap: true },
	server: {
		https: true
	}
};

export default config;
