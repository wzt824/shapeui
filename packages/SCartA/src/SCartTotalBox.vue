<template>
  <div class="totalBox">
    <label class="checkBox"><input type="checkbox"  :style="bgfn(allCheckStatus)" @change="changeAllCheckfn()"  :checked="allCheckStatus"/></label>
    <span class="allCheck">全选</span>
    <span class="totalCon">合计 : <span class="totalNum">￥{{data|total}}</span></span>
    <div class="toAccount">去结算({{data|allnum}})</div>
  </div>
</template>

<script>
  export default {
    name: "SCartTotalBox",
    props:["data","allCheckStatus","changeAllCheckfn"],
    methods:{
      bgfn(k){
        if (k){
          return `background:url("${this.data[0].checkBoxPic}");background-size: cover;`
        } else {
          return ''
        }
      }
    },
    filters:{
      /**
       * 计算商品个数
       * @param data
       * @returns {number}
       */
      allnum:function(data){
        let productnum = 0;
        data.forEach((v,i)=>{
          v.productArr.forEach((v2,i2)=>{
            productnum +=parseInt(v2.num)
          })
        })
        return productnum
      },
      /**
       * 计算购物车总价格
       * @param data
       * @returns {number}
       */
      total:function (data) {
        let total = 0;
        data.forEach((v,i)=>{
          v.productArr.forEach((v2,i2)=>{
            if (v2.checkStatus){
              total +=v2.price * v2.num
            }
          })
        })
        return total
      }
    }
  }
</script>

<style scoped lang="stylus">
  .totalBox
    display flex
    justify-content space-between
    align-items center
    padding 0 .1rem
    height .5rem
    border-bottom 1px solid #d3d3d3
  .allCheck
    font-size .14rem
    margin 0 .1rem
    color #4b4b4b
  .totalCon
    flex 1
    font-size .17rem
    color #020204
  .totalNum
    font-weight 900
  .toAccount
    text-align center
    line-height .5rem
    width 1.06rem
    height .5rem
    background red
    color white
    font-size .14rem
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
