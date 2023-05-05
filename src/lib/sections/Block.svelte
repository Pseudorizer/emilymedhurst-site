<script lang="ts">
	import type { PreloadDataOptions } from '$lib/BodyLink';
	import BodyLink from '$lib/BodyLink.svelte';
	import type { Tag } from './Block';

	export let title = '';
	export let subheading = '';
	export let description = '';
	export let link = '';
	export let linkSameSite = false;
	export let linkPreload: PreloadDataOptions = 'off';
	export let tags: (Tag | string)[] = [];
</script>

<div class="flex flex-col rounded-xl bg-lightHighlight p-2 dark:bg-darkHighlight">
	<slot />
	<h3>
		{#if link}
			<BodyLink href={link} sameSite={linkSameSite} preload={linkPreload}>{title}</BodyLink>
		{:else}
			{title}
		{/if}
	</h3>
	{#if subheading}
		<h4 class="mb-1 text-xs">{subheading}</h4>
	{/if}
	<p>{description}</p>
	{#if tags.length > 0}
		<div class="mt-2.5 flex flex-wrap gap-x-1 gap-y-2">
			{#each tags as tag}
				{#if typeof tag === 'string'}
					<p
						class="select-none rounded-2xl border-2 border-gray-600 p-1 px-2 text-sm dark:border-gray-500"
					>
						{tag}
					</p>
				{:else}
					<div
						class="flex select-none items-center gap-1 rounded-2xl border-2 border-gray-600 p-1 px-2 dark:border-gray-500"
					>
						<svelte:component this={tag.icon} size="1.25rem" />
						<p class="text-sm">{tag.text}</p>
					</div>
				{/if}
			{/each}
		</div>
	{/if}
</div>
