<script>
  import '../app.css';
  import Navbar from '$lib/navbar/navbar.svelte';
</script>

<div class="h-full mx-4 md:mx-36 text-dark dark:text-white">
  <Navbar />
  <slot />
</div>
