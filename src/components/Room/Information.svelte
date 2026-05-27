<script>
  import { selectedBook } from "../../stores/room.js";

  const DEFAULT_TITLE   = "Room";
  const DEFAULT_TAGLINE = "click on the books";
</script>

<div class="information">
  <div class="gradient-title">
    {$selectedBook.title ?? DEFAULT_TITLE}
  </div>
  <p class="tagline">
    [ {$selectedBook.tagline ?? DEFAULT_TAGLINE} ]
  </p>
</div>

<style>
  .information {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 49rem;
    /* Raised above the floor so it's actually visible */
    z-index: 1;
  }

  .gradient-title {
    background: linear-gradient(105.49deg, teal, #af6a0f);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Panchang", sans-serif;
    font-size: 6rem;
    font-weight: 900;
  }

  .tagline {
    font-family: "Clash Grotesk", sans-serif;
    margin: 0;
    letter-spacing: 1px;
    font-size: 1.2rem;
    color: #666666;
    position: relative;
    bottom: 10px;
  }
</style>
