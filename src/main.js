import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import { router } from './router';
import { store } from './store/index';

Vue.use(VueResource);


// example of global filters
Vue.filter('toCurrency', (value) => Number(value).toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' }));

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
