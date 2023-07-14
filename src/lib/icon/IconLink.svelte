<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let icon: ComponentType;
	export let iconSize = '1.75rem';
	export let href: string;
	export let ariaLabel: string;
	export let colour: string | null = null;
	export let sameSite = false;
	export let rel = '';
</script>

<a
	{href}
	target={sameSite ? '' : '_blank'}
	rel={sameSite ? rel : `noreferrer noopener ${rel}`}
	class={`w-min rounded-xl p-1 hover:bg-lightHighlight hover:text-lightStandout hover:dark:bg-darkHighlight hover:dark:text-darkStandout flex items-center`}
	aria-label={ariaLabel}
	title={ariaLabel}
>
	<svelte:component this={icon} size={iconSize} color={colour ?? 'currentColor'} />
</a>
