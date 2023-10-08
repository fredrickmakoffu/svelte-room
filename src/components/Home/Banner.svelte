
<div id="banner">
    <div id="banner__1">BUILD BLESS TEST DEPLOY BUG BUILD TEST BUILD TEST DEPLOY</div> 
    <div id="banner__2">WRITE WAIT ERASE BLESS DRAFT WAIT BLESS TEST DEPLOY</div>
    <div id="banner__3">SING STOP AGONIZE COMPOSE SING STOP AGONIZE WRITE EVANGELIZE</div>
    <div id="banner__4">BUILD BLESS TEST DEPLOY BUG BUILD TEST BUILD TEST DEPLOY</div> 
    <div id="banner__5">WRITE WAIT ERASE BLESS DRAFT WAIT BLESS TEST DEPLOY</div>
    <div id="banner__6">SING STOP AGONIZE COMPOSE SING STOP AGONIZE WRITE EVANGELIZE</div>
    <div id="banner__7">BUILD BLESS TEST DEPLOY BUG BUILD TEST BUILD TEST DEPLOY</div> 
    <div id="banner__8">WRITE WAIT ERASE BLESS DRAFT WAIT BLESS TEST DEPLOY</div>
    <div id="banner__9">SING STOP AGONIZE COMPOSE SING STOP AGONIZE WRITE EVANGELIZE</div>
  </div>
  
  <style>
    #banner {
      height: -webkit-fill-available;
      width: -webkit-fill-available;
      position: absolute;
      font-family: "Clash Grotesk", sans-serif;
      -webkit-text-stroke: 0.5px #333;
      background-color: #eee;
      color: transparent;
      font-size: 10rem;
      overflow: hidden;
      z-index: 1; 
      line-height: 9rem;
      opacity: 0.5;
    }
  
    #banner__1, #banner__3, #banner__5, #banner__7, #banner__9 {
      white-space: nowrap;
      transition: translate 1s ease-in-out;
    }

    :global(.animate-scroll-left) {
      animation: scroll-left 60s linear infinite;
    }
  
    #banner__2, #banner__4, #banner__6, #banner__8{
      white-space: nowrap;
    }

    :global(.animate-scroll-right) {
      animation: scroll-right 60s linear infinite;
    }
  
    /* keyframes to scroll text in banner in right direction but text starts from the very left */
    @keyframes scroll-left {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  
    @keyframes scroll-right {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0);
      }
    } 
    
  </style>