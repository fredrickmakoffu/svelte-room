<script>
  import { openBook, selectedBook } from "../../stores/room.js";

  function close() {
    openBook.set(false);
  }
</script>

<div class="container">
  <div class="open-book">
    <div class="open-pages">
      <div class="left-page">
        <div class="content">
          <p class="content-title">{$selectedBook.title}</p>
          <h6 class="content-tagline">{$selectedBook.tagline}</h6>
        </div>
      </div>
      <div class="right-page">
        {#each $selectedBook.points ?? [] as point}
          <p class="content-text">&bull; {point}.</p>
        {/each}

        <button class="close-btn" on:click={close} aria-label="Close">&#x2715;</button>
      </div>
    </div>
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="backdrop" on:click={close} />
</div>

<style>
  .backdrop {
    height: 100%;
    width: 100%;
    background: #333;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.2;
    z-index: 1;
  }

  .content-title {
    text-align: center;
    margin: 0;
    font-family: "Clash Grotesk", sans-serif;
    font-size: 7px;
  }

  .content-tagline {
    text-align: center;
    margin: 0;
    font-family: "Supreme", sans-serif;
    font-weight: 900;
    font-size: 10px;
  }

  .content-text {
    font-size: 6.5px;
    line-height: 8px;
    font-family: "Supreme", sans-serif;
  }

  .close-btn {
    font-size: 8px;
    font-weight: 900;
    float: right;
    margin-right: 10px;
    margin-top: 1px;
    color: teal;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
  }

  .container {
    display: flex;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }

  .open-book {
    --background: linear-gradient(135deg, #fafafa, #f6f6f6);
    --shadow: rgba(211, 211, 211, 0.28);
    width: 240px;
    height: 140px;
    position: relative;
    margin: auto;
    transform: scale(2.5);
    z-index: 2;
  }

  .open-book:before,
  .open-book:after {
    --r: -6deg;
    content: "";
    position: absolute;
    bottom: 8px;
    width: 120px;
    top: 80%;
    box-shadow: 0 16px 12px var(--shadow);
    transform: rotate(var(--r));
  }

  .open-book:before {
    left: 4px;
  }

  .open-book:after {
    --r: 6deg;
    right: 4px;
  }

  .open-book .open-pages {
    width: 100%;
    height: 100%;
    border-radius: 13px;
    position: relative;
    z-index: 1;
    perspective: 600px;
    box-shadow: 0 4px 6px var(--shadow);
    background-image: var(--background);
    display: flex;
  }

  .left-page {
    width: 50%;
    float: left;
    display: flex;
    padding: 5px;
    border-right: 1px #eee solid;
  }

  .right-page {
    width: 50%;
    float: right;
    padding: 5px;
  }

  .content {
    margin: auto;
  }
</style>
