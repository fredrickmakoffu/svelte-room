<script>
  import Banner from "../components/Home/Banner.svelte";
  import Triangle from "../components/Home/Triangle.svelte";

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

  async function setBannerAnimation() {
    // set tagline in the filled text to be color blue
    document.getElementById("tagline").classList.add("color-blue");

    // update circle background with linear gradient
    document.getElementById("circle").style.background = "linear-gradient(105.49deg, #119DA4, #c8d5bb)";

    let i = 1;
    await setBanners(i).then(() => {
      let j = 1
      setTimeout(() => {
        setTriangles(j),
        setDescription()
      }, 2000);
    });
  }

  async function setDescription() {
    const description = document.querySelector("p.footer-description");
    description.classList.remove("d-none");
  }

  async function setTriangles(j) {
    const activateTriangles = setInterval(function () {
      const triangle = document.getElementById(`triangle__${j}`);
      if(triangle == null) {
        return;
      }
      triangle.classList.remove("d-none");
      j++;
      if (j > 4) {
        clearInterval(activateTriangles); // Stop the interval when all banners are animated
      }
    }, 1000);
  }

  async function setBanners(i) {
    const intervalId = setInterval(function () {
      const banner = document.getElementById(`banner__${i}`);
      if(banner == null) {
        return;
      }

      if (i % 2 === 0) {
        banner.classList.add("animate-scroll-right");
      } else {
        banner.classList.add("animate-scroll-left");
      }
      console.log('banner__' + i);
      
      i++;
      if (i > 10) {
        clearInterval(intervalId); // Stop the interval when all banners are animated
      }
    }, 300);
  }


  function exitBannerAnimation() {
    // set tagline in the filled text to be color blue
    document.getElementById("tagline").classList.remove("color-blue");

    let i = 9;
    const intervalId = setInterval(function () {
      const banner = document.getElementById(`banner__${i}`);
      if(banner == null) {
        return;
      }
      if (i % 2 === 0 && banner) {
        banner.classList.remove("animate-scroll-right");
      } else {
        banner.classList.remove("animate-scroll-left");
      }

      console.log('banner__' + i);
      
      i--;
      if (i == 0) {
        clearInterval(intervalId); // Stop the interval when all banners are animated
      }
    }, 300);
  }

  function testFocus() {
    console.log("focus");
  }
</script>

<Banner />

<div id="home">
  <span class="filled-text">
    <div id="triangles" class="triangle-positions">
      <span id="triangle__1" class="d-none" style="left: 0; top: inherit"><Triangle /></span>
      <span id="triangle__2" class="d-none" style="left: 5rem; top: inherit"> <Triangle /> </span>
      <span id="triangle__3" class="d-none" style="left: 10rem; top: inherit"> <Triangle /> </span>
    </div>
    <span class="d-flex">
      <h4 class="title">FIND</h4>
      <h2 class="tagline" id="tagline">FRED</h2>
      <h4 class="footer">ONLINE</h4>
      <p class="footer-description d-none">A discography of STUFF that I've done</p>
    </span>
  </span>

  <span class="outlined-text">  
    <span class="d-flex">
      <h4 class="title">FIND</h4>
      <h2 class="tagline" on:mouseover={setBannerAnimation} on:focus={testFocus}>FRED</h2>
      <h4 class="footer">ONLINE</h4> 
    </span>
  </span>

  <div id="circle"></div>
</div>

<style lang="scss" scoped>
  $text-color: #fff;
  $bg-color: #3590f3;
  $circle-color: $bg-color;
  $circle-size: 100px;

  :global(.triangle-positions) {
    position: absolute;
    top: 35%;
    left: 35%;
  }
  :global(.color-blue) {
    color: #119DA4!important;
  }
  
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
        // animate color change to blue
        transition: color 0.5s ease-in-out;
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

      .footer-description {
        font-family: 'Supreme', "Clash Grotesk", sans-serif;
        position: absolute;
        z-index: 3;
        font-size: 1rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        right: 8.5rem;
        top: 11.6rem;
        color: #47585c;
        transition: display 2s ease-in-out;
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
    background: linear-gradient(105.49deg, #47585c, #c8d5bb);
    border: 10px double $text-color;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    top: calc(50vh - 100px);
    left: calc(50vw - 100px);
    z-index: 4;
    transition: border-color 1s ease-in-out;
  }

  // display styles
  :global(.d-none) {
    display: none;
  }
</style>



