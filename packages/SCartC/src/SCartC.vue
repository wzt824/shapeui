<template>
  <div class="boxWrap" v-if="productlistinfo">
    <s-cart-header :cartHeaderInfo="cartHeaderInfo" :changeshowValue="_changeshowValue" :showValue="showValue"></s-cart-header>
    <div class="main">
      <s-shop-product :countInfo="countInfo" :productCardInfo="productCardInfo" :productName="productName" :key="idx" v-for="(m,idx) in info.productlist" :keys="idx" :product="m"
                    :delCart="_delCart"></s-shop-product>
      <div  v-show="info.productlist.length==0"><slot name="delAfterBox"></slot></div>
      <!--<s-cart-tip v-show="info.productlist.length==0"></s-cart-tip>-->
    </div>
    <s-totle-count v-show="info.productlist.length!=0 && !showValue" :total="total" :allcheckStatus="allcheck"
                   :info="info"     :changeAllStatusfun="_changeAllStatus"></s-totle-count>
    <s-del-select v-show="showValue && info.productlist.length!=0" :info="info" :total="total" :allcheckStatus="allcheck"
                :changeAllStatusfun="_changeAllStatus"></s-del-select>
  </div>
</template>

<script>
  import SCartHeader from "./SCartHeader";
  import STotleCount from "./STotleCount";
  import SShopProduct from "./SShopProduct";
  import SCartTip from "./SCartTip";
  import SDelSelect from "./SDelSelect";

  export default {
    name: "SCartC",
    props:{
      productlistinfo:{//数据
        default:[]
      },
      productName:{//商品名称信息
        type:Object,
        default(){
          return{
            color:"#333",
            fontSize:".14rem"
          }
        }
      },
      productCardInfo:{//商品卡片信息
        type:Object,
        default(){
          return{
            bgColor:"#fff"
          }
        }
      },
      countInfo:{//商品计数器信息
        type:Object,
        default(){
          return{
            borderColor:"#444",
            countColor:"#333",
            addminusColor:"#444",
          }
        }
      },
      cartHeaderInfo:{//购物车头部信息
        type:Object,
        default(){
          return{
            bgColor:"red",
            fontSize:".18rem",
            color:"#fff"
          }
        }
      }
    },
    components: {SDelSelect, SCartTip, SShopProduct, STotleCount, SCartHeader},
    data() {
      return {
        showValue: false,
        total: 0,
        allcheck: true,
        info:{
          "productlist":this.productlistinfo
        }
      }
    },
    updated() {
      if (this.info.productlist.length > 0) {
        console.info('点击管理:删除选中')
      }
    },
    methods: {
      /**
       * 点击管理状态(显示结算/删除商品)
       * @private
       */
      _changeshowValue() {
        if (this.info.productlist.length != 0) {
          this.showValue = !this.showValue
        }

      },
      /**
       * 点击减号删除商品函数
       * @param i 商品索引
       * @private
       */
      _delCart(i) {
        this.info.productlist.splice(i, 1)
      },


      /**
       * 计算total
       * @private
       */
      _countTotal() {
        let sum = 0;
        this.info.productlist.forEach((v, i) => {
          if (this.info.productlist[i].checkStatus) {
            sum += this.info.productlist[i].price * this.info.productlist[i].num
          }
        })
        this.total = sum;
      },
      /**
       * 通过点击全选按钮改变全选按钮的状态和子按钮的状态
       */
      _changeAllStatus() {
        if (this.allcheck) {
          this.info.productlist.forEach((v, i) => {
            this.info.productlist[i].checkStatus = false
          })
        } else {
          this.info.productlist.forEach((v, i) => {
            this.info.productlist[i].checkStatus = true
          })
        }
      },
      /**
       * 通过监听zi按钮状态改变全选按钮的状态
       * @private
       */
      _subChangeAllStatus() {
        let trueNum = 0;
        this.info.productlist.forEach((v, i) => {
          if (this.info.productlist[i].checkStatus) {
            trueNum++;
          }
        })
        if (trueNum == this.info.productlist.length) {
          this.allcheck = true
        } else {
          this.allcheck = false
        }
      }
    },
    mounted(){
      this._countTotal()
    },
    watch: {
      /**
       * 监听商品列表的变化重新计算totle
       */
      info: {
        handler: function (n, o) {
          this._countTotal()
          this._subChangeAllStatus()
        },
        deep: true
      }
    }
  }
</script>

<style scoped lang="stylus">
  .boxWrap
    height: 100%;
    display: flex;
    flex-direction: column;


  .main
    flex: 1;
    overflow-y: scroll;
    font-size: .18rem;
    background: #f5f5f5;

</style>
