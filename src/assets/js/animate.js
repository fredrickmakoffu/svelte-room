import Typed from 'typed.js';

class Animated {
  constructor() {}

  typed = () =>  new Typed('#description', {
    strings: ['a collection', '...no', 'a discography of many projects'],
    typeSpeed: 50,
    showCursor: false
  });

  async setBannerAnimation() {
    // set tagline in the filled text to be color blue
    document.getElementById("tagline").classList.add("color-blue");

    // update circle background with linear gradient
    document.getElementById("circle").style.background = "linear-gradient(105.49deg, #119DA4, #c8d5bb)";

    let i = 1;
    await this.setBanners(i).then(() => {
      let j = 1
      setTimeout(() => {
        this.setTriangles(j),
        this.typed()
      }, 2000);
    });
  }

  async setTriangles(j) {
    setInterval(function (this) {
        const triangle = document.getElementById(`triangle__${j}`);
        if(triangle == null) return;

        triangle.classList.remove("d-none");
        j++;

        // Stop the interval when all banners are animated
        if (j > 4) clearInterval(this); 
    }, 500);
  }

  async setBanners(i) {
    setInterval(function (this) {
      const banner = document.getElementById(`banner__${i}`);
      if(banner == null) return;

      i % 2 === 0 ? banner.classList.add("animate-scroll-right") : banner.classList.add("animate-scroll-left");
      i++;

      // Stop the interval when all banners are animated
      if (i > 10) clearInterval(this); 
    }, 300);
  }
}