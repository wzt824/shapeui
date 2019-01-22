<template>
  <div class="box" @click="goto(proinfo.name)">
    <img :src="proinfo.pic" alt="">
    <h4 :style="type3Style">{{proinfo.name}}</h4>
  </div>
</template>

<script>
  export default {
    name: "SFenleiRightBoxSub",
    props: ["rightInfo","proinfo"],
    methods: {
      goto(k) {
        // this.$router.push(`/productlist?menuValue=${k}`)
      },
      type3fn(){
        return `color:${this.rightInfo.type3Color};font-size:${this.rightInfo.type3fontSize}`
      }
    },
    computed:{
      type3Style(){
        return this.type3fn()
      }
    }
  }
</script>

<style scoped lang="stylus">
  .box
    height: 1rem;
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;


  .box img
    width: .7rem;
    height: .7rem;


  .box h4
    height: .18rem;
    line-height: .18rem;
    font-size: .12rem;
    color: #141414;

</style>
