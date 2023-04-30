<script lang="ts">
	import BodyLink from '$lib/BodyLink.svelte';
	import Portfolio from '$lib/sections/portfolio/Portfolio.svelte';
	import Experience from '$lib/sections/experience/Experience.svelte';
	import trackingEnabled from '$lib/stores/trackingStore';
	import Posts from '$lib/sections/posts/Posts.svelte';
	import type { PageData } from './$types';
	import Block from '$lib/sections/Block.svelte';
	import Headers from '$lib/Headers.svelte';
	import Stream from '$lib/sections/stream/Stream.svelte';

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
	<Stream
		title="Dragon Cam"
		ariaLabel="Live stream of my bearded dragon"
		src="https://restreamer.pseudorizer.com/c606d4af-e6be-432d-9131-2dd3aaeb8a43.html"
	>
		<p slot="topText">
			My beloved beardie named Mog. She may not do much, but rest assured that she is plotting to
			overthrow the world!
		</p>
		<p slot="bottomText">
			I'm using
			<BodyLink href="https://github.com/datarhei/restreamer">restreamer</BodyLink>
			to achieve this. Had some quirks adding cameras correctly via my domain reverse proxied through
			nginx. Wasn't generating the player html this iframe links to. Could've been a docker problem.
		</p>
	</Stream>
	<Stream
		title="Fish Cam"
		ariaLabel="Live stream of my fishies"
		src="https://restreamer.pseudorizer.com/878cc751-5149-4973-a3d1-918ea034ba7e.html"
	>
		<p slot="topText">My fishies are here!</p>
		<div slot="bottomText">
			<h3 class="my-2">List of the current fish</h3>
			<ul class="list-disc list-inside flex flex-col md:flex-wrap md:h-48">
				<li>6x Purple Emperor</li>
				<li>5x Harlequin</li>
				<li>4x Amano Shrimp</li>
				<li>3x Koi Swordtail</li>
				<li>3x Bumble Bee Guppy</li>
				<li>3x Red Cobra Guppy</li>
				<li>3x Red Dragon Guppy</li>
				<li>3x Calico Endler Guppy</li>
        <li>3x Glass Catfish</li>
				<li>2x Yellow Tuxedo Guppy</li>
				<li>2x Coral Red Guppy</li>
				<li>1x Santa Swordtail</li>
			</ul>
		</div>
	</Stream>
</div>
