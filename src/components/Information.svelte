<script>
  let title = 'Room'
  let tagline = 'take a look around'
</script>

<div id="information" class="information">
  <div id="information-title" class="gradient-blue">{title}</div>
  <p class="information-tagline">{tagline}</p>
</div>


<style scoped>
  .information {
    position: absolute;
    width: -webkit-fill-available;
    text-align: center;
    top: 49rem;
    z-index: -1;
  }

  .gradient-blue {
    background: linear-gradient(105.49deg, teal, #af6a0f);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;  
    font-family: 'Panchang', sans-serif;
    font-size: 6rem;
    font-weight: 900;    
  }

  .information-tagline {
    font-family: 'Clash Grotesk', sans-serif;
    margin: 0;
    letter-spacing: 1px;
    font-size: 1.2rem;
    color: #666666;
    position: relative;
    bottom: 10px;
  }
</style>

  