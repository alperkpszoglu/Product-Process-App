<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-5 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün Listesi</h3>
          <hr />
          <table class="table table-hover table-striped table-bordered">
            <thead>
              <th>id</th>
              <th>Ürün Adı</th>
              <th>Adet</th>
              <th>Fiyat</th>
              <th>Açıklama</th>
            </thead>
            <tbody>
              <tr v-for="product in getProductList" :key="product.Name">
                <td class="align-middle text-center"><span class="badge badge-info"> E564fghdE563df </span></td>
                <td class="align-middle text-center">{{product.Name}}</td>
                <td class="align-middle text-center">{{product.Amount}}</td>
                <td style="width: 120px;">{{product.Price}}</td>
                <td class="align-middle">{{product.Description}}</td>
              </tr>
            </tbody>
          </table>
          <div class="alert alert-warning" v-if="getProductList.length == 0">
            <strong>Henüz Burada Bir Kayıt Bulamadık</strong>
            <br />
            <small>Kayıt Eklemek için Ürün İşlemleri menüsünden yararlanabilirsiniz </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getProductList(){
      return this.$store.getters.productList;
    }
  }
};
</script>

<style></style>
