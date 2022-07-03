<script lang='ts'>
  export let href = '';
</script>

<a href={href} target='_blank' rel='noreferrer noopener' class='underline decoration-highlight text-highlight'>
  <slot />
</a>
