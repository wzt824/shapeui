<template>
  <div class="totleCount">
    <label class="checkBox" @click="allShopCheckfun()"><input type="checkbox" :style="bgfn(allTotleCheck)" :checked="allTotleCheck"/></label>
    <span class="inputDir">全选</span>
    <div class="totleBox"></div>
    <div class="totleBtn" @click="delSelect()">删除选中</div>
  </div>
</template>

<script>
  export default {
    name: "SDelSelect",
    props: ["total", "allTotleCheck", "allShopCheckfun", "shopinfo"],
    methods: {
      bgfn(k){
        if(k){
          return `background:url("${this.shopinfo[0].checkBoxPic}");background-size:cover;`
        }else {
          return ''
        }
      },
      delSelect() {
        let idArr = []
        /**
         * 要删除的商品push到一个新数组中
         */
        this.shopinfo.forEach((v1, i1) => {
          v1.productArr.forEach((v2, i2) => {
            if (v2.checkStatus) {
              idArr.push(v2.id)
            }
          })
        })
        /**
         * 删除对应的界面信息
         */
        idArr.forEach((v, i) => {
          this.shopinfo.forEach((v1, i1) => {
            v1.productArr.forEach((v2, i2) => {
              if (v2.id == v) {
                this.shopinfo[i1].productArr.splice(v2, 1)
              }
            })
          })
        })

      }
    }
  }
</script>

<style scoped lang="stylus">
  .totleCount
    height: .55rem;
    background: #ffffff;
    padding: 0 .1rem;
    display: flex;
    align-items: center;


  .inputDir
    font-size: .15rem;


  .totleBox
    font-size: .15rem;
    padding: 0 .05rem;
    flex: 1;


  .totleBtn
    font-size: .16rem;
    width: .94rem;
    height: .38rem;
    border-radius: .19rem;
    background: #fe0036;
    text-align: center;
    line-height: .38rem;
    color: #ffffff;


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
    box-sizing: border-box;
    -webkit-appearance: none;
    outline: none;



</style>
