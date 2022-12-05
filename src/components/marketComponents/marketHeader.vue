<template>
<header class="marketHeader">
    <div class="marketHeader-box">
        <div class="marketHeaderText">
            <h2>Market</h2>
            <p>Browse through an extensive collection of NFTs</p>
        </div>
        <div class="search-box">
            <input type="search" name="" placeholder="search Nfts" id="">
        </div>
        <div class="dropdown-box">
            <!-- <i @click="dropdownActive=!dropdownActive" class="fa-solid fa-angle-down"></i> -->

            <div v-if="dropdownActive" class="dropdown-list">
                <p>Arts</p>
                <p>Games</p>
                <p>Celebrity</p>
            </div>
        </div>
        <div class="dropdown-list" id='dropdown-desktop'>
            <p>Arts</p>
            <p>Games</p>
            <p>Celebrity</p>
        </div>
        <div  @click="sortActive=!sortActive"  class="sort-box">
            <i @click="sortActive=!sortActive" class="fa-solid fa-angle-down"></i>
            <TransitionGroup @before-enter='beforeEnter' @enter='enter' v-if="sortActive" tag="ul" appear class="sort-list">
                <p v-for="item in sortElements" key='item
                :data-index="index"'>
                    {{item.element}}
                </p>
            </transitionGroup>

        </div>

    </div>
</header>
</template>

<script>
import gsap from "gsap";
import {
    onMounted
} from 'vue';
export default {
    data() {
        return {
            dropdownActive: false,
            sortActive: false,
            sortElements: [{
                element: 'New'
            }, {
                element: 'Popular'
            }]
        }
    },
    methods: {
        toggleDropdown() {
            this.dropdownActive = !this.dropdownActive
        },
    },
    setup() {

        const beforeEnter = (el) => {
            el.style.opacity = 0
            el.style.transform = 'translateY(-10%)'

        }

        const onEnter = (el, done) => {
            gsap.to(el, {
                duration: 2,
                opacity: 0,
                y: 0,
                delay: el.dataset.index * 0.15,
                onComplete: done

            })

            return {
                onBeforeEnter,
                onEnter
            }
        }

    }
}
</script>

<style lang="scss">
@import 'src/assets/scss/config.scss';

.marketHeader {

    padding: 2.5vh 5% 0vh;
    overflow: hidden;
    color: #fff;

    &-box {
        display: grid;
        grid-template-row: repeat(3, 1fr);
        grid-template-columns: repeat(4, 1fr);
        row-gap: 2.5vh;

        .marketHeaderText {
            grid-column: 1/-1;
            align-self: center;
            text-align: center;

            h2 {}

            p {
                font-size: $text-size-medium*0.75;
            }

        }

        .search-box {

            grid-column: 3/ span 5;
            grid-row: 2;

            input {
                border: $secondary-color 1px solid;
                border-radius: 10px;
                max-width: 100%;
                background: transparent;
                outline: none;
                padding: 0 5%;
                color: #fff;
                caret-color: white;
            }

        }

        .dropdown-box {
            border: $secondary-color 1px solid;
            border-radius: 10px;
            background: transparent;

            grid-column: 1/ span 2;
            grid-row: 2;
            width: 80%;

            padding: 0 5%;
            color: #fff;

            i {
                font-size: $text-size-medium;
                float: right;
                color: #8D8C8C;
            }
        }

        .sort-box {
            border: $secondary-color 1px solid;
            border-radius: 10px;
            background: transparent;

            grid-column: 1/ span 2;
            grid-row: 3;
            width: 60%;
            padding: 0 5%;

            i {
                font-size: $text-size-medium;
                float: right;
                color: #8D8C8C;
            }

        }
    }

    .dropdown-list {

        display: flex;
        flex-direction: column;
        padding: 5% 0;
        align-items: left;

    }

    .dropdown-list:nth-of-type(2) {
        display: none;
    }

    .sort-list {
        display: flex;
        flex-direction: column;
        padding: 5% 0;
        align-items: center;
    }

}

@import 'src/assets/scss/responsive.scss';
</style>
