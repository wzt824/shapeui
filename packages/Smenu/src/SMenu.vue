<template>
  <div id="box" :style="{width,height,background}">
    <ul id="uls">
      <li v-for="(p,index) in menuLi" v-if="p">
        <a href="javascript:;">
          {{p.liname}}
        </a>
        <ul class="in" v-if="p.subli">
          <li v-for="(subP,index) in p.subli"><a href="javascript:;">{{subP.liName}}</a></li>
        </ul>
      </li>
    </ul>`
  </div>
</template>
<script>
    export default {
        props:{
          menuLi:{},
          width:{
            type:String,
            default:"100%"
          },
          height:{
            type:String,
            default:"50px"
          },
          background:{
            type:String,
            default:"rgba(149,194,245,.5)"
          }
        },
        name: "SMenu",
        methods:{

          //导航下拉菜单
          funcDownMenu(){
            var lis=document.getElementById("uls").children;
            for(let i=0;i<lis.length;i++){
              lis[i].onmouseenter=function(){
                if(this.firstElementChild.nextElementSibling){
                  this.lastElementChild.style.display="block";
                }
              },
              lis[i].onmouseleave=function(){
                  if(this.firstElementChild.nextElementSibling){
                    this.firstElementChild.nextElementSibling.style.display="none";
                  }
                }
              }
            }
          },
        mounted(){

          this.funcDownMenu();  //导航下拉菜单
        }
    }
</script>

<style scoped lang="stylus">
  @import "../../libs/theme/Smenu.styl"
</style>
