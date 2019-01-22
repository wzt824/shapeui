<template>
  <div class="shopBox">
    <s-shop-header :shopheader="shopheader" v-show="shop.productArr.length>0" :shop=shop :shopkeys="shopkeys"
                 :singleShopAllCheck="singleShopAllCheck"></s-shop-header>
    <s-shop-product :Imgfn="Imgfn" :productCardBg="productCardBg" :productName="productName" :product="m" :key="idx" :shopkeys="shopkeys" :productkeys="idx" v-for="(m,idx) in shop.productArr"
                  :changeProductCheck="changeProductCheck" :minusProduct="minusProduct"
                  :addProduct="addProduct"></s-shop-product>
  </div>
</template>

<script>
  import SShopHeader from "./SShopHeader";
  import SShopProduct from "./SShopProduct";

  export default {
    name: "SShopMoudle",
    props: ["Imgfn","productCardBg","shopheader","productName","shop", "singleShopAllCheck", "shopkeys", "changeProductCheck", "minusProduct", "addProduct"],
    components: {SShopProduct, SShopHeader},
  }
</script>

<style scoped lang="stylus">
  .shopBox
    width: 3.5rem;
    margin: .1rem auto;

</style>
