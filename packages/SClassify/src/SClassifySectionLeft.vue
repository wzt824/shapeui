<template>
    <div class="Left" :style="tabsOtherStyle">
      <ul>
        <li :style="tabs(index)" ref="li" v-for="(classify,index) in data" @click="changeidx(index)">
          {{classify.type1}}
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      props:["leftColor","data","changeidx"],
      name: "SClassifySectionLeft",
      data(){
        return{
          timer:null
        }
      },
      mounted() {

       this.timer= setTimeout(()=>{
          let doms = document.querySelectorAll(".Left ul li")
          doms.forEach((v,i)=>{
            v.onclick=()=>{
              doms.forEach((v2,i2)=>{
                v2.style.backgroundColor = this.leftColor.sblingsColor
                v2.style.borderLeftColor = this.leftColor.sblingsColor
              })
              v.style.backgroundColor = this.leftColor.currColor
              v.style.borderLeftColor = this.leftColor.currBorderLeft
            }
          })
        },20)
      },
      methods:{
        tabs(k){
          if (k==0){
            return `backgroundColor:${this.leftColor.currColor};
            borderLeftColor:${this.leftColor.currBorderLeft};
            color:${this.leftColor.textColor};
            font-size:${this.leftColor.fontSize}`
          } else {
            return `backgroundColor:${this.leftColor.sblingsColor};
            borderLeftColor:${this.leftColor.sblingsColor};
            color:${this.leftColor.textColor};
            font-size:${this.leftColor.fontSize}`
          }
        },
        tabsOther(){
          return `background:${this.leftColor.sblingsColor}`
        }
      },
      computed:{
        tabsOtherStyle(){
          return this.tabsOther()
        }
      },
      beforeDestroy() {
        clearTimeout(this.timer)
        this.timer = null
      }
    }
</script>

<style scoped lang="stylus">

    .Left
        width .93rem
        /*background #f6f6f6*/
        text-align center
        overflow-y scroll
        &::-webkit-scrollbar
          display none
        li
          padding .17rem 0
          border-left .05rem solid transparent
          a
            display flex
            justify-content center

        .focustabs
          background #ffffff
          a
            border-left .05rem solid red
</style>
