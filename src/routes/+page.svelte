<script lang="ts">
	import BodyLink from '$lib/BodyLink.svelte';
	import Portfolio from '$lib/sections/portfolio/Portfolio.svelte';
	import Experience from '$lib/sections/experience/Experience.svelte';
	import Dragon from '$lib/sections/dragon/Dragon.svelte';
	import trackingEnabled from '$lib/stores/trackingStore';
	import Posts from '$lib/sections/posts/Posts.svelte';
	import type { PageData } from './$types';
	import Block from '$lib/sections/Block.svelte';
	import Headers from '$lib/Headers.svelte';

	export let data: PageData;

	$: links = {
		radweb: $trackingEnabled ? 'https://dub.sh/OfrKsKi' : 'https://radweb.com/',
		inventorybase: $trackingEnabled ? 'https://dub.sh/7PTdv8f' : 'https://inventorybase.co.uk/'
	};
</script>

<Headers
	title="Emily Medhurst"
	description="A trans software developer currently based in Portsmouth"
/>

<div class="text-xl flex flex-col gap-4">
	<p>
		Ello, I'm a 🏳️‍⚧️ trans software developer currently based in Portsmouth working at
		<BodyLink href={links.radweb}>Radweb,</BodyLink>
		primarily working on the web application
		<BodyLink href={links.inventorybase}>InventoryBase.</BodyLink>
	</p>
	<p>
		Currently employed as a placement student from the University of Portsmouth but hoping to stay
		onboard afterwards.
	</p>
	<Portfolio />
	<Experience />
	{#if data.posts.length > 0}
		<Posts posts={data.posts}>
			<Block>
				<div class="flex justify-center">
					<BodyLink href="/posts" sameSite preload="hover">See More</BodyLink>
				</div>
			</Block>
		</Posts>
	{/if}
	<Dragon />
</div>
