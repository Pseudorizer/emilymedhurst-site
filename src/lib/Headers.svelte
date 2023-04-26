<script lang="ts">
	import { afterNavigate } from '$app/navigation';

	export let title: string;
	export let description: string;
	export let path: string = '';

	afterNavigate(({ to }) => {
		if (!path) {
			path = to?.url.pathname ?? '';
		}
	});
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
	<meta property="twitter:url" content={`https://emilymedhurst.me${path}`} />
	<meta name="og:url" content={`https://emilymedhurst.me${path}`} />
</svelte:head>
