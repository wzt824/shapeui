<template>
  <div id="box3" :style="{width,height}">
    <div class="swiper-container" >
      <div class="swiper-wrapper">
        <div class="swiper-slide" :style="{background}">
          <slot name="swiper1"></slot>
        </div>
        <div class="swiper-slide">
          <slot name="swiper2"></slot>
        </div>
        <div class="swiper-slide">
          <slot name="swiper3"></slot>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <s-swiper-pag></s-swiper-pag>
      <!-- 如果需要导航按钮 -->
      <s-swiper-dir></s-swiper-dir>
    </div>
  </div>
</template>

<script>
  import  SSwiperDir from "./SSwiperDir";
    import SSwiperPag from "./SSwiperPag";
    export default {
        name: "SSwiperAll",
      components: {SSwiperDir, SSwiperPag},
      props: {
          width: {
            type: String,
            default: '84%'
          },
        height: {
          type: String,
          default: '200px'
        },
        background: {
          type: String,
          default: '#1b6d85'
        },

      }

    }
</script>

<style scoped lang="stylus">
@import "../../libs/theme/SSwiperAll.styl";
</style>
