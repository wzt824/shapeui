<template>
    <div>
      <input type="radio"> 单选
    </div>
</template>

<script>
    export default {
        name: "SRadio",
        props:{
          type:{
            type:String,
            default:""
          }
        }
    }
</script>

<style scoped lang="stylus">
  @import "../../libs/theme/Sradio.styl"
</style>
