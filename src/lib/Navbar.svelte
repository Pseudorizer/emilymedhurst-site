<script lang='ts'>
  import {onMount} from 'svelte';
  import { IconMoon, IconSun, IconBrandGithub, IconBrandTwitter, IconBrandLinkedin, IconBrandMastodon, IconBrandDiscord } from "@tabler/icons-svelte";

  const iconSize = '1.75rem';

  $: innerWidth = 0;
  let icon = IconSun;

  function toggleDarkMode () {
    const root = document.querySelector('html');
    icon = root.classList.toggle('dark') ? IconSun : IconMoon;
  }

  onMount(() => {
    const root = document.querySelector('html');
    icon = root.classList.contains('dark') ? IconSun : IconMoon;
  });
</script>

<svelte:window bind:innerWidth/>

<nav class='flex flex-col gap-2 md:gap-0 md:flex-row items-center'>
  <div class='flex justify-center md:justify-start gap-2 w-full'>
    <a href='/'><h1>Emily Medhurst</h1></a>
    <button on:click={toggleDarkMode}
            class='hover:bg-lightHighlight hover:dark:bg-darkHighlight rounded-xl p-1' aria-label="theme">
      <svelte:component this={icon} size={innerWidth < 768 ? '2.25rem' : '2rem'}/>
    </button>
  </div>
  <div class='flex justify-between md:justify-center md:ml-auto gap-3'>
    <a href='https://github.com/MiniCheese26' target='_blank' rel='me noopener noreferrer'
       class='hover:bg-lightHighlight hover:dark:bg-darkHighlight rounded-xl p-1' aria-label="github">
      <IconBrandGithub size={iconSize}/>
    </a>
    <a href='https://twitter.com/Pseudorizer' target='_blank' rel='me noopener noreferrer'
       class='hover:bg-lightHighlight hover:dark:bg-darkHighlight rounded-xl p-1' aria-label="twitter">
      <IconBrandTwitter size={iconSize}/>
    </a>
    <a href='https://www.linkedin.com/in/emily-medhurst-b2a236222' target='_blank' rel='me noopener noreferrer'
       class='hover:bg-lightHighlight hover:dark:bg-darkHighlight rounded-xl p-1' aria-label="linkedin">
      <IconBrandLinkedin size={iconSize}/>
    </a>
    <a href='https://tech.lgbt/@pseudorizer' target='_blank' rel='me noopener noreferrer'
       class='hover:bg-lightHighlight hover:dark:bg-darkHighlight rounded-xl p-1' aria-label="mastodon">
      <IconBrandMastodon size={iconSize}/>
    </a>
    <a href='https://discordapp.com/users/Pseudorizer#1001' target='_blank' rel='me noopener noreferrer'
       class='hover:bg-lightHighlight hover:dark:bg-darkHighlight rounded-xl p-1' aria-label="discord">
      <IconBrandDiscord size={iconSize}/>
    </a>
  </div>
</nav>
