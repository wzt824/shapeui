<template>
    <div>
      <div class="componentBox" ref="starBox">
        <div :style="backgroundColor" class="star line1" ref="line1"></div>
        <div :style="backgroundColor" class="star line2" ref="line2"></div>
        <div :style="backgroundColor" class="star line3" ref="line3"></div>
        <div :style="backgroundColor" class="star line4" ref="line4"></div>
        <div :style="backgroundColor" class="star line5" ref="line5"></div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "SBreathingLight",
      props:['backgroundColor'],
      data() {
        return {
          timerInterval: null,
          timerOut: null,
          rotateValue: 0,
        }
      },
      methods:{
        starEffect() {
          this.timerInterval = setInterval(() => {
            this.$refs.starBox.style.transform = `rotate(${this.rotateValue}deg)`
            this.rotateValue += 10;
            this.$refs.starBox.style.opacity = 1
            this.timerOut = setTimeout(() => {
              this.$refs.starBox.style.opacity = 0
            }, 1000)
          }, 2000)
        }
      },
      mounted() {
        this.starEffect();
      },
      beforeDestroy() {
        clearInterval(this.timerInterval)
        clearTimeout(this.timerOut)
        this.timerInterval = null
        this.timerOut = null
      }
    }
</script>

<style lang="stylus" scoped>
  //五角星
  .componentBox
    width 400px
    height 400px
    margin 0 auto
    position relative
    border 1px solid transparent
    transition all .8s

  .componentBox .star
    width 360px
    height 10px
    background skyblue
    border-radius 5px
    box-shadow 2px 2px 10px #00a5e5
    position absolute

  .componentBox .line1
    top 140px
    left 20px

  .componentBox .line2
    top 140px
    left 20px
    transform rotate(-36deg)
    transform-origin right

  .componentBox .line3
    top 140px
    left 20px
    transform rotate(-72deg) translateX(-52px) translateY(-40px)

  .componentBox .line4
    top 140px
    left 20px
    transform rotate(36deg)
    transform-origin left

  .componentBox .line5
    top 140px
    left 20px
    transform rotate(72deg) translateX(52px) translateY(-46px)
</style>
