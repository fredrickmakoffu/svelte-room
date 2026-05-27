<script>
  import { openBook, selectedBook } from "../../stores/room.js";

  export let title, tagline, points, color, background_color, zoom;
  export let width = "auto";

  function handleHover() {
    selectedBook.set({ title, tagline, points });
  }

  function handleClick() {
    selectedBook.set({ title, tagline, points });
    openBook.set(true);
  }
</script>

<div
  class="book float"
  style="--color: {color}; --background_color: {background_color}; --zoom: {zoom}; --width: {width}"
  role="button"
  tabindex="0"
  on:mouseover={handleHover}
  on:focus={handleHover}
  on:click={handleClick}
  on:keyup={(e) => e.key === 'Enter' && handleClick()}
>
  <div class="pad-wide" />
  <div>
    <p class="book-title">{title}</p>
  </div>
  <p class="pad-wide" />
</div>

<style>
  .book {
    color: var(--color);
    background-color: var(--background_color);
    background-image: url("https://www.transparenttextures.com/patterns/binding-light.png");
    border-radius: 3px;
    /* zoom kept intentionally: it participates in the shelf's flex layout.
       Replacing with transform:scale would require explicit width overrides. */
    zoom: var(--zoom);
    width: var(--width);
    flex-direction: column;
    cursor: pointer;
  }

  .book-title {
    font-size: 12px;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    text-transform: uppercase;
    padding: 6rem 0;
    margin: auto;
    letter-spacing: 2px;
    font-weight: 600;
  }

  .pad-wide {
    background: #eee;
    margin: 10px 12px;
    color: #333;
    padding: 2px;
    text-align: center;
    border-radius: 3px;
    opacity: 0.4;
  }
</style>
