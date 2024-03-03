<script lang="ts">
	import Section from '$lib/Section.svelte';
	import Block from '$lib/sections/Block.svelte';
	import TablerBrandLaravel from '~icons/tabler/brand-laravel';
	import TablerBrandMysql from '~icons/tabler/brand-mysql';
	import TablerBrandPhp from '~icons/tabler/brand-php';
	import TablerBrandReact from '~icons/tabler/brand-react';
	import TablerBrandRedux from '~icons/tabler/brand-redux';
	import TablerBrandTypescript from '~icons/tabler/brand-typescript';

	import trackingEnabled from '$lib/stores/trackingStore';
	import { createCrumb } from '$lib/helpers';

	const reactCrumb = createCrumb(TablerBrandReact, 'react');
	const phpCrumb = createCrumb(TablerBrandPhp, 'php');
	const laravelCrumb = createCrumb(TablerBrandLaravel, 'laravel');
	const mysqlCrumb = createCrumb(TablerBrandMysql, 'mysql');
	const reduxCrumb = createCrumb(TablerBrandRedux, 'redux');
	const typescriptCrumb = createCrumb(TablerBrandTypescript, 'typescript');

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
				typescriptCrumb,
				'real customers'
			]}
			link={links.radweb}
		/>
	</div>
</Section>
