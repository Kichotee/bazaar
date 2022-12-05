<template>
<main>
    <marketHeader />
    <marketBody />
    <footerView/>
</main>
</template>

<script>
import marketBody from '../components/marketComponents/marketBody.vue'
import marketHeader from '../components/marketComponents/marketHeader.vue'
import footerView from '../components/homeComponents/footerView.vue'


export default {

    components: {
        marketBody,
        marketHeader,
        footerView

    },

}
</script>

<style lang="scss">
@import 'src/assets/scss/config.scss';
main{
    scroll-behavior: smooth;
    height: max-content;
    


}
</style>
