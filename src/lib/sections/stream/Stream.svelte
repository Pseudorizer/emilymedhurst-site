<script lang="ts">
	import Section from '$lib/Section.svelte';
	import Block from '$lib/sections/Block.svelte';
	import { onMount } from 'svelte';

	export let src: string;
	export let title: string;
	export let ariaLabel: string;

	let iframe: HTMLIFrameElement;
	let iframeWidth: number;

	onMount(() => {
		iframeWidth = (iframe.clientWidth / 16) * 9;
	});

	const onResize = () => {
		iframeWidth = (iframe.clientWidth / 16) * 9;
	};
</script>

<svelte:window on:resize={onResize} />

<Section {title}>
	<Block>
		<div class="flex flex-col gap-2">
			<slot name="topText" />
			<div class="flex justify-center">
				<!--        Binding clientHeight doesn't work here-->
				<iframe
					{src}
					allowfullscreen
					{title}
					aria-label={ariaLabel}
					height={`${iframeWidth}px`}
					width="100%"
					bind:this={iframe}
				/>
			</div>
			<slot name="bottomText" />
		</div>
	</Block>
</Section>
