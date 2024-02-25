<script>
  export let screen;
  import {fly, slide} from "svelte/transition";
  import Banner from "../components/Home/Banner.svelte";
  import Triangle from "../components/Home/Triangle.svelte";
  import Typed from "typed.js";

  const typed = (string) =>
    new Typed("#description", {
      strings: string != null ? string : ["a discography of many projects"],
      typeSpeed: 50,
      showCursor: false,
    });

  let animation_on = false;
  let redirect = {};

  function trackCircle(e) {
    // create variables for circle element and 50% of circle diameter:
    const circle = document.getElementById("circle");
    const halfCircleSize = circle.offsetHeight / 2;

    //get cursor location:
    const mouse_x = e.clientX;
    const mouse_y = e.clientY;

    // move the circle to the cursor's location and offset the circle by 50% of its diameter so that it is always centered with the cursor:
    circle.style.left = `${mouse_x - halfCircleSize}px`;
    circle.style.top = `${mouse_y - halfCircleSize}px`;
  }

  // this function keeps the circle tracked to mouse movement by moving it every time the cursor moves
  document.addEventListener("mousemove", trackCircle, true);

  async function setBannerAnimation() {
    if (animation_on) return;

    // set tagline in the filled text to be color blue
    document.getElementById("tagline").classList.add("color-blue");
    document.querySelectorAll(".menu-item h6").forEach(res => {
      res.classList.add("color-blue");
    })

    document.querySelectorAll(".menu-item-line").forEach(res => {
      res.classList.add("border-color-blue");
    })

    let i = 1;
    await setBanners(i).then(() => {
      let j = 1;
      setTimeout(() => {
        setTriangles(j), setDescription(), (animation_on = true);
      }, 2000);
    });
  }

  async function setDescription() {
    typed();
  }

  async function setTriangles(j) {
    const activateTriangles = setInterval(function () {
      const triangle = document.getElementById(`triangle__${j}`);
      if (triangle == null) return;

      triangle.classList.remove("d-none");
      j++;
      if (j > 4) {
        clearInterval(activateTriangles); // Stop the interval when all banners are animated
      }
    }, 500);
  }

  async function setBanners(i) {
    const intervalId = setInterval(function () {
      const banner = document.getElementById(`banner__${i}`);
      if (banner == null) {
        return;
      }

      if (i % 2 === 0) {
        banner.classList.add("animate-scroll-right");
      } else {
        banner.classList.add("animate-scroll-left");
      }
      console.log("banner__" + i);

      i++;
      if (i > 10) {
        clearInterval(intervalId); // Stop the interval when all banners are animated
      }
    }, 300);
  }

  function testFocus() {
    console.log("focus");
  }

  function getCenterOfElement(el) {
    var offset = el.getBoundingClientRect();
    var x = offset.left + el.offsetWidth / 2;
    var y = offset.top + el.offsetHeight / 2;

    redirect = { x, y };

    console.log(redirect);
  }

  function changeFontFamily() {
    
  }

</script>

<Banner {animation_on} />

<div id="home" in:fly="{{delay: 300, duration: 300}}" out:slide="{{duration: 300}}">
  <span class="filled-text">
    <div id="triangles" class="triangle-positions">
      <span id="triangle__1" class="d-none" style="left: 0; top: inherit"
        ><Triangle /></span
      >
      <span id="triangle__2" class="d-none" style="left: 5rem; top: inherit">
        <Triangle />
      </span>
      <span id="triangle__3" class="d-none" style="left: 10rem; top: inherit">
        <Triangle />
      </span>
    </div>

    <span class="d-flex">
      <h4 class="title">FIND</h4>
      <h2 class="tagline" id="tagline">FRED</h2>
      <h4 class="footer">ONLINE</h4>
      <p id="description" class="footer-description" />
    </span>
  </span>

  <span class="outlined-text">
    <span class="d-flex">
      <h4 class="title">FIND</h4>
      <h2
        class="tagline"
        on:mouseover={setBannerAnimation}
        on:focus={testFocus}
      >
        FRED
      </h2>
      <h4 class="footer">ONLINE</h4>
    </span>

    <span class="menu">
      <div class="menu-item outlined-text" on:mouseover={changeFontFamily} on:focus={testFocus}>
        <h6>Resume</h6>
        <hr class="menu-item-line">
      </div>  

      <div class="menu-item filled-text" style="margin-left: 34%">
        <h6>The.Room</h6>
        <hr class="menu-item-line">
      </div>  

      <div class="menu-item filled-text" style="margin-left: 67%">
        <h6>the.Rest</h6>
        <hr class="menu-item-line">
      </div>  
    </span>
  </span>

  <div id="circle" />
</div>

<style lang="scss" scoped>
  @import "../assets/scss/home/home.scss";
</style>
