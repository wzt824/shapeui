<template>
  <div class="cartBoxTop">
    <!--<slot name="delAfterBox"></slot>-->
    <p class="text1">购物车竟然是空的!</p>
  </div>
</template>

<script>
  export default {
    name: "SCartTip"
  }
</script>

<style scoped lang="stylus">
  .cartBoxTop
    margin: .1rem;
    height: 3.5rem;
    background: #ffffff;
    overflow: hidden;


  .cartBoxTop img
    display: block;
    margin: .5rem auto 0;
    width: 1.58rem;


  .cartBoxTop p
    height: .4rem;
    line-height: .4rem;
    text-align: center;


  .cartBoxTop .text2
    color: #7c7c7c;
    font-size: .13rem;

</style>
