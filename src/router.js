import Vue from 'vue';
import VueRouter from 'vue-router';
import ProductList from './components/ProductList.vue';
import ProductExit from './components/ProductExit';
import ProductPurchase from './components/ProductPurchase';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: ProductList, name: 'productList' },
  { path: '/product-purchase', component: ProductPurchase, name: 'productPurchase' },
  { path: '/product-exit', component: ProductExit, name: 'productExit' },
  { path: '*', redirect: '/' },
];
export const router = new VueRouter({
  routes,
});
