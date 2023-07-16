<div class="container">
  <div class="open-book">
    <div class="content">
      <h5 class="content-title">2010 - 2012</h5>
    </div>
  </div>

  <div class="backdrop"></div>
</div>

<style scoped>
  .backdrop {
    height: 100%;
    width: 100%;
    background: #333;
    position: absolute;
    z-index: -1;
    opacity: 0.2;
  }

  .content-title {
    text-align: center;
    padding-top: 10px;
    margin: 0;
    font-family: 'Supreme', sans-serif; 
    font-weight: 900;
  }

  .container {
    display: flex;
    height: 100vh;
  }
  
  .open-book {
    --background: linear-gradient(135deg, #fafafa, #f6f6f6);
    --shadow: rgba(211, 211, 211, 0.28);
    --text: #6C7486;
    --page: rgba(235, 232, 232, 0.36);
    --page-fold: rgba(250, 250, 250, 0.52);
    --duration: 3s;
    width: 200px;
    height: 140px;
    position: relative;
    margin: auto;
    transform: scale(2.5);
  }

  .open-book:before, .open-book:after {
    --r: -6deg;
    content: "";
    position: absolute;
    bottom: 8px;
    width: 120px;
    top: 80%;
    box-shadow: 0 16px 12px var(--shadow);
    transform: rotate(var(--r));
  }

  .open-book:before {
    left: 4px;
  }

  .open-book:after {
    --r: 6deg;
    right: 4px;
  }

  .open-book div {
    width: 100%;
    height: 100%;
    border-radius: 13px;
    position: relative;
    z-index: 1;
    perspective: 600px;
    box-shadow: 0 4px 6px var(--shadow);
    background-image: var(--background);
  }

 </style>