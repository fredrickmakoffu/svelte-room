<script>
  // Window: left 80rem, width 16rem → right edge 96rem; bottom at 25.7rem.
  // Beam element: top 25.5rem, left 75rem, width 26rem, height 21rem.
  // Clip-path top: left=(80-75)/26=19%, right=(96-75)/26=81%.

  // Dust motes placed inside the beam trapezoid.
  const DUST = [
    { l: 81.5, t: 28, delay: 0, dur: 3.4 },
    { l: 85.0, t: 31, delay: 0.6, dur: 4.1 },
    { l: 89.5, t: 29, delay: 1.1, dur: 3.8 },
    { l: 82.0, t: 35, delay: 1.7, dur: 4.5 },
    { l: 87.0, t: 33, delay: 0.3, dur: 3.2 },
    { l: 91.0, t: 37, delay: 1.4, dur: 4.0 },
    { l: 84.5, t: 39, delay: 0.8, dur: 3.6 },
    { l: 88.5, t: 26, delay: 2.0, dur: 4.3 },
    { l: 93.0, t: 42, delay: 0.5, dur: 3.9 },
  ];
</script>

<!-- Trapezoid light shaft -->
<div class="light-beam" aria-hidden="true" />

<!-- Soft glow pool where beam meets the floor -->
<div class="light-pool" aria-hidden="true" />

<!-- Drifting dust motes inside the beam -->
{#each DUST as d}
  <div
    class="dust"
    style="left:{d.l}rem; top:{d.t}rem; animation-delay:{d.delay}s; animation-duration:{d.dur}s;"
    aria-hidden="true"
  />
{/each}

<style>
  /* ── Beam ───────────────────────────────────────────────────────── */
  .light-beam {
    position: absolute;
    top: 25.5rem;
    left: 75rem;
    width: 26rem;
    height: 21rem;
    background: linear-gradient(
      to bottom,
      rgba(200, 230, 255, 0.42) 0%,
      rgba(200, 230, 255, 0.22) 55%,
      transparent 100%
    );
    /* Narrows to window-width at top, widens to full element width at bottom */
    clip-path: polygon(19% 0%, 81% 0%, 100% 100%, 0% 100%);
    pointer-events: none;
    z-index: 0;
  }

  /* ── Floor glow ─────────────────────────────────────────────────── */
  .light-pool {
    position: absolute;
    top: 44.5rem;
    left: 71rem;
    width: 34rem;
    height: 4rem;
    background: radial-gradient(
      ellipse at 50% 0%,
      rgba(180, 215, 255, 0.28) 0%,
      transparent 65%
    );
    pointer-events: none;
    z-index: 0;
  }

  /* ── Dust motes ─────────────────────────────────────────────────── */
  .dust {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(220, 238, 255, 0.9);
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;
    animation: dust-drift 4s ease-in-out infinite;
  }

  @keyframes dust-drift {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    18% {
      opacity: 0.55;
    }
    55% {
      transform: translate(0.35rem, -0.85rem);
      opacity: 0.38;
    }
    100% {
      transform: translate(-0.2rem, -1.75rem);
      opacity: 0;
    }
  }
</style>
