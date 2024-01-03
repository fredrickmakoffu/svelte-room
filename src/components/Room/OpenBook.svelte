<script>
  export let open_book, store_open_book;

  function triggerBook() {
    open_book = !open_book;
  }

  function handleKeyDown() {}
</script>

<div class="container">
  <div class="open-book">
    <div class="open-pages">
      <div class="left-page">
        <div class="content">
          <p class="content-title">{store_open_book.title}</p>
          <h6 class="content-tagline">{store_open_book.tagline}</h6>
        </div>
      </div>
      <div class="right-page">
        {#each store_open_book.points as point}
          <p class="content-text">&bull; {point}.</p>
        {/each}

        <p class="page-number" on:click={triggerBook} on:keydown={handleKeyDown}>&#x2715;</p>
      </div>
    </div>
  </div>

  <div class="backdrop" on:click={triggerBook} on:keydown={handleKeyDown} />
</div>

<style scoped>
  .backdrop {
    height: 100%;
    width: 100%;
    background: #333;
    position: absolute;
    z-index: -1;
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

  .page-number {
    font-size: 8px;
    font-weight: 900;
    float: right;
    margin-right: 10px;
    margin-top: 1px;
    color: teal;
    cursor: pointer;
  }

  .container {
    display: flex;
    height: 100vh;
  }

  .open-book {
    --background: linear-gradient(135deg, #fafafa, #f6f6f6);
    --shadow: rgba(211, 211, 211, 0.28);
    --text: #6c7486;
    --page: rgba(235, 232, 232, 0.36);
    --page-fold: rgba(250, 250, 250, 0.52);
    --duration: 3s;
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
