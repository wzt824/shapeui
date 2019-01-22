<template>
    <div>
      <p class="hint" id="hint"></p>
      <div class="checkBox" id="checkBox" :style="{width:CheckWidth+'px',height:CheckHeight+'px',background:CheckBackground}">
        <div id="colorDiv" :style="{height:CheckHeight+'px',background:SliderColor}"></div>
        <div id="sliderDiv" :style="{width:CheckHeight+'px',height:CheckHeight+'px'}"></div>
        <div class="textBg" id="textBg" :style="{color:TextColor,height:CheckHeight+'px',lineHeight:CheckHeight+'px'}">拖动滑块至右侧</div>
      </div>
      <p><input :style="{width:RegWidth+'px',height:RegHeight+'px',lineHeight: RegHeight+'px',backgroundColor:RegBackground,color:RegColor}" type="submit" value="立即注册" class="next" id="next" disabled /></p>
    </div>
</template>

<script>
    export default {
        name: "SRegCheck",
      props:{
        CheckWidth:{
          type:String,
          default:"320"
        },
        CheckHeight:{
          type:String,
          default:"40"
        },
        CheckBackground:{
          type:String,
          default:"#eee"
        },
        SliderWidth:{
          type:String,
          default:"40"
        },
        SliderColor:{
          type:String,
          default:"rgb(120,193,64)"
        },
        RegWidth:{
          type:String,
          default:"310",
        },
        RegHeight:{
          type:String,
          default:"45",
        },
        //立即注册背景
        RegBackground:{
          type:String,
          default:"#ccc",
        },
        RegColor:{
          type:String,
          default:"#fff",
        },
        TextColor:{
          type:String,
          default:"#dfdfdf"
        }
      },
      methods:{
        sliderPlay(){
          //滑动人机验证
          let sliderDiv = document.getElementById('sliderDiv');
          let colorDiv = document.getElementById('colorDiv');
          let checkBox = document.getElementById('checkBox');
          let next = document.getElementById('next');
          let SG = false;
          sliderDiv.onmousedown = function(){
            SG = true;
          }
          document.onmousemove = function(evt){
            if(SG==false)return;
            let e = evt || window.event;
            sliderDiv.style.transition = null;
            colorDiv.style.transition = null;
            sliderDiv.style.left = e.clientX - checkBox.offsetLeft - sliderDiv.offsetWidth/2 + 'px';
            colorDiv.style.width = e.clientX - checkBox.offsetLeft + 'px';
            if(sliderDiv.offsetLeft<0){
              sliderDiv.style.left = 0;
            }
            if(sliderDiv.offsetLeft>=checkBox.offsetWidth-sliderDiv.offsetWidth){
              //在滑动到右边时判断,若提示信息为空则解锁
              SG = false;
              next.style.background = 'red';
              colorDiv.innerHTML = '验证通过!';
              if(hint.innerHTML==''){
                next.disabled = false;
              }
            }
          }
          sliderDiv.onmouseup = function(){
            SG = false;
            sliderDiv.style.transition = 'all .5s';
            colorDiv.style.transition = 'all .5s';
            sliderDiv.style.left = 0;
            colorDiv.style.width = 0;
            next.style.background = '#dfdfdf';
            colorDiv.innerHTML = '';
          }
          //滑块文字效果
          let textBg = document.getElementById('textBg');
          setInterval(function(){
            textBg.style.opacity = 0;
            setTimeout(function(){
              textBg.style.opacity = 1;
            },1000);
          },2000);
        }
      },
      mounted(){
          this.sliderPlay()
      }
    }
</script>

<style lang="stylus" scoped>
  .hint
    color red
    font-size 12px
  .checkBox
    margin-bottom  10px
    border-radius 2px
    position relative
    border 1px solid #CCCCCC
    #sliderDiv
      position absolute
      left 0
      top 0
      background url(/static/images/sliderDivBg.jpg) no-repeat
      background-size 40px 40px
      cursor move
      z-index 2
    #colorDiv
      width 0
      position absolute
      top 0
      left 0
      z-index 1
    .textBg
      text-align center
      opacity 1
      transition all .8s
  .next
    margin 10px 0
    border-radius 4px
    border 0
</style>
