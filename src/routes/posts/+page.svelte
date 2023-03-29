<script lang="ts">
	import Headers from '$lib/Headers.svelte';
	import Block from '$lib/sections/Block.svelte';
	import type { PageData } from './$types';
	import Fuse from 'fuse.js';
	import Input from '$lib/inputs/Input.svelte';
	import { IconSearch, IconX } from '@tabler/icons-svelte';
	import dayjs from 'dayjs';
	import AdvancedFormat from 'dayjs/plugin/advancedFormat';
  import IconButton from '$lib/icon/IconButton.svelte';
	dayjs.extend(AdvancedFormat);
	export let data: PageData;

	const maxPosts = 10;
	let page = 1;

	const searchableData = data.posts.map((post) => ({
		slug: post.slug,
		title: post.title,
		description: post.summary,
		tags: post.tags
	}));

	let searchTerm = '';

	const fuse = new Fuse(searchableData, {
		keys: ['title', 'description', 'tags']
	});

	const resetPage = () => {
		page = 1;
	};

	$: searchTerm, resetPage();
	$: postsToLoad = page * maxPosts;

	$: searchResults = fuse.search(searchTerm).map((result) => result.item.slug);
	$: filteredPosts = searchTerm
		? data.posts.filter((post) => searchResults.includes(post.slug))
		: data.posts;
</script>

<Headers title="Posts" description="All my little notes" />

<div class="flex flex-col gap-2">
	<Input bind:value={searchTerm} placeholder="Search for a post...">
		<IconSearch slot="leftIcons" />
		<IconButton slot="rightIcons" icon={IconX} ariaLabel="Clear search term" on:click={() => searchTerm = ''} />
	</Input>
	{#if filteredPosts.length === 0}
		<h3>No posts found :(</h3>
	{:else}
		<ul class="flex flex-col gap-2">
			{#each filteredPosts.slice(0, postsToLoad) as post}
				<li>
					<Block
						title={post.title}
						description={post.summary}
						link={`/posts/${post.slug}`}
						linkSameSite
						linkPreload="hover"
						tags={post.tags ?? []}
						subheading={`Posted on ${dayjs(post.created).format('Do MMMM YYYY [at] HH:mm')}`}
					/>
				</li>
			{/each}
		</ul>
		{#if postsToLoad < filteredPosts.length}
			<Block>
				<div class="flex justify-center">
					<button on:click={() => (page += 1)}>Load More</button>
				</div>
			</Block>
		{/if}
	{/if}
</div>
