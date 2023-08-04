<script>
    export let title, tagline, color, background_color, zoom, open_book, store_open_book;
    export let width = 'auto';

    function handleHover() {
        // set title in element with id=information
        document.getElementById('information-title').innerHTML = title;
    }

    function handleFocus() {
        open_book = !open_book;
    } 

    function handleClick() {
        open_book = !open_book;

        store_open_book = {
            title: title,
            tagline: tagline,
            points: [
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                'Totam impedit atque molestiae animi vel dignissimos asperiores rerum quis aspernatur quasi',
                'numquam consequuntur sint ipsa ducimus eum magni! Facere, qui repellendus.',
                'numquam consequuntur sint ipsa ducimus eum magni! Facere, qui repellendus.'
            ]
        };
    }

</script>

<div class="book float" style="--color: {color}; --background_color: {background_color}; --zoom: {zoom}; --width: {width}"  on:mouseover={handleHover} on:focus={handleFocus} on:click={handleClick}>
    <div class="pad-wide"></div>
    <div>
        <p class="book-title uppercase"> एकस्य नायकस्य यात्रा </p>
    </div>
    <p class="pad-wide grid uppercase"></p>
</div>

<style scoped>
    .book {
        color: var(--color);
        background-color: var(--background_color);
        background-image: url("https://www.transparenttextures.com/patterns/binding-light.png");
        border-radius: 3px;
        zoom: var(--zoom);
        width: var(--width);
        flex-direction:column;
        border-radius: 2px;
        cursor: pointer;
    }

    .book-title {
        font-size: 12px;
        writing-mode: vertical-rl;
        text-orientation: mixed;
        padding: 6rem 0rem;
        margin: auto;
        letter-spacing: 2px;
        font-weight: 600;
    }

    .uppercase {
        text-transform: uppercase;
    }

    .pad-wide {
        background: #eee;
        margin: 10px 12px;
        color: #333;
        padding: 2px;
        text-align: center;
        border-radius: 3px;
        opacity: 0.4;
    }
</style>

