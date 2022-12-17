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
    saveProduct(state, val) {
      Vue.http.post('https://product-management-app-25360-default-rtdb.firebaseio.com/products.json', val).then((res) => {
        console.log(res);
      });
      state.products.push(val);
    },
    fetchDataFromFirebase(state, data) {
      Object.keys(data).forEach((product) => {
        state.products.push({Id: product, ...data[product] });
      });
    },
  },
  actions: {
    saveProduct({ commit }, payload) {
      commit('saveProduct', payload);
    },
    fetchDataFromFirebase({ commit }) {
      Vue.http.get('https://product-management-app-25360-default-rtdb.firebaseio.com/products.json').then((res) => {
        commit('fetchDataFromFirebase', res.data);
      });
    },
  },
});
