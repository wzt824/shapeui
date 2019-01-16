<template>
  <div id="box">
    <div class="swiper-side">
     <slot name="swiper-side1">内容一</slot>
    </div>
    <div class="swiper-side">
      <slot name="swiper-side2">内容二</slot>
    </div>
    <div class="swiper-side">
      <slot name="swiper-side3">内容三</slot>
    </div>
    <div class="swiper-side">
      <slot name="swiper-side4">内容四</slot>
    </div>
    <ul class="doudouliA">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<script>
    export default {
        name: "SSwipersimple",
        methods:{
          play1(){
            //当前序号
            let currOrd = 0;
            let myTimer = null;
            function showImg(){
              //  A、改图片
              let imgDoms = $("#box .swiper-side");
              for(let i=0;i<imgDoms.length;i++){
                imgDoms[i].style.zIndex = 0;
              }
              imgDoms[currOrd].style.zIndex = 1;
              //    B、改豆豆
              let liDoms = $(".doudouliA li");
              for(let i=0;i<liDoms.length;i++){
                liDoms[i].style.backgroundColor = "pink";
              }
              liDoms[currOrd].style.backgroundColor = "red";
            }
            //1、自动播放图片
            function changeImg(){

              myTimer = setInterval(function(){
                //1）、数据：改变图片的当前序号（加加），并考虑边界
                //currOrd = ++currOrd>4?0:currOrd;
                currOrd++;
                if(currOrd>3){
                  currOrd=0;
                }
                //2）、外观：
                showImg();
              },1500);
            }
            //2、停止播放
            function stopChange(){
              //停止定时器
              window.clearInterval(myTimer);
            }
            //3、继续播放 就是自动播放
            //4、跳转到指定的图片
            function goImg(transOrd){
              //1）、数据：把transOrd赋给当前图片序号
              currOrd = transOrd;
              //2）、外观：
              showImg();
            }
            window.onload = function(){
              changeImg();
              $("#box")[0].onmouseover = stopChange;
              $("#box")[0].onmouseout = changeImg;
              let liDoms = $(".doudouli li");
              for(var i=0;i<liDoms.length;i++){
                liDoms[i].setAttribute("index",i);
                liDoms[i].onclick = function(){
                  let index = parseInt(this.getAttribute("index"));
                  goImg(index);
                }
              }
            }
            function showImg(){
              //  A、改图片
              let imgDoms = $("#box .swiper-side");
              for(let i=0;i<imgDoms.length;i++){
                imgDoms[i].style.zIndex = 0;
              }
              imgDoms[currOrd].style.zIndex = 1;
              //    B、改豆豆
              let liDoms = $(".doudouliA li");
              for(let i=0;i<liDoms.length;i++){
                liDoms[i].style.backgroundColor = "pink";
              }
              liDoms[currOrd].style.backgroundColor = "red";
            }
            //1、自动播放图片
            function changeImg(){

              myTimer = setInterval(function(){
                //1）、数据：改变图片的当前序号（加加），并考虑边界
                //currOrd = ++currOrd>4?0:currOrd;
                currOrd++;
                if(currOrd>3){
                  currOrd=0;
                }

                //2）、外观：
                showImg();
              },1000);
            }
            //2、停止播放
            function stopChange(){
              //停止定时器
              window.clearInterval(myTimer);
            }
            //3、继续播放 就是自动播放
            //4、跳转到指定的图片
            function goImg(transOrd){
              //1）、数据：把transOrd赋给当前图片序号
              currOrd = transOrd;

              //2）、外观：
              showImg();
            }
            window.onload = function(){
              changeImg();
              $("#box")[0].onmouseover = stopChange;
              $("#box")[0].onmouseout = changeImg;
              let liDoms = $(".doudouliA li");
              for(var i=0;i<liDoms.length;i++){
                liDoms[i].setAttribute("index",i);
                liDoms[i].onclick = function(){
                  let index = parseInt(this.getAttribute("index"));
                  goImg(index);
                }
              }
            }
          }
        },
      mounted(){
          this.play1();
      }
    }
</script>
<style scoped lang="stylus">
  @import "../../libs/theme/SSwipersimple.styl";
</style>

