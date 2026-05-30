<div class="plant float">
  <!-- Leaves -->
  <div class="leaves">
    <div class="stem"></div>
    <div class="leaf l1"></div>
    <div class="leaf l2"></div>
    <div class="leaf l3"></div>
    <div class="leaf l4"></div>
    <div class="leaf l5"></div>
  </div>

  <!-- Pot -->
  <div class="pot-rim"></div>
  <div class="pot-body"></div>
  <div class="pot-foot"></div>
</div>

<style>
  .plant {
    position: absolute;
    top: 31.8rem;
    left: 57rem;
    width: 7rem;
  }

  /* ── Leaves ────────────────────────────────── */
  .leaves {
    position: relative;
    height: 9rem;
    width: 7rem;
  }

  .stem {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 5px;
    height: 4.5rem;
    background: #3a7d44;
    border-radius: 3px;
  }

  .leaf {
    position: absolute;
    width: 3rem;
    height: 5.5rem;
    background: #40916c;
    border-radius: 80% 5% 80% 5%;
    transform-origin: 50% 100%;
  }

  .l1 {
    bottom: 1.8rem;
    left: 0.4rem;
    transform: rotate(-48deg);
    background: #2d6a4f;
  }
  .l2 {
    bottom: 3.2rem;
    left: 1.0rem;
    transform: rotate(-20deg);
    background: #40916c;
  }
  .l3 {
    bottom: 4rem;
    left: 2.0rem;
    transform: rotate(5deg);
    background: #52b788;
  }
  .l4 {
    bottom: 3rem;
    left: 2.8rem;
    transform: rotate(26deg);
    background: #40916c;
  }
  .l5 {
    bottom: 1.2rem;
    left: 3.2rem;
    transform: rotate(50deg);
    background: #2d6a4f;
  }

  /* ── Pot ─────────────────────────────────── */
  .pot-rim {
    width: 8rem;
    height: 1rem;
    background: #d4845a;
    border-radius: 6px 6px 0 0;
    margin: 0 auto;
  }

  .pot-body {
    width: 7rem;
    height: 6rem;
    background: #c36d4a;
    margin: 0 auto;
    clip-path: polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%);
    background-image: linear-gradient(
      to right,
      #b5623f 0%,
      #d4845a 50%,
      #b5623f 100%
    );
  }

  .pot-foot {
    width: 5rem;
    height: 0.55rem;
    background: #a8563a;
    border-radius: 0 0 5px 5px;
    margin: 0 auto;
  }
</style>
