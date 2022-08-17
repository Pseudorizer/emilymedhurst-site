<script lang="ts">
  import Block from '$lib/sections/Block.svelte';

  const postModules = import.meta.globEager('./*.svx');

  // Why is values unresolved ???
  const posts = Object.values(postModules).map(post => ({
    metadata: post.metadata
  }));

  export const prerender = true;
</script>

<h2 class='mt-2 mb-4'>My Blog Posts</h2>
<div class="flex flex-col gap-2">
  {#each posts as post}
    <Block title={post.metadata.title}/>
  {/each}
</div>
