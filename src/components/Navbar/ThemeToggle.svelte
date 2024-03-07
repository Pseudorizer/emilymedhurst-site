<script lang="ts">
	import { cn } from '@lib/cn';
	import TablerMoon from 'icons:svelte/tabler/moon';
	import TablerSun from 'icons:svelte/tabler/sun';
	import { onMount, type ComponentType } from 'svelte';

	let innerWidth: number;
	let icon: ComponentType = TablerSun;

	const toggleDarkMode = () => {
		const root = document.querySelector('html');
		const body = document.querySelector('body');

		if (root && body) {
			icon = root.classList.toggle('dark') ? TablerSun : TablerMoon;
			body.classList.toggle('dark');
		}
	};

	onMount(() => {
		const root = document.querySelector('html');
		const body = document.querySelector('body');

		if (root && body) {
			icon = root.classList.contains('dark') ? TablerSun : TablerMoon;
			body.classList.toggle('dark');
		}
	});
</script>

<svelte:window bind:innerWidth />

<button
	on:click={toggleDarkMode}
	class={cn('rounded-xl p-1 hover:bg-lightHighlight hover:dark:bg-darkHighlight')}
	aria-label="theme"
>
	<svelte:component this={icon} style={`font-size: ${innerWidth < 768 ? '2.25rem' : '2rem'}`} />
</button>
