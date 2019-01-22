<template>
    <div class="sectionBoxAll">
      <div class="sectionBox">
        <S-classify-section-left :leftColor="leftColor" :data="data" :changeidx="changeidx"></S-classify-section-left>
        <S-classify-section-right :rightColor="rightColor" :data="data" :tempNum="tempNum"></S-classify-section-right>
      </div>
    </div>
</template>

<script>
    import SClassifySectionLeft from "./SClassifySectionLeft";
    import SClassifySectionRight from "./SClassifySectionRight";
    export default {
        props:["rightColor","leftColor","data"],
        name: "SClassifySection",
        components: {SClassifySectionRight, SClassifySectionLeft},
      data(){
          return{
            "tempNum":0
          }
      },
      methods:{
          changeidx(i){
            this.tempNum = i
          }
      }
    }
</script>

<style scoped lang="stylus">

  .sectionBoxAll
    display flex
    flex 1
    overflow-y hidden
    overflow-x hidden
    .sectionBox
      display flex
      justify-content space-between

</style>
