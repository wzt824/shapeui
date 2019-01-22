<template>
    <header>
      <div class="header1">
      </div>
      <h3 v-if="data" :style="colorStyle">{{data[0].type3}}</h3>
      <div class="header2">
        <a href="javascript:;">
          <i class="iconfont icon-share"></i>
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-gengduo"></i>
        </a>
      </div>
    </header>
</template>

<script>
    export default {
        name: "SHeader",
        props:["headerInfo","data"],
        methods:{
          colorfn(){
            return `color:${this.headerInfo.headerColor};font-size:${this.headerInfo.headerFontSize};`
          }
        },
        computed:{
          colorStyle(){
            return this.colorfn()
          }
        }
    }
</script>

<style scoped lang="stylus">
  header
    width 100%
    display flex
    height .5rem
    line-height .5rem
    justify-content space-between
    position fixed
    top 0
    z-index 8
    background #fff
    .header1
      padding 0 .14rem 0 .2rem
    i
      font-size .21rem
      color #393a3f
      display block
    h3
      font-size .14rem
    .header2
      display flex
      .icon-gengduo
        margin-left .1rem

</style>
