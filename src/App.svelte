<script>
  import Shelf from './components/Shelf.svelte'
  import Frame from './components/Frame.svelte'
  let zoom = 0.8;
  let left = '20%';
</script>

<main class="room">
  <Shelf top='15%' left={left} zoom={zoom} />   

  <Shelf top='35%' left={left} zoom={zoom} /> 

  <Frame card_one_background='#0b0b45' card_two_background="#d97a53" card_three_background="#8a008a" zoom=1 />
  
</main>
