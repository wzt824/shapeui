<template>
  <div class="cartHeader" :style="cartHeaderbgStyle">
    <span :style="cartHeaderStyle">返回</span>
    <span @click="changeshowValue" :style="cartHeaderStyle">{{text}}</span>
  </div>
</template>

<script>
  export default {
    name: "SCartHeader",
    props: ["cartHeaderInfo","changeshowValue", "showValue"],
    data() {
      return {
        text: "管理"
      }
    },
    methods: {
      goto(k) {
        this.$router.push(k)
      },
      cartHeaderbgfn(){
        return `background:${this.cartHeaderInfo.bgColor};`
      },
      cartHeaderfn(){
        return `color:${this.cartHeaderInfo.color};font-size:${this.cartHeaderInfo.fontSize}`
      }
    },
    computed:{
      cartHeaderbgStyle(){
        return this.cartHeaderbgfn()
      },
      cartHeaderStyle(){
        return this.cartHeaderfn()
      }
    },
    watch: {
      showValue: {
        handler(n, o) {
          if (n) {
            this.text = "完成"
          } else {
            this.text = "管理"
          }
        },
        deep: true
      }
    }
  }
</script>

<style scoped lang="stylus">
  .cartHeader
    height: .5rem;
    padding: 0 .12rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fe0036;


  .cartHeader span
    font-size: .15rem;
    color: #ffffff;

</style>
