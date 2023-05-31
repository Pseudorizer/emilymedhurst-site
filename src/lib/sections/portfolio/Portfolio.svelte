<script lang="ts">
	import Block from '$lib/sections/Block.svelte';
	import Section from '$lib/Section.svelte';
	import { onMount } from 'svelte';
	import IconBrandReact from '@tabler/icons-svelte/dist/svelte/icons/IconBrandReact.svelte';
	import IconBrandSvelte from '@tabler/icons-svelte/dist/svelte/icons/IconBrandSvelte.svelte';
	import IconBrandTailwind from '@tabler/icons-svelte/dist/svelte/icons/IconBrandTailwind.svelte';
	import IconBrandTypescript from '@tabler/icons-svelte/dist/svelte/icons/IconBrandTypescript.svelte';
	import IconBrandVercel from '@tabler/icons-svelte/dist/svelte/icons/IconBrandVercel.svelte';
	import IconBrandVite from '@tabler/icons-svelte/dist/svelte/icons/IconBrandVite.svelte';
	import trackingEnabled from '$lib/stores/trackingStore';

	let container: HTMLDivElement;

	onMount(() => {
		if (container && container.children.length % 2 !== 0) {
			const lastChild = container.lastElementChild;

			if (lastChild) {
				lastChild.classList.add('md:col-span-2');
			}
		}
	});

	const typescriptCrumb = {
		icon: IconBrandTypescript,
		text: 'typescript'
	};

	const reactCrumb = {
		icon: IconBrandReact,
		text: 'react'
	};

	const svelteCrumb = {
		icon: IconBrandSvelte,
		text: 'sveltekit'
	};

	const tailwindCrumb = {
		icon: IconBrandTailwind,
		text: 'tailwindcss'
	};

	const vercelCrumb = {
		icon: IconBrandVercel,
		text: 'vercel'
	};

	const viteCrumb = {
		icon: IconBrandVite,
		text: 'vite'
	};

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
			: 'https://github.com/MiniCheese26/vite-plugin-svelte-entries-generator'
	};
</script>

<Section title="Portfolio">
	<div bind:this={container} class="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 md:gap-y-2">
		<Block
			title="Scrabble Coursework"
			description="First year university coursework where I designed and created an online browser-based Scrabble game."
			link={links.scrabble}
			tags={[reactCrumb, typescriptCrumb, 'express', 'websockets']}
		/>
		<Block
			title="Brick Store Coursework"
			description="Second year university coursework where I designed and created an online storefront for a lego brick store"
			link={links.brickStore}
			tags={[typescriptCrumb, 'fastify', 'auth0', 'postgresql']}
		/>
		<Block
			title="Company Address Tracker"
			description="A prototype desktop tool I made for a local company to manage company addresses."
			link={links.companyAddressTracker}
			tags={[reactCrumb, typescriptCrumb, 'electron']}
		/>
		<Block
			title="Basic Matrix.org Bot Library"
			description="A basic library I wrote for writing basic bots for Matrix.org chats in C#."
			link={links.matrixLibrary}
			tags={['C#', 'outdated']}
		/>
		<Block
			title="This site"
			description="This site is simple, accessible and comfy, I like it :)"
			link={links.thisSite}
			tags={[svelteCrumb, typescriptCrumb, tailwindCrumb, vercelCrumb]}
		/>
		<Block
			title="vite-plugin-svelte-entries-generator"
			description="A vite plugin to generate sveltekit prerender entries for paths that can't be scraped automatically"
			link={links.viteEntriesPlugin}
			tags={[viteCrumb, svelteCrumb, typescriptCrumb]}
		/>
	</div>
</Section>
