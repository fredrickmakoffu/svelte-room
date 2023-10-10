<script>
  import Banner from "../components/Home/Banner.svelte";
  import Triangle from "../components/Home/Triangle.svelte";
  import Typed from "typed.js";

  const typed = () =>
    new Typed("#description", {
      strings: ["a collection", "...no", "a discography of many projects"],
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
  document.addEventListener("mousemove", trackCircle, false);

  async function setBannerAnimation() {
    if (animation_on) return;

    // set tagline in the filled text to be color blue
    document.getElementById("tagline").classList.add("color-blue");

    let i = 1;
    await setBanners(i).then(() => {
      let j = 1;
      setTimeout(() => {
        setTriangles(j), setDescription(), (animation_on = true);
      }, 2000);

      setTimeout(() => {
        setRedirect();
      }, 3500);
    });
  }

  async function setRedirect() {
    document.getElementById("redirect").style.visibility = "visible";
    document.getElementById("redirect").style.opacity = "1";
    getCenterOfElement(document.getElementById("redirect"));
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

  function showRedirectionOption() {
    // update redirect circle background to gradient
    document.getElementById("redirect").style.background =
      "linear-gradient(105.49deg, #119DA4, #c8d5bb)";

    // update circle background with linear gradient
    document.getElementById("circle").style.background =
      "linear-gradient(105.49deg, #119DA4, #c8d5bb)";

    // // detach mouse from circle
    // document.removeEventListener("mousemove", (e) => {
    //   // create variables for circle element and 50% of circle diameter:
    //   const circle = document.getElementById("circle");
    //   const halfCircleSize = circle.offsetHeight / 2;

    //   //get cursor location:
    //   const mouse_x = e.clientX;
    //   const mouse_y = e.clientY;

    //   // set cursor as visible
    //   document.getElementById("home").style.cursor = "pointer";

    //   // move the circle to the cursor's location and offset the circle by 50% of its diameter so that it is always centered with the cursor:
    //   circle.style.left = "0px";
    //   circle.style.top = "0px"; //`${mouse_y - halfCircleSize}px`;
    // });

    // move circle to exact position in redirect object
    // document.getElementById("circle").style.left = `${redirect.x}px`;
    // document.getElementById("circle").style.top = `${redirect.y}px`;

    // log success
    console.log("redirect");
  }

  function hideRedirectionOption() {
    // revert redirect circle background to gradient
    document.getElementById("redirect").style.background =
      "linear-gradient(105.49deg, #119da4, #c8d5bb)";

    // revert circle background with linear gradient
    document.getElementById("circle").style.background =
      "linear-gradient(105.49deg, #47585c, #c8d5bb)";

    // log success
    console.log("redirect out");
  }

  function redirectToRoom() {
    console.log();
  }
</script>

<Banner {animation_on} />

<div id="home">
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

    <div
      id="redirect"
      on:mouseover={showRedirectionOption}
      on:mouseleave={hideRedirectionOption}
      on:focus={redirectToRoom}
    >
      <p class="arrow">&rarr</p>
    </div>
  </span>

  <div id="circle" />
</div>

<style lang="scss" scoped>
  @import "../assets/scss/home/home.scss";
</style>
