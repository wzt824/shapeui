<template>
  <div class="boxWrap" v-if="info">
    <s-fenlei-main :rightInfo="rightInfo" :leftInfo="leftInfo" :proArr="info.proArr"></s-fenlei-main>
  </div>
</template>

<script>
  import SFenleiMain from "./SFenleiMain";

  export default {
    name: "SClassifyB",
    props:{
      info:{
        default:{}
      },
      leftInfo:{
        type:Object,
        default(){
          return{
            currColor:"#fff",
            sblingsColor:"#f7f7f7",
            currBorderLeft:"red",
            textColor:"#222",
            fontSize:".18rem"
          }
        }
      },
      rightInfo:{
        type:Object,
        default(){
          return{
            type2lineColor:"#333",
            type2Color:"#000",
            type2fontSize:".14rem",
            type3Color:"#333",
            type3fontSize:".12rem"
          }
        }
      }
      },
    components: {SFenleiMain}
  }
</script>

<style scoped lang="stylus">
  .boxWrap
    height: 100%;
    display: flex;
    flex-direction: column;

</style>
