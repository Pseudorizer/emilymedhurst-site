<script lang="ts">
	import Section from '$lib/Section.svelte';
	import Block from '$lib/sections/Block.svelte';
	import IconBrandLaravel from '@tabler/icons-svelte/dist/svelte/icons/IconBrandLaravel.svelte';
	import IconBrandMysql from '@tabler/icons-svelte/dist/svelte/icons/IconBrandMysql.svelte';
	import IconBrandPhp from '@tabler/icons-svelte/dist/svelte/icons/IconBrandPhp.svelte';
	import IconBrandReact from '@tabler/icons-svelte/dist/svelte/icons/IconBrandReact.svelte';
	import IconBrandRedux from '@tabler/icons-svelte/dist/svelte/icons/IconBrandRedux.svelte';
	import IconBrandTypescript from '@tabler/icons-svelte/dist/svelte/icons/IconBrandTypescript.svelte';

	import trackingEnabled from '$lib/stores/trackingStore';

	const reactCrumb = {
		icon: IconBrandReact,
		text: 'react'
	};

	const phpCrumb = {
		icon: IconBrandPhp,
		text: 'php'
	};

	const laravelCrumb = {
		icon: IconBrandLaravel,
		text: 'laravel'
	};

	const mysqlCrumb = {
		icon: IconBrandMysql,
		text: 'mysql'
	};

	const reduxCrumb = {
		icon: IconBrandRedux,
		text: 'redux'
	};

	const flowCrumb = {
		icon: IconBrandTypescript,
		text: 'typescript'
	};

	$: links = {
		radweb: $trackingEnabled ? 'https://dub.sh/OfrKsKi' : 'https://radweb.com/'
	};
</script>

<Section title="Experience">
	<div class="grid grid-cols-1">
		<Block
			title="Radweb"
			description="This was my first hire! I&#39;m currently working as a junior developer on InventoryBase. I&#39;ll write more about this in time."
			subheading="2022-Current"
			tags={[
				reactCrumb,
				phpCrumb,
				laravelCrumb,
				mysqlCrumb,
				reduxCrumb,
				flowCrumb,
				'real customers'
			]}
			link={links.radweb}
		/>
	</div>
</Section>
