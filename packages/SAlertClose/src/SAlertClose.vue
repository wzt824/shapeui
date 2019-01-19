<template>
  <div>
    <div id="ad" class="tip" v-if="alertData" :style="{width,height,lineHeight,textAlign}">
      {{alertData.alertcontent}}
      <span>{{alertData.alertTime}}</span>{{alertData.alertClose}}
    </div>
  </div>

</template>

<script>
    export default {
        name: "SAlertClose",
        props:{
          alertData:{} ,  //接收倒计时间,
          width:{
            type:String,
            default:"100%"
          },
          height:{
            type:String,
            default:"200px"
          },
          lineHeight:{
            type:String,
            default:"200px"
          },
          textAlign:{
            type:String,
            default:"center"
          }
        },
        methods:{
          functionClose(){
            var num = this.alertData.alertTime;
            var oDiv = document.getElementById("ad");
            var timer = setInterval(function(){
              oDiv.children[0].innerHTML =num--;
              if(num == 0) {
                clearInterval(timer);
                oDiv.style.display = "none";
              }
            },1000);
          },
          showResult(){
            //第一个
            $(".showOneCode")[0].onclick = function () {
              $(".textCodeBox").animate({
                height:"100%"
              },400);
              $(".hideOneCode")[0].style.display = "block";
              $(".showOneCode")[0].style.display = "none";
            }
            $(".hideOneCode")[0].onclick = function () {
              $(".textCodeBox").animate({
                height:"0"
              },400);
              $(".hideOneCode")[0].style.display = "none";
              $(".showOneCode")[0].style.display = "block";
            }
          },
        },
        mounted(){
          this.functionClose();
          this.showResult();
        }
    }
</script>

<style scoped lang="stylus">
  @import "../../libs/theme/SAlertClose.styl"
</style>
