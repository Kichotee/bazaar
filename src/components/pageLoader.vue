<template>
<div class="pageLoader" v-if="!isLoaded">

    <div class="cube cube-1"></div>

    <div class="cube cube-2"></div>

    <div class="cube cube-3"></div>

</div>
</template>

<script>
export default {
    data(){
        return{
            isLoaded:false
        }

    },
    mounted(){
        document.onreadystatechange=()=>{
            if(document.readyState=='complete'){
                this.isLoaded=true
            }
        }
    }
}
</script>

<style lang="scss">
@import 'src/assets/scss/config.scss';

.pageLoader {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    background: $bg-gradient;
}

.cube {
    width: 10%;
    height: 10vw;

    background: $secondary-color;

    animation: loading 2s infinite;
}

.cube-1 {

    
    animation:  5s infinite loading ;

}

.cube-2 {

    animation-delay: 0.5s;
    animation:  10s infinite  loading;

}

.cube-3 {

    animation-delay: 0s;
    animation:  7s infinite  loading;

}

@keyframes loading {
    0% {
        transform: scale(1);
        rotate: 360deg;
        
        
        
    }
    25%{
        translate: 0 80%;
    }

    50% {
        transform: scale(0.5);
        background:darken($secondary-color, $amount: 30%);

    }
    75%{
        translate: 0%;
         

    }

    100% {
        transform: scale(1);
    }
}
</style>
