<script lang="ts">
  import Section from "$lib/Section.svelte";
  import Block from "$lib/sections/Block.svelte";
  import {onMount} from 'svelte';

  let iframe: HTMLIFrameElement;
  let iframeWidth;

  onMount(() => {
    iframeWidth = (iframe.clientWidth / 16) * 9;
  })

  const onResize = () => {
    iframeWidth = (iframe.clientWidth / 16) * 9;
  }
</script>

<svelte:window on:resize={onResize} />

<Section title="Dragon Cam">
  <Block>
    <div class="flex flex-col gap-2">
      <p>My beloved beardie named Mog. She may not do much, but rest assured that she is plotting to overthrow the world!</p>
      <div class="flex justify-center">
<!--        Binding clientHeight doesn't work here-->
        <iframe src="https://restreamer.pseudorizer.com/c606d4af-e6be-432d-9131-2dd3aaeb8a43.html" allowfullscreen title="My Beardie" height={`${iframeWidth}px`} width="100%" bind:this={iframe}></iframe>
      </div>
    </div>
  </Block>
</Section>
