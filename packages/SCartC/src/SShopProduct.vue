<template>
  <div class="productBox" :style="productCardInfoStyle">
    <label class="checkBox" @click="changeChecked()"><input type="checkbox" :style="bgfn(product.checkStatus)" :checked="product.checkStatus"/></label>
    <img class="proimg" :src="product.pic" alt="">
    <div class="otherInfo">
      <div class="proName" :style="productNameStyle">{{product.name}}</div>
      <div class="countConBox">
        <span class="priceBox">￥{{product.price}}</span>
        <div class="count"  :style="countInfoBorderColorStyle">
          <span class="minxi" @click="minusfun()" :style="countInfoaddminusStyle">-</span>
          <span class="countnum"  :style="countInfoconenterStyle">{{product.num}}</span>
          <span class="add" @click="addfun()"  :style="countInfoaddminusStyle">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SShopProduct",
    props: ["countInfo","productCardInfo","productName","product", "keys", "delCart"],
    methods: {
      bgfn(k){
        if (k){
          return `background:url("${this.product.checkBoxPic}");background-size:cover;`
        }
      },
      changeChecked() {
        if (this.product.checkStatus) {
          this.product.checkStatus = false
        } else {
          this.product.checkStatus = true
        }
      },
      addfun() {
        this.product.num++;
      },
      minusfun() {
        if (this.product.num <= 1) {
          if (confirm('确定要删除吗?')) {
            this.delCart(this.keys)
            return
          }
          return
        }
        this.product.num--;
      },
      productNamefn(){
        return `color:${this.productName.color};font-size:${this.productName.fontSize}`
      },
      productCardInfofn(){
        return `background:${this.productCardInfo.bgColor}`
      },
      countInfoBorderColorfn(){
        return `border:1px solid ${this.countInfo.borderColor}`
      },
      countInfoconenterfn(){
        return `borderColor:${this.countInfo.borderColor};color:${this.countInfo.countColor}`
      },
      countInfoaddminusfn(){
        return `color:${this.countInfo.addminusColor}`
      }
    },
    computed:{
      productNameStyle(){
        return this.productNamefn()
      },
      productCardInfoStyle(){
        return this.productCardInfofn()
      },
      countInfoBorderColorStyle(){
        return this.countInfoBorderColorfn()
      },
      countInfoconenterStyle(){
        return this.countInfoconenterfn()
      },
      countInfoaddminusStyle(){
        return this.countInfoaddminusfn()
      }
    }
  }
</script>

<style scoped lang="stylus">
  .productBox
    margin: 0 auto;
    height: 1.3rem;
    width: 3.75rem;
    background: #fafafa;
    display: flex;
    align-items: center;


  .proimg
    width: .95rem;
    height: .95rem;


  .otherInfo
    height: 1.3rem;
    flex: 1;
    padding: 0 .1rem;


  .proName
    margin: .15rem 0;
    font-size: .12rem;
    line-height: .19rem;
    height: .38rem;
    overflow: hidden;
    color: #0f181d;


  .countConBox
    display: flex;
    justify-content: space-between;


  .countConBox .priceBox
    color: #fc0027;


  .count
    width: .8rem;
    height: .2rem;
    /*border: 1px solid #e4e4e4;*/
    display: flex;


  .count span
    display: flex;
    justify-content: center;
    align-items: center;
    color: #858585;


  .count .minxi, .count .add
    width: .225rem;
    color: #cccccc;


  .countnum
    width: .35rem;
    border-left: 1px solid #e4e4e4;
    border-right: 1px solid #e4e4e4;



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
    box-sizing: border-box;
    -webkit-appearance: none;
    outline: none;


</style>
