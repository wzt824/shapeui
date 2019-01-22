<template>
  <ul>
    <li>
      <a href="javascript:;" :style="navStyle">排序</a>
      <!--<i class="iconfont icon-sanjiaoxia"></i>-->
    </li>
    <li>
      <a href="javascript:;" :style="navStyle">销量</a>
    </li>
    <li>
      <a href="javascript:;" :style="navStyle">价格</a>
      <!--<p>-->
        <!--<i class="iconfont icon-triangle-up"></i>-->
        <!--<i class="iconfont icon-sanjiaoxia"></i>-->
      <!--</p>-->

    </li>
    <li>
      <a href="javascript:;" :style="navStyle">品牌</a>
      <!--<i class="iconfont icon-sanjiaoxia"></i>-->
    </li>
    <li>
      <a href="javascript:;" :style="navStyle">筛选</a>
      <!--<img src="/images/JdProductList/nav1.png" alt="">-->
    </li>
  </ul>
</template>

<script>
    export default {
        name: "SSectionNav",
      props:["navInfo"],
      methods:{
          navfn(){
            return `color:${this.navInfo.color};font-size:${this.navInfo.fontSize};`
          }
      },
      computed:{
          navStyle(){
            return this.navfn()
          }
      }
    }
</script>

<style scoped lang="stylus">
  i
    display block
  ul
    display flex
    justify-content space-around
    position fixed
    top .5rem
    background #fff
    width 100%
    li
      display flex
      height .2rem
      padding .15rem 0
      a
        font-size .14rem
        color #000
        display block
      img
        width .14rem
        height .13rem
        margin-left .06rem
        margin-top .06rem
      i
        font-size .14rem
        color #7c7c7c
        margin-left .06rem
        margin-top .06rem
      p
        i
          margin-top 0
        .icon-sanjiaoxia
            margin-top -.05rem

</style>
