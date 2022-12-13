<template>
  <div>
    <navbar-component />
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarComponent from '../shared/Navbar';
import ProductList from './ProductList';
import ProductPurchase from './ProductPurchase';
import ProductExit from './ProductExit';
export default {
  components: {
    NavbarComponent,
    ProductList,
    ProductPurchase,
    ProductExit,
  },
};
</script>

<style></style>
