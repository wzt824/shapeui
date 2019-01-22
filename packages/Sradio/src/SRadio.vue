<template>
    <div>
      <input type="radio" :type="type" :style="{width,height,verticalAlign}"> 单选
    </div>
</template>

<script>
    export default {
        name: "SRadio",
        props:{
          type:{
            type:String,
            default:"radio"
          },
          width:{
            type:String,
            default: "18px"
          },
          height:{
            type:String,
            default: "18px"
          },
          verticalAlign:{
            type:String,
            default:"middle"
          }
        }
    }
</script>

<style scoped lang="stylus">
  @import "../../libs/theme/Sradio.styl"
</style>
