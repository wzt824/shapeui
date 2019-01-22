<template>
  <div class="content">
    <s-fenlei-right-box :rightInfo="rightInfo" v-if="proArr[type1num].subArr" v-for="(m,idx) in proArr[type1num].subArr" :proArr="m"
                      :key="idx"></s-fenlei-right-box>
  </div>
</template>

<script>
  import SFenleiRightBox from "./SFenleiRightBox";

  export default {
    name: "SFenleiContent",
    props: ["rightInfo","proArr", "type1num"],
    components: {SFenleiRightBox},

  }
</script>

<style scoped lang="stylus">
  .content
    width: 3.05rem;
    overflow-y: scroll;

</style>
