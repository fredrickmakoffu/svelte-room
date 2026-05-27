<script>
  export let background, border, zoom, position, image, padding;
</script>

<img
  src={image}
  alt=""
  style="
    --background-color: {background};
    --border-style: {border.style};
    --border-width: {border.width};
    --border-radius: {border.radius};
    --border-color: {border.color};
    --border-color-secondary: {border.secondary_color};
    --zoom: {zoom};
    --top: {position.top};
    --left: {position.left};
    --padding: {padding};"
/>

<style>
  img {
    position: absolute;
    top: var(--top);
    left: var(--left);
    max-width: 200px;
    width: 100%;
    background: var(--background-color);
    padding: var(--padding);
    border-style: var(--border-style);
    border-width: var(--border-width);
    border-color: var(--border-color);
    border-radius: var(--border-radius);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
    /* zoom kept: Chrome scales position offsets (left/top) by the zoom factor,
       which the JSON positions depend on. transform:scale does not do this. */
    zoom: var(--zoom);
    cursor: grab;
  }
</style>
