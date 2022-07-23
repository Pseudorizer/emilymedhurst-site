<script lang='ts'>
  import Moon from 'tabler-icons-svelte/icons/Moon.svelte';
  import Sun from 'tabler-icons-svelte/icons/Sun.svelte';
  import Github from 'tabler-icons-svelte/icons/BrandGithub.svelte';
  import Twitter from 'tabler-icons-svelte/icons/BrandTwitter.svelte';
  import LinkedIn from 'tabler-icons-svelte/icons/BrandLinkedin.svelte';
  import { onMount } from 'svelte';

  const iconSize = '1.75rem';

  $: innerWidth = 0;
  let icon = Sun;

  function toggleDarkMode () {
    const root = document.querySelector('html');
    icon = root.classList.toggle('dark') ? Sun : Moon;
  }

  onMount(() => {
    const root = document.querySelector('html');
    icon = root.classList.contains('dark') ? Sun : Moon;
  });
</script>

<svelte:window bind:innerWidth />

<nav class='flex flex-col gap-2 md:gap-0 md:flex-row items-center'>
  <div class='flex justify-center md:justify-start gap-2 w-full'>
    <a href='/'><h1>Emily Medhurst</h1></a>
    <button on:click={toggleDarkMode}
            class='hover:bg-lightHighlight hover:dark:bg-darkHighlight rounded-xl p-1'>
      <svelte:component this={icon} size={innerWidth < 768 ? '2.25rem' : '2rem'} />
    </button>
  </div>
  <div class='flex justify-between md:justify-center md:ml-auto gap-3'>
    <a href='https://github.com/MiniCheese26' target='_blank' rel='noopener noreferrer'
       class='hover:bg-lightHighlight hover:dark:bg-darkHighlight rounded-xl p-1'>
      <Github size={iconSize} />
    </a>
    <a href='https://twitter.com/Pseudorizer' target='_blank' rel='noopener noreferrer'
       class='hover:bg-lightHighlight hover:dark:bg-darkHighlight rounded-xl p-1'>
      <Twitter size={iconSize} />
    </a>
    <a href='https://www.linkedin.com/in/emily-medhurst-b2a236222' target='_blank' rel='noopener noreferrer'
       class='hover:bg-lightHighlight hover:dark:bg-darkHighlight rounded-xl p-1'>
      <LinkedIn size={iconSize} />
    </a>
  </div>
</nav>
