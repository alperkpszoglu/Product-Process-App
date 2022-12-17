import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [{ Name: 'Iphone', Amount: 10, Price: 10000, Description: 'bu bir deneme yazisidir.' }],
  },
  getters: {
    productList(state) {
      return state.products;
    },
  },
  mutations: {
    getProductList(state, val) {
      console.log(val);
      state.products.push(val);
    },
  },
  actions: {
    getProductList({ commit }, val) {
      commit('getProductList', val);
    },
  },
});
