<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="og:title" content={title} />
	<meta name="og:description" content={description} />
	<meta itemprop="name" content={title} />
	<meta itemprop="description" content={description} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>
