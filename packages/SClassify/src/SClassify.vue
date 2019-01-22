<template>
  <div class="Classify" v-if="classifyInfo">
    <S-classify-section :rightColor="rightColor" :leftColor="leftColor" :data="classifyInfo"></S-classify-section>
  </div>
</template>

<script>
  import SClassifySection from "./SClassifySection";
  export default {
    name: "SClassify",
    props:{
      classifyInfo:{
        default:[]
        },
      leftColor:{//左边的导航信息(type1)
        type:Object,
        default(){
          return{
            currColor:"#fff",
            sblingsColor:"#f7f7f7",
            currBorderLeft:"red",
            textColor:"#333",
            fontSize:".14rem"
          }
        }
      },
      rightColor:{//右边的信息(type2,type3)
        type:Object,
        default() {
          return{
            type2Color:"#000",
            type2fontSize:".2rem",
            type3Color:"#000",
            type3fontSize:".1rem"
          }
        }
      }
      },
    components: {SClassifySection},
    }
</script>

<style scoped lang="stylus">
  .Classify
      height 100%
      display flex
      flex-direction column
</style>
