<template>
  <div>
      <div class="box">
        <ul >
          <li :style='{backgroundImage,height}' v-for="(p,i) in num" >   </li>
        </ul>
    </div>
    <div id="con" align="center"></div>
  </div>
</template>

<script>
    export default {
        name: "SStar",
      props:{
          "num":{},
          "height":{
            type:String,
            default:"28px"
          },
          "backgroundImage":{
            type:String,
            default:'url("/static/images/PC/star.gif")'
          },
      },
      methods:{
        FormStar(){
          var lis = document.querySelector('.box').getElementsByTagName('li');
          var con = document.getElementById("con");
          for(var i = 0; i<lis.length; i++){
            lis[i].onmouseover = enter;
//		单独给第一个星星添加鼠标移出事件,恢复原状
            lis[0].onmouseout = function(){
              this.style.backgroundPosition = '0 0';
            }
          }

          function enter(){
//		判断 this 和 lis[j] 两个值是否相等
            for(var j =0; j<lis.length; j++){
              if(this == lis[j]){
//				让之前的li背景图都要改变
                for(var i = 0; i < j; i++){
                  lis[i].style.backgroundPosition = "0" +" "+"-"+lis[i].offsetHeight+"px"
                }
                this.style.backgroundPosition = "0" +" "+"-"+lis[i].offsetHeight+"px"
                //让之后的li背景图都要复原
                for(var i = lis.length - 1;  i > j; i--){
                  lis[i].style.backgroundPosition = '0 0';
                }
//				给con添加文本
                con.innerHTML = "您的评分是：" + (i+1);
              }
            }
          }
        },
      },
      mounted(){
        this.FormStar();
      }
    }
</script>

<style scoped lang="stylus">
  @import "../../libs/theme/star.styl"
</style>
