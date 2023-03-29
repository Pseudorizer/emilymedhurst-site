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

<div class="bg-lightHighlight dark:bg-darkHighlight rounded-xl flex flex-col p-2">
	<slot />
	<h3>
		{#if link}
			<BodyLink href={link} sameSite={linkSameSite} preload={linkPreload}>{title}</BodyLink>
		{:else}
			{title}
		{/if}
	</h3>
	{#if subheading}
		<h4 class="text-xs mb-1">{subheading}</h4>
	{/if}
	<p>{description}</p>
	{#if tags.length > 0}
		<div class="flex flex-wrap mt-2.5 gap-x-1 gap-y-2">
			{#each tags as tag}
				{#if typeof tag === 'string'}
					<p
						class="text-sm border-2 border-gray-600 dark:border-gray-500 rounded-2xl p-1 px-2 select-none"
					>
						{tag}
					</p>
				{:else}
					<div
						class="border-2 border-gray-600 dark:border-gray-500 rounded-2xl p-1 px-2 select-none flex items-center gap-1"
					>
						<svelte:component this={tag.icon} size="1.25rem" />
						<p class="text-sm">{tag.text}</p>
					</div>
				{/if}
			{/each}
		</div>
	{/if}
</div>
