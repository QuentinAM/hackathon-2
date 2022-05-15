<script>
  import { onMount } from "svelte/internal";

  var isSmallScreen = false;

  onMount(() => {
    isSmallScreen =  window.innerWidth < 768;
  });

</script>

{#if isSmallScreen}
  <svg height="100" width="320" stroke="#2A4A73" stroke-width="2" class="text-line">
    <text style="font-family: 'Baloo Tamma', georgia, times, serif; font-weight: normal; font-style: normal" x="50" y="90" fill="none" font-size = "65">🐀RatPonzi</text>
  </svg>
{:else}
  <svg height="100" width="1000" stroke="#2A4A73" stroke-width="2" class="text-line">
      <text style="font-family: 'Baloo Tamma', georgia, times, serif; font-weight: normal; font-style: normal" x="50" y="90" fill="none" font-size = "100">🐀RatPonzi</text>
  </svg>
{/if}

<style lang="scss">
body{
    background-color: #ECEAEA;
}
.text-line text {
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  animation: dash 5s linear forwards, filling 4s ease-in forwards;
}
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes filling {
  from{
    fill: #2A4A73;
    fill-opacity: 0;
  }
  to {
    fill: #2A4A73;
    fill-opacity: 1;
  }
}
</style>  