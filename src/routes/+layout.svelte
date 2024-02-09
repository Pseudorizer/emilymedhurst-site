<script>
	import '$src/app.css';
	import Navbar from '$lib/navbar/Navbar.svelte';
</script>

<svelte:head>
	<meta name="robots" content="index, follow" />
	<meta name="language" content="English" />
	<meta property="og:image" content="https://emilymedhurst.me/me.webp" />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="emilymedhurst.me" />
	<meta property="twitter:image" content="https://emilymedhurst.me/me.webp" />
	<link href="https://tech.lgbt/@pseudorizer" rel="me">
</svelte:head>

<div class="mx-auto h-full max-w-4xl p-6 text-dark dark:text-light">
	<Navbar />
	<main class="pt-4">
		<slot />
	</main>
</div>
