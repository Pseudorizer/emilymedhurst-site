<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let value = '';
	export let placeholder = '';
</script>

<div
	class="flex items-center rounded-lg bg-lightHighlight text-dark dark:bg-darkHighlight dark:text-light px-2 py-2 gap-2"
>
	<slot name="leftIcons" />
	<input
		bind:value
		class="flex-1 px-2 py-1 bg-lightHighlight text-dark dark:bg-darkHighlight dark:text-light outline-lightStandout dark:outline-darkStandout placeholder:text-dark dark:placeholder:text-light"
		type="text"
		{placeholder}
	/>
	<slot name="rightIcons" />
</div>
