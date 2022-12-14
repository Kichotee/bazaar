<template>
<section id='marketSection'>
    <div class="body-box">
        <div class="body">
            <div v-for="nft in nfts" class="items">

                <figure>
                    <picture>
                        <img :src="nft.image_url" alt="">
                    </picture>
                </figure>
                <div class="nft-detail">
                    <h2>{{nft.name}} </h2>
                    <p class="price">{{Math.round(nft.stats.total_average_price * 100) / 100}} Eth</p>
                    <p class="owner">By {{nft.twitter_username}}</p>
                    <button class="btn" href="">Place bid</button>
                </div>
            </div>
        </div>
        <div id="searchError" v-if="searchData&&nfts.length==0">
            <h4>
            Nft not available, try another search

            </h4>
        </div>
    
    </div>

</section>
</template>

<script>


export default {
    props:{
        nfts: Object,
        searchData:String
    },
    components: {

    },

    setup() {

       

      
        return {
            
        }

    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/config.scss';
@import 'src/assets/scss/utilities.scss';

#marketSection {
    padding: 0% 5% 0vh;
   height: min-content ;
   min-height: 60vh;
   overflow-x: hidden;
}

.body-box {
    
    #searchError{
            
            width: 100%;
            height:50vh;
            display: flex ;
            justify-content: center;
            align-items: center;
            text-align: center;
    
          
            
           
        }
        h4{
                color:$secondary-color;
                font-size: 1.5rem
            }
   
}

.body {
    display: grid;
    grid-template: auto/1fr 1fr;
    gap: 0.5% 5%;
    
}

.items {
    height: 30vh;
    width: 100%;
    transition:  all 0.25s ease;
    &:hover{
        scale:1.1
    }
    figure {
        height: 70%;
        border-radius: 10px 10px 0px 0px;

        img {
            width: 100%;
            height: 100%;
            border-radius: 10px 10px 0px 0px;
        }
    }

    .nft-detail {
        height: 30%;
        padding: 2.5% 5%;
        background-color: #171221;
        border-radius: 0px 0px 10px 10px;
        box-shadow: 0px 1px 8px 0px #00000040;
        display: grid;
        grid-template: repeat(3, 1fr)/repeat(2, 1fr);

        h2 {
            font-size: 0.6rem;
            grid-column: 1/span 2;
            text-transform: capitalize;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: clip;

        }

        .price {
            font-size: 0.5rem;
            grid-row: 3;
            grid-column: 2;
            justify-self: end;
            color: $secondary-color;
            align-self: center;
        }

        .owner {
            grid-row: 2;
            grid-column: 1;
            font-size: 0.5rem;

        }
        button{
            background-color: transparent;
            color: $secondary-color;
            cursor:pointer;
            &:hover{
            background-color: $secondary-color;
            color: #171221;

            }
        }


        .btn {
            padding: 1% 2%;
            border: 1px solid $secondary-color;
            border-radius: 15px;
            transition: all 0.75s;
            font-size: 0.5rem;
            display: grid;
            place-items: center;
            grid-row: 3;
            grid-column: 1;

        }
    }
   
}
@import 'src/assets/scss/responsive.scss';
</style>
