<script>
  const COUNT = 14;

  // Wave-shaped height distribution with hand-tuned nudges
  const NUDGES = [-5, 10, -8, 15, -3, 12, 0, 18, -6, 10, -4, 14, -8, 5];
  const bars = Array.from({ length: COUNT }, (_, i) => {
    const t    = i / (COUNT - 1);
    const base = Math.sin(t * Math.PI) * 50 + 25; // 25–75 %
    return Math.max(20, Math.min(90, Math.round(base + (NUDGES[i] ?? 0))));
  });

  const NOTES = ['♩', '♪', '♫', '♬', '♪', '♩', '♫'];
</script>

<div class="visualizer" aria-hidden="true">
  <div class="bars">
    {#each bars as h, i}
      <div class="bar" style="--h:{h}%; --i:{i};" />
    {/each}
  </div>
  <div class="notes">
    {#each NOTES as note, i}
      <span class="note" style="--i:{i}">{note}</span>
    {/each}
  </div>
</div>

<style>
  .visualizer {
    position: absolute;
    top: 57.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    pointer-events: none;
    z-index: 1;
  }

  /* ── Equalizer bars ──────────────────────────────────────────────── */
  .bars {
    display: flex;
    align-items: flex-end;
    gap: 0.38rem;
    height: 3rem;
  }

  .bar {
    width: 0.75rem;
    height: var(--h);
    background: linear-gradient(to top, teal 0%, #1a9870 55%, #52b788 100%);
    border-radius: 4px 4px 0 0;
    transform-origin: bottom;
    /* Each bar gets a slightly different speed and start phase */
    animation: eq-pulse calc(0.65s + var(--i) * 0.055s) ease-in-out infinite alternate;
    animation-delay: calc(var(--i) * 0.045s);
    opacity: 0.82;
  }

  @keyframes eq-pulse {
    from { transform: scaleY(0.28); }
    to   { transform: scaleY(1);    }
  }

  /* ── Floating notes ──────────────────────────────────────────────── */
  .notes {
    position: relative;
    width: 20rem;
    height: 2.8rem;
    margin-top: 0.4rem;
  }

  .note {
    position: absolute;
    bottom: 0;
    left: calc(var(--i) * 14% + 1%);
    font-size: 1.3rem;
    color: teal;
    opacity: 0;
    font-family: sans-serif;
    animation: note-rise calc(2.2s + var(--i) * 0.35s) ease-out infinite;
    animation-delay: calc(var(--i) * 0.55s);
  }

  @keyframes note-rise {
    0%   { transform: translateY(0) scale(0.7);       opacity: 0;   }
    25%  { opacity: 0.62; }
    100% { transform: translateY(-2.4rem) scale(1.1); opacity: 0;   }
  }
</style>
