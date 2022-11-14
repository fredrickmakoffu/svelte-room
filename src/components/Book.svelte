<script>
    // export let logo = 'SK';
    // export let title = '';
    // export let author = {
    //     first_name: 'Fredrick',
    //     last_name: 'Makoffu'
    // };
    // export let color = '#fff';
    // export let background_color = '#8a008a';
    // export let zoom = 0.25;
    // export let padding = '7rem 3rem'

    export let logo, title, author, color, background_color, zoom, padding;
</script>
<div class="book" style="--color: {color}; --background_color: {background_color}; --zoom: {zoom}">
    <p class="pad-wide"> {logo} </p> 
    <div>
        <p class="book-title uppercase" style="--padding: {padding}"> {title} </p>
    </div>
    <p class="pad-wide grid uppercase footer"> 
        <span>{author.first_name}</span>
        <span>{author.last_name}</span>
    </p>
</div>

<style >
    .book {
        color: var(--color);
        background-color: var(--background_color);
        background-image: url("https://www.transparenttextures.com/patterns/binding-light.png");
        border-radius: 3px;
        zoom: var(--zoom);
        flex-direction:column;
    }

    .book-title {
        font-size: 15px;
        writing-mode: vertical-rl;
        text-orientation: mixed;
        padding: var(--padding);
        letter-spacing: 4px;
    }

    .uppercase {
        text-transform: uppercase;
    }

    .pad-wide {
        padding: 1rem 3rem;
    }

    .footer {
        font-size: 12px;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 2px;
        display: grid;
        padding: 1rem 0rem;
    }
</style>