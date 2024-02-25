<div class="cont">
  <span />
  <span />
</div>

<style lang="scss" scoped>
  .cont {
    position: relative;
    display: flex;
    align-items: center;
    transform: scale(0.1);
    justify-content: center;
  }
  .cont span {
    position: absolute;
    width: 250px;
    height: 250px;
    background: linear-gradient(105.49deg, #6cafb4, #169eb8);
  }
  .cont span:first-child {
    width: 90%;
    height: 90%;
    filter: blur(10rem) drop-shadow(0 0 55px rgb(35, 146, 236));
    border-radius: 50%;
  }
  .cont span:last-of-type {
    filter: blur(1rem);
    clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  }
</style>
