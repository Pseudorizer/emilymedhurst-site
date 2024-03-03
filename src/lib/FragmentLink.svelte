<script lang="ts">
	import TablerLink from '~icons/tabler/link';

	export let fragementName: string;
</script>

<a
	href={`#${fragementName}`}
	class="hidden text-lightStandout hover:cursor-pointer dark:text-darkStandout"
>
	<TablerLink />
</a>
