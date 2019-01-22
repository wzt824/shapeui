<template>
    <div class="boxWrap" v-if="productListInfo">
      <s-header :headerInfo="headerInfo" :data="productListInfo"></s-header>
      <s-section :picCard="picCard" :navInfo="navInfo" :data="productListInfo"></s-section>

    </div>
</template>

<script>
  import  SHeader from './SHeader'
  import  SSection from './SSection'
    export default {
      name: "SProductList",
      props:{
        productListInfo:{
          type:Array,
          default:[]
        },
        headerInfo:{
          type:Object,
          default(){
            return{
              headerColor:"#333",
              headerFontSize:".18rem"
            }
          }
        },
        navInfo:{
          type:Object,
          default(){
            return{
              color:"#333",
              fontSize:".14rem"
            }
          }
        },
        picCard:{
          type:Object,
          default(){
            return{
              picWidth:"1rem",
              picHeight:"1rem",
              cardShadow:"2px 2px 2px #888",
              nameColor:"#333",
              nameFontSize:".16rem",
              nameHeight:".12rem",
              lineoneFontSize:".16rem",
              lineoneHeight:".16rem"
            }
          }
        }
      },
      components:{SHeader,SSection}
    }
</script>

<style scoped lang="stylus">
  .boxWrap
    height 100%
    display flex
    flex-direction column
</style>
