<template>
  <div id="box" :style="{width,height}"  v-if="data">
    <div class="swiper-side" v-for="(p,i) in data" :key="i" :item="p" :style="{background}" >
     <img :src="p.pic" alt="" v-if="p.pic">
      {{p.content}}
    </div>
    <ul class="doudouliA" v-if="data">
      <li v-for="(p,i) in data" :key="i" :item="p" :style="{backgroundColor}"></li>
    </ul>
  </div>
</template>
<script>
    export default {
        name: "SSwipersimple",
        props: {
          data:{},
          speed:{},
          PagColor:{},
          width: {
            type: String,
            default: '84%'
          },
          height:{
            type:String,
            default:"200px"
          },
          backgroundColor:{
            type:String,
            default:"pink"
          },
          background:{
            type:String,
            default:"#1b6d85"
          }
        },
        data(){
          return{

          }
        },
        methods:{
          play1(){
            //当前序号
            let currOrd = 0;
            let myTimer = null;
            let speed=this.speed;
            let beforepagColor=this.PagColor.beforePagColor;
            let afterpagColor=this.PagColor.afterPagColor;
            function showImg(){
              //  A、改图片
              //console.log(this)
             var _this=this;
              console.log(_this)
              let imgDoms = $("#box .swiper-side");
              for(let i=0;i<imgDoms.length;i++){
                imgDoms[i].style.zIndex = 0;
              }
              imgDoms[currOrd].style.zIndex = 1;
              //    B、改豆豆
              let liDoms = $(".doudouliA li");
              for(let i=0;i<liDoms.length;i++){
                liDoms[i].style.backgroundColor =beforepagColor;
              }
              liDoms[currOrd].style.backgroundColor =afterpagColor;
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
              },speed);
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
                liDoms[i].style.backgroundColor = beforepagColor;
              }
              liDoms[currOrd].style.backgroundColor =afterpagColor;
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

