<script lang="ts">
	import FragmentLink from './FragmentLink.svelte';
	import slugify from '@sindresorhus/slugify';

	export let title = '';

	$: titleFormatted = slugify(title);
</script>

<section class="flex flex-col gap-2">
	<div class="flex items-center gap-2 [&>a]:hover:block">
		<h2 id={titleFormatted}>{title}</h2>
		<FragmentLink fragementName={titleFormatted} />
	</div>
	<slot />
</section>
