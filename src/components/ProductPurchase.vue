<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün İşlemleri</h3>
          <hr />
          <div class="form-group">
            <label>Ürün Adı</label>
            <input type="text" v-model="product.Name" class="form-control" placeholder="Ürün adını giriniz.." />
          </div>
          <div class="form-group">
            <label>Adet</label>
            <input type="number" v-model="product.Amount" class="form-control" placeholder="Ürün adetini giriniz.." />
          </div>
          <div class="form-group">
            <label>Fiyat</label>
            <input type="number" v-model="product.Price" class="form-control" placeholder="Ürün fiyatı giriniz.." />
          </div>
          <div class="form-group">
            <label>Açıklama</label>
            <textarea
              cols="30"
              rows="5"
              v-model="product.Description"
              placeholder="Ürüne ait bir açıklama giriniz..."
              class="form-control"
            ></textarea>
          </div>
          <hr />
          <button class="btn btn-primary" :disabled="!validateData" @click="saveProduct">Kaydet</button>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        Name: '',
        Amount: 0,
        Price: 0,
        Description: '',
      },
      isSaveButtonClicked: false,
    };
  },
  methods: {
    saveProduct() {
      this.isSaveButtonClicked = true;
      setTimeout(() => {
        this.$store.dispatch('saveProduct', this.product);
      }, 0);
    },
  },
  computed: {
    validateData() {
      return this.product.Name && this.product.Amount && this.product.Price && this.product.Description;
    },
  },
  created() {
    this.$store.dispatch('fetchDataFromFirebase');
  },
};
</script>

<style></style>
