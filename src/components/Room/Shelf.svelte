<script>
  import Book from "./Book.svelte";

  export let zoom, top, left, books;
</script>

<div class="shelf" style="--top:{top}; --zoom:{zoom}; --left:{left}">
  <div class="shadow"></div>

  {#each books as section}
    <div class="section-block">
      <h4 class="book_label">{section.label}</h4>
      <div class="shelf-section">
        <div class="bookend left"></div>

        {#each section.data as { title, tagline, points, color, background_color, zoom, width }}
          <Book
            {title}
            {tagline}
            {points}
            {color}
            {background_color}
            {zoom}
            {width}
          />
        {/each}

        <div class="bookend right"></div>
      </div>
    </div>
  {/each}
</div>

<style>
  .book_label {
    position: absolute;
    bottom: 6rem;
    font-family: "Clash Grotesk", sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
    background: #f5eedc;
    padding: 5px 18px;
    color: #333;
    box-shadow:
      2px 3px 8px rgba(0, 0, 0, 0.18),
      1px 1px 0 rgba(0, 0, 0, 0.06);
    transform: rotate(-1.5deg);
  }

  .book_label::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 28px;
    height: 10px;
    background: rgba(200, 180, 130, 0.55);
    border-radius: 1px;
  }

  .shelf-section {
    display: inline-flex;
  }

  .section-block {
    display: block;
  }

  .shelf {
    width: 30em;
    border-bottom: 1em solid #d97a53;
    position: absolute;
    top: var(--top);
    /* zoom → transform: scale keeps Firefox parity and is spec-compliant */
    transform: scale(var(--zoom));
    transform-origin: top left;
    left: var(--left);
    margin-top: -5em;
    margin-left: -15em;
    padding: 0 3em;
    display: flex;
    align-items: flex-end;
  }

  .shelf::after,
  .shelf::before {
    content: "";
    display: block;
    width: 1em;
    height: 2em;
    position: absolute;
    bottom: -3em;
    background: #732b23;
  }

  .shelf::before {
    left: 1em;
    border-bottom-left-radius: 11px;
  }

  .shelf::after {
    right: 1em;
    border-bottom-right-radius: 11px;
  }

  .shadow {
    position: absolute;
    bottom: -1.7em;
    height: 1em;
    left: 1em;
    right: 1em;
    z-index: -1;
    background: linear-gradient(to bottom, #aa4a46 0%, #ffc3aa 100%);
  }

  .bookend {
    width: 3em;
    height: 4em;
    position: relative;
    top: 2rem;
  }

  .bookend::before {
    height: 0.75em;
    background: #a84033;
    width: 100%;
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
  }

  .bookend::after {
    height: 100%;
    width: 0.75em;
    content: "";
    display: block;
    position: absolute;
    background: #a84033;
  }

  .bookend.left::after {
    right: 0;
  }

  .right {
    margin-right: 3rem;
  }
</style>
