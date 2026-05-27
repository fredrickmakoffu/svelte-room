<!--
  Coffee mug sitting on the desk surface (desk top: 35rem).
  Positioned to the left of the laptop (laptop: left 93rem).
  Steam wisps animate upward in a staggered loop.
-->
<div class="mug float">
  <!-- Steam -->
  <div class="steam-wrap">
    <div class="steam s1"></div>
    <div class="steam s2"></div>
    <div class="steam s3"></div>
  </div>

  <!-- Cup body -->
  <div class="mug-body">
    <div class="coffee-surface"></div>
  </div>

  <!-- Handle (right side) -->
  <div class="mug-handle"></div>

  <!-- Base / saucer lip -->
  <div class="mug-base"></div>
</div>

<style>
  /*
    Mug sits on the desk surface at top: 35rem.
    Body height = 5rem, base = 0.5rem → total 5.5rem below wrapper top.
    Steam wrap = 2.5rem above body.
    So wrapper top = 35rem − 5.5rem − 2.5rem = 27rem.

    Radio (zoom: 0.5) effectively occupies ~left: 72–78rem.
    Mug at 82rem gives clear breathing room between the two.
  */
  .mug {
    position: absolute;
    top: 26rem;
    left: 76rem;
    width: 5rem;
  }

  /* ── Steam ────────────────────────────────── */
  .steam-wrap {
    display: flex;
    justify-content: space-evenly;
    padding: 0 0.6rem;
    height: 2.5rem;
    align-items: flex-end;
  }

  @keyframes steam-rise {
    0% {
      transform: translateY(0) scaleX(1);
      opacity: 0.65;
    }
    60% {
      transform: translateY(-14px) scaleX(1.3);
      opacity: 0.3;
    }
    100% {
      transform: translateY(-22px) scaleX(0.7);
      opacity: 0;
    }
  }

  .steam {
    width: 5px;
    height: 1.4rem;
    background: #c8c8c8;
    border-radius: 5px;
    animation: steam-rise 2s ease-in infinite;
    opacity: 0;
  }

  .s1 {
    animation-delay: 0s;
  }
  .s2 {
    animation-delay: 0.55s;
  }
  .s3 {
    animation-delay: 1.1s;
  }

  /* ── Body ─────────────────────────────────── */
  .mug-body {
    position: relative;
    width: 5rem;
    height: 5rem;
    background: #f2f0e6;
    border-radius: 4px 4px 10px 10px;
    overflow: hidden;
    border: 2px solid #d8d6cc;
  }

  .coffee-surface {
    position: absolute;
    top: 6px;
    left: 6px;
    right: 6px;
    height: 1.1rem;
    background: #6f4e37;
    border-radius: 3px;
    /* subtle gloss on the coffee */
    box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.15);
  }

  /* ── Handle ───────────────────────────────── */
  .mug-handle {
    position: absolute;
    /* vertically center on the mug body */
    top: calc(2.5rem + 1rem); /* steam-wrap + 1rem into body */
    right: -1.25rem;
    width: 1.4rem;
    height: 2.2rem;
    border: 6px solid #d8d6cc;
    border-left: none;
    border-radius: 0 14px 14px 0;
  }

  /* ── Base ─────────────────────────────────── */
  .mug-base {
    width: 5.6rem;
    height: 0.5rem;
    background: #e0dece;
    border-radius: 0 0 5px 5px;
    margin-left: -0.3rem;
    border: 2px solid #d8d6cc;
    border-top: none;
  }
</style>
