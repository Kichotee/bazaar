<template>
<main>
    <marketHeader :nfts='nfts' />
    <marketBody :props='nfts' />
    <footerView />
</main>
</template>

<script>
import marketBody from '../components/marketComponents/marketBody.vue'
import marketHeader from '../components/marketComponents/marketHeader.vue'
import footerView from '../components/homeComponents/footerView.vue'
import {
    computed,
    onBeforeMount,
    onMounted,
    ref
} from "vue";
import {
    useStore
} from 'vuex'
export default {

    components: {
        marketBody,
        marketHeader,
        footerView

    },
    setup() {

        const store = useStore()

        const nfts = computed(() => {
            return store.getters.useNfts
        })

        store.commit({
            type: 'SET_NFT'
        })
        store.dispatch("fetchUsers");
        console.log(nfts);

        return {
            nfts
        }

    }
}
</script>

<style lang="scss">
@import 'src/assets/scss/config.scss';

main {
    scroll-behavior: smooth;
    height: max-content;

}
</style>
