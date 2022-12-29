
<script>
    export let background, border, zoom, position;
</script>

<div class="window" style="--background-color: {background}bb; 
    --border-style: {border.style};
    --border-width: {border.width};
    --border-color: {border.color}bb {border.color}ff; 
    --zoom: {zoom};
    --top: {position.top};
    --left: {position.left};">
    <div class="window-bar"></div>

    <div class="window-bar" style="left: 138px; background: #333; top: 20px;"></div>
    
    <div class="window-bar" style="left: 222px"></div>

    <div class="window-bar" style="
        left: 180px;
        height: 47%;
        width: 42%;
        background: none;
        border-bottom: 19px solid rgb(51, 48, 0);
        border-radius: 145px;
        transform: rotate(91deg);"></div>

    <div class="window-bar" style="left: -7px;
        height: 47%;
        width: 42%;
        background: none;
        top: 160px;
        border-bottom: 19px solid rgb(51, 48, 0);
        border-radius: 145px;
        transform: rotate(270deg);"></div>
</div>

<style lang="scss" scoped>
    .window {
        position: absolute;
        top: var(--top);
        bottom: var(--bottom);
        left:  var(--left);
        right: var(--right);
        height: 35%;
        width: 13%;
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
        left: 50px;
    }
</style>