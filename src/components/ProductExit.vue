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
          <div class="row" v-if="Object.keys(state).length !== 0">
            <div class="product-card col-8">
              <div class="product-tumb">
                <img :src="state.Image" class="img-fluid" />
              </div>
              <div class="product-details">
                <span class="product-catagory">{{ state.Id }}</span>
                <h4>
                  {{ state.Name }}
                </h4>
                <p>{{ state.Description }}</p>
                <p class="font-weight-bold">Ürün Adeti: {{state.Amount}}</p>
                <div class="product-bottom-details">
                  <div class="product-price"><small>$96.00</small>{{ state.Price | toCurrency }}</div>
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
    <div class="loading" v-if="isSaveButtonClicked">
      <div class="lds-ripple">
        <div></div>
        <div></div>
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
      isSaveButtonClicked: false,
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
      this.isSaveButtonClicked = true;
      this.state.Amount -= this.subtrackValue;
      setTimeout(() => {
        this.$store.dispatch('saveChanges', { state: this.state, subtrackValue: this.subtrackValue });
      }, 500);
    },
  },
  created(){
     this.$store.dispatch('fetchDataFromFirebase');
  }
};
</script>

<style scoped>
@import url('/src/assets/product.css');
.card {
  margin-bottom: 7rem !important;
}
</style>
