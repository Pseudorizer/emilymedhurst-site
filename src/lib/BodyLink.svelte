<script lang="ts">
	import type { PreloadDataOptions } from '$lib/BodyLink';

	export let href = '';
	export let sameSite = false;
	export let classes = '';
	export let preload: PreloadDataOptions = 'off';
</script>

<a
	{href}
	target={sameSite ? '' : '_blank'}
	rel={sameSite ? '' : 'noreferrer noopener'}
	data-sveltekit-preload-data={preload}
	class={'underline decoration-lightStandout dark:decoration-darkStandout text-lightStandout dark:text-darkStandout ' +
		classes}
>
	<slot />
</a>
