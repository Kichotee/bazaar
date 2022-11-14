<template>

<div class="home">

    <nav>

        <div class="navlinks">

            <div class="img-box">
                <router-link to=/>
                    <img src="./assets/images/logo.png" alt="">
                </router-link>
            </div>

            <ul>
              <li>
                <router-link to=/>
                   Home
                </router-link>
              </li>

                <li>
                    <Suspense timeout=0>
                    <router-link to="/About">
                        About
                    </router-link>
                    <template #fallback>
                    </template>
                    </Suspense>
                </li>
                <li>
                    <router-link to="/community">
                        community
                    </router-link>
                </li>
                <li>
                    <router-link to="/Market">
                        Market
                    </router-link>
                </li>
                <li>
                    <router-link class="bz-btn" to="/Market">
                        Connect wallet
                    </router-link>
                </li>
            </ul>

            <div @click="toggleMenu" class="menu-icon">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>
    </nav>

    <div v-if="activeMenu && ![`LoginForm`, `Signup`,`dashboard`].includes($route.name)" class="navlinks-mobile">
         <div @click="toggleMenu" class="menu-icon">
            <i class="fa-solid fa-close"></i>
        </div>
       
        <ul>
            
              <li>
                <router-link to=/>
                   Home
                </router-link>
              </li>

                <li>
                    <Suspense timeout=0>
                    <router-link to="/About">
                        About
                    </router-link>
                    <template #fallback>
                        Page Loading
                    </template>
                    </Suspense>
                </li>
                <li>
                    <router-link to="/community">
                        community
                    </router-link>
                </li>
                <li>
                    <router-link to="/Market">
                        Market
                    </router-link>
                </li>
                <li>
                    <router-link  to="/Market">
                        Connect wallet
                    </router-link>
                </li>
            
        </ul>

      

    </div>
</div>

<router-view/>
</template>

<script setup>
import navigation from './components/navbar.vue'
import {
    ref
} from "vue";

   
    
        const activeMenu = ref(false)
        const toggleMenu = () => {
            activeMenu.value = !activeMenu.value
        }
       

</script>

<style lang="scss">
$bg-gradient: linear-gradient(242.86deg, #322649 1.52%, #000000 61.49%, #0D1018 93.82%);
$color:#ffffff;
$secondary-color:#ECEF43;

#app {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  
    color: $color;
    background: $bg-gradient;
    // position: relative;
max-width: 100vw !important;
// overflow: hidden;
   
    
    
}

.home {
    
     padding: 0 5% 0;
    height: 10vh;
    position: sticky;
    background: $bg-gradient;
    // border-bottom: 1px solid $color;
    z-index: 14;
    top: 0%;
    display: flex;
    align-items:center;
    // width: 100%;
    // display: none;

}

nav {
    
   width: 100%;

    .navlinks {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;

    }

    ul {
        
        display: none;

    }

   

    .img-box {
        flex-basis: 30%;
        height: 100%;
        padding: 0;
        margin: 0;display: flex;
        justify-content: start;

        
    }

    a {
        padding: 0;
        margin: 0;
        height: 100%;
        
        width: 80%;transition: all 0.5;
        
       

    }
    a:hover{
        color:darken($color: $color, $amount: 40%);
    }

    img {
      
        width: 100%;
    }

    .menu-icon {
        display: flex;
        height: 100%;
        align-items: center;
    }

    i {
        color: #ECEF43;
        font-size: 1.5rem;

    }

}

.navlinks-mobile {
    height: 100vh;
    width: 75vw;
    background: $secondary-color;
    position: absolute;
    top: 0;
    right: 0;
    ul{
        display: flex;
        flex-direction: column;
        gap: 5%;
        height: 60%;
        // align-items: center;

        color: #322649;
        
        width: 100%;
    }
    li{
        text-align: right !important;
        width: 70%;
        font-weight: 600;

    }
    .menu-icon{
        float: right;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30%;
    }
    i{
        font-size: 1.5rem;
        color: #0D1018;
    }

}
@import 'src/assets/scss/responsive.scss'
</style>
