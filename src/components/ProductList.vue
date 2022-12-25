<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-5 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün Listesi</h3>
          <hr />
          <div class="row ">
            <div class="product-card col-3" v-for="product in getProductList" :key="product.Id">
              <div class="product-badge">Hot</div>
              <div class="product-tumb">
                <img :src="product.Image" class="img-fluid " />
              </div>
              <div class="product-details">
                <span class="product-catagory">{{ product.Id }}</span>
                <h4>
                 {{ product.Name }}
                </h4>
                <p>{{ product.Description }}</p>
                <p class="font-weight-bold" :style="product.Amount < 10 && {color: 'red'}">Ürün Adeti: {{product.Amount}}</p>
                <div class="product-bottom-details">
                  <div class="product-price"><small>$96.00</small>{{ product.Price | toCurrency }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="alert alert-warning" v-if="getProductList.length == 0">
            <strong>Henüz Burada Bir Kayıt Bulamadık</strong>
            <br />
            <small
              >Kayıt Eklemek için <router-link to="/product-purchase">Ürün İşlemleri</router-link> menüsünden yararlanabilirsiniz
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getProductList() {
      return this.$store.getters.productList;
    },
  },
  created() {
    this.$store.dispatch('fetchDataFromFirebase');
  },
};
</script>

<style scoped>
@import url('/src/assets/product.css');
.card {
  margin-bottom: 7rem !important;
}
</style>