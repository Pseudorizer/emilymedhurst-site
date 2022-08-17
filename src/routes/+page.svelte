<script lang='ts' context='module'>
  import BodyLink from '$lib/BodyLink.svelte';
  import Portfolio from '$lib/sections/portfolio/Portfolio.svelte';
  import Experience from '$lib/sections/experience/Experience.svelte';
</script>

<svelte:head>
  <title>Emily Medhurst</title>
  <meta name="description" content="A trans software developer currently based in Portsmouth">
</svelte:head>

<main class='pt-4 text-xl flex flex-col gap-4'>
  <p>Ello, I'm a 🏳️‍⚧️ trans software developer currently based in Portsmouth working at
    <BodyLink href='https://radweb.com/'>Radweb,</BodyLink>
     primarily working on the web application
    <BodyLink href='https://inventorybase.co.uk/'>InventoryBase.</BodyLink>
  </p>
  <p>Currently employed as a placement student from the University of Portsmouth but hoping to stay onboard afterwards.</p>
  <Portfolio />
  <Experience />
</main>
