<template>
    <div class="pulse-container">
      <div
        v-for="(p,index) in classNameData"
        :class="p.className"
        :style="{width:p.width,height: p.height}"
      >

      </div>
  </div>
</template>

<script>
    export default {
        name: "SLoading",
        props:{
          classNameData:{}
        }
    }
</script>

<style scoped>
  @import "../../libs/theme/Sloading.styl";
</style>
