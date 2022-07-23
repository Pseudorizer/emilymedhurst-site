<script lang='ts'>
  import Link from 'tabler-icons-svelte/icons/Link.svelte';

  export let title = '';

  $: titleFormatted = title.toLowerCase().replace(/\s/g, '-');
</script>

<section class='flex flex-col gap-2'>
  <div class='flex items-center [&>a]:hover:block gap-2'>
    <h2 id={titleFormatted}>{title}</h2>
    <a href={`#${titleFormatted}`} class='hidden text-lightStandout dark:text-darkStandout hover:cursor-pointer'>
      <Link />
    </a>
  </div>
  <slot />
</section>
