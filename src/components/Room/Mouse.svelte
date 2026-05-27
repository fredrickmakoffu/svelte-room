<div class="mouse">
  <div class="left-mouse float"></div>
  <div class="right-mouse float"></div>
</div>

<style>
  .mouse {
    position: absolute;
    left: 38rem;
    /* zoom kept: position offsets in JSON rely on Chrome's zoom scaling behaviour */
    zoom: 0.72;
    top: 13.3rem;
  }

  .left-mouse {
    position: absolute;
    height: 1.5rem;
    width: 1.8rem;
    top: 33.2rem;
    left: 87rem;
    border-top-left-radius: 100px;
    background: #33300077;
  }

  .right-mouse {
    position: absolute;
    height: 1.5rem;
    width: 1.8rem;
    top: 33.2rem;
    left: 89rem;
    border-top-right-radius: 100px;
    background: #e5e5e5;
  }
</style>
