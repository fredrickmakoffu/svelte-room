<script>
  export let width, top, left, border_radius, background_color;
</script>

<div class="laptop float" style="   
    padding: 67px 0;
    --width: {width};
    top: {top};
    left: {left};
    border-radius: {border_radius};
    background: {background_color};"></div>

<style lang="scss" scoped>
    .laptop {
        position: absolute;
        padding: 67px 0;
        width: var(--width);
        top: var(--top);
        left: var(--left);
        border-radius: var(--border_radius);
        background: var(--background_color);
        border-top: 2px solid #b2b2b244;
        border-right: 2px solid #b2b2b233;
        border-left: 2px solid #b2b2b233;
    }
</style>