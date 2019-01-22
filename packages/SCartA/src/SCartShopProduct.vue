<template>
  <div class="product"  :style="imgBgfn()" v-if="productInfo">
    <label class="checkBox" >
      <input type="checkbox" :style="bgfn(productInfo.checkStatus)"  @change="changeProCheckfn(skey,pkey)" :checked="productInfo.checkStatus"/>
    </label>
    <img class="proPic" :src="productInfo.pic" alt="" @click="Imgfn(productInfo.productId)">
    <div class="otherInfo">
      <div class="proName" :style="namestyle">{{productInfo.title}}</div>
      <div class="numInfo">
        <span class="price">￥{{productInfo.price}}</span>
        <div class="count"><span class="minus" @click="proMinus(skey,pkey,productInfo.productId)">-</span><span class="num">{{productInfo.num}}</span><span class="add" @click="proAdd(skey,pkey,productInfo.productId)">+</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SCartShopProduct",
    props:["Imgfn","productNameColor","cardBoxShadow","cardColor","productInfo","skey","pkey","changeProCheckfn","proMinus","proAdd"],

    methods:{
      bgfn(k){
        if (k){
          return `background:url("${this.productInfo.checkBoxPic}");background-size: cover;`
        } else {
          return ''
        }
      },
      imgBgfn(){
        return `backgroundColor:${this.cardColor};box-shadow:${this.cardBoxShadow};`
      },
      nameColor(){
        return `color:${this.productNameColor}`
      }
    },
    computed:{
      namestyle(){
        return this.nameColor()
      }
    }
  }
</script>

<style scoped lang="stylus">
  .product
    margin .1rem 0
    width 100%
    height 1.35rem
    display flex
    align-items center
  .proPic
    width .94rem
    height 1.05rem
  .otherInfo
    display flex
    flex-direction column
    justify-content space-around
    flex 1
    height 90%
    padding 0 .1rem 0 0
  .proName
    font-size .14rem
    /*height .36rem*/
    /*line-height .18rem*/
    overflow hidden
    -webkit-line-clamp 2
    display -webkit-box
    -webkit-box-orient vertical
    text-overflow ellipsis
  .numInfo
    height .32rem
    display flex
    justify-content space-between
    align-items center
  .numInfo .price
    font-size .16rem
    color red
  .numInfo .count
    width .78rem
    height .23rem
    display flex
  .numInfo .count .minus,.numInfo .count .add
    text-align center
    font-size .16rem
    width .18rem
  .numInfo .count .num
    background #f6f6f6
    text-align center
    font-size .16rem
    flex 1
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
