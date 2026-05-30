<div class="bg-plants">
  <!-- Small round bushy plant -->
  <div class="plant bushy float-slow">
    <div class="leaves">
      <div class="stem"></div>
      <div class="leaf bl1"></div>
      <div class="leaf bl2"></div>
      <div class="leaf bl3"></div>
      <div class="leaf bl4"></div>
    </div>
    <div class="pot-rim"></div>
    <div class="pot-body"></div>
    <div class="pot-foot"></div>
  </div>

  <!-- Tall upright snake plant -->
  <div class="plant snake float-mid">
    <div class="leaves snake-leaves">
      <div class="snake-leaf sl1"></div>
      <div class="snake-leaf sl2"></div>
      <div class="snake-leaf sl3"></div>
    </div>
    <div class="pot-rim snake-rim"></div>
    <div class="pot-body snake-body"></div>
    <div class="pot-foot snake-foot"></div>
  </div>
</div>

<style>
  .bg-plants {
    position: absolute;
    top: 0;
    left: 0;
  }

  .plant {
    position: absolute;
  }

  /* ── Bushy plant ─────────────────────────── */
  .bushy {
    top: 35.5rem;
    left: 52rem;
    width: 5rem;
  }

  .bushy .leaves {
    position: relative;
    height: 7rem;
    width: 5rem;
  }

  .bushy .stem {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 3rem;
    background: #3a7d44;
    border-radius: 3px;
  }

  .bushy .leaf {
    position: absolute;
    width: 2.4rem;
    height: 3.8rem;
    border-radius: 80% 20% 80% 20%;
    transform-origin: 50% 100%;
  }

  .bl1 {
    bottom: 1rem;
    left: 0.1rem;
    transform: rotate(-50deg);
    background: #2d6a4f;
  }
  .bl2 {
    bottom: 2.2rem;
    left: 0.6rem;
    transform: rotate(-18deg);
    background: #52b788;
  }
  .bl3 {
    bottom: 2.2rem;
    left: 1.6rem;
    transform: rotate(18deg);
    background: #40916c;
  }
  .bl4 {
    bottom: 1rem;
    left: 2.0rem;
    transform: rotate(50deg);
    background: #2d6a4f;
  }

  .bushy .pot-rim {
    width: 5.5rem;
    height: 0.75rem;
    background: #c0522a;
    border-radius: 5px 5px 0 0;
    margin: 0 auto;
  }
  .bushy .pot-body {
    width: 4.5rem;
    height: 4rem;
    margin: 0 auto;
    clip-path: polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%);
    background-image: linear-gradient(to right, #a84830 0%, #c96040 50%, #a84830 100%);
  }
  .bushy .pot-foot {
    width: 3.2rem;
    height: 0.45rem;
    background: #8f3a26;
    border-radius: 0 0 4px 4px;
    margin: 0 auto;
  }

  /* ── Snake / upright plant ───────────────── */
  .snake {
    top: 33.2rem;
    left: 63rem;
    width: 4rem;
  }

  .snake-leaves {
    position: relative;
    height: 11rem;
    width: 4rem;
  }

  .snake-leaf {
    position: absolute;
    width: 1.1rem;
    border-radius: 50% 50% 10% 10% / 80% 80% 20% 20%;
    transform-origin: 50% 100%;
  }

  .sl1 {
    bottom: 0;
    left: 0.3rem;
    height: 8rem;
    transform: rotate(-12deg);
    background: linear-gradient(to top, #1b4332, #40916c 60%, #52b788);
  }
  .sl2 {
    bottom: 0;
    left: 1.3rem;
    height: 10rem;
    transform: rotate(2deg);
    background: linear-gradient(to top, #1b4332, #2d6a4f 60%, #40916c);
  }
  .sl3 {
    bottom: 0;
    left: 2.2rem;
    height: 7.5rem;
    transform: rotate(14deg);
    background: linear-gradient(to top, #1b4332, #40916c 60%, #52b788);
  }

  .snake-rim {
    width: 4.5rem;
    height: 0.7rem;
    background: #8b6914;
    border-radius: 5px 5px 0 0;
    margin: 0 auto;
  }
  .snake-body {
    width: 3.8rem;
    height: 3.2rem;
    margin: 0 auto;
    clip-path: polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%);
    background-image: linear-gradient(to right, #7a5c10 0%, #a07820 50%, #7a5c10 100%);
  }
  .snake-foot {
    width: 2.8rem;
    height: 0.4rem;
    background: #6b4e0e;
    border-radius: 0 0 4px 4px;
    margin: 0 auto;
  }

  /* ── Float animations ───────────────────── */
  @keyframes float-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }
  @keyframes float-mid {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }

  .float-slow { animation: float-slow 5s ease-in-out infinite; }
  .float-mid  { animation: float-mid  4s ease-in-out infinite 0.8s; }
</style>
