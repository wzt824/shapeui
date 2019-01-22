<template>
  <div class="shopHeader" :style="style">
    <label class="checkBox"><input type="checkbox"  :style="bgfn(shopInfo.checkStatus)" @change="changeshopCheckfn(skey,shopInfo.checkStatus)" :checked="shopInfo.checkStatus"/></label>
    <span class="shopName"><i class="iconfont icon-dianpu"></i>{{shopInfo.shopname}}</span>
    <span class="goshopping">{{this.shopHeaderRightText}} <i class="iconfont icon-arrow_right"></i></span>
  </div>
</template>

<script>
  export default {
    name: "SCartShopHeader",
    props:["shopHeaderRightText","shopHeaderColor","shopInfo","skey","changeshopCheckfn"],
    methods:{
      bgfn(k){
        if (k){
          return `background:url("${this.shopInfo.checkBoxPic}");background-size: cover;`
        } else {
          return ''
        }
      },
      propsfn(){
        return `background:${this.shopHeaderColor}`
      }
    },
    computed:{
      style(){
        return this.propsfn()
      }
    }
  }
</script>

<style scoped lang="stylus">
  .shopHeader
    width 100%
    height .45rem
    display flex
    justify-content space-between
    align-items center
  .shopName
    color #101010
    font-size .15rem
    font-weight 900
    flex 1
  .goshopping
    font-size .14rem
    color red
    font-weight 900
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
