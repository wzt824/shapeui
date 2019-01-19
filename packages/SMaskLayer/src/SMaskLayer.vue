<template>
    <div>
      <div class="bigbox" :key="ind" v-for="(p,ind) in imgData" :style="{width:width+'px',height:height+'px',padding:padding+'px',margin:margin+'px'}">
        <img class="imgBox" :src="p.pic" />
        <div class="maskingBox" :style="{opacity,background,left:width+'px',width:width+'px',height:height+'px'}"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "SMaskLayer",
      props:{
        imgData:{},
        width:{
          type:String,
          default:"250"
        },
        height:{
          type:String,
          default: "200"
        },
        padding:{
          type:String,
          default:"10"
        },
        margin:{
          trpe:String,
          default:"10"
        },
        background:{
          type:String,
          default:"#000"
        },
        opacity:{
          type:String,
          default:".5"
        }
      },
      methods:{
        playShow(){
          let boxWidth = this.width
          console.log(boxWidth)
          let boxHeight = this.height
          console.log(boxHeight)
          function getDirection(x,y){
            //1、先判断方向
            let dis={
              left:x,
              right:boxWidth-x,
              top:y,
              bottom:boxHeight-y
            };
            let direction="left";
            for(let key in dis){
              if(dis[key]<dis[direction]){
                direction = key;
              }
            }
            return direction;
          }
          let outPos={
            "left":{left:-boxWidth,top:0},
            "right":{left:boxWidth,top:0},
            "top":{left:0,top:-boxHeight},
            "bottom":{left:0,top:boxHeight}
          }

          $(function(){
            $(".bigbox").each(function () {
              $(this).mouseenter(function (event) {
                $(this).find(".maskingBox")
                  .css(outPos[getDirection(event.offsetX,event.offsetY)])
                  .animate({left:0,top:0},200);
              })
              $(this).mouseleave(function (event) {
                $(this).find(".maskingBox")
                  .animate(outPos[getDirection(event.offsetX,event.offsetY)],200);
              })
            })
          });
        }
      },
      mounted(){
        this.playShow()
      }
    }
</script>

<style lang="stylus" scoped>
  .bigbox
    float left
    position relative
    border 1px solid #cccccc
    box-sizing border-box
    overflow hidden
    .imgBox
      width 100%
      height 100%
    .maskingBox
      position absolute
      top 0
</style>
