import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [],
  },
  getters: {
    productList(state) {
      return state.products;
    },
  },
  mutations: {
    fetchDataFromFirebase(state, data) {
      state.products = [];
      Object.keys(data).forEach((product) => {
        state.products.push({ Id: product, ...data[product] });
      });
    },
  },
  actions: {
    saveProduct(_, payload) {
      Vue.http.post('https://product-management-app-25360-default-rtdb.firebaseio.com/products.json', payload).then((res) => {});
    },
    fetchDataFromFirebase({ commit }) {
      Vue.http.get('https://product-management-app-25360-default-rtdb.firebaseio.com/products.json').then((res) => {
        commit('fetchDataFromFirebase', res.data);
      });
    },
    saveChanges(_, payload) {
      Vue.http
        .put('https://product-management-app-25360-default-rtdb.firebaseio.com/products/' + payload.Id + '.json', payload)
        .then((res) => {
          console.log(res);
        });
    },
  },
});
