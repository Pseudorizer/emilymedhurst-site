<script lang="ts">
	import Block from '$lib/sections/Block.svelte';
	import Section from '$lib/Section.svelte';
	import { type ComponentProps, type ComponentType } from 'svelte';
	import TablerBrandReact from '~icons/tabler/brand-react';
	import TablerBrandSvelte from '~icons/tabler/brand-svelte';
	import TablerBrandTailwind from '~icons/tabler/brand-tailwind';
	import TablerBrandTypescript from '~icons/tabler/brand-typescript';
	import TablerBrandVercel from '~icons/tabler/brand-vercel';
	import TablerBrandVite from '~icons/tabler/brand-vite';
	import TablerBrandAstro from '~icons/tabler/brand-astro';
	import TablerBrandGithub from '~icons/tabler/brand-github';
	import trackingEnabled from '$lib/stores/trackingStore';
	import { createCrumb } from '$lib/helpers';

	const typescriptCrumb = createCrumb(TablerBrandTypescript, 'typescript');
	const reactCrumb = createCrumb(TablerBrandReact, 'react');
	const svelteCrumb = createCrumb(TablerBrandSvelte, 'svelte');
	const tailwindCrumb = createCrumb(TablerBrandTailwind, 'tailwind');
	const vercelCrumb = createCrumb(TablerBrandVercel, 'vercel');
	const viteCrumb = createCrumb(TablerBrandVite, 'vite');
	const astroCrumb = createCrumb(TablerBrandAstro, 'astro');
	const githubPagesCrumb = createCrumb(TablerBrandGithub, 'github pages');

	$: links = {
		scrabble: $trackingEnabled
			? 'https://dub.sh/wqXwDGR'
			: 'https://github.com/MiniCheese26/scrabble-coursework',
		brickStore: $trackingEnabled
			? 'https://dub.sh/SIu5pSA'
			: 'https://github.com/MiniCheese26/brick-store-coursework',
		companyAddressTracker: $trackingEnabled
			? 'https://dub.sh/DhDsiqK'
			: 'https://github.com/MiniCheese26/company-address-tracker',
		matrixLibrary: $trackingEnabled
			? 'https://dub.sh/I450W6I'
			: 'https://github.com/MiniCheese26/loc0CoreMatrixClient',
		thisSite: $trackingEnabled
			? 'https://dub.sh/qprUfGY'
			: 'https://github.com/MiniCheese26/emilymedhurst-site',
		viteEntriesPlugin: $trackingEnabled
			? 'https://dub.sh/o7P2JW7'
			: 'https://github.com/MiniCheese26/vite-plugin-svelte-entries-generator',
		disso: $trackingEnabled ? 'https://dub.sh/jGPzNOI' : 'https://github.com/pompeybug/website/'
	};

	$: blocks = [
		[
			Block,
			{
				title: 'Scrabble Coursework',
				description:
					'First year university coursework where I designed and created an online browser-based Scrabble game.',
				link: links.scrabble,
				tags: [reactCrumb, typescriptCrumb, 'express', 'websockets']
			}
		],
		[
			Block,
			{
				title: 'Brick Store Coursework',
				description:
					'Second year university coursework where I designed and created an online storefront for a Lego brick store',
				link: links.brickStore,
				tags: [typescriptCrumb, 'fastify', 'auth0', 'postgresql']
			}
		],
		[
			Block,
			{
				title: 'Company Address Tracker',
				description:
					'A prototype desktop tool I made for a local company to manage company addresses.',
				link: links.companyAddressTracker,
				tags: [reactCrumb, typescriptCrumb, 'electron']
			}
		],
		[
			Block,
			{
				title: 'Basic Matrix.org Bot Library',
				description: 'A basic library I wrote for writing basic bots for Matrix.org chats in C#.',
				link: links.matrixLibrary,
				tags: ['C#', 'outdated']
			}
		],
		[
			Block,
			{
				title: 'This site',
				description: 'This site is simple, accessible and comfy, I like it :)',
				link: links.thisSite,
				tags: [svelteCrumb, typescriptCrumb, tailwindCrumb, vercelCrumb]
			}
		],
		[
			Block,
			{
				title: 'vite-plugin-svelte-entries-generator',
				description:
					"A vite plugin to generate SvelteKit prerender entries for paths that can't be scraped automatically",
				link: links.viteEntriesPlugin,
				tags: [viteCrumb, svelteCrumb, typescriptCrumb]
			}
		],
		[
			Block,
			{
				title: 'Undergraduate Dissertation (WIP)',
				description:
					'A cheap, fast and client-agnostic blogging platform initially designed and built for the Portsmouth Cycle Forum',
				link: links.disso,
				tags: [astroCrumb, typescriptCrumb, svelteCrumb, githubPagesCrumb]
			}
		]
	] satisfies [ComponentType<Block>, ComponentProps<Block>][];

	$: shouldModifyLastBlock = (index: number) => {
		return blocks.length % 2 === 1 && index === blocks.length - 1;
	};
</script>

<Section title="Portfolio">
	<div class="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 md:gap-y-2">
		{#each blocks as [component, props], index}
			<svelte:component
				this={component}
				{...{ containerClass: shouldModifyLastBlock(index) ? 'md:col-span-2' : '', ...props }}
			/>
		{/each}
	</div>
</Section>
