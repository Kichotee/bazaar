<template>
<main>
   
    <marketHeader v-model:searchData="searchData" />
    <marketBody :nfts='filteredNft' />
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
        const searchData = ref('');
        
        const store = useStore()

        const nfts = computed(() => {
            return store.getters.useNfts
        })
        const data= nfts.value
      
        store.commit({
            type: 'SET_NFT'
        })
        store.dispatch("fetchUsers");


      const filteredNft= computed(()=>{
        return nfts.value.filter((nft) => {
        return (
         nft.name.toLowerCase().includes(searchData.value.toLowerCase())
        );
      })
    })

        // if (filteredNft.length ==0) {
            
        // }

    console.log(filteredNft);
      
        return {
            nfts,
            filteredNft,
            data,
            searchData
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
