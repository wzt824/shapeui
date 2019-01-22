<template>
    <div class="shop" v-if="shopInfo">
      <s-cart-shop-header :shopHeaderRightText="shopHeaderRightText" :shopHeaderColor="shopHeaderColor" v-show="shopInfo.productArr.length>0" :skey="skey" :shopInfo="shopInfo" :changeshopCheckfn="changeshopCheckfn"></s-cart-shop-header>
      <s-cart-shop-product :productNameColor="productNameColor" :cardBoxShadow="cardBoxShadow" :cardColor="cardColor" :Imgfn="Imgfn"  :proMinus="proMinus" :proAdd="proAdd" :changeProCheckfn="changeProCheckfn" :productInfo="m" v-for="(m,idx) in shopInfo.productArr" :key="idx" :skey="skey" :pkey="idx"></s-cart-shop-product>
    </div>
</template>

<script>
    import SCartShopHeader from "./SCartShopHeader";
    import SCartShopProduct from "./SCartShopProduct";
    export default {
        name: "SCartShop",
      props:["shopHeaderRightText","productNameColor","shopHeaderColor","cardBoxShadow","cardColor","shopInfo","skey","changeProCheckfn","changeshopCheckfn","proMinus","proAdd","Imgfn"],
      components: {SCartShopProduct, SCartShopHeader},
    }
</script>

<style scoped lang="stylus">
.shop
  width 3.5rem
  margin 0 auto
</style>
