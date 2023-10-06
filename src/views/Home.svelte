<script>
  import Banner from "../components/Home/Banner.svelte";

  //this function keeps the circle tracked to mouse movement by moving it every time the cursor moves
  document.addEventListener("mousemove", (e) => {
    // create variables for circle element and 50% of circle diameter:
    const circle = document.getElementById("circle");
    const halfCircleSize = circle.offsetHeight / 2;

    //get cursor location:
    const mouse_x = e.clientX;
    const mouse_y = e.clientY;

    // move the circle to the cursor's location and offset the circle by 50% of its diameter so that it is always centered with the cursor:
    circle.style.left = `${mouse_x - halfCircleSize}px`;
    circle.style.top = `${mouse_y - halfCircleSize}px`;
  });
</script>

<Banner />

<div id="home">
  <span class="filled-text">
    <span class="d-flex">
      <h4 class="title">FIND</h4>
      <h2 class="tagline color-blue">FRED</h2>
      <h4 class="footer">ONLINE</h4>
    </span>
  </span>

  <span class="outlined-text">
    <span class="d-flex">
      <h4 class="title">FIND</h4>
      <h2 class="tagline">FRED</h2>
      <h4 class="footer">ONLINE</h4>
    </span>
  </span>

  <h4>Choose your adventure</h4>

  <div id="circle"></div>
</div>

<style lang="scss" scoped>
  $text-color: #fff;
  $bg-color: #3590f3;
  $circle-color: $bg-color;
  $circle-size: 100px;
  
  #home {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: absolute;
    z-index: 3;
  }

  span {
    padding: 5rem;
    font-size: 5rem;
    font-weight: bold;
    line-height: 4rem;
    text-align: center;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    
    @media screen and (max-width: 768px) {
      padding: 5px;
      font-size: 3rem;
      line-height: 2.5rem;
    }

    &.filled-text {
      color: $text-color;
      width: 100%;
      height: 100vh;
      z-index: 2;

      .tagline {
        position: relative;
        top: 50%;
        text-align: center;
        font-family: "Clash Grotesk", sans-serif;
        font-size: 15.5rem;
        text-transform: uppercase;
        color: #47585c;
      }

      .title {
        font-family: "Supreme", "Clash Grotesk", sans-serif;
        position: absolute;
        left: 6.5rem;
        z-index: 3;
        font-size: 1.3rem;
        bottom: 9rem;
        letter-spacing: 1px;
        font-weight: 800;
      }

      .footer {
        font-family: "Supreme", "Clash Grotesk", sans-serif;
        position: absolute;
        z-index: 3;
        font-size: 1.3rem;
        letter-spacing: 1px;
        font-weight: 800;
        right: 8.5rem;
        top: 8.6rem;
      }
    }

    &.outlined-text {
      color: transparent;
      width: 100%;
      height: 100vh;
      -webkit-text-stroke: 0.5px $text-color;
      z-index: 5;

      .tagline {
        position: relative;
        top: 50%;
        text-align: center;
        font-family: "Clash Grotesk", sans-serif;
        font-size: 15.5rem;
        text-transform: uppercase;
      }

      .title {
        font-family: "Supreme", "Clash Grotesk", sans-serif;
        position: absolute;
        left: 6.5rem;
        z-index: 3;
        font-size: 1.3rem;
        bottom: 9rem;
        letter-spacing: 1px;
        font-weight: 800;
      }

      .footer {
        font-family: "Supreme", "Clash Grotesk", sans-serif;
        position: absolute;
        z-index: 3;
        font-size: 1.3rem;
        letter-spacing: 1px;
        font-weight: 800;
        right: 8.5rem;
        top: 8.6rem;
      }
    }
  }

  .d-flex {
    display: flex;
  }
  
  * {
    ::selection {
      background: none;
    }
    
    font-family: sans-serif;
    cursor: none;
    margin: 0;
    box-sizing: border-box;
    position: absolute;
  }

  #circle {
    height: $circle-size;
    width: $circle-size;
    border-radius: 50%;
    background: $circle-color;
    background: linear-gradient(105.49deg, #1D8CEC, #3db9dc);
    border: 10px double $text-color;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    top: calc(50vh - 100px);
    left: calc(50vw - 100px);
    z-index: 4;
  }
</style>



