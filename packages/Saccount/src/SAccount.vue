<template>
  <div id="acountbox">
    <div id="box1">
    <slot name="account1">年节将至，你还需要一件单品</slot>
     <slot name="account2">恭喜某某用户，抽到来自某某旗舰店的免单活动</slot>
     <slot name="account3">毕业季，愿我们会越来越好</slot>
    </div>
    <div id="box2">
    </div>
  </div>
</template>
<script>
    export default {
        name: "SAccount",
      methods:{
        play(){
          var speed=20;//文字滚动速度
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
          var mytimer=setInterval(scrollfunc,speed)  //设置定时器
          acountbox.onmouseover=function() {
            clearInterval(mytimer)
          };   //鼠标移上时清除定时器达到滚动停止的目的
          acountbox.onmouseout=function() {mytimer=setInterval(scrollfunc,speed)}  //鼠标移开时重设定时器
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
