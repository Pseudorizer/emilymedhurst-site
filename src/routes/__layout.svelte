<script>
  import '../app.css';
  import Navbar from '$lib/Navbar.svelte';
</script>

<div class='h-full max-w-4xl mx-auto p-6 text-dark dark:text-white'>
  <Navbar />
  <slot />
</div>
