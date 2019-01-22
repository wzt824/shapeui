<template>
  <div class="psidenav" :style="{width}">
    <div class="el-menu" >
      <div class="el-menu-1" >
        <ul class="el-item-menu" >
          <li class="sourcename" v-if="data"  v-for="(subitem,p1) in data" :key="p1" >
            <span class="el-menu-item-title" >{{subitem.title}}</span>
            <ol class="el-submenu-item">
              <li class="sourcesubname" v-if="subsubitem"   v-for="(subsubitem,p2) in subitem.children" :key="p2">
                <span class="el-submenu-item-title" >{{subsubitem.title}}</span>
              </li>
            </ol>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>
<script>
  import $ from "../../libs/rely/js/jquery.min.js"
    export default {
        name: "STree",
      props:{
          data:{},
          bgData:{},
            width:{
              type:String,
              default:"40%"
            },

      },
      methods:{
        showsubchild(){
          var bigbg=this.bgData.bigbg;
          var onedegree=this.bgData.onedegree;
          var twodegree=this.bgData.twodegree;
          $(".psidenav").find(".el-submenu-item-title").eq(0).css({
            "background":twodegree
          })
          $(".psidenav").find(".el-item-menu").eq(0).css({
            "background":bigbg
          })
          $(".psidenav").find(".el-menu-item-title").eq(0).css({
            "background":onedegree
          })
          $(".psidenav").find(".el-menu-item-title").eq(0).next("ol").css({
            "display":"block"
          })
          $(".psidenav").find(".el-menu-item-title").click(function(){
            $(".psidenav").find(".el-menu-item-title").css({
                "background":" transparent"
              })
            $(".psidenav").find(".el-menu-item-title").parent().parent().css({
                "background":" transparent"
              })
              $(this).css({
                "background":onedegree
              })
              $(this).parent().parent().css({
                "background":bigbg
              })
              $(this).parent().children(".el-submenu-item").slideToggle();
            }
          )
          $(".psidenav").find(".el-submenu-item-title").click(function(){
            $(".psidenav").find(".el-submenu-item-title").css({
              "background":" transparent"
            })
            $(this).css({
              "background":twodegree
            })
          })
        }
      },
      mounted(){
        this.showsubchild()
      }
    }
</script>

<style scoped lang="stylus">
  @import "../../libs/theme/STree.styl";


</style>
