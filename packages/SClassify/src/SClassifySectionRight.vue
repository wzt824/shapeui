<template>
    <div class="Right" >
      <div v-if="data[tempNum]">
        <img v-show="data[tempNum].picture" :src="data[tempNum].picture" class="RightImg">
        <div class="common"   v-for="(classifyRg1,index) in data[tempNum].subArr">
          <div class="common1">
            <h3 :style="type2style">{{classifyRg1.type2}}</h3>
          </div>
          <ul>
            <li  v-for="(classifyRg2,index) in classifyRg1.subArr2">
              <a href="javascript:;" @click="goto(classifyRg2.name)">
                <img :src="classifyRg2.pic" alt="">
                <h3 :style="type3style">{{classifyRg2.name}}</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        props:["rightColor","data","tempNum"],
        name: "SClassifySectionRight",
        methods:{
          goto(k){
            // this.$router.push(`JdProductList?type3=${k}`)
          },
          type2fn(){
            return `color:${this.rightColor.type2Color};font-size:${this.rightColor.type2fontSize}`
          },
          type3fn(){
            return `color:${this.rightColor.type3Color};font-size:${this.rightColor.type3fontSize}`
          }
        },
      computed:{
          type2style(){
            return this.type2fn()
          },
          type3style(){
            return this.type3fn()
          }
      }
    }
</script>

<style scoped lang="stylus">

  .Right
    overflow-y scroll
    flex 1
    &::-webkit-scrollbar
      display none
    .RightImg
      width 2.82rem
      height 1.77rem
    .common
      padding 0 .06rem 0 .15rem
      .common1
        display flex
        justify-content space-between
        align-items center
        margin-top .22rem
        h3
          font-size .15rem
        a
          display flex
          align-items center
          font-size .12rem
          i
            font-size .12rem
            margin-right .03rem
      ul
        display flex
        flex-wrap wrap
        li
          margin-right .25rem
          margin-top .21rem
          display flex
          justify-content center
          a
            display flex
            flex-direction column
            align-items center
            img
              width .63rem
              height .66rem
            h3
              font-size .14rem
              color #000
        li:nth-of-type(3n)
            margin-right 0


</style>
