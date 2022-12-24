<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün Çıkışı</h3>
          <hr />
          <div class="form-group">
            <label>Ürün Adı</label>
            <select class="form-control" v-model="state">
              <option v-for="product in getProductList" :key="product.Id" :value="product">{{ product.Name }}</option>
            </select>
          </div>
          <div class="card mb-2 border border-danger" v-if="Object.keys(state).length !== 0">
            <div class="card-body">
              <div class="row">
                <div class="col-12 text-center">
                  <div class="mb-3">
                    <span class="badge badge-info">Stok : {{ state.Amount }}</span>
                    <span class="badge badge-primary">Fiyat : {{ state.Price | toCurrency }}</span>
                  </div>
                  <p class="border border-warning p-2 text-secondary">
                    {{ state.Description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label>Adet</label>
            <input type="text" class="form-control" v-model="subtrackValue" placeholder="Ürün adetini giriniz.." />
          </div>
          <hr />
          <button class="btn btn-primary" :disabled="validateData" @click="saveChanges">Kaydet</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: {},
      subtrackValue: 0,
    };
  },
  computed: {
    getProductList() {
      return this.$store.getters.productList;
    },
    validateData() {
      return this.subtrackValue && Object.keys(this.state).length === 0;
    },
  },
  methods: {
    saveChanges() {
      this.state.Amount -= this.subtrackValue;
      this.$store.dispatch('saveChanges', { state: this.state, subtrackValue: this.subtrackValue });
    },
  },
};
</script>

<style></style>
