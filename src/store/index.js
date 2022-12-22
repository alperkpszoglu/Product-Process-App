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
      state.purchase += parseFloat(payload.purchase) * parseInt(payload.amount);
      state.sales += parseFloat(payload.sales) * parseInt(payload.amount);
      state.balance = parseFloat(state.sales) - parseFloat(state.purchase);
    },
  },
  actions: {
    saveProduct(_, payload) {
      Vue.http.post('https://product-management-app-25360-default-rtdb.firebaseio.com/products.json', payload).then((res) => {});
      let data = {
        // we use this bc of use one data for sales and purchase
        purchase: payload.Price,
        sales: 0,
        amount: payload.Amount,
      };
      this.dispatch('setTradeResult', data);
    },
    fetchDataFromFirebase({ commit }) {
      Vue.http.get('https://product-management-app-25360-default-rtdb.firebaseio.com/products.json').then((res) => {
        commit('fetchDataFromFirebase', res.data);
      });
    },
    saveChanges(_, payload) {
      Vue.http
        .put('https://product-management-app-25360-default-rtdb.firebaseio.com/products/' + payload.state.Id + '.json', payload.state)
        .then((res) => {
          let data = {
            purchase: 0,
            sales: payload.state.Price,
            amount: payload.subtrackValue,
          };
          this.dispatch('setTradeResult', data);
        });
    },
    setTradeResult({ state, commit }, payload) {
      commit('updateTradeResult', payload);
      Vue.http
        .put('https://product-management-app-25360-default-rtdb.firebaseio.com/trade-result.json', store.getters.tradeResult)
        .then((res) => {});
    },
    getTradeResult({ state }) {
      try {
        Vue.http.get('https://product-management-app-25360-default-rtdb.firebaseio.com/trade-result.json').then((res) => {
          state.purchase = res.body.purchase;
          state.sales = res.body.sales;
          state.balance = res.body.balance;
        });
      } catch (err) {
        Vue.http
          .post('https://product-management-app-25360-default-rtdb.firebaseio.com/trade-result.json', store.getters.tradeResult)
          .then((res) => {});
      }
    },
  },
});
