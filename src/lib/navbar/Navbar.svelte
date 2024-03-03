<script lang="ts">
	import { onMount, type ComponentType } from 'svelte';
	import TablerMoon from '~icons/tabler/moon';
	import TablerSun from '~icons/tabler/sun';
	import TablerBrandGithub from '~icons/tabler/brand-github';
	import TablerBrandTwitter from '~icons/tabler/brand-twitter';
	import TablerBrandLinkedin from '~icons/tabler/brand-linkedin';
	import TablerBrandMastodon from '~icons/tabler/brand-mastodon';
	import TablerBrandDiscord from '~icons/tabler/brand-discord';
	import TablerBrandSpotify from '~icons/tabler/brand-spotify';
	import TablerBrandLastfm from '~icons/tabler/brand-lastfm';
	import TablerBrandBluesky from '~icons/tabler/brand-bluesky';
	import IconLink from '$lib/icon/IconLink.svelte';
	import trackingEnabled from '$lib/stores/trackingStore';

	let innerWidth: number;
	let icon: ComponentType = TablerSun;

	const toggleDarkMode = () => {
		const root = document.querySelector('html');

		if (root) {
			icon = root.classList.toggle('dark') ? TablerSun : TablerMoon;
		}
	};

	onMount(() => {
		const root = document.querySelector('html');

		if (root) {
			icon = root.classList.contains('dark') ? TablerSun : TablerMoon;
		}

		innerWidth = window.innerWidth;
	});

	$: links = {
		github: $trackingEnabled ? 'https://dub.sh/QykMkgZ' : 'https://github.com/MiniCheese26',
		twitter: $trackingEnabled ? 'https://dub.sh/Hm04Jup' : 'https://twitter.com/Pseudorizer',
		linkedin: $trackingEnabled
			? 'https://dub.sh/tyyoykC'
			: 'https://www.linkedin.com/in/emily-medhurst',
		mastodon: $trackingEnabled ? 'https://dub.sh/q0AMYxZ' : 'https://tech.lgbt/@pseudorizer',
		discord: $trackingEnabled
			? 'https://dub.sh/zOJDoYI'
			: 'https://discordapp.com/users/398887208947286017',
		spotify: $trackingEnabled
			? 'https://dub.sh/vT26H7N'
			: 'https://open.spotify.com/user/minicheese26',
		lastfm: $trackingEnabled ? 'https://dub.sh/svTc51N' : 'https://www.last.fm/user/pseudorizer',
		bluesky: $trackingEnabled
			? 'https://dub.sh/j4mqWhM'
			: 'https://bsky.app/profile/emilymedhurst.gay'
	};
</script>

<svelte:window bind:innerWidth />

<nav class="flex flex-col gap-2">
	<div class="flex items-center gap-2">
		<label for="link-tracking">Enable link tracking? I'm just curious :)</label>
		<input
			name="link-tracking"
			id="link-tracking"
			aria-label="link tracking"
			type="checkbox"
			bind:checked={$trackingEnabled}
		/>
	</div>
	<div class="mt-1 flex flex-col md:mt-0 md:flex-row">
		<div class="flex items-center justify-start gap-2">
			<a href="/"><h1>Emily Medhurst</h1></a>
			<button
				on:click={toggleDarkMode}
				class="rounded-xl p-1 hover:bg-lightHighlight hover:dark:bg-darkHighlight"
				aria-label="theme"
			>
				<svelte:component
					this={icon}
					style={`font-size: ${innerWidth < 768 ? '2.25rem' : '2rem'}`}
				/>
			</button>
		</div>
		<div class="flex gap-2 overflow-x-auto md:ml-auto md:gap-3">
			<IconLink icon={TablerBrandGithub} href={links.github} ariaLabel="github" rel="me" />
			<IconLink icon={TablerBrandTwitter} href={links.twitter} ariaLabel="twitter" rel="me" />
			<IconLink icon={TablerBrandLinkedin} href={links.linkedin} ariaLabel="linkedin" rel="me" />
			<IconLink icon={TablerBrandMastodon} href={links.mastodon} ariaLabel="mastodon" rel="me" />
			<IconLink icon={TablerBrandDiscord} href={links.discord} ariaLabel="discord" rel="me" />
			<IconLink icon={TablerBrandSpotify} href={links.spotify} ariaLabel="spotify" rel="me" />
			<IconLink icon={TablerBrandLastfm} href={links.lastfm} ariaLabel="last.fm" rel="me" />
			<IconLink icon={TablerBrandBluesky} href={links.bluesky} ariaLabel="bluesky" rel="me" />
		</div>
	</div>
</nav>
