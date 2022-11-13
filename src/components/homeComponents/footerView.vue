<template>
 <hr>
<footer class="footer">

   
    <div class="footer-box">
        <img src="../../assets/images/logo.png" alt="">
      <p>
        <router-link to='/'>Home</router-link>
      </p>
      <p>
        <router-link to='/'>Community</router-link>
      </p>
      <p>
        <router-link to='/'>Privacy Policy</router-link>
      </p>
      <p>
        Contact us
      </p>
      <p>
        <router-link to='/'>About</router-link>
      </p>
      <p>
        <router-link to='/'>Market</router-link>
      </p>
      <p>
        <router-link to='/'>Terms and conditions</router-link>
      </p>
        <div class="sm-links">
            <a href=""><i class="fa-brands fa-facebook"></i></a>
            <a href=""><i class="fa-brands fa-twitter"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
        </div>
    </div>
</footer>
<router-view/>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import 'src/assets/scss/config.scss';

.footer {
    height: 20vh;
    padding: $section-spacing;

}

hr {
    background-color: $secondary-color;
    height: 1px;
    border: none
}

.footer-box {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3,1fr);
    place-items: center;
    height: 100%;
    padding: 2.5% 2.5% 5%;
    row-gap: 20%;
    column-gap: 5%;
    text-align: left;
    white-space: nowrap;
    font-size: $text-size-medium;
    p:nth-of-type(1){
      display: none;
    }
     p:nth-of-type(2){
      display: none;
    }
     p:nth-of-type(5){
      display: none;
    }
     p:nth-of-type(6){
      display: none;
    }
    p:nth-of-type(4){
      grid-row: 2;
      grid-column: 1;
    }
    .sm-links{
      grid-row: 3;
      grid-column: 1;
      align-self: start;
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    p:nth-of-type(3){
      grid-row: 2;
      grid-column: 4;
      width: 100%;
    }
    p:nth-of-type(7){
      grid-row: 3;
      grid-column: 4;
    }

}

img {
    grid-column: 1/ -1;
    // align-self: start;
    width: 30%;
}

@import 'src/assets/scss/responsive.scss';
</style>
