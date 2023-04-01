<script>
	import '$src/app.css';
	import Navbar from '$lib/navbar/Navbar.svelte';
</script>

<svelte:head>
	<meta name="robots" content="index, follow" />
	<meta name="language" content="English" />
	<meta name="og:type" content="website" />
	<meta name="og:url" content="https://emilymedhurst.me/" />
	<meta property="og:image" content="https://emilymedhurst.me/me.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="emilymedhurst.me" />
	<meta property="twitter:url" content="https://emilymedhurst.me/" />
	<meta name="twitter:image" content="https://emilymedhurst.me/me.webp" />
</svelte:head>

<div class="h-full max-w-4xl mx-auto p-6 text-dark dark:text-light">
	<Navbar />
	<main class="pt-4">
		<slot />
	</main>
</div>
