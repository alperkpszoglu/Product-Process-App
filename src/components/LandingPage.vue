<template>
  <div>
    <navbar-component />
    <router-view></router-view>
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
    this.$store.dispatch('fetchDataFromFirebase');

    // it updates trade-result on footer
    this.$store.dispatch('getTradeResult');
    console.log(this.$store.state.purchase);
  },
};
</script>

<style></style>
