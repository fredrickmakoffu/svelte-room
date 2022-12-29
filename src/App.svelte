<script>
  import Shelf from './components/Shelf.svelte'
  import Frame from './components/Frame.svelte'
  import Window from './components/Window.svelte'

  let first_frame = {
    background: '#eee',
    position: {
      top: "7rem",
      left: "100rem"
    },
    border: {
      color:"#5A5A5A",
      style: "solid",
      width: "15px"
    },
    zoom: 0.55,
    padding: "30px",
    image: 'https://images.unsplash.com/photo-1553332697-bf631215652e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
  }

  let second_frame = {
    background: '#eee',
    position: {
      top: "4.7rem",
      left: "70rem"
    },
    border: {
      color:"#333",
      style: "solid",
      width: "15px"
    },
    zoom: 0.6,
    padding: "30px",
    image: 'https://images.unsplash.com/photo-1583407723467-9b2d22504831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'
  }

  let third_frame = {
    background: '#eee',
    position: {
      top: "30rem",
      left: "70rem"
    },
    border: {
      color:"#AA6C39",
      style: "solid",
      width: "15px"
    },
    zoom: 0.6,
    padding: "30px",
    image: 'https://images.unsplash.com/photo-1518893883800-45cd0954574b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80'
  }

  let fourth_frame = {
    background: '#eee',
    position: {
      top: "34rem",
      left: "100rem"
    },
    border: {
      color:"#023020",
      style: "solid",
      width: "15px"
    },
    zoom: 0.55,
    padding: "30px",
    image: 'https://images.unsplash.com/photo-1578406843598-34a4518d168d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80'
  }

  let window = {
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
    zoom: 0.9
  }

  let shelf = {
    zoom: 0.8,
    left: "20%"
  }

</script>

<main class="room">
  <Shelf top='15%' left={shelf.left} zoom={shelf.zoom} />   

  <Shelf top='35%' left={shelf.left} zoom={shelf.zoom} /> 

  <Frame background={first_frame.background} border={first_frame.border} zoom={first_frame.zoom} position={first_frame.position} image={first_frame.image} padding={first_frame.padding} />

  <Frame background={second_frame.background} border={second_frame.border} zoom={second_frame.zoom} position={second_frame.position} image={second_frame.image} padding={second_frame.padding} />

  <Frame background={third_frame.background} border={third_frame.border} zoom={third_frame.zoom} position={third_frame.position} image={third_frame.image} padding={third_frame.padding} />

  <Frame background={fourth_frame.background} border={fourth_frame.border} zoom={fourth_frame.zoom} position={fourth_frame.position} image={fourth_frame.image} padding={fourth_frame.padding} />

  <Window background={window.background} border={window.border} zoom={window.zoom} position={window.position} />
</main>
