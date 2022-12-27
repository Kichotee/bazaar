<template >
<main @click.self="toggleMenu">
    <headerView/>
    <seller />
    <trends />
    <newsletter />
<footerView />
</main>


    
   

</template>

<headerView />


<script>
import seller from '../components/homeComponents/seller.vue'
// @ is an alias to /src
import headerView from '../components/homeComponents/headerView.vue'
import trends from '../components/homeComponents/trendCollections.vue'
import Newsletter from '../components/homeComponents/Newsletter.vue'
import footerView from '../components/homeComponents/footerView.vue'
import { ref } from 'vue'


export default {
    name: 'HomeView',
    components: {
        headerView,
        seller,
        trends,
        Newsletter,
        footerView
    }
    ,
    
    setup() {
       const activeMenu = ref(false)
        const toggleMenu = ()=>{
            activeMenu.value != activeMenu.value
        }
        return{
            toggleMenu
        }
    }
}
</script>

<style lang="scss">
main{
    
    
}
</style>
