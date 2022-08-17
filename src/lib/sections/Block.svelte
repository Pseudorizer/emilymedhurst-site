<script lang='ts'>
  import BodyLink from '$lib/BodyLink.svelte';

  export let title = '';
  export let subheading = '';
  export let description = '';
  export let link = '';
  export let crumbs: string[] = [];
</script>

<div class='bg-lightHighlight dark:bg-darkHighlight rounded-xl flex flex-col p-2'>
  <h3>
    {#if link}
      <BodyLink href={link}>{title}</BodyLink>
    {:else}
      <h4>{title}</h4>
    {/if}
  </h3>
  {#if subheading}
    <p class='text-xs mb-1'>{subheading}</p>
  {/if}
  <p>{description}</p>
  {#if crumbs.length > 0}
    <div class='flex flex-wrap mt-2.5 gap-x-1 gap-y-2'>
      {#each crumbs as crumb}
        <p class='text-sm border-2 border-gray-600 dark:border-gray-500 rounded-2xl p-1 px-2 select-none'>{crumb}</p>
      {/each}
    </div>
  {/if}
</div>
