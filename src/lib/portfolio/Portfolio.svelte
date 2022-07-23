<script lang='ts'>
  import Link from 'tabler-icons-svelte/icons/Link.svelte';
  import Block from '$lib/portfolio/Block.svelte';
</script>

<section class='flex flex-col gap-2'>
  <div class='flex items-center [&>a]:hover:block gap-2'>
    <h2 id='portfolio'>Portfolio</h2>
    <a href='#portfolio' class='hidden text-lightStandout dark:text-darkStandout hover:cursor-pointer'>
      <Link />
    </a>
  </div>
  <div class='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 md:gap-y-2'>
    <Block title='Scrabble Coursework' description='First year university coursework where I designed and created an online browser-based Scrabble game.'
           link='https://github.com/MiniCheese26/scrabble-coursework' crumbs={['react', 'typescript', 'express', 'websockets']} />
    <Block title='Brick Store Coursework' description='Second year university coursework where I designed and created an online storefront for a lego brick store'
           link='https://github.com/MiniCheese26/brick-store-coursework' crumbs={['typescript', 'fastify', 'auth0', 'postgresql']} />
    <Block title='Company Address Tracker' description='A prototype desktop tool I made for a local company to manage company addresses.'
           link='https://github.com/MiniCheese26/company-address-tracker' crumbs={['typescript', 'electron', 'react']} />
    <Block title='Basic Matrix.org Bot Library' description='A basic library I wrote for writing basic bots for Matrix.org chats in C#.'
           link='https://github.com/MiniCheese26/loc0CoreMatrixClient' crumbs={['C#', 'outdated']} />
  </div>
</section>
