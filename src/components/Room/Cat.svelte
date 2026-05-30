<script>
  import { onMount, onDestroy } from "svelte";

  /** @type {HTMLDivElement} */
  let eyeL;
  /** @type {HTMLDivElement} */
  let eyeR;
  let plL = { x: 0, y: 0 };
  let plR = { x: 0, y: 0 };

  /** @param {MouseEvent} e */
  function trackMouse(e) {
    const MAX = 1.8;
    /** @param {{ x: number; y: number }} v */
    const setL = (v) => (plL = v);
    /** @param {{ x: number; y: number }} v */
    const setR = (v) => (plR = v);
    for (const [el, set] of /** @type {[HTMLDivElement, function][]} */ ([
      [eyeL, setL],
      [eyeR, setR],
    ])) {
      if (!el) continue;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const d = Math.sqrt(dx * dx + dy * dy) || 1;
      const s = Math.min(MAX, d) / d;
      set({ x: dx * s, y: dy * s });
    }
  }

  onMount(() => window.addEventListener("mousemove", trackMouse));
  onDestroy(() => window.removeEventListener("mousemove", trackMouse));
</script>

<div class="main" aria-hidden="true" style="transform: scale(1.3);">
  <span class="stand"></span>
  <div class="cat">
    <div class="body"></div>
    <div class="head">
      <div class="ear"></div>
      <div class="ear"></div>
    </div>
    <div class="face">
      <div class="eye-wrap" bind:this={eyeL}>
        <div
          class="pupil"
          style="transform: translate({plL.x}px, {plL.y}px)"
        ></div>
      </div>
      <div class="eye-wrap" bind:this={eyeR}>
        <div
          class="pupil"
          style="transform: translate({plR.x}px, {plR.y}px)"
        ></div>
      </div>
      <div class="nose"></div>
      <!-- <div class="whisker-container wc-left">
        <div class="whisker"></div>
        <div class="whisker"></div>
      </div>
      <div class="whisker-container wc-right">
        <div class="whisker"></div>
        <div class="whisker"></div>
      </div> -->
    </div>
    <div class="tail-container">
      <div class="tail">
        <div class="tail">
          <div class="tail">
            <div class="tail">
              <div class="tail">
                <div class="tail">
                  <div class="tail"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  /* ── Container ──────────────────────────────────────────── */
  .main {
    position: absolute;
    top: 28rem;
    left: 133rem;
    height: 300px;
    width: 300px;
    z-index: 2;
  }

  /* ── Stand ──────────────────────────────────────────────── */
  .stand {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    height: 15px;
    width: 150px;
    border-radius: 15px;
    background-color: #fd6e72;
    z-index: 2;
  }
  .stand::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translate(-50%);
    height: 8px;
    width: 38px;
    border-radius: 10px;
    background-color: #2f363e;
    box-shadow:
      0 8px 0 #2f363e,
      0 16px 0 #2f363e,
      0 24px 0 #2f363e,
      0 32px 0 #2f363e,
      0 40px 0 #2f363e,
      0 48px 0 #2f363e,
      0 56px 0 #2f363e,
      0 64px 0 #2f363e,
      0 72px 0 #2f363e,
      0 80px 0 #2f363e,
      0 88px 0 #2f363e,
      0 96px 0 #2f363e,
      0 104px 0 #2f363e,
      0 112px 0 #2f363e,
      0 120px 0 #2f363e,
      0 128px 0 #2f363e;
  }

  /* ── Cat container ──────────────────────────────────────── */
  .cat {
    width: 83px;
    height: 38px;
    position: absolute;
    top: calc(50% - 38px);
    right: 98px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
  }

  /* ── Body ───────────────────────────────────────────────── */
  .body {
    width: 83px;
    height: 38px;
    background-color: #745260;
    position: absolute;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    animation: body 12s none infinite;
  }

  /* ── Head ───────────────────────────────────────────────── */
  .head {
    width: 52px;
    height: 26px;
    background-color: #745260;
    position: absolute;
    top: calc(50% - 8px);
    left: -30px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    z-index: 4;
  }

  /* ── Face (eyes, nose, whiskers) ────────────────────────── */
  .face {
    position: absolute;
    top: calc(50% - 8px);
    left: -30px;
    width: 52px;
    height: 26px;
    z-index: 5;
    pointer-events: none;
    overflow: visible;
  }

  .eye-wrap {
    position: absolute;
    top: 5px;
    width: 9px;
    height: 9px;
    background: #fdf9de;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .eye-wrap:first-child {
    left: 9px;
  }
  .eye-wrap:nth-child(2) {
    left: 29px;
  }

  .pupil {
    width: 5px;
    height: 5px;
    background: #222;
    border-radius: 50%;
    flex-shrink: 0;
    transition: transform 0.07s ease-out;
  }

  /* ── Ears ───────────────────────────────────────────────── */
  .ear {
    position: absolute;
    left: 3px;
    top: -3px;
    width: 0;
    height: 0;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 15px solid #745260;
    transform: rotate(-30deg);
    animation: left-ear 12s both infinite;
  }
  .ear + .ear {
    top: -9px;
    left: 23px;
    animation: right-ear 12s both infinite;
  }

  /* ── Nose ───────────────────────────────────────────────── */
  .nose {
    position: absolute;
    bottom: 6px;
    left: 18px;
    background-color: #fd6e72;
    height: 4px;
    width: 4px;
    border-radius: 50%;
  }

  /* ── Whiskers ───────────────────────────────────────────── */
  .whisker-container {
    position: absolute;
    width: 15px;
    height: 8px;
    transform-origin: right;
  }
  .wc-left {
    bottom: -2px;
    left: 3px;
    animation: left-whisker 12s both infinite;
  }
  .wc-right {
    bottom: 3px;
    left: 3px;
    transform: rotate(180deg);
    animation: right-whisker 12s both infinite;
  }
  .whisker {
    position: absolute;
    top: 0;
    width: 100%;
    border: 0.5px solid #fdf9de;
    transform-origin: 100% 0;
    transform: rotate(10deg);
  }
  .whisker:last-child {
    transform: rotate(-20deg);
  }

  /* ── Tail ───────────────────────────────────────────────── */
  .tail-container {
    position: absolute;
    right: 0;
    bottom: -10px;
    z-index: 3;
  }
  .tail {
    position: absolute;
    height: 23px;
    width: 11px;
    bottom: -8px;
    right: 0;
    border-bottom-right-radius: 4px;
    background: #745260;
    z-index: 0;
  }
  .tail > .tail {
    animation: tail 12s none infinite;
    height: 100%;
    width: 11px;
    transform-origin: left;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 30px;
  }

  /* ── Keyframes (intervals as % of 15-unit cycle) ────────── */
  @keyframes tail {
    6.67% {
      transform: rotate(0);
    }
    10% {
      transform: rotate(10deg);
    }
    16.67% {
      transform: rotate(-5deg);
    }
    20% {
      transform: rotate(30deg);
    }
    26.67% {
      transform: rotate(-2deg);
    }
    46.67% {
      transform: rotate(10deg);
    }
    53.33% {
      transform: rotate(-5deg);
    }
    56.67% {
      transform: rotate(10deg);
    }
  }

  @keyframes body {
    6.67% {
      transform: scaleY(1);
    }
    10% {
      transform: scaleY(1.15);
    }
    16.67% {
      transform: scaleY(1);
    }
    20% {
      transform: scaleY(1.25);
    }
    26.67% {
      transform: scaleY(1);
    }
    46.67% {
      transform: scaleY(1.15);
    }
    53.33% {
      transform: scaleY(1);
    }
    56.67% {
      transform: scaleY(1.15);
    }
  }

  @keyframes left-whisker {
    6.67% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(0deg);
    }
    16.67% {
      transform: rotate(-5deg);
    }
    20% {
      transform: rotate(0deg);
    }
    26.67% {
      transform: rotate(0deg);
    }
    46.67% {
      transform: rotate(10deg);
    }
    53.33% {
      transform: rotate(-5deg);
    }
    56.67% {
      transform: rotate(10deg);
    }
  }

  @keyframes right-whisker {
    6.67% {
      transform: rotate(180deg);
    }
    10% {
      transform: rotate(190deg);
    }
    16.67% {
      transform: rotate(180deg);
    }
    20% {
      transform: rotate(175deg);
    }
    26.67% {
      transform: rotate(190deg);
    }
    46.67% {
      transform: rotate(180deg);
    }
    53.33% {
      transform: rotate(185deg);
    }
    56.67% {
      transform: rotate(175deg);
    }
  }

  @keyframes left-ear {
    0% {
      transform: rotate(-20deg);
    }
    6.67% {
      transform: rotate(-6deg);
    }
    13.33% {
      transform: rotate(-15deg);
    }
    26.67% {
      transform: rotate(-15deg);
    }
    33.33% {
      transform: rotate(-30deg);
    }
    40% {
      transform: rotate(-30deg);
    }
    46.67% {
      transform: rotate(0deg);
    }
    53.33% {
      transform: rotate(0deg);
    }
    60% {
      transform: rotate(-15deg);
    }
    80% {
      transform: rotate(-15deg);
    }
    93.33% {
      transform: rotate(-6deg);
    }
    100% {
      transform: rotateZ(-6deg);
    }
  }

  @keyframes right-ear {
    0% {
      transform: rotateZ(-16deg);
    }
    6.67% {
      transform: rotateZ(-16deg);
    }
    13.33% {
      transform: rotateZ(-19deg);
    }
    26.67% {
      transform: rotateZ(-19deg);
    }
    33.33% {
      transform: rotateZ(-30deg);
    }
    36.67% {
      transform: rotateZ(-19deg);
    }
    37.33% {
      transform: rotateZ(-30deg);
    }
    38% {
      transform: rotateZ(-19deg);
    }
    40% {
      transform: rotateZ(-19deg);
    }
    40.67% {
      transform: rotateZ(-30deg);
    }
    41.33% {
      transform: rotateZ(-19deg);
    }
    46.67% {
      transform: rotateZ(-9deg);
    }
    53.33% {
      transform: rotateZ(-9deg);
    }
    60% {
      transform: rotateZ(-19deg);
    }
    60.67% {
      transform: rotateZ(-30deg);
    }
    61.33% {
      transform: rotateZ(-19deg);
    }
    62.67% {
      transform: rotateZ(-19deg);
    }
    63.33% {
      transform: rotateZ(-30deg);
    }
    64% {
      transform: rotateZ(-19deg);
    }
    80% {
      transform: rotateZ(-19deg);
    }
    93.33% {
      transform: rotateZ(-16deg);
    }
    100% {
      transform: rotateZ(-16deg);
    }
  }
</style>
