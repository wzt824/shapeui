<template>
  <div class="shopHeader" :style="shopheaderstyle">
    <label class="checkBox" @click="singleShopAllCheck(shopkeys,shop.checkStatus)">
      <input type="checkbox"  :style="bgfn(shop.checkStatus)" :checked="shop.checkStatus"/></label>
    <span class="shopName">{{shop.shopname}}</span>
  </div>
</template>

<script>
  export default {
    name: "SShopHeader",
    props: ["shopheader","shop", "singleShopAllCheck", "shopkeys"],
    methods:{
      bgfn(k){
        if(k){
          return `background:url("${this.shop.checkBoxPic}");background-size:cover;`
        }else {
          return ''
        }
      },
      shopheaderfn(){
        return `background:${this.shopheader.background};color:${this.shopheader.color};font-size:${this.shopheader.fontSize}`
      }
    },
    computed:{
      shopheaderstyle(){
        return this.shopheaderfn()
      }
    }
  }
</script>

<style scoped lang="stylus">
  .shopHeader
    display: flex;
    align-items: center;
    width: 3.5rem;
    height: .5rem;

  .checkBox
    margin: 0 .12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: .25rem;
    height: .25rem;
    border: 1px solid #cccccc;
    border-radius: 50%;



  input[type='checkbox']
    width: .25rem;
    height: .25rem;
    /*background-color: #fff;*/
    -webkit-appearance: none;
    box-sizing: border-box;
    outline: none;

</style>
