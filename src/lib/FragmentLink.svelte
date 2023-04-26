<script lang="ts">
	import { IconLink } from '@tabler/icons-svelte';

	export let fragementName: string;
</script>

<a href={`#${fragementName}`} class="hidden text-lightStandout dark:text-darkStandout hover:cursor-pointer">
	<IconLink />
</a>
