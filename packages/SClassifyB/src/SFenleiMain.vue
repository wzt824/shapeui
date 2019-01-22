<template>
  <div class="main">
    <s-fenlei-nav-list :leftInfo="leftInfo" :proArr="proArr" :changetype1="changetype1"></s-fenlei-nav-list>
    <s-fenlei-content :rightInfo="rightInfo" :proArr="proArr" :type1num="type1num"></s-fenlei-content>
  </div>
</template>

<script>
  import SFenleiNavList from "./SFenleiNavList";
  import SFenleiContent from "./SFenleiContent";

  export default {
    name: "SFenleiMain",
    props: ["rightInfo","leftInfo","proArr"],
    components: {SFenleiContent, SFenleiNavList},
    data() {
      return {
        "type1num": 0
      }
    },
    methods: {
      changetype1(i) {
        this.type1num = i
        console.info(this.type1num)
      }
    },

  }
</script>

<style scoped lang="stylus">
  .main
    flex: 1;
    display: flex;
    overflow-y: hidden;

</style>
