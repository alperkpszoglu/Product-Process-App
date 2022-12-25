<template>
  <nav class="navbar fixed-bottom  navbar-light" style="background-color: #e3f2fd; margin-top: 5rem">
    <span class="navbar-text mr-auto"> <strong>ProdSimple.com</strong> | alperkapusizoglu </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
      <strong>Alış Tutarı : </strong>
      <span class="badge badge-danger">{{ tradeResult.purchase | toCurrency }}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
      <strong>Satış Tutarı : </strong>
      <span class="badge badge-success">{{ tradeResult.sales | toCurrency }}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0">
      <strong>Bakiye : </strong>
      <span class="badge badge-primary">{{ tradeResult.balance | toCurrency }}</span>
    </span>
  </nav>
</template>

<script>
export default {
  computed: {
    tradeResult() {
      return this.$store.getters.tradeResult;
    },
  },
};
</script>

<style></style>
