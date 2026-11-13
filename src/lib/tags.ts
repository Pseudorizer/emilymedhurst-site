import TablerBrandAstro from '~icons/tabler/brand-astro';
import TablerBrandCloudflare from '~icons/tabler/brand-cloudflare';
import TablerBrandGithub from '~icons/tabler/brand-github';
import TablerBrandLaravel from '~icons/tabler/brand-laravel';
import TablerBrandMysql from '~icons/tabler/brand-mysql';
import TablerBrandNextjs from '~icons/tabler/brand-nextjs';
import TablerBrandPhp from '~icons/tabler/brand-php';
import TablerBrandReact from '~icons/tabler/brand-react';
import TablerBrandRedux from '~icons/tabler/brand-redux';
import TablerBrandSvelte from '~icons/tabler/brand-svelte';
import TablerBrandTailwind from '~icons/tabler/brand-tailwind';
import TablerBrandTypescript from '~icons/tabler/brand-typescript';
import TablerBrandVite from '~icons/tabler/brand-vite';

import type { Tag } from './types';

/** Tech tags with an icon, shared by the Experience and Portfolio sections. */
export const tags = {
	astro: { icon: TablerBrandAstro, text: 'astro' },
	cloudflare: { icon: TablerBrandCloudflare, text: 'cloudflare' },
	githubPages: { icon: TablerBrandGithub, text: 'github pages' },
	laravel: { icon: TablerBrandLaravel, text: 'laravel' },
	mysql: { icon: TablerBrandMysql, text: 'mysql' },
	nextjs: { icon: TablerBrandNextjs, text: 'nextjs' },
	php: { icon: TablerBrandPhp, text: 'php' },
	react: { icon: TablerBrandReact, text: 'react' },
	redux: { icon: TablerBrandRedux, text: 'redux' },
	svelte: { icon: TablerBrandSvelte, text: 'svelte' },
	tailwind: { icon: TablerBrandTailwind, text: 'tailwind' },
	typescript: { icon: TablerBrandTypescript, text: 'typescript' },
	vite: { icon: TablerBrandVite, text: 'vite' }
} satisfies Record<string, Tag>;
