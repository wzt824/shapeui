<template>
  <div class="shopBox">
    <s-shop-header :shop=shop></s-shop-header>
    <s-shop-product :product="m" :key="idx" :keys="idx" v-for="(m,idx) in shop.productArr"></s-shop-product>
  </div>
</template>

<script>
  import SShopHeader from "./SShopHeader";
  import SShopProduct from "./SShopProduct";

  export default {
    name: "SShopMoudle",
    props: ["shop"],
    components: {SShopProduct, SShopHeader}
  }
</script>

<style scoped lang="stylus">
  .shopBox
    width: 3.5rem;
    margin: .1rem auto;

</style>
