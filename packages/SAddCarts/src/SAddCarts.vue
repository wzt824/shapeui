<template>
  <div class="onceBuy">
    <div class="numberWrap" :style="{width:inputWidth+'px',height:height+'px'}">
      <input id="numValue" type="number" min="1" max="30" value="1" />
      <p id="adda" :style="{width:inputWidth/2+'px',height:height/2+'px',top:1+'px'}">+</p>
      <p id="jiana" :style="{width:inputWidth/2+'px',height:height/2+'px',top:height/2+'px'}">-</p>
    </div>
    <a href="javascript:;" id="onceBuyBtn" @click="onceBuy($event)" :style="{width:width+'px',height:height+'px',lineHeight:height+'px',backgroundColor:backgroundOne}">立即购买</a>
    <a href="javascript:;" id="addCartBtn" @click="addToShopCart($event)" :style="{width:width+'px',height:height+'px',lineHeight:height+'px',backgroundColor:backgroundTwo}">加入购物车</a>
    <a href="javascript:;" :style="{width:width+'px',height:height+'px',lineHeight:height+'px',backgroundColor:backgroundThree}">
      用手机购买
      <div class="phoneBuy"><img :src="erweimaImg" alt=""></div>
    </a>
    <a href="javascript:;">{{discount}}</a>
  </div>
</template>

<script>
    export default {
        name: "SAddCarts",
      props:{
        discount:{

        } ,
        erweimaImg:{

        },
        inputWidth:{
          type:String,
          default:"45"
        },
        width:{
          type:String,
          default:"120"
        },
        height:{
          type:String,
          default:"50"
        },
        color:{
          type:String,
          default:"#fff"
        },
        backgroundOne:{
          type:String,
          default:"#ff0036"
        },
        backgroundTwo:{
          type:String,
          default:"#ff6600"
        },
        backgroundThree:{
          type:String,
          default:"#FFFFFF"
        },



      },
      methods:{
        addToShopCart(){
          this.$emit('addToCart')
        },
        onceBuy(){
          this.$emit('onceBuy')
        },
        payShow(){
          let oneBg = this.backgroundOne
          let twoBg = this.backgroundTwo
          //支付部分效果
          let onceBuyBtn = document.getElementById('onceBuyBtn');
          let addCartBtn = document.getElementById('addCartBtn');
          let timerC = setInterval(function(){
            onceBuyBtn.style.backgroundColor = oneBg;
            addCartBtn.style.backgroundColor = twoBg;
            setTimeout(function(){
              onceBuyBtn.style.backgroundColor = twoBg;
              addCartBtn.style.backgroundColor = oneBg;
            },1000);
          },2000);
          //购物车加减
          let adda = document.getElementById('adda');
          let jiana = document.getElementById('jiana');
          let numValue = document.getElementById('numValue');
          adda.onclick=function(){
            numValue.value=parseInt(numValue.value)+1;
          }
          jiana.onclick=function(){
            (numValue.value<=1)?1:numValue.value=parseInt(numValue.value)-1;
          }
        }
      },
      mounted(){
          this.payShow()
      }
    }
</script>

<style lang="stylus" scoped>
  .onceBuy
    height 75px
    .numberWrap
      /*width 45px*/
      float left
      /*height 50px*/
      margin-right 15px
      position relative
      input
        width 100%
        height 100%
        text-align center
        outline none
        color #000
        border 1px solid #999
      p
        /*width 20px*/
        /*height 25px*/
        background #eeeeee
        color #000000
        position absolute
        right -1px
        text-align center
        border 1px solid #bbb
        cursor pointer
      p:nth-of-type(1)
        /*top 1px*/
      p:nth-of-type(2)
        /*top 25px*/
    a
      /*width 120px*/
      /*height 50px*/
      margin-right 10px
      float left
      color #FFF
      font-size 18px
      text-align center
      /*line-height 50px*/
    a:nth-of-type(1)
      /*background-color #ff0036*/
      transition all 1s
    a:nth-of-type(2)
      /*background-color #ff6600*/
      transition all 1s
    a:nth-of-type(3)
      border 1px solid #dddddd
      color #000000
      /*background #FFFFFF*/
      width 110px
      font-size 16px
      position relative
      .phoneBuy
        position absolute
        left 0
        top -76px
        opacity 0
        z-index -1
        transition all .3s
        img
          display block
    a:nth-of-type(3):hover
      .phoneBuy
        opacity 1
        top -126px
    a:nth-of-type(4)
      width 40px
      height 40px
      margin-top 5px
      background #ff0036
      font-size 12px
      line-height 20px
      position relative
    a:nth-of-type(4)::before
      content ""
      width 0
      height 0
      display block
      position absolute
      top 11px
      left -20px
      border 10px solid transparent
      border-right-color #FF0036
</style>
