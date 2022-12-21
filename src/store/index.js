import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [],
    sales: 0.0,
    purchase: 0.0,
    balance: 0.0,
  },
  getters: {
    productList(state) {
      return state.products;
    },
    tradeResult(state) {
      return {
        sales: state.sales,
        purchase: state.purchase,
        balance: state.balance,
      };
    },
  },
  mutations: {
    fetchDataFromFirebase(state, data) {
      state.products = [];
      Object.keys(data).forEach((product) => {
        state.products.push({ Id: product, ...data[product] });
      });
    },
    updateTradeResult(state, payload) {
      state.purchase += parseFloat(payload.Price) * parseInt(payload.Amount);
    },
  },
  actions: {
    saveProduct(_, payload) {
      Vue.http.post('https://product-management-app-25360-default-rtdb.firebaseio.com/products.json', payload).then((res) => {});
      this.dispatch('setTradeResult', payload);
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
    setTradeResult({ state, commit }, payload) {
      commit('updateTradeResult', payload);
      Vue.http.put('https://product-management-app-25360-default-rtdb.firebaseio.com/trade-result.json', state.purchase).then((res) => {});
    },
    getTradeResult({state}) {
      Vue.http.get('https://product-management-app-25360-default-rtdb.firebaseio.com/trade-result.json').then((res) => {
        state.purchase = res.body;
      });
    },
  },
});
