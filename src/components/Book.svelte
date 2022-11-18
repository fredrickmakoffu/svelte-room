<script>
    export let title, color, background_color, zoom;
    export let width = 'auto';
</script>

<div class="book" style="--color: {color}; --background_color: {background_color}; --zoom: {zoom}; --width: {width}">
    <div class="pad-wide"></div>
    <div>
        <p class="book-title uppercase"> {title} </p>
    </div>
    <p class="pad-wide grid uppercase"></p>
</div>

<style >
    .book {
        color: var(--color);
        background-color: var(--background_color);
        background-image: url("https://www.transparenttextures.com/patterns/binding-light.png");
        border-radius: 3px;
        zoom: var(--zoom);
        width: var(--width);
        flex-direction:column;
    }

    .book-title {
        font-size: 12px;
        writing-mode: vertical-rl;
        text-orientation: mixed;
        padding: 7rem 0rem;
        margin: auto;
        letter-spacing: 2px;
    }

    .uppercase {
        text-transform: uppercase;
    }

    .pad-wide {
        background: #000;
        margin: 4px 4px;
        color: #333;
        padding: 4px;
        text-align: center;
        border-radius: 3px;
        opacity: 0.4;
    }
</style>