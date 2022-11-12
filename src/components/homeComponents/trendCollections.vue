<template>
<section class="collection-section">
    <h4>Trending Collections</h4>
    <div class="collections">
        <div class="collection">
            <img :src="nfts[0].image_url" alt="nfts[0].description">
            <div id="nft-detail" class="nft-detail">

                <h4>{{nfts[0].name}}</h4>
                <div class="creator-detail">
                    <h5>By {{nfts[0].twitter_username}}</h5>
                    <p>{{Math.round(nfts[0].stats.total_average_price * 100) / 100}} Eth</p>
                </div>

            </div>
        </div>
        <div class="collection">
            <img :src="nfts[1].image_url" alt="nfts[1].description">
            <div id="nft-detail" class="nft-detail">

                <h4>{{nfts[1].name}}</h4>
                <div class="creator-detail">
                    <h5>By {{nfts[1].twitter_username}}</h5>
                    <p>{{Math.round(nfts[1].stats.total_average_price * 100) / 100}} Eth</p>

                </div>
            </div>
        </div>
        <div class="collection">
            <img :src="nfts[2].image_url" :alt="nfts[2].description">
            <div id="nft-detail" class="nft-detail">

                <h4>{{nfts[2].name}}</h4>
                <div class="creator-detail">
                    <h5>By {{nfts[2].twitter_username}}</h5>
                    <p>{{Math.round(nfts[2].stats.total_average_price * 100) / 100}} Eth</p>

                </div>

            </div>
        </div>
        <div class="collection">
            <img :src="nfts[6].image_url" alt="">
            <div id="nft-detail" class="nft-detail">

                <h4>{{nfts[6].name}}</h4>
                <div class="creator-detail">
                    <h5>By {{nfts[6].twitter_username}}</h5>
                    <p>{{Math.round(nfts[6].stats.total_average_price * 100) / 100}} Eth</p>

                </div>
            </div>
           
             
        </div>
        <div id="arrow-container" class="arrow-container">
                <i class="fa-solid fa-arrow-right"></i>
            </div>

    </div>

</section>
</template>

<script setup>
import {
    computed,
    onMounted,
    ref
} from "vue";

import {
    useStore
} from 'vuex'

const store = useStore();

const nfts = computed(() => {
    return store.getters.getNfts
})

onMounted(() => {
    store.commit('SET_NFT')
    store.dispatch("fetchUsers");

})
</script>

<style lang="scss">
@import 'src/assets/scss/config.scss';

.collection-section {
    height: auto;
    padding:$section-spacing;
    position: relative;

    h4 {
        padding: 0 0 2.5% 0;
    }

    .collections {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        padding: 0 0 5% 0;
        gap: 5%;
        height: auto;
        border-radius: 10px;
        &>*{
            cursor: pointer;
        }

        // border: solid;
        .collection {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            border-radius: 10px;

            img {
                width: 100%;
                height: 70% !important;
                border-radius: 10px 10px 0px 0px;
            }

            .nft-detail {
                padding: 2.5% 5% 0;
                width: 100%;
                font-size: 0.3rem;
                height: 30% !important;
                border-radius: 0px 0px 10px 10px;
               
                background: #0D1018;
                box-shadow: 0px 1px 8px 0px #00000040;
                display: grid;
                grid-template-rows: repeat(2, 1fr);
                
                

                h4 {
                    text-align: left;
                    align-self: center;
                }

                .creator-detail {
                    
                    display: flex;
                    justify-content: space-between;

                    p {
                         font-family: monospace;
                        color: $secondary-color;
                        font-size: $text-size-medium*.75;
                    }
                }
            }
        }

    .arrow-container {

            background: $secondary-color;
           height: 20%;
           width: 20%;
           align-self: center;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          display: none;
            
            // right: .5%;
            // top: 50%;
            i{
                font-size: 1.5em;
                padding: 0 auto;
                color: #0D1018
            }
        }
    }

    @import 'src/assets/scss/responsive.scss';
}
</style>
