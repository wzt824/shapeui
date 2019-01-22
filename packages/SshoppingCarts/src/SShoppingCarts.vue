<template>
  <div class="demo" :style="{width,background,border,borderRadius}">
    <div class="product-grid" v-for="(p,index) in cartsData" :style="{transition}">
      <div class="product-image">
        <img class="pic-1" :src="p.pic1">
        <img class="pic-2" :src="p.pic2">
        <ul class="social">
          <li><a href=""><i :class="p.className1"></i></a></li>
          <li><a href=""><i :class="p.className2"></i></a></li>
        </ul>
      </div>
      <div class="product-content">
        <h3 class="title">{{p.title}}</h3>
        <p class="rating">{{p.comon}}</p>
        <span class="price">￥{{p.price}}</span>
        <a href="" class="add-to-cart"><i :class="p.className3"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SShoppingCarts",
        props:{
          cartsData:{},
          width:{
            type:String,
            default:'300px'
          },
          background:{
            type:String,
            default:'#fff'
          },
          border:{
            type:String,
            default:'1px solid rgba(0,0,0,0.2)'
          },
          borderRadius:{
            type:String,
            default:'10px'
          },
          transition:{
            type:String,
            default:"all 0.5s"
          }
        }
    }
</script>

<style scoped>
@import "../../libs/theme/SshoppingCarts.styl";
</style>
