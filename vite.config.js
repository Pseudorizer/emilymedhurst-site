import { resolve } from 'path';

import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $lib: resolve('./src/lib')
    }
  },
  css: { devSourcemap: true }
};

export default config;
