<!--
  Chair — centered behind the desk (desk: left 69rem–109rem, surface top: 35rem).
  Back peeks above the desk surface; seat + legs are hidden/below it.
  Rendered BEFORE <Desk> in Room.svelte so the desk surface overlays the seat naturally.
-->
<div class="chair">
  <!-- back sticks up above the desk surface -->
  <div class="chair-back">
    <div class="slat"></div>
    <div class="slat"></div>
    <div class="slat"></div>
  </div>

  <!-- seat — sits at desk level, mostly hidden behind desk block -->
  <div class="chair-seat"></div>

  <!-- only front legs are visible below the desk -->
  <div class="leg leg-left"></div>
  <div class="leg leg-right"></div>
</div>

<style>
  .chair {
    position: absolute;
    left: 76rem;
    /* back top starts here; desk surface is at 35rem */
    top: 28rem;
    width: 16rem;
  }

  /* ── Back ─────────────────────────────────── */
  .chair-back {
    position: relative;
    width: 13rem;
    /*
      chair top: 28rem, desk surface: 35rem → gap is 7rem.
      Keeping the back exactly 7rem means it ends flush at the desk surface
      and nothing bleeds below where the desk blocks can cover it.
    */
    height: 7rem;
    margin: 0 auto;
    background: #2e2b00;
    border-radius: 10px 10px 2px 2px;
    border: 3px solid #3e3a00;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .slat {
    width: 1.4rem;
    height: 3.5rem;
    background: #1e1c00;
    border-radius: 4px;
    opacity: 0.55;
  }

  /* ── Seat ─────────────────────────────────── */
  .chair-seat {
    position: absolute;
    /* 28 + 7 = 35rem — sits right at the desk surface, covered by desk blocks */
    top: 7rem;
    left: 0;
    width: 16rem;
    height: 2.5rem;
    background: #333000;
    border-radius: 6px;
    border: 3px solid #3e3a00;
  }

  /* ── Legs ─────────────────────────────────── */
  .leg {
    position: absolute;
    /* 28 + 9.5 = 37.5rem — below the desk surface, peeks out under the desk */
    top: 9.5rem;
    width: 1.6rem;
    height: 9rem;
    background: #2a2800;
    border-radius: 0 0 6px 6px;
  }

  .leg-left {
    left: 1.5rem;
  }
  .leg-right {
    right: 1.5rem;
  }
</style>
