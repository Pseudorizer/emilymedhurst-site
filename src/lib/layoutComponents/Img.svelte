<script lang="ts">
	export let src: string;
	export let alt: string;

	$: isVideo = /\.(webm|mp4)$/i.test(src);
</script>

<div class="flex justify-center py-2">
	<div class="border-dark dark:border-light border-2 rounded-lg">
		{#if isVideo}
			<!-- svelte-ignore a11y-media-has-caption -->
			<video class="rounded-md" {src} controls />
		{:else}
			<img class="rounded-md" {src} {alt} />
		{/if}
		<p class="p-2 text-center">{alt}</p>
	</div>
</div>
