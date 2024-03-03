import { resolve } from 'path';
import mkcert from 'vite-plugin-mkcert';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import Icons from 'unplugin-icons/vite';

import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		mkcert(),
		ViteImageOptimizer({
			webp: {
				lossless: false
			}
		}),
		Icons({ compiler: 'svelte' })
	],
	resolve: {
		alias: {
			$lib: resolve('./src/lib'),
			$content: resolve('./src/content'),
			$src: resolve('./src'),
			$routes: resolve('./src/routes')
		}
	},
	css: { devSourcemap: true }
};

export default config;
