<script lang='ts'>
  import BodyLink from '../BodyLink.svelte';

  export let title = '';
  export let description = '';
  export let link = '';
  export let crumbs: string[] = [];
</script>

<div class='bg-lightHighlight dark:bg-darkHighlight rounded-xl flex flex-col p-2'>
  <h4>
    <BodyLink href={link}>{title}</BodyLink>
  </h4>
  <p>{description}</p>
  <div class='flex flex-wrap mt-2.5 gap-1'>
    {#each crumbs as crumb}
      <p class='text-sm  border-2 border-gray-600 dark:border-gray-500 rounded-2xl p-1 px-2 h-full'>{crumb}</p>
    {/each}
  </div>
</div>
