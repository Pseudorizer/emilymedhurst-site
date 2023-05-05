<script context="module">
	import a from '$lib/BodyLink.svelte';
	import p from '$lib/layoutComponents/P.svelte';
	import h1 from '$lib/layoutComponents/H1.svelte';
	import h2 from '$lib/layoutComponents/H2.svelte';
	import h3 from '$lib/layoutComponents/H3.svelte';
	import img from '$lib/layoutComponents/Img.svelte';
	import code from '$lib/layoutComponents/Code.svelte';

	export { a, p, h1, h2, img, h3, code };
</script>

<!-- Can't override pre -->

<div
	class="[&_pre]:border-2 [&_pre]:border-solid [&_pre]:border-transparent [&_pre]:dark:border-light"
>
	<slot />
</div>
