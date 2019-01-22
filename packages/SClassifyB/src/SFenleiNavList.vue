<template>
  <div class="navList" :style="bgstyle">
    <s-fenlei-nav-box :leftInfo="leftInfo" v-for="(m,idx) in proArr" :key="idx" :keys="idx" :changetype1="changetype1"
                    :pro="m"></s-fenlei-nav-box>
  </div>
</template>

<script>
  import SFenleiNavBox from "./SFenleiNavBox";

  export default {
    name: "SFenleiNavList",
    props: ["leftInfo","proArr", "changetype1"],
    components: {SFenleiNavBox},
    methods:{
      bgfn(){
        return `background:${this.leftInfo.sblingsColor}`
      }
    },
    computed:{
      bgstyle(){
        return this.bgfn()
      }
    }
  }
</script>

<style scoped lang="stylus">
  .navList
    width: .7rem;
    overflow-y: scroll;
    height: 100%;


  .navList::-webkit-scrollbar
    display: none;

</style>
