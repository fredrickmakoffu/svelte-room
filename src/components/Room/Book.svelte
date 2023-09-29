<script>
  export let title,
    tagline,
    points,
    color,
    background_color,
    zoom,
    open_book,
    store_open_book;
  export let width = "auto";

  function handleHover() {
    // set title in element with id=information
    store_open_book = {
      title: title,
      tagline: tagline,
      points: points,
    };
  }

  function handleFocus() {
    open_book = !open_book;
  }

  function handleClick() {
    open_book = !open_book;

    store_open_book = {
      title: title,
      tagline: tagline,
      points: points,
    };
  }

  function handleKeyUp() {}
</script>

<div
  class="book float"
  style="--color: {color}; --background_color: {background_color}; --zoom: {zoom}; --width: {width}"
  on:mouseover={handleHover}
  on:focus={handleFocus}
  on:click={handleClick}
  on:keyup={handleKeyUp}
>
  <div class="pad-wide" />
  <div>
    <p class="book-title uppercase">{title}</p>
  </div>
  <p class="pad-wide grid uppercase" />
</div>

<style scoped>
  .book {
    color: var(--color);
    background-color: var(--background_color);
    background-image: url("https://www.transparenttextures.com/patterns/binding-light.png");
    border-radius: 3px;
    zoom: var(--zoom);
    width: var(--width);
    flex-direction: column;
    border-radius: 2px;
    cursor: pointer;
  }

  .book-title {
    font-size: 12px;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    padding: 6rem 0rem;
    margin: auto;
    letter-spacing: 2px;
    font-weight: 600;
  }

  .uppercase {
    text-transform: uppercase;
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
