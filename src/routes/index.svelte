<script lang='ts'>
  import BodyLink from '$lib/BodyLink.svelte';
  import Portfolio from '$lib/portfolio/Portfolio.svelte';
</script>

<svelte:head>
  <title>Emily Medhurst</title>
</svelte:head>

<main class='pt-4 text-xl flex flex-col gap-4'>
  <p>Ello, I'm a 🏳️‍⚧️ trans software developer currently based in Portsmouth working at
    <BodyLink href='https://radweb.com/'>Radweb,</BodyLink>
     primarily working on the web application
    <BodyLink href='https://inventorybase.co.uk/'>InventoryBase.</BodyLink>
  </p>
  <p>Currently employed as a placement student from the University of Portsmouth but hoping to stay onboard afterwards.</p>
  <Portfolio/>
</main>
