<script lang='ts'>
  export let href = '';
</script>

<a href={href} target='_blank' rel='noreferrer noopener' class='underline decoration-lightStandout dark:decoration-darkStandout text-lightStandout dark:text-darkStandout'>
  <slot />
</a>
