<template>
  <div class="containor" :style="{width}">
    <div class="nav_left">
      <ul>
        <li v-for="(p,index) in menudata" v-if="p.name">{{p.name}}</li>
      </ul>
    </div>
    <div class="nav_right">
      <div class="hides" v-for="(p,index) in menudata" v-if="p.desc">{{p.desc}}</div>
  </div>
  </div>
</template>

<script>
    export default {
        props:{
          menudata:{},
          width:{
            type:String,
            default:"84%"
          }
        },
        name: "SClassifyMenu",
        methods:{
          showResult(){
            let publicBox =$(".publicBox");
            for (let i=0;i<publicBox.length;i++){
              $(".showCode")[i].onclick = function () {
                $(".showCodeBox")[i].style.display = "block";
                $(".showCode")[i].style.display = "none";
                $(".hideCode")[i].style.display = "block";
              }
              $(".hideCode")[i].onclick = function () {
                $(".showCodeBox")[i].style.display = "none";
                $(".showCode")[i].style.display = "block";
                $(".hideCode")[i].style.display = "none";
              }
            }

          },
          funcMenu(){
            var lis=$(".nav_left")[0].firstElementChild.children;
            var hides=$(".nav_right")[0].children;
            for(let i=0;i<lis.length;i++){
              // lis[i].index=i;
              lis[i].onmouseenter=function(){
                for(let j=0;j<lis.length;j++){
                  hides[j].style.display="none";
                  lis[j].className="";
                  $(".nav_right")[0].style.display="block";
                }
                this.className="fix";
                hides[i].style.display="block";
              }
              $(".containor")[0].onmouseleave=function(){
                for(let j=0,len=lis.length;j<len;j++){
                  lis[j].className="";
                }
                $(".nav_right")[0].style.display="none";
              }
            }
          },
        },
        mounted() {
          this.showResult();
          this.funcMenu();
        }
    }
</script>

<style scoped lang="stylus">
  @import "../../libs/theme/SClassifyMenu.styl"
</style>
