<template>
  <div>
    <landing-page></landing-page>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage';
export default {
  components: {
    LandingPage,
  },
   created() {
    // it updates trade-result on footer
     this.$store.dispatch('getTradeResult');
     console.log(this.$store.state.purchase)
  },
};
</script>

<style></style>
