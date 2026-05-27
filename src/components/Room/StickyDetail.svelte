<!--
  Expanded view of a sticky note — shows when a sticky is clicked.
  Displays the title and all tasks; completed tasks are struck through.
-->
<script>
  import { openSticky, selectedSticky } from "../../stores/room.js";

  function close() {
    openSticky.set(false);
  }
</script>

<div class="container">
  {#if $selectedSticky}
    <div
      class="detail"
      style="background-color: {$selectedSticky.color}; transform: rotate({$selectedSticky.rotate * 0.6}deg) scale(2.5);"
    >
      <button class="close-btn" on:click={close} aria-label="Close">✕</button>
      <span class="label">{$selectedSticky.title}</span>
      {#each $selectedSticky.tasks as task}
        <p class="task" class:done={task.done}>
          <span class="bullet">{task.done ? '✓' : '·'}</span>
          {task.text}
        </p>
      {/each}
    </div>
  {/if}

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="backdrop" on:click={close} />
</div>

<style>
  .backdrop {
    height: 100%;
    width: 100%;
    background: #1a1a1a;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
    z-index: 1;
  }

  .container {
    display: flex;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    align-items: center;
    justify-content: center;
  }

  .detail {
    position: relative;
    width: 180px;
    min-height: 150px;
    padding: 14px 16px 22px;
    z-index: 2;
    /* Paper texture over the colour */
    background-image: url('https://www.transparenttextures.com/patterns/paper-fibers.png');
    font-family: 'Clash Grotesk', sans-serif;
    color: #2a2a2a;
    box-shadow:
      6px 8px 24px rgba(0, 0, 0, 0.32),
      0 2px 6px rgba(0, 0, 0, 0.14);
    /* transform is set inline to keep the note's natural tilt */
  }

  /* Bottom-right fold */
  .detail::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 22px;
    height: 22px;
    background: linear-gradient(
      225deg,
      rgba(0, 0, 0, 0.16) 50%,
      transparent 50%
    );
  }

  .label {
    display: block;
    font-size: 6px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    opacity: 0.4;
    margin-bottom: 10px;
  }

  .task {
    margin: 0 0 5px 0;
    font-size: 9.5px;
    line-height: 1.5;
    display: flex;
    gap: 5px;
    align-items: baseline;
  }

  .task.done {
    text-decoration: line-through;
    opacity: 0.45;
  }

  .bullet {
    font-size: 8px;
    flex-shrink: 0;
    opacity: 0.6;
  }

  .close-btn {
    position: absolute;
    top: 7px;
    right: 9px;
    font-size: 8px;
    font-weight: 900;
    color: rgba(0, 0, 0, 0.38);
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    line-height: 1;
    transition: color 0.1s ease;
  }

  .close-btn:hover {
    color: rgba(0, 0, 0, 0.65);
  }
</style>
