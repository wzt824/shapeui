<template>
  <div class="boxWrap" v-if="shopinfo">
    <s-cart-header :changeshowValue="_changeshowValue" :showValue="showValue"></s-cart-header>
    <div class="main">
      <s-shop-moudle :Imgfn="Imgfn" :productCardBg="productCardBg" :shopheader="shopheader" :productName="productName" :key="idx" :shopkeys="idx" v-for="(m,idx) in shopinfo" :shop="m"
                   :singleShopAllCheck="_singleShopAllCheck" :changeProductCheck="_changeProductCheck"
                   :addProduct="_addProduct" :minusProduct="_minusProduct"></s-shop-moudle>
      <s-cart-tip v-show="productnum==0"></s-cart-tip>
    </div>
    <s-totle-count v-show="!showValue && productnum" :total="total" :allTotleCheck="allTotleCheck" :shopinfo="shopinfo"
                 :allShopCheckfun="_allShopCheckfun"></s-totle-count>
    <s-del-select v-show="showValue && productnum" :total="total" :shopinfo="shopinfo" :allTotleCheck="allTotleCheck"
                :allShopCheckfun="_allShopCheckfun"></s-del-select>
  </div>
</template>

<script>
  import SCartHeader from "./SCartHeader";
  import SShopMoudle from "./SShopMoudle";
  import STotleCount from "./STotleCount";
  import SDelSelect from "./SDelSelect";
  import SCartTip from "./SCartTip";

  export default {
    name: "SCartB",
    props:{
      shopinfo:{//数据
        dafault:{}
      },
      productName:{//商品名称
        type:Object,
          default(){
            return{
              color:"pink",
              fontSize:".12rem"
            }
          }
        },
      shopheader:{//店铺header信息
        type:Object,
        default(){
          return{
            color:"#333",
            fontSize: ".15rem",
            background:"#fff"
          }
        }
      },
      productCardBg:{
        type:String,
        default:"#fff"
      },
      Imgfn:{
        dafault:null
      }
      },
    components: {SCartTip, SDelSelect, STotleCount, SShopMoudle, SCartHeader},
    data() {
      return {
        "total": "0",
        "showValue": false,
        "productnum": 0,
        "allTotleCheck": true,

        info: {
          productlist: []
        }
      }
    },
    methods: {
      /**
       * 点击管理状态(显示结算/删除商品)
       * @private
       */
      _changeshowValue() {
        // if (this.productnum) {
        this.showValue = !this.showValue
        // }
      },
      /**
       *计算商品数量
       */
      _countProductNum() {
        let num = 0
        this.shopinfo.forEach((v1, i1) => {
          v1.productArr.forEach((v2, i2) => [
            num++
          ])
        })
        this.productnum = num
      },
      /**
       *对应商品的加减
       */
      _addProduct(k, i,pid) {
        this.shopinfo[k].productArr[i].num++;
      },
      /**
       *对应商品的加减
       */
      _minusProduct(k, i,pid) {
        if (this.shopinfo[k].productArr[i].num <= 1) {
          return
        }
        this.shopinfo[k].productArr[i].num--;
      },
      /**
       *监听店铺状态改变全选按钮的状态
       */
      _allCheckWatch() {
        let truenum = 0;
        this.shopinfo.forEach((v, i) => {
          if (this.shopinfo[i].checkStatus) {
            truenum++;
          }
        })
        if (truenum == this.shopinfo.length) {
          this.allTotleCheck = true
        } else {
          this.allTotleCheck = false
        }
      },
      /**
       *点击全选改变店铺状态
       */
      _allShopCheckfun() {
        this.allTotleCheck = !this.allTotleCheck
        this.shopinfo.forEach((v, i) => {
          this.shopinfo[i].productArr.forEach((v2, i2) => {
            this.shopinfo[i].productArr[i2].checkStatus = this.allTotleCheck
          })
        })
      },
      /**
       *监听商品改变店铺的状态
       */
      _singleShopAllCheckWatch() {
        this.shopinfo.forEach((v, i) => {
          let truenum = 0;
          this.shopinfo[i].productArr.forEach((v2, i2) => {
            if (this.shopinfo[i].productArr[i2].checkStatus) {
              truenum++;
            }
          })
          if (truenum == this.shopinfo[i].productArr.length) {
            this.shopinfo[i].checkStatus = true
          } else {
            this.shopinfo[i].checkStatus = false
          }
        })
      },
      /**
       *点击改变单一商品的状态
       */
      _changeProductCheck(kk, jj) {
        this.shopinfo[kk].productArr[jj].checkStatus = !this.shopinfo[kk].productArr[jj].checkStatus
      },
      /**
       *点击改变单一店铺全选
       */
      _singleShopAllCheck(kk, s) {
        let sta = true;
        if (s) {
          sta = false
        } else {
          sta = true
        }
        // this.shopinfo.forEach((v,i)=>{
        //   v.checkStatus=!sta
        // })
        this.shopinfo[kk].productArr.forEach((v, i) => {
          this.shopinfo[kk].productArr[i].checkStatus = sta
        })
      },
      /**
       *计算总价
       */
      _totleCountfun() {
        let count = 0;
        this.shopinfo.forEach((v, i) => {
          this.shopinfo[i].productArr.forEach((v2, j) => {
            if (this.shopinfo[i].productArr[j].checkStatus) {
              count += this.shopinfo[i].productArr[j].price * this.shopinfo[i].productArr[j].num
            }
          })
        })
        this.total = count;
      },

    },
    mounted(){
      this._countProductNum()
      this._totleCountfun()
    },
    watch: {
      shopinfo: {
        handler(n, o) {
          this._totleCountfun()
          this._singleShopAllCheckWatch()
          this._allCheckWatch()
          this._countProductNum()
        },
        deep: true
      },
    }

  }
</script>

<style scoped lang="stylus">
  .boxWrap
    height: 100%;
    /*background: #f7f7f7;*/
    display: flex;
    flex-direction: column;


  .main
    flex: 1;
    overflow-y: scroll;
    font-size: .18rem;
    background: #f5f5f5;

</style>
