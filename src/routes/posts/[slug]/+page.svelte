<script lang="ts">
	import '$src/prism.css';
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

{#if data.metadata}
	<Headers title={data.metadata.title} description={data.metadata.summary} />
	<article class="flex flex-col gap-4">
		<IconLink icon={IconArrowNarrowLeft} href="/posts" ariaLabel="Back to posts" sameSite />
		{#if !data.metadata.hidden}
			<Block
				title={data.metadata.title}
				description={data.metadata.summary}
				subheading={`Posted on ${dayjs(data.metadata.created).format('Do MMMM YYYY [at] HH:mm')}`}
			/>
			<Block tags={data.metadata.tags ?? []}>
				<div
					class="[&_*]:py-1 [&_h1]:pt-4 [&_h1]:pb-4 [&_h2]:pt-3 [&_h2]:pb-3 [&_pre]:border-transparent [&_pre]:dark:border-light [&_pre]:border-solid [&_pre]:border-2"
				>
					<svelte:component this={data.page} />
				</div>
			</Block>
		{:else if data.metadata.hidden}
			<Block title="This article is hidden" />
		{/if}
	</article>
{/if}
