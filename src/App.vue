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
        <ul>
            <li v-for="item in navElements">
                <p></p>
            </li>
            <div class="register-box">
                <router-link to="/About">
                    Login
                </router-link>
                <router-link to="/Signup">
                    <button>Register</button>
                </router-link>

            </div>
        </ul>

        <div @click="toggleMenu" class="menu-icon">
            <i class="fa-solid fa-bars"></i>
        </div>

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
    text-align: center;
    color: $color;
    background: $bg-gradient;
    position: relative;

   
    
    
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
    width: 100%;
    

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
        
        width: 80%;
        
       

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
        font-size: 1.2rem;

    }

}

.navlinks-mobile {
    height: 100vh;
    width: 75vw;
    background: $bg-gradient;
    position: absolute;
    top: 0;
    right: 0;

}
@import 'src/assets/scss/responsive.scss'
</style>
