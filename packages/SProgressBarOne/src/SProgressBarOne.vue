<template>
    <div id="progressbar" :style="{width,height,borderColor}">
      <!--用来模仿进度条推进效果的进度条元素-->
      <div id="fill" :style="{background}"></div>
    </div>
</template>

<script>
    export default {
        name: "SProgressBarOne",
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
                var fill=document.getElementById('fill');
                var count=0;
                //通过间隔定时器实现百分比文字效果,通过计算CSS动画持续时间进行间隔设置
                var timer=setInterval(function(e){
                  count++;
                  fill.innerHTML=count+'%';
                  if(count===100) clearInterval(timer);
                },17)
              }
          },
      mounted(){
          this.progressbar();
      }
    }
</script>

<style scoped lang="stylus">
@import "../../libs/theme/SProgressBarOne.styl"
</style>
