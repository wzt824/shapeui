<template>
  <div class="bigbox" :style="{width:bigWidth+'px',height:height+'px',border}">
    <ul class="imgUl">
      <li :style="{left:liWidth*ind+'px',width:(parseInt(imgWidth)+parseInt(liWidth))+'px',background:bgfn(p.bgColor)}" :key="ind" v-for="(p,ind) in imgData" >
        <div :style="{width:liWidth+'px'}"></div>
        <div :style="{width:imgWidth+'px'}"><img :src="p.pic" alt=""></div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "SAccordionEffect",
      props:{
        imgData:{},
        //大盒子宽度
        bigWidth:{
          type:String,
          default:"400"
        },
        //图片宽度
        imgWidth:{
          type:String,
          default:"150"
        },
        //盒子高度
        height:{
          type:String,
          default:"200"
        },
        border:{
          type:String,
          default:"1px solid #ccc"
        }
      },
      data(){
          return{
            liWidth:[]
          }
      },
      methods:{
          bgfn(k){
            return `${k}`
          },
        playShow(){
            //大盒子宽度
            let bigWidth = this.bigWidth
          //图片宽度
          let imgWidth = this.imgWidth
          //图片长度length
          let liLength = this.imgData.length
          //计算的li中第一个div宽度
          let liWidth = parseInt((bigWidth-imgWidth)/liLength)
          this.liWidth = liWidth
          // console.log(liWidth)
          // console.log(liLength)
          // console.log(imgWidth)
          // console.log(bigWidth-imgWidth)
          function moveRight($li){
            $li.nextAll().each(function(){
              let index = $(this).index();//查找当前li在同辈中的下标
              $(this).animate({
                  left:index*liWidth+parseInt(imgWidth) //li的真正下标*50+150;
                },
                200
              );
            });
          }
          function moveLeft($li){
            $li.prevAll().add($li).each(function(){
              let index = $(this).index();//查找当前li在同辈中的下标
              $(this).animate({
                  left:index*liWidth //li的真正下标*50;
                },
                200
              );
            });
          }
          $(function(){
            //	let lefts = [0,50,100,150,200];
            //	let rights = [0,200,250,300,350];
            $("li div:nth-child(1)").click(function(){
              if(parseInt($(this).parent().css("left"))==$(this).parent().index()*liWidth){
                //		if(parseInt($(this).parent().css("left"))==lefts[$(this).parent().index()]){
                moveRight($(this).parent());
              }else{
                moveLeft($(this).parent());
              }
            });
          })
        }
      },
      mounted(){
          this.playShow()
      }
    }
</script>

<style lang="stylus" scoped>
  .bigbox
    overflow hidden
    ul
      width 100%
      height 100%
      position relative
      li
        cursor pointer
        position absolute
        height 100%
      li div:first-child
        height 100%
        float left

      li div:last-child
        float left
        height 100%
      img
        width 100%
        height 100%
</style>
