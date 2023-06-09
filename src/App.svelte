<script>
  import Shelf from './components/Shelf.svelte'
  import Frame from './components/Frame.svelte'
  import Window from './components/Window.svelte'
  import Desk from './components/Desk.svelte'
  import Laptop from './components/Laptop.svelte'
  import Mouse from './components/Mouse.svelte'
  import Radio from './components/Radio.svelte'
  import Clock from './components/Clock.svelte'
  import anime from 'animejs/lib/anime.es.js';
  import { onMount } from 'svelte';

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
  
  let frames = [
    {
      background: '#eee',
      position: {
        top: "18.7rem",
        left: "115rem"
      },
      border: {
        color:"#333",
        style: "solid",
        width: "15px",
        radius: "15px"
      },
      zoom: 0.4,
      padding: "0px",
      image: 'https://images.unsplash.com/photo-1583407723467-9b2d22504831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'
    },
    {
      background: '#eee',
      position: {
        top: "42rem",
        left: "115rem"
      },
      border: {
        color:"#333",
        style: "solid",
        width: "15px",
        radius: "15px"
      },
      zoom: 0.4,
      padding: "0px",
      image: 'https://images.unsplash.com/photo-1583407723467-9b2d22504831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'
    },
    {
      background: '#eee',
      position: {
        top: "14rem",
        left: "48.3rem"
      },
      border: {
        color:"#333",
        style: "solid",
        width: "5px",
        radius: "6px"
      },
      zoom: 1.12,
      padding: "0",
      image: 'https://images.unsplash.com/photo-1662572091420-95992f339784?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
  ]

  let windows = [
    {
      background: '#fafafa',
      position: {
        top: "7.7rem",
        left: "80rem"
      },
      border: {
        color:"#333000",
        style: "solid",
        width: "15px"
      },
      height: "18rem",
      width: "16rem",
      zoom: 1
    }
  ]

  let shelf = [
    {
      "zoom": 0.9,
      "left": "20%",
      "top": "15%",
      "first_shelf_books": [
        [
          {
            "title": "२०१२-२०१६ ई",
            "color": "#fff",
            "background_color": "red",
            "zoom": "0.3",
            "width": "3rem"
          },
          {
            "title": "२०१२-२०१६ ई",
            "color": "#fff",
            "background_color": "#000",
            "zoom": "0.3",
            "width": "9rem"
          },
          {
            "title": "२०१२-२०१६ ई",
            "color": "#fff",
            "background_color": "#8a008a",
            "zoom": "0.3",
            "width": "5rem"
          }
        ],
        [
          {
            "title": "२०१२-२०१६ ई",
            "color": "#fff",
            "background_color": "red",
            "zoom": "0.3",
            "width": "3rem"
          },
          {
            "title": "२०१२-२०१६ ई",
            "color": "#fff",
            "background_color": "#000",
            "zoom": "0.3",
            "width": "9rem"
          }
        ]
      ]
    },
    {
      "zoom": 0.9,
      "left": "20%",
      "top": "40%",
      "first_shelf_books": [
        [
          {
            "title": "२०१२-२०१६ ई",
            "color": "#fff",
            "background_color": "#000",
            "zoom": "0.3",
            "width": "9rem"
          }
        ]
      ]
    }
  ]

  let desks = [
    {
      desk_block_left: {
        background: "#33300077",
        width: "40rem",
        padding: "12px 0",
        border: {
          radius: "5px",
          bottom_left_radius: "3px",
          bottom_right_radius: "3px",
        }, 
        position: "absolute",
        top: "35rem",
        left: "69rem"
      },
      desk_block_right: {
        background: "#333000",
        width: "40rem",
        padding: "2px 0",
        border: {
          radius: "5px",
          top_left_radius: "3px",
          top_right_radius: "3px",
        },
        position: "absolute",
        top: "36.7rem",
        left: "69rem"
      },
      desk_leg_left: {
        background: "#333000",
        height: "10rem",
        padding: "0px 10px",
        border: {
          radius: "5px 21px"
        },
        position: "absolute",
        top: "38rem",
        left: "72rem",
      },
      desk_leg_right: {
        background: "#333000",
        height: "10rem",
        padding: "0px 10px",
        border: { 
          radius: "21px 5px"
        },
        position: "absolute",
        top: "38rem",
        left: "104rem"
      }
    }
  ]

  let laptops = [
    {
      width: "10rem", 
      top: "26.3rem", 
      left: "93rem", 
      border_radius: "10px",
      background_color: "linear-gradient(to bottom, #e5e5e5 0%, #d9d9d9 50%, #c2c2c2 100%)"
    }
  ]
  
</script>

<main class="room">
  {#each shelf as item}
    <Shelf 
      top={item.top} 
      left={item.left} 
      zoom={item.zoom} 
      books={item.first_shelf_books} />   
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

</main> 