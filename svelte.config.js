import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svx'],
  preprocess: [
    mdsvex({ extensions: ['.md', '.svx'] }),
    preprocess({
      postcss: true,
    })],
  kit: {
    adapter: vercel(),
  },
};

export default config;
