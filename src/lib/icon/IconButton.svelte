<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let icon: ComponentType;
	export let iconSize = '1.75rem';
	export let ariaLabel: string;
</script>

<button class="rounded-xl p-1 hover:bg-light hover:dark:bg-dark" aria-label={ariaLabel} on:click>
	<svelte:component this={icon} style={`font-size: ${iconSize}`} />
</button>
