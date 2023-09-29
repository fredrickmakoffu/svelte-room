<script>
    export let desk_block_left, desk_block_right, desk_leg_left, desk_leg_right;
</script>

<div class="desk-block" style="
    --background: {desk_block_left.background};
    --width: {desk_block_left.width};
    --padding: {desk_block_left.padding};
    --border-radius: {desk_block_left.border.radius};
    --position: {desk_block_left.position};
    --border-bottom-left-radius: {desk_block_left.border.bottom_left_radius};
    --border-bottom-right-radius: {desk_block_left.border.bottom_right_radius};
    --top: {desk_block_left.top};
    --left: {desk_block_left.left}"></div>

<div class="desk-block" style="
    --background: {desk_block_right.background};
    --width: {desk_block_right.width};
    --padding: {desk_block_right.padding};
    --border-radius: {desk_block_right.border.radius};
    --position: {desk_block_right.position};
    --border-top-left-radius: {desk_block_right.border.top_left_radius};
    --border-top-right-radius: {desk_block_right.border.top_right_radius};
    --top: {desk_block_right.top};
    --left: {desk_block_right.left}"></div>

<div class="desk-legs" style="
    --background: {desk_leg_left.background};
    --height: {desk_leg_left.height};
    --padding: {desk_leg_left.padding};
    --border-radius: {desk_leg_left.border.radius};
    --position: {desk_leg_left.position};
    --top: {desk_leg_left.top};
    --left: {desk_leg_left.left};"></div>

<div class="desk-legs" style="
    --background: {desk_leg_right.background};
    --height: {desk_leg_right.height};
    --padding: {desk_leg_right.padding};
    --border-radius: {desk_leg_right.border.radius};
    --position: {desk_leg_right.position};
    --top: {desk_leg_right.top};
    --left: {desk_leg_right.left};"></div>

<style lang="scss" scoped>
    .desk-block {
        background: var(--background);
        width: var(--width);
        padding: var(--padding);
        border-radius: var(--border-radius);
        position: var(--position);
        border-top-left-radius: var(--border-bottom-left-radius);
        border-top-right-radius: var(--border-bottom-right-radius);
        top: var(--top);
        left: var(--left);
    }

    .desk-legs {
        background: var(--background);
        height: var(--height);
        padding: var(--padding);
        border-radius: var(--border-radius);
        position: var(--position);
        top: var(--top);
        left: var(--left);
    }
</style>