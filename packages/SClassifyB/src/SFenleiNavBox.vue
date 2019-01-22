<template>
  <div ref="navBox" :style="navStyle(keys)" class="navBox" @click="changetype1(keys)">{{pro.type1}}</div>
</template>

<script>

  export default {
    name: "SFenleiNavBox",
    props: ["leftInfo","pro", "keys", "changetype1"],
    data(){
      return{
        timer:null
      }
    },
    mounted() {
      if (this.$refs.navBox.innerHTML.length >= 4) {
        let htmlText = '';
        for (let i = 0; i < this.$refs.navBox.innerHTML.length; i++) {
          htmlText += this.$refs.navBox.innerHTML[i]
          if (i == parseInt(this.$refs.navBox.innerHTML.length / 2 - 1)) {
            htmlText += '<br/>'
          }
        }
        this.$refs.navBox.innerHTML = htmlText
      }
      this.timer = setTimeout(()=>{
        let doms = document.querySelectorAll(".navBox")
        doms.forEach((v,i)=>{
          v.onclick=()=>{
            doms.forEach((v2,i2)=>{
              v2.style.backgroundColor = this.leftInfo.sblingsColor
              v2.style.borderLeftColor = this.leftInfo.sblingsColor
            })
            v.style.backgroundColor = this.leftInfo.currColor
            v.style.borderLeftColor = this.leftInfo.currBorderLeft
          }
        })
      },20)

    },
    methods:{
      navStyle(k){
        if(k==0){
          return `borderLeftColor:${this.leftInfo.currBorderLeft};
          background:${this.leftInfo.currColor};
          color:${this.leftInfo.textColor};
          font-size:${this.leftInfo.fontSize}`
        }else {
          return `borderLeftColor:${this.leftInfo.sblingsColor};
          background:${this.leftInfo.sblingsColor};
          color:${this.leftInfo.textColor};
          font-size:${this.leftInfo.fontSize}`
        }
      }
    },
    beforeDestroy() {
      clearInterval(this.timer)
      this.timer = null
    }
  }
</script>

<style scoped lang="stylus">
  .navBox
    width: .7rem;
    border-left: 2px solid transparent;
    height: .6rem;
    margin: 1px 0;
    background: #f7f7f7;
    box-sizing: border-box;
    font-size: .13rem;
    color: #232323;
    display: flex;
    align-items: center;
    justify-content: center;


  /*.navBox:first-of-type
    border-left-color: red;
    background: #fff;*/

</style>
