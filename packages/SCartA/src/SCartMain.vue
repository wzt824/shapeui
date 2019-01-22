<template>
    <div class="main">
      <s-cart-shop :shopHeaderRightText="shopHeaderRightText" :productNameColor="productNameColor" :shopHeaderColor="shopHeaderColor" :cardBoxShadow="cardBoxShadow" :cardColor="cardColor" :Imgfn="Imgfn" :proMinus="proMinus" :proAdd="proAdd" :changeshopCheckfn="changeshopCheckfn" :changeProCheckfn="changeProCheckfn" :shopInfo="m" v-for="(m,idx) in data" :key="idx" :skey="idx"></s-cart-shop>
    </div>
</template>

<script>
    import SCartShop from "./SCartShop";
    export default {
        name: "SCartMain",
      props:["shopHeaderRightText","productNameColor","shopHeaderColor","cardBoxShadow","data","changeProCheckfn","changeshopCheckfn","proMinus","proAdd","Imgfn","cardColor"],
      components: {SCartShop},
    }
</script>

<style scoped lang="stylus">
.main
  display flex
  flex 1
  flex-direction column
  overflow-y scroll

</style>
