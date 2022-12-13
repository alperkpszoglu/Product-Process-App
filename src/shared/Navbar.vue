<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">ProdSimple</a>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Ürün Listesi</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/product-purchase" class="nav-link">Ürün İşlemleri</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/product-exit" class="nav-link"> Ürün Çıkış </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
