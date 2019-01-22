<template>
  <div class="boxWrap" v-if="data">
    <s-cart-header :title="title" :toggleStatusfn="toggleStatusfn" :toggleStatus="toggleStatus"></s-cart-header>
    <s-cart-main :shopHeaderRightText="shopHeaderRightText" :productNameColor="productNameColor" :shopHeaderColor="shopHeaderColor" :cardBoxShadow="cardBoxShadow" :cardColor="cardColor" :Imgfn="Imgfn" :data="data" :changeProCheckfn="changeProCheckfn" :changeshopCheckfn="changeshopCheckfn" :proMinus="proMinus" :proAdd="proAdd"></s-cart-main>
    <s-cart-total-box v-show="!toggleStatus" :data="data" :allCheckStatus="allCheckStatus" :changeAllCheckfn="changeAllCheckfn"></s-cart-total-box>
    <s-cart-del v-show="toggleStatus" :data="data" :delSelectfn="delSelectfn" :allCheckStatus="allCheckStatus" :changeAllCheckfn="changeAllCheckfn"></s-cart-del>
  </div>
</template>

<script>
  import SCartHeader from "./SCartHeader";
  import SCartMain from "./SCartMain";
  import SCartTotalBox from "./SCartTotalBox";
  import SCartDel from "./SCartDel";
  export default {
    name: "SCartA",
    props:{
      data:{},//数据
      title:{//标题
        type:String,
        default:"标题"
      },
      shopHeaderRightText:{//店铺右边文字
        type:String,
        default:""
      },
      cardColor:{//商品卡片颜色
        type:String,
        default:"#ffffff"
      },
      cardBoxShadow:{//商品卡片的阴影(box-shadow)
        type:String,
        default:"2px 2px 8px #dddddd"
      },
      shopHeaderColor:{//店铺头部颜色
        type:String,
        default:"#ffffff"
      },
      productNameColor:{//商品name颜色
        type:String,
        default:"#333333"
      },
      Imgfn:{//点击图片事件
        default: null
      }

      },
    components: {SCartDel, SCartTotalBox, SCartMain, SCartHeader},
    data(){
      return{
          toggleStatus:false,
          allCheckStatus:true,
          info:[]
      }
    },
    methods:{
      /**
       *点击切换
       */
      toggleStatusfn(){
        this.toggleStatus = ! this.toggleStatus
      },
      /**
       *删除选中的商品
       */
      delSelectfn(id){
        this.data.forEach((v,i)=>{
          v.productArr.forEach((v2,i2)=>{
            if (v2.productId==id){
              this.data[i].productArr.splice(i2,1)
            }
          })
        })
      },
      /**
       * 点击商品-改变单一商品的选中状态
       * @param s 店铺索引
       * @param p 商品索引
       */
      changeProCheckfn(s,p){
        this.data[s].productArr[p].checkStatus = ! this.data[s].productArr[p].checkStatus
      },
      /**
       * 点击店铺-改变店铺内商品的选中状态
       * @param s 店铺索引
       * @param sta 店铺状态
       */
      changeshopCheckfn(s,sta){
        this.data[s].checkStatus = !this.data[s].checkStatus
        this.data[s].productArr.forEach((v, i) => {
          v.checkStatus = !sta
        })

      },
      /**
       * 点击全选-改变所有店铺/商品的选中状态
       */
      changeAllCheckfn(){
        this.allCheckStatus =!this.allCheckStatus
        this.data.forEach((v,i)=>{
          v.checkStatus = this.allCheckStatus
          v.productArr.forEach((v2,i2)=>{
            v2.checkStatus = this.allCheckStatus
          })
        })
      },
      /**
       * 监听商品-改变店铺的选中状态
       */
      watchProChangeShop(){
        this.data.forEach((v, i) => {
          let truenum = 0;
          v.productArr.forEach((v2, i2) => {
            if (v2.checkStatus) {
              truenum++;
            }
          })
          if(truenum == v.productArr.length){
             v.checkStatus = true
          }else{
             v.checkStatus = false
          }
        })
      },
      /**
       * 监听店铺-改变全选按钮的选中状态
       */
      watchShopChangeAll(){
        let truenum = 0;
        this.data.forEach((v, i) =>{
          if (v.checkStatus) {
            truenum++;
          }
        })
          if(truenum == this.data.length){
          this.allCheckStatus = true
        }else{
          this.allCheckStatus = false
        }
      },
      /**
       * 对某一商品数量的减
       * @param s 店铺索引
       * @param p 商品索引
       */
      proMinus(s,p,pid){
        if ( this.data[s].productArr[p].num>1){
          this.data[s].productArr[p].num--;//对当前界面数据进行操作
        }
      },
      /**
       * 对某一商品数量的加
       * @param s 店铺索引
       * @param p 商品索引
       */
      proAdd(s,p,pid){
        this.data[s].productArr[p].num++;//对当前界面数据进行操作
      },
      _getdata(){
        /**
         * 调api获取数据
         */

      }
    },
    watch:{
      data:{
        handler(n,o){
          this.watchProChangeShop()
          this.watchShopChangeAll()
        },
        deep:true
      }
    }
  }
</script>

<style scoped lang="stylus">
  .boxWrap
    height 100%
    display flex
    flex-direction column

</style>
