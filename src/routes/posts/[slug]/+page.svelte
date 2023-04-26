<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { base } from '$app/paths';
	import '$src/prism.css';
	import Block from '$lib/sections/Block.svelte';
	import type { PageData } from './$types';
	import dayjs from 'dayjs';
	import AdvancedFormat from 'dayjs/plugin/advancedFormat';
	import Layout from '$lib/Layout.svelte';
	import BodyLink from '$lib/BodyLink.svelte';
	import Headers from '$lib/Headers.svelte';
	dayjs.extend(AdvancedFormat);

	export let data: PageData;

	let previousPage: string = base;

	afterNavigate(({ from }) => {
		previousPage = from?.url.pathname || previousPage;
	});
</script>

{#if data.metadata}
	<article class="flex flex-col gap-2">
		<Block>
			<BodyLink href="/posts" sameSite classes="text-lg">My Other Posts</BodyLink>
		</Block>
		{#if !data.metadata.hidden}
			<Headers title={data.metadata.title} description={data.metadata.summary} type="article" />
			<Block
				title={data.metadata.title}
				description={data.metadata.summary}
				subheading={`Posted on ${dayjs(data.metadata.created).format('Do MMMM YYYY [at] HH:mm')}`}
			/>
			<Block tags={data.metadata.tags ?? []}>
				<Layout>
					<svelte:component this={data.page} />
				</Layout>
			</Block>
		{:else if data.metadata.hidden}
			<Headers title="This article is hidden" description="This article is hidden" type="article" />
			<Block title="This article is hidden" />
		{/if}
	</article>
{/if}
