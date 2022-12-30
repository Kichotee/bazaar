<template>
<div class="about">
    <div class="about-box">
        <h2>Bazaar</h2>
        <div class="about-text-box">

            <div class="col-1">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatibus voluptate inventore
                    cumque vero quisquam deleniti aut harum ea perferendis.
                    <br>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem adipisci atque eaque esse corporis
                     magnam iste. Odio esse atque, maiores eaque, ducimus distinctio omnis architecto quisquam sit vel nisi, fugit consequuntur. Neque illum 
                    adipisci odio, perspiciatis aspernatur aliquid velit vitae.
                
                </p>
            </div>
            <div class="col-2">
                <div class="img-box">
                    <img src="../assets/images/nft.png" alt=""> 
                </div>
            </div>
        </div>
    </div>

</div>
<footerViewVue/>
</template>

<script>
import footerViewVue from "../components/homeComponents/footerView.vue";
export default {
    components:{

    footerViewVue
}
}
</script>

<style lang="scss">
@import '../assets/scss/_config.scss';

.about {
   
    height: 100vh;
    width: 100%;


    &-box {
        margin-top: 2.5%;
        width: 100%;
        height: 100%;

        h2 {
            text-align: center;
            margin-bottom: 2%;
            color: $secondary-color;
            font-size: 2rem;
            font-weight: bolder;

        }

    }

    &-text-box {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        align-items: center;
        
        .col-1{
            padding: 0 5%;
            flex-basis: 50%;
            height: 100%;
            line-height: 2rem;
        }
        .col-2{
            flex-basis: 50%;
            width: 100%;

            .img-box{
                width: 100% ;
                height: 100%;
                

    
                img {
                    width: 65%;
                    // height: 100%;
                    transform: translate(30%, -40%);
                    object-fit: cover;
    
                }
        }

        }
    }
    
}
</style>
