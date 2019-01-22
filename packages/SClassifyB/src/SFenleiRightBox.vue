<template>
  <div class="rightBox">
    <h3 :style="type2Style"><span :style="type2lineStyle"></span>{{proArr.type2}} <span :style="type2lineStyle"></span></h3>
    <s-fenlei-right-box-sub :rightInfo="rightInfo" :key="idx" v-for="(m,idx) in proArr.subArr2" :proinfo="m"></s-fenlei-right-box-sub>
  </div>
</template>

<script>
  import SFenleiRightBoxSub from "./SFenleiRightBoxSub";

  export default {
    name: "SFenleiRightBox",
    props: ["rightInfo","proArr"],
    components: {SFenleiRightBoxSub},
    methods:{
      type2fn(){
        return `color:${this.rightInfo.type2Color};font-size:${this.rightInfo.type2fontSize}`
      },
      type2linefn(){
        return `background:${this.rightInfo.type2lineColor};`
      }
    },
    computed:{
      type2Style(){
        return this.type2fn()
      },
      type2lineStyle(){
        return this.type2linefn()
      }
    }
  }
</script>

<style scoped lang="stylus">
  .rightBox
    display: flex;
    flex-wrap: wrap;


  h3
    display: flex;
    width: 100%;
    height: .4rem;
    justify-content: center;
    align-items: center;
    font-size: .14rem;
    color: #242424;


  h3 span
    width: .25rem;
    margin: 0 .06rem;
    height: 1px;
    background: #d2d2d2;

</style>
