<script>
    import Book from './Book.svelte'
    export let zoom, top, left;
    export let book_zoom = 0.25
</script>

<div class="shelf" style="--top:{top}; --zoom:{zoom}; --left:{left}">
    <div class="shadow"></div>
    <div class="bookend left"></div>
    <Book title='2016 - 2020' color='#fff' background_color="red" zoom={book_zoom} width="3rem" />

    <Book title='2020 - 2021' color='#fff' background_color="#000" zoom={book_zoom} width="9rem" />

    <Book title='2021 - 2023' color='#fff' background_color="#8a008a" zoom={book_zoom} width="5rem" />
    
    <div class="bookend right"></div>
</div>
  
<style>
    .shelf {
        width: 30em;
        border-bottom: 1em solid #d97a53;
        position: fixed;
        top: var(--top);
        zoom: var(--zoom);
        left: var(--left);
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
        border-bottom-left-radius: 11px;
    }

    .shelf::after {
        right: 1em;
        border-bottom-right-radius: 11px;
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