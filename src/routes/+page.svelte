<script lang='ts' context='module'>
  import BodyLink from '$lib/BodyLink.svelte';
  import Portfolio from '$lib/sections/portfolio/Portfolio.svelte';
  import Experience from '$lib/sections/experience/Experience.svelte';

  const title = 'Emily Medhurst';
  const description = 'A trans software developer currently based in Portsmouth'
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description}>
  <meta name="robots" content="index, follow">
  <meta name="language" content="English">
  <meta name="og:title" content={title}>
  <meta name="og:description" content={description}>
  <meta name="og:type" content="website">
  <meta name="og:url" content="https://emilymedhurst.me/">
  <meta property="og:image" content="https://emilymedhurst.me/me.webp">
  <meta itemprop="name" content={title}>
  <meta itemprop="description" content={description}>
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content={title}>
  <meta name="twitter:description" content={description}>
  <meta property="twitter:domain" content="emilymedhurst.me">
  <meta property="twitter:url" content="https://emilymedhurst.me/">
  <meta name="twitter:image" content="https://emilymedhurst.me/me.webp">
</svelte:head>

<main class='pt-4 text-xl flex flex-col gap-4'>
  <p>Ello, I'm a 🏳️‍⚧️ trans software developer currently based in Portsmouth working at
    <BodyLink href='https://radweb.com/'>Radweb,</BodyLink>
    primarily working on the web application
    <BodyLink href='https://inventorybase.co.uk/'>InventoryBase.</BodyLink>
  </p>
  <p>Currently employed as a placement student from the University of Portsmouth but hoping to stay onboard afterwards.</p>
  <Portfolio/>
  <Experience/>
</main>
