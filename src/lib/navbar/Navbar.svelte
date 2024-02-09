<script lang="ts">
	import { onMount, type ComponentType } from 'svelte';
	import IconMoon from '@tabler/icons-svelte/dist/svelte/icons/IconMoon.svelte';
	import IconSun from '@tabler/icons-svelte/dist/svelte/icons/IconSun.svelte';
	import IconBrandGithub from '@tabler/icons-svelte/dist/svelte/icons/IconBrandGithub.svelte';
	import IconBrandTwitter from '@tabler/icons-svelte/dist/svelte/icons/IconBrandTwitter.svelte';
	import IconBrandLinkedin from '@tabler/icons-svelte/dist/svelte/icons/IconBrandLinkedin.svelte';
	import IconBrandMastodon from '@tabler/icons-svelte/dist/svelte/icons/IconBrandMastodon.svelte';
	import IconBrandDiscord from '@tabler/icons-svelte/dist/svelte/icons/IconBrandDiscord.svelte';
	import IconBrandSpotify from '@tabler/icons-svelte/dist/svelte/icons/IconBrandSpotify.svelte';
	import IconBrandLastfm from '@tabler/icons-svelte/dist/svelte/icons/IconBrandLastfm.svelte';
	import IconBrandBluesky from '@tabler/icons-svelte/dist/svelte/icons/IconBrandBluesky.svelte';
	import IconLink from '$lib/icon/IconLink.svelte';
	import trackingEnabled from '$lib/stores/trackingStore';

	let innerWidth: number;
	let icon: ComponentType = IconSun;

	const toggleDarkMode = () => {
		const root = document.querySelector('html');

		if (root) {
			icon = root.classList.toggle('dark') ? IconSun : IconMoon;
		}
	};

	onMount(() => {
		const root = document.querySelector('html');

		if (root) {
			icon = root.classList.contains('dark') ? IconSun : IconMoon;
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
		<div class="flex justify-start gap-2">
			<a href="/"><h1>Emily Medhurst</h1></a>
			<button
				on:click={toggleDarkMode}
				class="rounded-xl p-1 hover:bg-lightHighlight hover:dark:bg-darkHighlight"
				aria-label="theme"
			>
				<svelte:component this={icon} size={innerWidth < 768 ? '2.25rem' : '2rem'} />
			</button>
		</div>
		<div class="flex gap-2 md:ml-auto md:gap-3">
			<IconLink icon={IconBrandGithub} href={links.github} ariaLabel="github" rel="me" />
			<IconLink icon={IconBrandTwitter} href={links.twitter} ariaLabel="twitter" rel="me" />
			<IconLink icon={IconBrandLinkedin} href={links.linkedin} ariaLabel="linkedin" rel="me" />
			<IconLink icon={IconBrandMastodon} href={links.mastodon} ariaLabel="mastodon" rel="me" />
			<IconLink icon={IconBrandDiscord} href={links.discord} ariaLabel="discord" rel="me" />
			<IconLink icon={IconBrandSpotify} href={links.spotify} ariaLabel="spotify" rel="me" />
			<IconLink icon={IconBrandLastfm} href={links.lastfm} ariaLabel="last.fm" rel="me" />
			<IconLink icon={IconBrandBluesky} href={links.bluesky} ariaLabel="bluesky" rel="me" />
		</div>
	</div>
</nav>
