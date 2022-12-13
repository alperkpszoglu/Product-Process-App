<template>
  <div>
    <navbar-component />
    <button class="btn btn-primary btn-cs" @click="activeProd = 'product-list'">list</button>
    <button class="btn btn-primary btn-cs" @click="activeProd = 'product-exit'">cikis</button>
    <button class="btn btn-primary btn-cs" @click="activeProd = 'product-purchase'">purchase</button>
    <component :is="activeProd"></component>
  </div>
</template>

<script>
import NavbarComponent from '../shared/Navbar';
import ProductList from './ProductList';
import ProductPurchase from './ProductPurchase';
import ProductExit from './ProductExit';
export default {
  data() {
    return {
      activeProd: 'product-list',
    };
  },
  components: {
    NavbarComponent,
    ProductList,
    ProductPurchase,
    ProductExit,
  },
};
</script>

<style></style>
