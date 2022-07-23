<script lang='ts'>
  import Link from 'tabler-icons-svelte/icons/Link.svelte';

  export let title = '';

  $: titleLower = title.toLowerCase();
</script>

<section class='flex flex-col gap-2'>
  <div class='flex items-center [&>a]:hover:block gap-2'>
    <h2 id={titleLower}>{title}</h2>
    <a href={`#${titleLower}`} class='hidden text-lightStandout dark:text-darkStandout hover:cursor-pointer'>
      <Link />
    </a>
  </div>
  <slot />
</section>
