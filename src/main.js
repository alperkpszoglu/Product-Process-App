import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { routes } from './routes';
import { store } from './store/index';

Vue.use(VueRouter);
Vue.use(VueResource);

// Vue.http.options.root = 'https://product-management-app-25360-default-rtdb.firebaseio.com/';

const router = new VueRouter({
  routes,
});

// example of global filters
Vue.filter('toCurrency', (value) => Number(value).toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' }));

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
