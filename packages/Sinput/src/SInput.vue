<template>
    <div >
      <input :type=type placeholder="请输入内容">
    </div>
</template>

<script>
    export default {
        name: "SInput",
        props:{
          type:{
            type:String,
            default:"text"
          },
          resize:{
            type:String,
            default: "none"
          }
        }
    }
</script>

<style scoped lang="stylus">
  @import "../../libs/theme/SInput.styl"
</style>
