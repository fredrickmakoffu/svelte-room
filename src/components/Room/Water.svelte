<script>
  import { onMount, onDestroy } from "svelte";
  import { selectedBook } from "../../stores/room.js";

  let canvas;
  let ctx;
  let animId;

  // ── Height-map water simulation ───────────────────────────────────────
  const SIM_SCALE = 4; // one sim cell per 4 canvas pixels
  let simW = 0, simH = 0;
  let buf1, buf2; // ping-pong height buffers

  function initSim(w, h) {
    simW = Math.ceil(w / SIM_SCALE);
    simH = Math.ceil(h / SIM_SCALE);
    buf1 = new Float32Array(simW * simH);
    buf2 = new Float32Array(simW * simH);
  }

  function stepSim() {
    for (let y = 1; y < simH - 1; y++) {
      for (let x = 1; x < simW - 1; x++) {
        const i = y * simW + x;
        buf2[i] =
          (buf1[i - 1] + buf1[i + 1] + buf1[i - simW] + buf1[i + simW]) / 2 -
          buf2[i];
        buf2[i] *= 0.982; // damping
      }
    }
    const tmp = buf1;
    buf1 = buf2;
    buf2 = tmp;
  }

  function disturb(x, y, radius, strength) {
    const cx = Math.floor(x / SIM_SCALE);
    const cy = Math.floor(y / SIM_SCALE);
    const sr = Math.ceil(radius / SIM_SCALE);
    for (let dy = -sr; dy <= sr; dy++) {
      for (let dx = -sr; dx <= sr; dx++) {
        if (dx * dx + dy * dy <= sr * sr) {
          const nx = cx + dx, ny = cy + dy;
          if (nx > 0 && nx < simW - 1 && ny > 0 && ny < simH - 1) {
            buf1[ny * simW + nx] += strength;
          }
        }
      }
    }
  }

  // ── Visual ripple rings ───────────────────────────────────────────────
  let rings = [];

  function spawnRing(x, y, maxR = 80, speed = 1.2) {
    rings.push({ x, y, r: 2, maxR, speed });
  }

  // ── Text offscreen canvas (cached, redrawn only when book changes) ────
  let offCanvas = null;
  let offCtx = null;
  let textPixels = null; // cached ImageData of the text region
  let textRegion = null; // { x, y, w, h } bounds within the main canvas
  let textDirty = false;
  let currentTitle = "";
  let currentTagline = "";

  function cacheText(cw, ch) {
    if (!offCanvas) {
      offCanvas = document.createElement("canvas");
      offCtx = offCanvas.getContext("2d");
    }
    offCanvas.width = cw;
    offCanvas.height = ch;
    offCtx.clearRect(0, 0, cw, ch);

    if (!currentTitle) {
      textPixels = null;
      textRegion = null;
      textDirty = false;
      return;
    }

    const cx = cw / 2;
    const ty = Math.round(ch * 0.38);

    // Title with glow
    offCtx.save();
    offCtx.shadowColor = "rgba(90, 200, 220, 0.95)";
    offCtx.shadowBlur = 18;
    offCtx.fillStyle = "rgba(165, 232, 242, 0.88)";
    offCtx.font = 'bold 13px "Supreme", sans-serif';
    offCtx.textBaseline = "middle";
    drawSpaced(offCtx, currentTitle.toUpperCase(), cx, ty, 4);
    offCtx.restore();

    // Tagline with glow
    if (currentTagline) {
      offCtx.save();
      offCtx.shadowColor = "rgba(70, 175, 200, 0.7)";
      offCtx.shadowBlur = 10;
      offCtx.fillStyle = "rgba(135, 208, 220, 0.68)";
      offCtx.font = 'italic 8px "Clash Grotesk", sans-serif';
      offCtx.textBaseline = "middle";
      offCtx.textAlign = "center";
      offCtx.fillText(currentTagline, cx, ty + 22);
      offCtx.restore();
    }

    // Cache only the bounding region so the pixel loop stays small
    const rx = Math.max(0, Math.floor(cx - 430));
    const ry = Math.max(0, Math.floor(ty - 32));
    const rw = Math.min(cw - rx, 860);
    const rh = Math.min(ch - ry, 72);
    textRegion = { x: rx, y: ry, w: rw, h: rh };
    textPixels = offCtx.getImageData(rx, ry, rw, rh);
    textDirty = false;
  }

  // Manually spaced character rendering (canvas has no letter-spacing API in all browsers)
  function drawSpaced(c, text, cx, y, spacing) {
    const chars = [...text];
    const widths = chars.map((ch) => c.measureText(ch).width);
    const totalW =
      widths.reduce((s, w) => s + w, 0) + spacing * (chars.length - 1);
    let x = cx - totalW / 2;
    const prev = c.textAlign;
    c.textAlign = "left";
    chars.forEach((ch, i) => {
      c.fillText(ch, x, y);
      x += widths[i] + spacing;
    });
    c.textAlign = prev;
  }

  // Per-pixel displacement of the cached text region using the height map
  function drawDistortedText(cw, ch) {
    if (!textPixels || !textRegion) return;

    const { x: rx, y: ry, w: rw, h: rh } = textRegion;
    const src = textPixels.data;
    const dst = ctx.createImageData(rw, rh);
    const d = dst.data;

    for (let oy = 0; oy < rh; oy++) {
      for (let ox = 0; ox < rw; ox++) {
        const wx = rx + ox;
        const wy = ry + oy;

        // Height-map gradient at this canvas position
        const si =
          Math.min(Math.floor(wy / SIM_SCALE), simH - 2) * simW +
          Math.min(Math.floor(wx / SIM_SCALE), simW - 2);
        const gx = buf1[si] - buf1[Math.min(si + 1, buf1.length - 1)];
        const gy = buf1[si] - buf1[Math.min(si + simW, buf1.length - 1)];

        // Sample source pixel at displaced position (clamped to region)
        const sx = Math.max(0, Math.min(rw - 1, ox + Math.round(gx * 14)));
        const sy = Math.max(0, Math.min(rh - 1, oy + Math.round(gy * 14)));

        const si4 = (sy * rw + sx) * 4;
        const di4 = (oy * rw + ox) * 4;
        d[di4] = src[si4];
        d[di4 + 1] = src[si4 + 1];
        d[di4 + 2] = src[si4 + 2];
        d[di4 + 3] = src[si4 + 3];
      }
    }

    ctx.putImageData(dst, rx, ry);
  }

  // ── Main animation loop ───────────────────────────────────────────────
  function drawFrame() {
    if (!ctx || !canvas) return;
    const w = canvas.width, h = canvas.height;

    stepSim();
    ctx.clearRect(0, 0, w, h);

    // Redraw text cache if book changed
    if (textDirty) cacheText(w, h);

    // Text rendered with wave-physics distortion
    drawDistortedText(w, h);

    // Visual ripple rings
    rings = rings.filter((r) => r.r < r.maxR);
    for (const rip of rings) {
      const t = rip.r / rip.maxR;
      ctx.beginPath();
      ctx.ellipse(rip.x, rip.y, rip.r, rip.r * 0.28, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(150, 220, 230, ${(1 - t) * 0.5})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
      rip.r += rip.speed;
    }

    animId = requestAnimationFrame(drawFrame);
  }

  // ── Lifecycle ─────────────────────────────────────────────────────────
  let ambientTimer;

  onMount(() => {
    canvas.width = canvas.offsetWidth || 2500;
    canvas.height = canvas.offsetHeight || 240;
    ctx = canvas.getContext("2d");
    initSim(canvas.width, canvas.height);
    drawFrame();

    ambientTimer = setInterval(() => {
      if (!canvas) return;
      const x = Math.random() * canvas.width;
      const y = 10 + Math.random() * (canvas.height - 20);
      disturb(x, y, 8, 100);
      spawnRing(x, y, 35 + Math.random() * 55, 0.7 + Math.random() * 0.9);
    }, 1600);
  });

  onDestroy(() => {
    cancelAnimationFrame(animId);
    clearInterval(ambientTimer);
  });

  // ── Mouse interaction ─────────────────────────────────────────────────
  function handleMouseMove(e) {
    if (!canvas) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);
    disturb(x, y, 10, 120);
    spawnRing(x, y, 30, 2.2);
  }

  // ── Reactive: update text + burst ripples when book changes ───────────
  let lastTitle = "";
  $: if (($selectedBook?.title ?? "") !== lastTitle) {
    lastTitle = $selectedBook?.title ?? "";
    currentTitle = lastTitle;
    currentTagline = $selectedBook?.tagline ?? "";
    textDirty = true;

    if (canvas && lastTitle) {
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          if (!canvas) return;
          const x = canvas.width * 0.5 + (Math.random() - 0.5) * 400;
          const y =
            canvas.height * 0.38 + (Math.random() - 0.5) * canvas.height * 0.3;
          disturb(x, y, 18, 220);
          spawnRing(x, y, 55 + Math.random() * 45, 1.4 + Math.random() * 0.8);
        }, i * 160);
      }
    }
  }
</script>

<!-- SVG filter for the room reflection distortion (GPU-accelerated) -->
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

  <div class="water-bg" />
  <div class="water-surface" />
  <div class="caustics" />

  <!-- Abstract room reflection — CSS shapes, flipped + SVG-wave distorted -->
  <div class="reflection">
    <div class="refl-wall" />
    <div class="refl-window" />
    <div class="refl-desk" />
    <div class="refl-shelves" />
    <div class="refl-lamp" />
    <div class="refl-guitar" />
    <div class="refl-teal-bar" />
  </div>

  <div class="reflection-fade" />

  <!-- Canvas: text with height-map distortion + ripple rings -->
  <canvas bind:this={canvas} class="water-canvas" />
</div>

<style>
  .water-defs {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .water {
    position: absolute;
    top: 47.8rem;
    left: 0;
    width: 100%;
    height: calc(62.5rem - 47.8rem);
    overflow: hidden;
    z-index: -1;
    cursor: crosshair;
  }

  .water-bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, #013d42 0%, #012330 50%, #000e1a 100%);
  }

  .water-surface {
    position: absolute;
    top: 0;
    left: -100%;
    width: 300%;
    height: 5px;
    background: linear-gradient(
      90deg,
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

  .reflection {
    position: absolute;
    inset: 0;
    transform: scaleY(-1);
    filter: url(#water-wave);
    opacity: 0.58;
    will-change: filter;
  }

  .refl-wall {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(180, 218, 228, 0.38) 0%,
      rgba(110, 162, 175, 0.18) 100%
    );
  }

  .refl-teal-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 14px;
    background: rgba(0, 128, 128, 0.7);
  }

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

  .refl-desk {
    position: absolute;
    bottom: 10px;
    left: 30%;
    width: 44%;
    height: 5px;
    background: rgba(30, 42, 45, 0.6);
    border-radius: 1px;
  }

  .refl-shelves {
    position: absolute;
    bottom: 38%;
    left: 5%;
    width: 20%;
    height: 28%;
    border-bottom: 3px solid rgba(38, 52, 55, 0.45);
    border-top: 3px solid rgba(38, 52, 55, 0.45);
  }

  .refl-lamp {
    position: absolute;
    bottom: 8px;
    left: 45%;
    width: 180px;
    height: 110px;
    background: radial-gradient(
      ellipse at center,
      rgba(255, 210, 100, 0.14) 0%,
      transparent 65%
    );
  }

  .refl-guitar {
    position: absolute;
    bottom: 6px;
    right: 7%;
    width: 22px;
    height: 78%;
    background: rgba(85, 50, 12, 0.24);
    border-radius: 4px 4px 14px 14px;
  }

  .reflection-fade {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 25%,
      rgba(0, 10, 20, 0.65) 100%
    );
    pointer-events: none;
    z-index: 1;
  }

  /* Canvas sits above the CSS layers; text + rings drawn here */
  .water-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 3;
  }
</style>
