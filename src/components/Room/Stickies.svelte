<!--
  Sticky notes on the wall — side missions / to-dos pinned to the right of the window.
  Clickable: opens a detail modal showing all tasks, with done items struck through.
-->
<script>
  import { openSticky, selectedSticky } from "../../stores/room.js";
  import StickiesData from "../../assets/json/Stickies.json";

  function open(sticky) {
    selectedSticky.set(sticky);
    openSticky.set(true);
  }
</script>

<div class="stickies">
  {#each StickiesData as sticky}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="sticky"
      style="
        background-color: {sticky.color};
        top: {sticky.top};
        left: {sticky.left};
        transform: rotate({sticky.rotate}deg);
      "
      role="button"
      tabindex="0"
      on:click={() => open(sticky)}
      on:keydown={(e) => e.key === 'Enter' && open(sticky)}
      aria-label="Open {sticky.title} sticky note"
    >
      <span class="label">{sticky.title}</span>
      {#each sticky.tasks as task}
        <p class="task" class:done={task.done}>{task.text}</p>
      {/each}
    </div>
  {/each}
</div>

<style>
  .stickies {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }

  .sticky {
    position: absolute;
    width: 5.2rem;
    padding: 0.45rem 0.55rem 0.8rem;
    font-family: 'Clash Grotesk', sans-serif;
    font-size: 0.62rem;
    line-height: 1.45;
    color: #2a2a2a;
    cursor: pointer;
    pointer-events: auto;
    user-select: none;

    /* Paper fibre texture layered over the colour */
    background-image: url('https://www.transparenttextures.com/patterns/paper-fibers.png');

    box-shadow:
      2px 3px 8px rgba(0, 0, 0, 0.22),
      0 1px 2px rgba(0, 0, 0, 0.1);

    transition: filter 0.15s ease, box-shadow 0.15s ease;
  }

  .sticky:hover {
    box-shadow:
      3px 5px 14px rgba(0, 0, 0, 0.3),
      0 2px 4px rgba(0, 0, 0, 0.14);
    filter: brightness(1.04);
  }

  /* Bottom-right fold */
  .sticky::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 1rem;
    height: 1rem;
    background: linear-gradient(
      225deg,
      rgba(0, 0, 0, 0.14) 50%,
      transparent 50%
    );
  }

  .label {
    display: block;
    font-size: 0.48rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    opacity: 0.4;
    margin-bottom: 0.2rem;
  }

  .task {
    margin: 0;
    padding: 0;
    font-size: 0.6rem;
    line-height: 1.45;
  }

  .task.done {
    text-decoration: line-through;
    opacity: 0.45;
  }
</style>
