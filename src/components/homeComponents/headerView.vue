<template>
<header class="header">
    <div class='header-box'>
        <h1 class="header-text">
            <p>

                <span>Discover</span> and
            </p>
            <p>Explore the <span>Largest</span> </p>
            <p> <span>NFT</span> collections</p>
        </h1>
        <div class="img-box">
            <img class="header-img" src="../../assets/images/NFT-art.png" alt="">

        </div>
        <div class="detail">
            <p ref="detailText" ></p>
            <div class="header-cta-box">
                <a class="bz-btn" href="">
                    Market
                </a>
                <div class="explore">
                    <p>Explore More</p>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>

    </div>

    <div class="stats-box">
        <div class="stats">
            <div class="stats1">
                <p>2M+</p>
                <p>Trading Volume</p>
            </div>
            <div class="stats2">
                <p>2M+</p>
                <p>Trading Volume</p>
            </div>
            <div class="stats3">
                <p>2M+</p>
                <p>Trading Volume</p>
            </div>
            <div class="stats4">
                <p>2M+</p>
                <p>Trading Volume</p>
            </div>
        </div>
    </div>

</header>
</template>

<script>
import {ref, onMounted } from 'vue'
export default {
    setup(){
        const detailText=ref(null)
         let text = 'All forms of digital arts live here. Create, trade, earn. DYOR'
            let i =0;
        onMounted(()=>{

           
           const textInt=  setInterval(() => {
                detailText.value.innerHTML += text[i];
                i++;

                if (i===text.length) {
                    clearInterval(textInt) 
                }
            }, 500);
        })
        return{
            detailText
        }
    }

}
</script>

<style lang="scss">
@import '/src/assets/scss/config';
@import '/src/assets/scss/utilities';

.header {
     padding: $section-spacing;
    margin-top: 0%;
    text-align: left;

    .header-box {
        display: flex;
        height: auto;
        flex-direction: column;
        justify-content: start;
    }
    .img-box:hover img{
        transform:  translateX(10%);

    }

    .header-img {
        display: none;
        transition: all 2s ;
    }

    .header-text {
        position: relative;
   
    
    


        line-height: 5vh;
        font-size: 1.8em;
        font-weight: 700;

        span {
            color: $secondary-color;
        }

    }

    .detail {
        font-size: 0.5rem;
        line-height: 2vh;
        margin: 1vh 0 0;
        display: flex;
        flex-basis: 30%;
        justify-content: space-around;
        flex-direction: column;

        &>p {
            color: #f5f5f5;
            font-size: 7px;
        }

        .header-cta-box {
            display: flex;
            justify-content: space-between;
            margin-top: 2vh;

            align-items: center;

            .explore {
                display: flex;
                gap: 5%;
                align-items: center;
                justify-content: end;
                font-size: 1rem;
                width: 40%;
                font-size: 0.7rem;

                i {
                    color: $secondary-color;
                }
            }
        }

        a {
            padding: 1vh 6vh;

        }
    }

    .stats-box {
        height: 7vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin:  2vh 0 0;
        

        .stats {
            width: 100%;
            
            display: grid;
            grid-template-columns: repeat(4, 1fr);
        }

        .stats>div {
            // align-self: center;
            text-align: center;
            border-right: 1px solid $color;
            font-size: 0.6rem;
            

        }
         .stats>div>p:nth-of-type(2){
          font-size: 0.4rem;
          margin: 10% 0 0 0;
    

         }


        .stats>div:last-of-type {
            border-right: none
        }

    }

}

@import 'src/assets/scss/responsive.scss'
</style>
