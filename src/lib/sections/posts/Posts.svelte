<script lang="ts">
	import Section from '$lib/Section.svelte';
	import type { PostMetadata } from '$routes/page';
	import Block from '$lib/sections/Block.svelte';

	export let posts: PostMetadata[];
</script>

<Section title="Posts">
	{#each posts.slice(0, 5) as post}
		<Block
			title={post.title}
			description={post.summary}
			link={`/posts/${post.slug}`}
			linkSameSite
			linkPreload="hover"
			tags={post.tags ?? []}
		/>
	{/each}
	<slot />
</Section>
