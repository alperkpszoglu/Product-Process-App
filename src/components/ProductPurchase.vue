<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün Ekleme İşlemleri</h3>
          <hr />
          <div class="input-group custom-file-button mb-3 mt-4">
            <label class="input-group-text" for="inputGroupFile">Resim Seçiniz</label>
            <input type="file" @input="updateImage" class="form-control" id="inputGroupFile" />
          </div>
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
        Image: null,
        Name: null,
        Amount: 0,
        Price: 0,
        Description: null,
      },
      isSaveButtonClicked: false,
    };
  },
  methods: {
    saveProduct() {
      this.isSaveButtonClicked = true;
      setTimeout(() => {
        this.$store.dispatch('saveProduct', this.product);
      }, 500);
    },
    updateImage(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.product.Image = reader.result;
      };
      reader.readAsDataURL(file);
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

<style scoped>
.custom-file-button input[type='file'] {
  margin-left: -2px !important;
}
.custom-file-button input[type='file']::-webkit-file-upload-button {
  display: none;
}
.custom-file-button input[type='file']::file-selector-button {
  display: none;
}
.custom-file-button:hover label {
  background-color: #dde0e3;
  cursor: pointer;
}
</style>
