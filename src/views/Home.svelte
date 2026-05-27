<script>
  import { onMount, onDestroy } from "svelte";
  import { fly, slide } from "svelte/transition";
  import Banner from "../components/Home/Banner.svelte";
  import Triangle from "../components/Home/Triangle.svelte";
  import Typed from "typed.js";

  // ── State ────────────────────────────────────────────────────────────────────
  let animation_on = false;
  let typedInstance = null;

  // ── Mouse tracker ────────────────────────────────────────────────────────────
  let circle;

  function trackCircle(e) {
    if (!circle) return;
    const half = circle.offsetHeight / 2;
    circle.style.left = `${e.clientX - half}px`;
    circle.style.top  = `${e.clientY - half}px`;
  }

  onMount(() => {
    // Listener added here (not at module level) so it can be cleaned up
    window.addEventListener("mousemove", trackCircle, true);
  });

  onDestroy(() => {
    window.removeEventListener("mousemove", trackCircle, true);
    typedInstance?.destroy();
  });

  // ── Typed.js description ─────────────────────────────────────────────────────
  function startTyped(strings) {
    typedInstance?.destroy();
    typedInstance = new Typed("#description", {
      strings: strings ?? ["a discography of many projects"],
      typeSpeed: 50,
      showCursor: false,
    });
  }

  // ── Banner entry animation ───────────────────────────────────────────────────
  async function setBannerAnimation() {
    if (animation_on) return;

    document.getElementById("tagline").classList.add("color-blue");
    document.querySelectorAll(".menu-item h6").forEach(el => el.classList.add("color-blue"));
    document.querySelectorAll(".menu-item-line").forEach(el => el.classList.add("border-color-blue"));

    await animateBanners();
    setTimeout(() => {
      animateTriangles();
      startTyped();
      animation_on = true;
    }, 2000);
  }

  function animateBanners() {
    return new Promise(resolve => {
      let i = 1;
      const id = setInterval(() => {
        const banner = document.getElementById(`banner__${i}`);
        if (!banner) { clearInterval(id); resolve(); return; }
        banner.classList.add(i % 2 === 0 ? "animate-scroll-right" : "animate-scroll-left");
        i++;
        if (i > 10) { clearInterval(id); resolve(); }
      }, 300);
    });
  }

  function animateTriangles() {
    let j = 1;
    const id = setInterval(() => {
      const triangle = document.getElementById(`triangle__${j}`);
      if (!triangle) { clearInterval(id); return; }
      triangle.classList.remove("d-none");
      j++;
      if (j > 4) clearInterval(id);
    }, 500);
  }

  // ── Navigation ───────────────────────────────────────────────────────────────
  function goToRoom() {
    window.location.hash = "room";
  }
</script>

<Banner {animation_on} />

<div id="home" in:fly="{{ delay: 300, duration: 300 }}" out:slide="{{ duration: 300 }}">
  <span class="filled-text">
    <div id="triangles" class="triangle-positions">
      <span id="triangle__1" class="d-none" style="left: 0; top: inherit"><Triangle /></span>
      <span id="triangle__2" class="d-none" style="left: 5rem; top: inherit"><Triangle /></span>
      <span id="triangle__3" class="d-none" style="left: 10rem; top: inherit"><Triangle /></span>
    </div>

    <span class="d-flex">
      <h4 class="title">FIND</h4>
      <h2 class="tagline" id="tagline">FRED</h2>
      <h4 class="footer">ONLINE</h4>
      <p id="description" class="footer-description" />
    </span>
  </span>

  <span class="outlined-text">
    <span class="d-flex">
      <h4 class="title">FIND</h4>
      <!-- svelte-ignore a11y-mouse-events-have-key-events -->
      <h2 class="tagline" on:mouseover={setBannerAnimation}>FRED</h2>
      <h4 class="footer">ONLINE</h4>
    </span>

    <span class="menu">
      <div class="menu-item outlined-text">
        <h6>Resume</h6>
        <hr class="menu-item-line">
      </div>

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="menu-item filled-text" style="margin-left: 34%" on:click={goToRoom}>
        <h6>The.Room</h6>
        <hr class="menu-item-line">
      </div>

      <div class="menu-item filled-text" style="margin-left: 67%">
        <h6>the.Rest</h6>
        <hr class="menu-item-line">
      </div>
    </span>
  </span>

  <div id="circle" bind:this={circle} />
</div>

<style lang="scss">
  @import "../assets/scss/home/home.scss";
</style>
