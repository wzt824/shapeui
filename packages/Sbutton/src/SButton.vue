<template>
    <div class="col-half">
      <div v-for="(p,index) in buttonData">
        <p>{{p.name}}</p>
        <div :class="p.className" :style="{background:p.background,width,color,fontSize,textAlign}">{{p.title}}</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "SButton",
        props:{
          buttonData:{},
          width:{
            type:String,
            default:'200px'
          },
          color:{
            type:String,
            default: '#fff'
          },
          fontSize:{
            type:String,
            default:'25px'
          },
          textAlign:{
            type:String,
            default:'center'
          }
        }
    }
</script>

<style lang="stylus" scoped>
  @import "../../libs/theme/Sbutton.styl";
</style>
