<template>
  <progress max="100" value="0" id="pg" :style="{width,height,background,borderColor}"></progress>
</template>

<script>
    export default {
        name: "SProgressBarTwo",
        props:{
          width:{
            type:String,
            default:"400px"
          },
          height:{
            type:String,
            default:"20px"
          },
          background:{
            type:String,
            default:"#6caf00"
          },
          borderColor:{
            type:String,
            default:"#eeeeee"
          }
        },
      methods:{
          progressbar(){
            var pg=document.getElementById('pg');
            setInterval(function(e){
              if(pg.value!=100) pg.value++;
              else pg.value=0;
            },100);
              }
          },
      mounted(){
          this.progressbar();
      }
    }
</script>

<style scoped lang="stylus">
@import "../../libs/theme/SProgressBarTwo.styl"
</style>
