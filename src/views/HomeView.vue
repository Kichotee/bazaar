<template>

    <headerView />
    <Seller/>
    <trendCollections/>
    <section class="newsletter">
    <div class="newsletter-box">

    </div>
</section>
  
    <Newsletter/>
    <footer/>


<router-view></router-view>
</template>

<script>
import Seller from '@/components/homeComponents/seller.vue'
// @ is an alias to /src
import headerView from '../components/homeComponents/headerView.vue'
import trendCollections from '../components/homeComponents/trendCollections.vue'
import Newsletter from '../components/homeComponents/Newsletter.vue'
import footer from '../components/homeComponents/footer.vue'


export default {
    name: 'HomeView',
    components: {
        headerView,
        Seller,
        trendCollections,
        Newsletter,
        footer
    }
}
</script>

<style lang="scss">

</style>
