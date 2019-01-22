<template>
    <div>
      <input type="checkbox" :type="type" :style="{width,height,verticalAlign}"> 复选
    </div>
</template>

<script>
    export default {
        name: "SCheckbox",
        props:{
        type:{
          type:String,
          default:"checkbox"
        },
        width:{
          type:String,
          default: "16px"
        },
        height:{
          type:String,
          default: "16px"
        },
        verticalAlign:{
          type:String,
          default:"middle"
        }
      }
    }
</script>

<style scoped lang="stylus">
  @import "../../libs/theme/Scheckbox.styl"
</style>
