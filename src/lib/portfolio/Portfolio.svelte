<script lang='ts'>
  import Link from 'tabler-icons-svelte/icons/Link.svelte';
  import Block from '$lib/portfolio/Block.svelte';
</script>

<section class='flex flex-col gap-2'>
  <div class='flex items-center [&>a]:hover:block gap-2'>
    <h2 class='text-3xl font-semibold' id='portfolio'>Portfolio</h2>
    <a href='#portfolio' class='hidden text-highlight hover:cursor-pointer'><Link/></a>
  </div>
  <div class='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 md:gap-y-2'>
    <Block title='Project 1' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
    <Block title='Project 2' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
    <Block title='Project 3' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
    <Block title='Project 4' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
  </div>
</section>
