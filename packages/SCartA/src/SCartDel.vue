<template>
  <div class="totalBox">
    <label class="checkBox"><input type="checkbox"  :style="bgfn(allCheckStatus)" @change="changeAllCheckfn()"  :checked="allCheckStatus"/></label>
    <span class="allCheck">全选</span>
    <span class="totalCon"><span class="fastClean"><i class="iconfont icon-delete"></i>快速清理</span><span class="toCare">移入关注</span></span>
    <div class="toAccount" @click="del()">删除</div>
  </div>
</template>

<script>
    export default {
        name: "SCartDel",
      props:["data","allCheckStatus","changeAllCheckfn","delSelectfn"],
      methods:{
        bgfn(k){
          if (k){
            return `background:url("${this.data[0].checkBoxPic}");background-size: cover;`
          } else {
            return ''
          }
        },
          del(){
            /**
             * 将选中要删除商品的id,push进一个新数组中
             * @type {Array}
             */
            let willDelArr=[];
            this.data.forEach((v,i)=>{
                v.productArr.forEach((v2,i2)=>{
                  if (v2.checkStatus){
                    willDelArr.push(v2.productId)
                  }
                })
            })
            /**
             * 循环id数组,调父页面的方法,根据商品id删除
             */
            willDelArr.forEach((v,i)=>{
              this.delSelectfn(v)
            })
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
    display flex
    justify-content space-around
    font-size .17rem
    color #020204
  .totalCon .fastClean
    color red
    border 1px solid red
    padding 0 .1rem
    text-align center
    line-height .33rem
    font-size .14rem
    height .33rem
    border-radius .15rem
  .totalCon .toCare
    padding 0 .1rem
    text-align center
    line-height .33rem
    font-size .14rem
    height .33rem
    border-radius .15rem
    border 1px solid #cccccc
  .toAccount
    text-align center
    line-height .33rem
    width .7rem
    height .33rem
    border-radius .15rem
    border 1px solid #cccccc
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
