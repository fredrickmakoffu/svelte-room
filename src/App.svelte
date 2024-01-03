<script>
  import Room from './views/Room.svelte';
  import Home from './views/Home.svelte';
  let screen = "room"

</script>
{#if screen == "home"}
  <Home bind:screen={screen} />
{/if}

{#if screen == "room"}
  <Room />
{/if}