
<script>
    export let background, border, zoom, position, height, width;
</script>

<div class="window" style="--background-color: {background}bb; 
    --border-style: {border.style};
    --border-width: {border.width};
    --border-style: {border.style};
    --border-width: {border.width};
    --border-color: {border.color}bb {border.color}ff; 
    --zoom: {zoom};
    --height: {height};
    --width: {width};
    --top: {position.top};
    --left: {position.left};">
    
    <div class="window-bar"></div>

    <div class="window-bar" style="left: 49%; background: #333; top: 20px;"></div>
    
    <div class="window-bar" style="left: 81%"></div>

    <div class="window-bar moon left"></div>

    <div class="window-bar moon right"></div>
</div>

<style lang="scss" scoped>
    .window {
        position: absolute;
        top: var(--top);
        bottom: var(--bottom);
        left:  var(--left);
        right: var(--right);
        height: var(--height);
        width: var(--width);
        padding: 30px;
        background: var(--background-color);
        border-color: var(--border-color);
        border-style: var(--border-style);
        border-width: var(--border-width);
        zoom: var(--zoom);
        border-top-left-radius: 9rem;
        border-top-right-radius: 9rem;
    }

    .window-bar {
        background: #333000bb;
        position: absolute;
        background: rgba(51, 48, 0, 0.7333333333);
        height: 86%;
        width: 13px;
        border-radius: 40px;
        top: 40px;
        left: 15%;
    }

    .window-bar.moon {
        height: 35%;
        width: 35%;
        background: none;
        border-bottom: 19px solid rgb(51, 48, 0);
        border-radius: 145px;
    }

    .window-bar.moon.left {
        left: 55%;
        transform: rotate(91deg);
    }

    .window-bar.moon.right {
        left: 10%;
        top: 160px;
        transform: rotate(270deg);
    }
</style>