<template>
  <div id="acountbox" :style="{width,textAlign}">
    <div id="box1">
      <p v-for="(p,i) in data" :key="i" >{{p.title}}</p>
    </div>
    <div id="box2">
    </div>
  </div>
</template>
<script>

  import $ from "../../libs/rely/js/jquery"
    export default {
        name: "SAccount",
      props:{
          data:{},
          speed:{},
          width:{
            type:String,
            default:"84%"
          },
        textAlign:{
            type:String,
            default: "center"
        }


      },
      methods:{
        play(){
          var speed=this.speed;
          var acountbox = document.getElementById('acountbox');
          var box1 = document.getElementById('box1');
          var box2 = document.getElementById('box2');
          box2.innerHTML=box1.innerHTML   //克隆demo1为demo2
          function scrollfunc(){
            if(box2.offsetHeight-acountbox.scrollTop<=0)  //当滚动至demo1与demo2交界时
              acountbox.scrollTop-=box1.offsetHeight    //demo跳到最顶端
            else{
              acountbox.scrollTop++   //如果是横向的 将 所有的 height top 改成 width left
            }
          }
          //
          let mytimer=setInterval(scrollfunc,speed)  //设置定时器
          acountbox.onmouseenter=function() {
            clearInterval(mytimer)
          };   //鼠标移上时清除定时器达到滚动停止的目的
          acountbox.onmouseleave=function() {
            mytimer=setInterval(scrollfunc,speed)
          }  //鼠标移开时重设定时器
        }
      },
      mounted(){
          this.play();
      }
    }
</script>
<style scoped lang="stylus">
@import "../../libs/theme/Saccountplay.styl";
</style>
