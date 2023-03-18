<script lang='ts'>
  import {onMount} from 'svelte';
  import {
    IconMoon,
    IconSun,
    IconBrandGithub,
    IconBrandTwitter,
    IconBrandLinkedin,
    IconBrandMastodon,
    IconBrandDiscord,
    IconBrandSpotify,
    IconBrandLastfm,
  } from '@tabler/icons-svelte';
  import Icon from '$lib/navbar/Icon.svelte';
  import trackingEnabled from '$lib/stores/trackingStore';

  let innerWidth;
  let icon = IconSun;

  const toggleDarkMode = () => {
    const root = document.querySelector('html');
    icon = root.classList.toggle('dark') ? IconSun : IconMoon;
  };

  onMount(() => {
    const root = document.querySelector('html');
    icon = root.classList.contains('dark') ? IconSun : IconMoon;
    innerWidth = window.innerWidth;
  });

  $: links = {
    github: $trackingEnabled ? 'https://dub.sh/QykMkgZ' : 'https://github.com/MiniCheese26',
    twitter: $trackingEnabled ? 'https://dub.sh/Hm04Jup' : 'https://twitter.com/Pseudorizer',
    linkedin: $trackingEnabled ? 'https://dub.sh/tyyoykC' : 'https://www.linkedin.com/in/emily-medhurst',
    mastodon: $trackingEnabled ? 'https://dub.sh/q0AMYxZ' : 'https://tech.lgbt/@pseudorizer',
    discord: $trackingEnabled ? 'https://dub.sh/zOJDoYI' : 'https://discordapp.com/users/398887208947286017',
    spotify: $trackingEnabled ? 'https://dub.sh/vT26H7N' : 'https://open.spotify.com/user/minicheese26',
    lastfm: $trackingEnabled ? 'https://dub.sh/svTc51N' : 'https://www.last.fm/user/pseudorizer',
  };
</script>

<svelte:window bind:innerWidth={innerWidth}/>

<nav class='flex flex-col gap-2 md:gap-0'>
  <div class="flex gap-2 mb-2">
    <label for="link-tracking">Enable link tracking? I'm just curious :)</label>
    <input name="link-tracking" id="link-tracking" aria-label="link tracking" type="checkbox" bind:checked={$trackingEnabled}>
  </div>
  <div class="flex flex-col md:flex-row">
    <div class='flex justify-start gap-2'>
      <a href='/'><h1>Emily Medhurst</h1></a>
      <button on:click={toggleDarkMode}
              class='hover:bg-lightHighlight hover:dark:bg-darkHighlight rounded-xl p-1' aria-label='theme'>
        <svelte:component this={icon} size={innerWidth < 768 ? '2.25rem' : '2rem'}/>
      </button>
    </div>
    <div class='flex md:ml-auto gap-3 flex-wrap'>
      <Icon icon={IconBrandGithub} link={links.github} ariaLabel='github'/>
      <Icon icon={IconBrandTwitter} link={links.twitter} ariaLabel='twitter'/>
      <Icon icon={IconBrandLinkedin} link={links.linkedin} ariaLabel='linkedin'/>
      <Icon icon={IconBrandMastodon} link={links.mastodon} ariaLabel='mastodon'/>
      <Icon icon={IconBrandDiscord} link={links.discord} ariaLabel='discord'/>
      <Icon icon={IconBrandSpotify} link={links.spotify} ariaLabel='spotify'/>
      <Icon icon={IconBrandLastfm} link={links.lastfm} ariaLabel='last.fm'/>
    </div>
  </div>
</nav>
