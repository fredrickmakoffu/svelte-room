<script>
  import { onMount, onDestroy } from "svelte";
  import { selectedBook } from "../../stores/room.js";

  let canvas;
  let ctx;
  let animId;

  /** @type {{ x:number, y:number, r:number, maxR:number, speed:number }[]} */
  let ripples = [];

  let lastTitle = null;

  function spawnRipple(x, y, maxR = 80, speed = 1.2) {
    ripples.push({ x, y, r: 2, maxR, speed });
  }

  function drawFrame() {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const rip of ripples) {
      const t = rip.r / rip.maxR;
      const alpha = (1 - t) * 0.5;
      ctx.beginPath();
      ctx.ellipse(rip.x, rip.y, rip.r, rip.r * 0.28, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(150, 220, 230, ${alpha})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
      rip.r += rip.speed;
    }
    ripples = ripples.filter((r) => r.r < r.maxR);

    animId = requestAnimationFrame(drawFrame);
  }

  let ambientTimer;

  onMount(() => {
    canvas.width = canvas.offsetWidth || 2500;
    canvas.height = canvas.offsetHeight || 240;
    ctx = canvas.getContext("2d");
    drawFrame();

    ambientTimer = setInterval(() => {
      if (!canvas) return;
      spawnRipple(
        Math.random() * canvas.width,
        20 + Math.random() * (canvas.height - 40),
        35 + Math.random() * 55,
        0.7 + Math.random() * 0.9
      );
    }, 1600);
  });

  onDestroy(() => {
    cancelAnimationFrame(animId);
    clearInterval(ambientTimer);
  });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const scaleX = canvas ? canvas.width / rect.width : 1;
    const scaleY = canvas ? canvas.height / rect.height : 1;
    spawnRipple(
      (e.clientX - rect.left) * scaleX,
      (e.clientY - rect.top) * scaleY,
      30,
      2.2
    );
  }

  // When a new book is selected, burst ripples at the text position
  $: if ($selectedBook?.title && $selectedBook.title !== lastTitle) {
    lastTitle = $selectedBook.title;
    if (canvas) {
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          spawnRipple(
            canvas.width * 0.5 + (Math.random() - 0.5) * 350,
            canvas.height * 0.4 + (Math.random() - 0.5) * canvas.height * 0.25,
            55 + Math.random() * 45,
            1.4 + Math.random() * 0.8
          );
        }, i * 160);
      }
    }
  }
</script>

<!-- SVG filter — hidden 0-size element, but the filter is accessible by ID in the document -->
<svg class="water-defs" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter
      id="water-wave"
      x="-8%"
      y="-8%"
      width="116%"
      height="116%"
      color-interpolation-filters="sRGB"
    >
      <feTurbulence
        type="turbulence"
        baseFrequency="0.013 0.032"
        numOctaves="2"
        seed="5"
        result="noise"
      >
        <animate
          attributeName="seed"
          from="0"
          to="300"
          dur="14s"
          repeatCount="indefinite"
        />
      </feTurbulence>
      <feDisplacementMap
        in="SourceGraphic"
        in2="noise"
        scale="22"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </defs>
</svg>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="water" on:mousemove={handleMouseMove}>

  <!-- Deep-water gradient background -->
  <div class="water-bg" />

  <!-- Animated surface highlight -->
  <div class="water-surface" />

  <!-- Caustic shimmer -->
  <div class="caustics" />

  <!-- Abstract room reflection (colour blocks, flipped + wave-distorted) -->
  <div class="reflection">
    <div class="refl-wall" />
    <div class="refl-window" />
    <div class="refl-desk" />
    <div class="refl-shelves" />
    <div class="refl-lamp" />
    <div class="refl-guitar" />
    <div class="refl-teal-bar" />
  </div>

  <!-- Reflection fade-out overlay (deeper = darker) -->
  <div class="reflection-fade" />

  <!-- Book text reflected in water -->
  {#if $selectedBook?.title}
    <div class="book-reflection">
      <span class="book-title">{$selectedBook.title}</span>
      {#if $selectedBook.tagline}
        <span class="book-tagline">{$selectedBook.tagline}</span>
      {/if}
    </div>
  {/if}

  <!-- Ripple ring canvas drawn on top -->
  <canvas bind:this={canvas} class="ripple-canvas" />
</div>

<style>
  .water-defs {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
    pointer-events: none;
  }

  /* ── Container ─────────────────────────────────────────────────────── */
  .water {
    position: absolute;
    /* floor sits at top:46rem, height:1.8rem → bottom at ~47.8rem       */
    top: 47.8rem;
    left: 0;
    width: 100%;
    /* room canvas is 1000px = 62.5rem at 16px/rem                       */
    height: calc(62.5rem - 47.8rem);
    overflow: hidden;
    z-index: -1;
    cursor: crosshair;
  }

  /* ── Background ────────────────────────────────────────────────────── */
  .water-bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg,
      #013d42 0%,
      #012330 50%,
      #000e1a 100%
    );
  }

  /* Thin scrolling highlight right at the surface */
  .water-surface {
    position: absolute;
    top: 0;
    left: -100%;
    width: 300%;
    height: 5px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(0, 210, 210, 0.35) 20%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(0, 200, 200, 0.25) 80%,
      transparent 100%
    );
    animation: surfaceScroll 5s linear infinite;
  }

  @keyframes surfaceScroll {
    from { transform: translateX(0); }
    to   { transform: translateX(33.33%); }
  }

  /* Soft caustic blobs */
  .caustics {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 90px 25px at 18% 55%, rgba(0, 180, 180, 0.07) 0%, transparent 100%),
      radial-gradient(ellipse 120px 20px at 55% 72%, rgba(0, 160, 170, 0.05) 0%, transparent 100%),
      radial-gradient(ellipse 60px 18px at 82% 38%, rgba(0, 200, 200, 0.06) 0%, transparent 100%);
    animation: causticDrift 9s ease-in-out infinite alternate;
    pointer-events: none;
  }

  @keyframes causticDrift {
    from { opacity: 0.6; transform: translate(0, 0); }
    to   { opacity: 1;   transform: translate(12px, 6px); }
  }

  /* ── Room reflection ───────────────────────────────────────────────── */
  .reflection {
    position: absolute;
    inset: 0;
    transform: scaleY(-1);           /* flip: bottom of water = room's floor */
    filter: url(#water-wave);
    opacity: 0.58;
    will-change: filter;
  }

  /* Wall (aliceblue-family) */
  .refl-wall {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg,
      rgba(180, 218, 228, 0.38) 0%,
      rgba(110, 162, 175, 0.18) 100%
    );
  }

  /* Teal floor bar — bottom of reflection = right at the water surface */
  .refl-teal-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 14px;
    background: rgba(0, 128, 128, 0.7);
  }

  /* Window light blob */
  .refl-window {
    position: absolute;
    bottom: 12px;
    left: 23%;
    width: 11%;
    height: 60%;
    background: rgba(240, 245, 200, 0.1);
    border: 1px solid rgba(255, 255, 180, 0.07);
    border-radius: 2px;
    box-shadow: 0 0 50px rgba(240, 245, 200, 0.07);
  }

  /* Desk strip */
  .refl-desk {
    position: absolute;
    bottom: 10px;
    left: 30%;
    width: 44%;
    height: 5px;
    background: rgba(30, 42, 45, 0.6);
    border-radius: 1px;
  }

  /* Double shelf lines */
  .refl-shelves {
    position: absolute;
    bottom: 38%;
    left: 5%;
    width: 20%;
    height: 28%;
    border-bottom: 3px solid rgba(38, 52, 55, 0.45);
    border-top: 3px solid rgba(38, 52, 55, 0.45);
  }

  /* Warm lamp glow */
  .refl-lamp {
    position: absolute;
    bottom: 8px;
    left: 45%;
    width: 180px;
    height: 110px;
    background: radial-gradient(ellipse at center,
      rgba(255, 210, 100, 0.14) 0%,
      transparent 65%
    );
  }

  /* Guitar silhouette — narrow vertical bar on the far right */
  .refl-guitar {
    position: absolute;
    bottom: 6px;
    right: 7%;
    width: 22px;
    height: 78%;
    background: rgba(85, 50, 12, 0.24);
    border-radius: 4px 4px 14px 14px;
  }

  /* Reflection depth fade (deepest water is darkest) */
  .reflection-fade {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom,
      transparent 25%,
      rgba(0, 10, 20, 0.65) 100%
    );
    pointer-events: none;
    z-index: 1;
  }

  /* ── Book text in water ─────────────────────────────────────────────── */
  .book-reflection {
    position: absolute;
    top: 22%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    pointer-events: none;
    filter: url(#water-wave);
    animation: textDrift 4.5s ease-in-out infinite;
    z-index: 2;
    will-change: filter, transform;
    white-space: nowrap;
  }

  .book-title {
    font-family: "Supreme", sans-serif;
    font-size: 13px;
    color: rgba(165, 232, 242, 0.82);
    letter-spacing: 4px;
    text-transform: uppercase;
    text-shadow:
      0 0 8px  rgba(90, 200, 220, 0.9),
      0 0 22px rgba(0, 150, 180, 0.45);
  }

  .book-tagline {
    font-family: "Clash Grotesk", sans-serif;
    font-size: 8px;
    color: rgba(135, 208, 220, 0.58);
    letter-spacing: 2px;
    font-style: italic;
    text-shadow: 0 0 6px rgba(70, 175, 200, 0.6);
  }

  @keyframes textDrift {
    0%,  100% { transform: translateX(-50%) translateY(0px)   skewX(0deg); }
    30%        { transform: translateX(-50%) translateY(-4px)  skewX(0.6deg); }
    65%        { transform: translateX(-50%) translateY(3px)   skewX(-0.4deg); }
  }

  /* ── Ripple canvas ──────────────────────────────────────────────────── */
  .ripple-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 3;
  }
</style>
