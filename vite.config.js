import { resolve } from 'path';
import mkcert from'vite-plugin-mkcert'

import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), mkcert()],
  resolve: {
    alias: {
      $lib: resolve('./src/lib')
    }
  },
  css: { devSourcemap: true },
  server: {
    https: true,
  }
};

export default config;
