<template>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
// @import '../assets/scss/config';

nav {

    height: 10vh;

    .navbar {
        display: flex;
        justify-content: space-between;
    }

    .img-box {
        flex-basis: 40%;
        transform: translateX(-8%);
    }

    img {
        width: 70%;

    }

    ul {
        display: flex;
        justify-content: space-between;
        flex-basis: 60%;
        align-items: center;
        cursor: pointer;

        li {
            font-size: 0.9rem;
            transition: all 0.25s;

        }

        li:hover {
            color: #afafaf
        }

    }

}
</style>
