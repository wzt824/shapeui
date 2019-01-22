<template>
  <div class="listBox">
    <div class="list" :style="picCard2Style" :key="index" v-for="(product,index) in data" >
      <img :src="product.pic" alt="" :style="picCard1Style" />
      <div class="huashuo">
        <h3 :style="picCard3Style">{{product.title}}</h3>
        <p :style="picCard4Style">
          <span>￥{{product.price}}</span>
          <span v-show="product.gives">{{product.gives}}</span>
        </p>
        <div class="comon">
          <em>{{product.self}}</em>
          <span>{{product.common1}}</span>
          <span>{{product.common2}}</span>
        </div>
      </div>

    </div>
  </div>


</template>

<script>
    export default {
        props:["picCard","data"],
        name: "SSectionList",
        mounted () {
          window.addEventListener('scroll', this.scrollToTop)
        },
        methods:{
          picCard1fn(){
            return `width:${this.picCard.picWidth};height:${this.picHeight};`
          },
          picCard2fn(){
            return `box-shadow:${this.picCard.cardShadow};`
          },
          picCard3fn(){
            return `color:${this.picCard.nameColor};
            font-size:${this.picCard.nameFontSize};
            height:${this.picCard.nameHeight};line-height:${this.picCard.nameHeight};`
          },
          picCard4fn(){
            return `height:${this.picCard.lineoneHeight};line-height:${this.picCard.lineoneHeight};font-size:${this.picCard.lineoneFontSize};`
          }
        },
      computed:{
          picCard1Style(){
            return this.picCard1fn()
          },
          picCard2Style(){
            return this.picCard2fn()
          },
          picCard3Style(){
            return this.picCard3fn()
          },
          picCard4Style(){
            return this.picCard4fn()
          }
      },
      destroyed () {
        window.removeEventListener('scroll', this.scrollToTop);
      }

    }
</script>

<style scoped lang="stylus">
    .listBox
        background #f1f1f1
        display flex
        flex-wrap wrap
        margin-top 1rem
      .list
          background #fff
          margin-top .05rem
          margin-right .08rem
          overflow-x hidden
        .list:nth-of-type(2n)
          margin-right 0px
        img
          display block
          margin 0 auto
        .huashuo
          padding .13rem .09rem
          h3
            font-size .12rem
            color #000
            width 1.65rem
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
          p
            display flex
              margin-top .2rem
              margin-bottom .12rem
            span:nth-of-type(1)
                font-size .13rem
                color #f02e35
                font-weight 700
            span:nth-of-type(2)
                font-size .13rem
                color #fff
                background #f02e35
                padding 2px 2px
                border-radius 4px
                margin-left .07rem
          .comon
              display flex
              em
                font-size .09rem
                color #f02e35
                border 1px solid #f02e35
                border-radius 2px
              span
                font-size .1rem
                color #78797a
              span:nth-of-type(1)
                  margin 0 .07rem
    .toTopBtn
        width:.3rem
        height .3rem
        background rgba(150,142,142,.8)
        border-radius 50%
        position fixed
        right .1rem
        bottom  .5rem
        text-align center
        display none
        .icon-fanhuidingbu
            font-size .2rem
            margin-top .05rem
            color #fff
</style>
