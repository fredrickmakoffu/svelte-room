<script>
  import { onMount, onDestroy } from "svelte";
  import { fly, slide } from "svelte/transition";
  import Shelf from "../components/Room/Shelf.svelte";
  import Frame from "../components/Room/Frame.svelte";
  import Window from "../components/Room/Window.svelte";
  import Desk from "../components/Room/Desk.svelte";
  import Laptop from "../components/Room/Laptop.svelte";
  import Mouse from "../components/Room/Mouse.svelte";
  import Radio from "../components/Room/Radio.svelte";
  import Clock from "../components/Room/Clock.svelte";
  import Information from "../components/Room/Information.svelte";
  import OpenBook from "../components/Room/OpenBook.svelte";
  import Chair from "../components/Room/Chair.svelte";
  import Mug from "../components/Room/Mug.svelte";
  import Pot from "../components/Room/Pot.svelte";
  import DeskLamp from "../components/Room/DeskLamp.svelte";
  import Stickies from "../components/Room/Stickies.svelte";
  import Guitar from "../components/Room/Guitar.svelte";
  import StickyDetail from "../components/Room/StickyDetail.svelte";
  import { openBook, openSticky } from "../stores/room.js";

  // JSON data
  import FramesJson from "../assets/json/Frame.json";
  import WindowsJson from "../assets/json/Window.json";
  import DeskJson from "../assets/json/Desk.json";
  import LaptopJson from "../assets/json/Laptop.json";
  import ShelfJson from "../assets/json/Shelf.json";

  const frames = FramesJson;
  const windows = WindowsJson;
  const desks = DeskJson;
  const laptops = LaptopJson;
  const shelf = ShelfJson;

  // ── Viewport scaling ────────────────────────────────────────────────────────
  // The room was designed at ~2500 × 1000 px. We scale the entire container so
  // all absolute/fixed positions remain correct at every viewport size.
  const DESIGN_WIDTH = 2500;
  const DESIGN_HEIGHT = 1000;

  let scale = 1;
  let scaledHeight = DESIGN_HEIGHT;

  function updateScale() {
    scale = Math.min(
      window.innerWidth / DESIGN_WIDTH,
      window.innerHeight / DESIGN_HEIGHT,
    );
    scaledHeight = Math.round(DESIGN_HEIGHT * scale);
  }

  onMount(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
  });

  onDestroy(() => {
    window.removeEventListener("resize", updateScale);
  });
</script>

<!-- Wrapper clips the oversized design canvas to the actual viewport -->
<div class="room-viewport" style="height: {scaledHeight}px">
  <main
    class="room"
    style="transform: scale({scale}); width: {DESIGN_WIDTH}px; height: {DESIGN_HEIGHT}px;"
    in:fly={{ delay: 300, duration: 300 }}
    out:slide={{ duration: 300 }}
  >
    {#each shelf as item}
      <Shelf
        top={item.top}
        left={item.left}
        zoom={item.zoom}
        books={item.shelf_books}
      />
    {/each}

    {#each frames as { background, border, zoom, position, image, padding }}
      <Frame {background} {border} {zoom} {position} {image} {padding} />
    {/each}

    {#each windows as { background, border, zoom, position, height, width }}
      <Window {background} {border} {zoom} {position} {height} {width} />
    {/each}

    <!-- Chair renders before Desk so the desk surface overlays the seat naturally -->
    <!-- <Chair /> -->

    {#each desks as { desk_block_left, desk_block_right, desk_leg_left, desk_leg_right }}
      <Desk
        {desk_block_left}
        {desk_block_right}
        {desk_leg_left}
        {desk_leg_right}
      />
    {/each}

    {#each laptops as { width, top, left, border_radius, background_color }}
      <Laptop {width} {top} {left} {border_radius} {background_color} />
    {/each}

    <Mug />
    <DeskLamp />
    <Mouse />
    <Radio />
    <Clock />

    <!-- Plant on the floor to the left of the desk -->
    <Pot />

    <!-- Sticky notes on the wall, right of the window -->
    <Stickies />

    <!-- Guitar leaning against the far-right wall -->
    <Guitar />

    <div class="wall" />
    <div class="floor" />

    <Information />

    {#if $openBook}
      <OpenBook />
    {/if}

    {#if $openSticky}
      <StickyDetail />
    {/if}
  </main>
</div>

<style>
  .room-viewport {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .room {
    transform-origin: top left;
    position: relative;
  }

  .wall {
    position: absolute;
    width: 100%;
    height: 47rem;
    background: aliceblue;
    background-image: url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png");
    z-index: -1;
  }

  .floor {
    position: absolute;
    width: 100%;
    padding: 9px;
    background: teal;
    top: 46rem;
    background-image: url("https://www.transparenttextures.com/patterns/back-pattern.png");
    z-index: -1;
  }
</style>
