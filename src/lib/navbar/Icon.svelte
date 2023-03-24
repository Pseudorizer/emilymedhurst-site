<script lang='ts'>
  import type { ComponentType } from 'svelte';

  export let icon: ComponentType;
  export let iconSize = '1.75rem';
  export let link: string;
  export let ariaLabel: string;
</script>

<a href={link} target='_blank' rel='me noopener noreferrer'
   class='hover:bg-lightHighlight hover:dark:bg-darkHighlight rounded-xl p-1' aria-label={ariaLabel}>
  <svelte:component this={icon} size={iconSize} />
</a>
