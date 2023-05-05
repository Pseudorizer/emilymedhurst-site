<script lang="ts">
	export let value = '';
	export let placeholder = '';
</script>

<div
	class="flex items-center gap-2 rounded-lg bg-lightHighlight px-2 py-2 text-dark dark:bg-darkHighlight dark:text-light"
>
	<slot name="leftIcons" />
	<input
		bind:value
		class="flex-1 bg-lightHighlight px-2 py-1 text-dark outline-lightStandout placeholder:text-dark dark:bg-darkHighlight dark:text-light dark:outline-darkStandout dark:placeholder:text-light"
		type="text"
		{placeholder}
	/>
	<slot name="rightIcons" />
</div>
