<template>
  <div class="cartHeader" v-if="title">
    <p></p>
    <div class="headerCon">{{title}}<i class="iconfont icon-dingwei"></i></div>
    <div class="headerRight"><span @click="toggleClickfn()">{{text}}</span> <i class="iconfont icon-gengduo"></i></div>
  </div>
</template>

<script>
  export default {
    name: "SCartHeader",
    props:["toggleStatusfn","toggleStatus","title"],
    data(){
      return{
        text:'编辑',
      }
    },
    methods:{
      toggleClickfn(){
        this.toggleStatusfn()
        if (this.toggleStatus){
          this.text = '编辑'
        } else {
          this.text = '完成'
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .cartHeader
    padding 0 .1rem
    height .45rem
    display flex
    justify-content space-between
    align-items center
  .cartHeader p
    width .3rem
  .headerCon
    font-size .18rem
  .headerCon .iconfont
    font-size .16rem
  .headerRight
    font-size .16rem
  .headerRight i
    color #484c57
    margin 0 .03rem
</style>
