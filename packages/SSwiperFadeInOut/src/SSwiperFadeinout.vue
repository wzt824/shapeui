<template>
  <div id="box2">
    <div class="swiper-side2">
      <slot name="swiper-inout1">内容一</slot>
    </div>
    <div class="swiper-side2">
      <slot name="swiper-inout2">内容二</slot>
    </div>
    <div class="swiper-side2">
      <slot name="swiper-inout3">内容三</slot>
    </div>
    <div class="swiper-side2">
      <slot name="swiper-inout4">内容四</slot>
    </div>
    <ul class="doudouliB">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "SSwiperFadeinout",
        methods:{
          play2(){
            //当前序号
            let currOrd = 0;
            let myTimer = null;

//显示图片：
            function showImg(inOrd,outOrd){
              if(inOrd==outOrd){
                return;
              }
              let imgDoms = $("#box2 .swiper-side2");

              //1)、淡入淡出前的准备工作
              imgDoms[inOrd].style.opacity = 0;
              imgDoms[outOrd].style.opacity = 1;
              //2）、淡入淡出效果
              fadeInOut(imgDoms[inOrd],imgDoms[outOrd],500);

            }

            function showLi(){
              //    B、改豆豆
              let liDoms = $(".doudouliB li");
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
                let outOrd = currOrd;
                currOrd++;
                if(currOrd>4){
                  currOrd=0;
                }
                //2）、外观：
                //A、改图片
                showImg(currOrd,outOrd);
                //B、改豆豆
                showLi();

              },1500);
            }

//2、停止播放
            function stopChange(){
              //停止定时器
              window.clearInterval(myTimer);
            }

//3、继续播放 就是自动播放

//4、跳转到指定的图片
            function goImg(transOrd){//1
              //1）、数据：把transOrd赋给当前图片序号
              let outOrd = currOrd;
              currOrd = transOrd;

              //2）、外观：
              //A、改图片
              showImg(currOrd,outOrd);
              //B、改豆豆
              showLi();
            }
            function getStyle(domObj,attr){
              if(domObj.currentStyle){
                //domObj.currentStyle.attr;//这是不对的，因为并没有名字为attr的属性
                return domObj.currentStyle[attr];//如果对象的属性名是变量的方式表示，就只能用方括号。
              }else{
                return window.getComputedStyle(domObj)[attr];
              }
            }
            //淡入淡出：两张图片的淡入淡出
            function fadeInOut(inDomObj,outDomObj,timeLong){
              let endValue=1;

              let currValue = 0;
              let direction = 1;
              let timeSpace = 16;
              let step = Math.abs(endValue-currValue)/timeLong*timeSpace;//  路程/时间表示的是一毫秒走多少像素*16；

              let myTimer = setInterval(function(){
                //1、改变数据
                currValue = currValue+direction*step;
                //2、处理边界
                if(Math.abs(currValue-endValue)<=step){
                  currValue = endValue;
                  clearInterval(myTimer);
                }
                //3、改变外观
                inDomObj.style.opacity = currValue;
                outDomObj.style.opacity = 1-currValue;

              },timeSpace);
            }
            window.onload = function(){
              changeImg();
              $("#box")[0].onmouseover = stopChange;
              $("#box")[0].onmouseout = changeImg;
              let liDoms = $(".doudouliB li");
              for(var i=0;i<liDoms.length;i++){
                liDoms[i].setAttribute("index",i);
                liDoms[i].onclick = function(){
                  let index = parseInt(this.getAttribute("index"));
                  goImg(index);//1
                }
              }
            }
          }
        },
        mounted(){
          // this.play2()
        }
    }
</script>

<style scoped lang="stylus">
  @import "../../libs/theme/SSwiperFadeinout.styl";

</style>
