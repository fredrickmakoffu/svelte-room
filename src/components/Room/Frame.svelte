    <script>
        export let background, border, zoom, position, image, padding;
    </script>

    <img src={image} alt=""
        style="--background-color: {background}; 
            --border-style: {border.style};
            --border-width: {border.width};
            --border-radius: {border.radius};
            --border-color: {border.color}bb {border.secondary_color}ff; 
            --zoom: {zoom};
            --top: {position.top};
            --left: {position.left};
            --padding: {padding};" />

    <style scoped lang="scss">
        img {
            position: absolute;
            top: var(--top);
            bottom: var(--bottom);
            left:  var(--left);
            right: var(--right);
            max-width: 200px;
            width: 100%;
            background: var(--background-color);
            padding: var(--padding);
            border-style: var(--border-style);
            border-width: var(--border-width);
            box-shadow: 2px 2px 4px rgba(0,0,0,.6);
            zoom: var(--zoom);
            border-radius: var(--border-radius);
            border-color: var(--border-color);
            cursor: grab;
        }
    </style>