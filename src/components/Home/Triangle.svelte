<div class="cont">
    <span></span>
    <span></span>
</div>

<style lang="scss" scoped>
    .cont {
        position: relative;
        display: flex;
        align-items: center;
        transform: scale(0.2);
        justify-content: center;
    }
    .cont span {
        position: absolute;
        width: 250px;
        height: 250px;
        background-color: #119DA4;
    }
    .cont span:first-child {
        width: 90%;
        height: 90%;
        filter: blur(80px) drop-shadow(0 0 55px rgb(35, 146, 236));
        border-radius: 50%;
    }
    .cont span:last-of-type {
        filter: blur(30px);
        clip-path: polygon(50% 0% ,100% 100%, 0% 100%);
    }
</style>