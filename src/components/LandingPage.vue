<template>
  <div>
    <navbar-component />
    <transition name="fade" mode="out-in">
    <router-view></router-view>
    </transition>
    <footer-component />
  </div>
</template>

<script>
import NavbarComponent from '../shared/Navbar';
import ProductList from './ProductList';
import ProductPurchase from './ProductPurchase';
import ProductExit from './ProductExit';
import FooterComponent from '../shared/Footer';
export default {
  components: {
    NavbarComponent,
    ProductList,
    ProductPurchase,
    ProductExit,
    FooterComponent,
  },
  created() {

    // it updates trade-result on footer
    this.$store.dispatch('getTradeResult');
  },
};
</script>

<style>
body{
background-color: #93a1be5c;
}

.fade-enter{
  opacity: 0;
}
.fade-enter:active{
  transition: opacity .3s ease-out;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition: opacity .3s ease-out ;
  opacity: 0;
}
</style>
