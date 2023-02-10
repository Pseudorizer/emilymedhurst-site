<script lang='ts'>
  export let href = '';
  export let sameSite = false;
  export let classes = '';
</script>

<a href={href} target={sameSite ? '' : '_blank'} rel={sameSite ? '' : 'noreferrer noopener'}
   class={'underline decoration-lightStandout dark:decoration-darkStandout text-lightStandout dark:text-darkStandout ' + classes}>
  <slot />
</a>
