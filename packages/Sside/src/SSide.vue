<template>
  <div class="slider" :style="{height,border}">
    <p>滑过右边图标出现效果哦！</p>
    <p>引入彩色的字体小图标样式请查看下面的代码</p>
    <ul class="slider-ul" v-if="sliderData">
      <li class="slider-shop" v-for="(p,index) in sliderData" v-if="p.slide" >
        <a href="javascript:void(0);" target="_blank" v-for="(pIcon,index) in p.Icon" v-if="pIcon.icon1">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="pIcon.icon1"></use>
          </svg>
        </a>
        <div class="slider-title">{{p.slide}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "SSide",
        props:{
          sliderData:{},
          height:{
            type:String,
            default:"300px"
          },
          border:{
            type:String,
            default:"1px solid #fff"
          },
        },
        methods:{
          //返回顶部
          funTop(){
            $(function(){
              //返回顶部
              $(window).scroll(function(){
                if($(this).scrollTop()>$(window).height()){
                  $(".slider-top").show();
                }else{
                  $(".slider-top").hide();
                }
              });
              $(".slider-top").click(function(){
                $("body,html").animate({
                  scrollTop:0
                },800);
                return false
              });
            });
          }
        },
        mounted(){
          this.funTop()
        }
    }
</script>

<style scoped lang="stylus">
  @import "../../libs/theme/Sside.styl"
</style>
