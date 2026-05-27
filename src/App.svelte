<script>
  import { onMount, onDestroy } from "svelte";
  import Room from "./views/Room.svelte";
  import Home from "./views/Home.svelte";

  // Hash-based routing: #home → Home, everything else → Room (default)
  let screen = "room";

  function syncFromHash() {
    screen = window.location.hash === "#home" ? "home" : "room";
  }

  onMount(() => {
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
  });

  onDestroy(() => {
    window.removeEventListener("hashchange", syncFromHash);
  });
</script>

{#if screen === "home"}
  <Home />
{:else}
  <Room />
{/if}
