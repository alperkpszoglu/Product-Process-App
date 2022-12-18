import ProductList from './components/ProductList.vue';
import ProductExit from './components/ProductExit';
import ProductPurchase from './components/ProductPurchase';

export const routes = [
  { path: '/', component: ProductList, name: 'productList' },
  { path: '/product-purchase', component: ProductPurchase, name: 'productPurchase' },
  { path: '/product-exit', component: ProductExit, name: 'productExit' },
];
