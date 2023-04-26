<script lang="ts">
	import { page } from '$app/stores';

	export let title: string;
	export let description: string;
	export let path: string = '';
	export let type: string = 'website';

	$: url = `https://emilymedhurst.me${path || $page.url.pathname}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="name" content={title} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:url" content={url} />
	<meta property="og:type" content={type} />
</svelte:head>
