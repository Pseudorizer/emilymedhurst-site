<script lang='ts'>
  import { onMount } from 'svelte';
  import {
    IconMoon,
    IconSun,
    IconBrandGithub,
    IconBrandTwitter,
    IconBrandLinkedin,
    IconBrandMastodon,
    IconBrandDiscord,
    IconBrandSpotify,
    IconBrandLastfm
  } from '@tabler/icons-svelte';
  import Icon from '$lib/navbar/Icon.svelte';

  $: innerWidth = 0;
  let icon = IconSun;

  function toggleDarkMode() {
    const root = document.querySelector('html');
    icon = root.classList.toggle('dark') ? IconSun : IconMoon;
  }

  onMount(() => {
    const root = document.querySelector('html');
    icon = root.classList.contains('dark') ? IconSun : IconMoon;
  });
</script>

<svelte:window bind:innerWidth />

<nav class='flex flex-col gap-2 md:gap-0 md:flex-row items-center'>
  <div class='flex justify-center md:justify-start gap-2'>
    <a href='/static'><h1>Emily Medhurst</h1></a>
    <button on:click={toggleDarkMode}
            class='hover:bg-lightHighlight hover:dark:bg-darkHighlight rounded-xl p-1' aria-label='theme'>
      <svelte:component this={icon} size={innerWidth < 768 ? '2.25rem' : '2rem'} />
    </button>
  </div>
  <div class='flex md:justify-center md:ml-auto gap-3 flex-wrap'>
    <Icon icon={IconBrandGithub} link='https://github.com/MiniCheese26' ariaLabel='github' />
    <Icon icon={IconBrandTwitter} link='https://twitter.com/Pseudorizer' ariaLabel='twitter' />
    <Icon icon={IconBrandLinkedin} link='https://www.linkedin.com/in/emily-medhurst-b2a236222' ariaLabel='linkedin' />
    <Icon icon={IconBrandMastodon} link='https://tech.lgbt/@pseudorizer' ariaLabel='mastodon' />
    <Icon icon={IconBrandDiscord} link='https://discordapp.com/users/398887208947286017' ariaLabel='discord' />
    <Icon icon={IconBrandSpotify} link='https://open.spotify.com/user/minicheese26' ariaLabel='spotify' />
    <Icon icon={IconBrandLastfm} link='https://www.last.fm/user/pseudorizer' ariaLabel='last.fm' />
  </div>
</nav>
