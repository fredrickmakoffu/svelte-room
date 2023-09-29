
    <div class="clock">
      <div class="circle" style="--clr:#04fc43" id="sc"><i></i></div>
      <div class="circle circle2" style="--clr:#fee800" id="mn"><i></i></div>
      <div class="circle circle3" style="--clr:#ff2972" id="hr"><i></i></div>
      <span style="--i:1;"><b>1</b></span>
      <span style="--i:2;"><b>2</b></span>
      <span style="--i:3;"><b>3</b></span>
      <span style="--i:4;"><b>4</b></span>
      <span style="--i:5;"><b>5</b></span>
      <span style="--i:6;"><b>6</b></span>
      <span style="--i:7;"><b>7</b></span>
      <span style="--i:8;"><b>8</b></span>
      <span style="--i:9;"><b>9</b></span>
      <span style="--i:10;"><b>10</b></span>
      <span style="--i:11;"><b>11</b></span>
      <span style="--i:12;"><b>12</b></span>
    </div>

  <style scoped>
    .clock {
    position: absolute;
    width: 450px;
    border-radius: 50%;
    height: 450px;
    background: #2f363e;
    box-shadow: 10px 50px 70px rgba(0, 0, 0, 0.25),
        inset 5px 5px 10px rgba(0, 0, 0, 0.5),
        inset 5px 5px 20px rgba(255, 255, 255, 0.2),
        inset -5px -5px 15px rgba(0, 0, 0, 0.75);

    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(0.3);
    left: 47rem;
    top: -5rem;
    }
    .clock::before {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background: #2f363e;
    border: 3px solid #fff;
    border-radius: 50%;
    z-index: 1000;
    }
    .clock span {
    position: absolute;
    inset: 20px;
    text-align: center;
    color: #fff;
    transform: rotate(calc(30deg * var(--i)));
    }
    .clock span b {
    font-size: 2em;
    opacity: 0.25;
    font-weight: 600;
    display: inline-block;
    transform: rotate(calc(-30deg * var(--i)));
    }
    .circle {
    position: absolute;
    width: 300px;
    height: 300px;
    border: 2px solid rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    z-index: 10;
    }
    .circle i {
    position: absolute;
    width: 6px;
    background: #fff;
    height: 50%;
    background: var(--clr);
    opacity: 0.75;
    transform-origin: bottom;
    transform: scaleY(0.5);
    }
    .circle:nth-child(1) i {
    width: 2px;
    }
    .circle:nth-child(2) i {
    width: 4px;
    }
    .circle2 {
    width: 240px;
    height: 240px;
    z-index: 9;
    }
    .circle3 {
    width: 180px;
    height: 180px;
    z-index: 8;
    }
    .circle::before {
    content: "";
    position: absolute;
    top: -8.5px;
    left: 50%;
    transform: translateX(-50%);
    width: 15px;
    height: 15px;
    background: var(--clr);
    border-radius: 50%;
    box-shadow: 0 0 20px var(--clr), 0 0 60px var(--clr);
    }
  </style>
