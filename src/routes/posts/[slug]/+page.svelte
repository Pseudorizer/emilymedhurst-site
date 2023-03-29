<script lang="ts">
	import Headers from '$lib/Headers.svelte';
	import IconLink from '$lib/icon/IconLink.svelte';
	import Block from '$lib/sections/Block.svelte';
	import { IconArrowNarrowLeft } from '@tabler/icons-svelte';
	import type { PageData } from './$types';
	import dayjs from 'dayjs';
	import AdvancedFormat from 'dayjs/plugin/advancedFormat';
	dayjs.extend(AdvancedFormat);

	export let data: PageData;
</script>

<Headers title={data.metadata?.title ?? ''} description={data.metadata?.summary ?? ''} />
<svelte:head>
	<link href="/prism.css" rel="stylesheet" />
</svelte:head>

{#if data.metadata}
	<article class="flex flex-col gap-4">
		<IconLink icon={IconArrowNarrowLeft} href="/posts" ariaLabel="Back to posts" sameSite />
		<Block
			title={data.metadata.title}
			description={data.metadata.summary}
			subheading={`Posted on ${dayjs(data.metadata.created).format('Do MMMM YYYY [at] HH:mm')}`}
		/>
		<Block tags={data.metadata.tags ?? []}>
			<div
				class="[&_*]:py-1 [&_h1]:pt-4 [&_h1]:pb-4 [&_h2]:pt-3 [&_h2]:pb-3 [&_pre]:border-transparent [&_pre]:dark:border-light [&_pre]:border-solid [&_pre]:border-2"
			>
				<svelte:component this={data?.page} />
			</div>
		</Block>
	</article>
{/if}
