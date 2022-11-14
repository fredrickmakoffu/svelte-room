<script>
    import Book from './Book.svelte'
    export let zoom = 1;
    export let top = '50%';
</script>

<div class="room">
    <div class="shelf" style="--top:{top}; --zoom:{zoom}">
      <div class="shadow"></div>
      <div class="bookend left"></div>
        <Book logo='SK' title='2016 - 2020' color='#fff' background_color='red' zoom=0.25 author={{
            first_name: 'Fredrick',
            last_name: 'Mbugua',
        }} padding='7rem 1rem' />

        <Book logo='SK' title='2016 - 2020' color='#fff' background_color='#000' zoom=0.25 author={{
            first_name: 'Fredrick',
            last_name: 'Mbugua',
        }} padding="7rem 3rem" />

        <Book logo='SK' title='2016 - 2020' color='#fff' background_color="#8a008a" zoom=0.25 author={{
            first_name: 'Fredrick',
            last_name: 'Mbugua',
        }} padding='7rem .6rem' />
      <div class="bookend right"></div>
    </div>
  </div>

<style>
    .shelf {
        width: 30em;
        border-bottom: 1em solid #d97a53;
        position: fixed;
        top: var(--top);
        zoom: var(--zoom);
        left: 50%;
        margin-top: -5em;
        margin-left: -15em;
        padding: 0 3em;
        display: flex;
        align-items: flex-end;
    }

    .shelf::after,
    .shelf::before {
        content: '';
        display: block;
        width: 1em;
        height: 2em;
        position: absolute;
        bottom: -3em;
        background: #732b23;
    }

    .shelf::before {
        left: 1em;
    }

    .shelf::after {
        right: 1em;
    }

    .shadow {
        position: absolute;
        bottom: -2.7em;
        height: 1.7em;
        left: 1em;
        right: 1em;
        z-index: -1;
        background: linear-gradient(to bottom, #aa4a46 0%, #ffc3aa 100%);
    }

    .bookend {
        width: 3em;
        height: 4em;
        position: relative;
    }

    .bookend::before {
        height: .75em;
        background: #a84033;
        width: 100%;
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
    }

    .bookend::after {
        height: 100%;
        width: .75em;
        content: '';
        display: block;
        position: absolute;
        background: #a84033;
    }

    .bookend.left::after{
        right: 0;
    }
  </style>