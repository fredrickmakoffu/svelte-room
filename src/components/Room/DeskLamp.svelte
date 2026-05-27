<!--
  Desk lamp — right side of the desk (desk spans 69–109rem, lamp at 105rem).
  Base sits on the desk surface (top: 35rem). Lamp total height ~13rem so
  wrapper top = 35 – 13 = 22rem.
-->
<div class="lamp float">
  <div class="shade">
    <div class="shade-inner"></div>
  </div>
  <div class="neck"></div>
  <div class="pole"></div>
  <div class="base"></div>
  <div class="glow"></div>
</div>

<style>
  .lamp {
    position: absolute;
    top: 22rem;
    left: 102rem;
    width: 5rem;
    z-index: 3;
  }

  /* ── Shade ──────────────────────────────────── */
  .shade {
    width: 5rem;
    height: 3rem;
    /* wider at bottom = light points down */
    clip-path: polygon(14% 0%, 86% 0%, 100% 100%, 0% 100%);
    background: linear-gradient(160deg, #b8720a 0%, #d4922a 50%, #f0b84a 100%);
    margin: 0 auto;
    position: relative;
  }

  /* Warm glow on inside rim of shade */
  .shade-inner {
    position: absolute;
    bottom: 0;
    left: 8%;
    right: 8%;
    height: 35%;
    background: rgba(255, 220, 100, 0.4);
    border-radius: 0 0 3px 3px;
  }

  /* ── Neck (small connector between shade and pole) ── */
  .neck {
    width: 0.6rem;
    height: 0.8rem;
    background: #3e3c00;
    margin: 0 auto;
    border-radius: 0 0 3px 3px;
  }

  /* ── Pole ────────────────────────────────────── */
  .pole {
    width: 0.35rem;
    height: 8rem;
    background: linear-gradient(to right, #2a2800, #4a4600);
    margin: 0 auto;
    border-radius: 2px;
  }

  /* ── Base ────────────────────────────────────── */
  .base {
    width: 4.5rem;
    height: 1rem;
    background: radial-gradient(ellipse at 40% 30%, #4a4800 0%, #2a2600 100%);
    border-radius: 30px;
    margin: 0 auto;
    box-shadow:
      0 3px 8px rgba(0, 0, 0, 0.4),
      inset 0 1px 2px rgba(255, 255, 255, 0.08);
  }

  /* ── Glow cast on desk surface ──────────────── */
  .glow {
    position: absolute;
    /* projects below the lamp base onto the desk */
    bottom: -3.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 16rem;
    height: 4rem;
    background: radial-gradient(
      ellipse at top,
      rgba(255, 200, 70, 0.22) 0%,
      transparent 68%
    );
    pointer-events: none;
  }
</style>
