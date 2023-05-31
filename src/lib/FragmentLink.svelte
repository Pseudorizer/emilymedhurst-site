<script lang="ts">
	import IconLink from '@tabler/icons-svelte/dist/svelte/icons/IconLink.svelte';

	export let fragementName: string;
</script>

<a
	href={`#${fragementName}`}
	class="hidden text-lightStandout hover:cursor-pointer dark:text-darkStandout"
>
	<IconLink />
</a>
