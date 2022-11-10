<template>

    <headerView />
    <Seller/>


<router-view></router-view>
</template>

<script>
import Seller from '@/components/homeComponents/seller.vue'
// @ is an alias to /src
import headerView from '../components/homeComponents/headerView.vue'

export default {
    name: 'HomeView',
    components: {
        headerView,
        Seller
    }
}
</script>

<style lang="scss">

</style>
