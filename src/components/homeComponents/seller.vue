<template>
<section class=section>
    <h4>
        Top Sellers this week
    </h4>
    <div class="sellers">

        <li v-for="user in users" :key="user">
            <h5>{{user.id}}</h5>
            <img :src="user.img" alt="">
            <div class="user-details">
                <h4>
                    {{ user.name}}
                </h4>
                <h5>{{user.price}}</h5>
            </div>

        </li>

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
const users = computed(() => {
    return store.state.sellers
})
const nfts = computed(() => {
    return store.state.nfts
})
const getUsers = computed(() => {
    return store.getters.getUsers
})
onMounted(() => {
    store.dispatch("fetchUsers");

})
</script>

<style lang="scss">
@import 'src/assets/scss/config.scss';

.section {
    height: 57vh;
    padding-bottom: 10vh;

    .sellers {
        box-shadow: 0px 1px 4px 0px #00000040;
        border-radius: 20px;
        background: linear-gradient(86.64deg, #0D1018 1.81%, #171221 97.76%);
        height: 100%;
        display: grid;
        grid-template: repeat(5, 1fr)/repeat(2, 1fr);
        padding: 10% 5%;

        li {
            display: flex;
            width: 100%;
            align-self: center;
            padding: 0 0 10%;
            align-items: center;
            justify-content: space-around;
            list-style-type: decimal;

            img {
                width: 35%;
            }

            h4 {
                font-size: 0.8em;
                margin-bottom: 5%;

            }

            h5 {
                font-size: 0.6em;
                color: $secondary-color;
            }
        }

    }

}

@import 'src/assets/scss/responsive.scss'
</style>
