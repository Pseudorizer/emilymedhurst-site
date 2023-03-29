<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let icon: ComponentType;
	export let iconSize = '1.75rem';
	export let href: string;
	export let ariaLabel: string;
	export let colour: string | null = null;
	export let sameSite = false;
</script>

<a
	{href}
	target={sameSite ? '' : '_blank'}
	rel={sameSite ? '' : 'noreferrer noopener'}
	class={`hover:bg-lightHighlight hover:dark:bg-darkHighlight hover:text-lightStandout hover:dark:text-darkStandout rounded-xl p-1 w-min`}
	aria-label={ariaLabel}
>
	<svelte:component this={icon} size={iconSize} color={colour ?? 'currentColor'} />
</a>
