<script>
  import { onMount } from 'svelte';
  import Shelf from './components/Shelf.svelte'
  import Frame from './components/Frame.svelte'
  import Window from './components/Window.svelte'
  import Desk from './components/Desk.svelte'
  import Laptop from './components/Laptop.svelte'
  import Mouse from './components/Mouse.svelte'
  import Radio from './components/Radio.svelte'
  import Clock from './components/Clock.svelte'
  import anime from 'animejs/lib/anime.es.js';
  import Information from './components/Information.svelte';
  import OpenBook from './components/OpenBook.svelte';

  // mount anime
  onMount(async () => {
    anime({
        targets: '.float',
        keyframes: [{
          translateY: -10
        }],
        delay: anime.stagger(200),
        direction: 'alternate',
        rotate: anime.stagger([-1, 1]),
        easing: 'easeInOutSine',
        loop: true
    });
	});

  // import Json Data
  import FramesJson from './assets/json/Frame.json'
  import WindowsJson from './assets/json/Window.json'
  import DeskJson from './assets/json/Desk.json'
  import LaptopJson from './assets/json/Laptop.json'
  import ShelfJson from './assets/json/Shelf.json'
  
  // set Json
  let frames = FramesJson
  let windows = WindowsJson
  let desks = DeskJson
  let laptops = LaptopJson
  let shelf = ShelfJson
  
  // set data in open book
  let open_book = false
  let store_open_book = {}
  
</script>

<main class="room">
  {#each shelf as item}
    <Shelf 
      top={item.top} 
      left={item.left} 
      zoom={item.zoom} 
      books={item.first_shelf_books}
      bind:open_book={open_book}
      bind:store_open_book={store_open_book} />   
  {/each}

  {#each frames as {background, border, zoom, position, image, padding}}
    <Frame 
      background={background} 
      border={border} 
      zoom={zoom} 
      position={position} 
      image={image} 
      padding={padding} />
  {/each }

  {#each windows as {background, border, zoom, position, height, width}}
    <Window 
      background={background} 
      border={border} 
      zoom={zoom} 
      position={position} 
      height={height} 
      width={width} />
  {/each }

  {#each desks as {desk_block_left, desk_block_right, desk_leg_left, desk_leg_right}}
    <Desk desk_block_left={desk_block_left}
      desk_block_right={desk_block_right}
      desk_leg_left={desk_leg_left}
      desk_leg_right={desk_leg_right} /> 
  {/each}
  
  {#each laptops as {width, top, left, border_radius, background_color}}
    <Laptop
      width={width} 
      top={top} 
      left={left} 
      border_radius={border_radius} 
      background_color={background_color}/>
  {/each}

  <Mouse />

  <Radio />

  <Clock />
  
  <div class="wall-divider" style="position: absolute;
    width: 100%;
    height: 47rem;
    background: aliceblue;
    background-image: url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png');
    z-index: -1;"></div>

  <div class="floor-divider" style="position: absolute;
    width: -webkit-fill-available;
    padding: 9px;
    background: teal;
    top: 46rem;
    background-image: url('https://www.transparenttextures.com/patterns/back-pattern.png');
    z-index: -1;"></div>

    <Information />   

    {#if open_book}
      <OpenBook bind:open_book={open_book} bind:store_open_book={store_open_book} />   
    {/if}

</main> 

<style lang="scss">
  .gradient-blue {
    background: linear-gradient(105.49deg, teal, #af6a0f);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;      
  }
</style>