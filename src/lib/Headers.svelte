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

	$: url = `https://emilymedhurst.me${path}`;
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
</svelte:head>
