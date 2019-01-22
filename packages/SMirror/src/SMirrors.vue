<template>
    <div>
      <div id="box" :style="{width,height,backgroundImage}">
      </div>
      <div id="center" >
        <i class="iconfont icon-jiantou1" id="leftBtn"></i>
        <i class="iconfont icon-jiantou" id="rightBtn"></i>
        <div id="contains">
          <ul id="uls" v-if="data"  >
            <li v-for="(p,i) in data" :key="i" :style="{'margin':'0'+' '+marginLeft+'px'}" ref="li"></li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
  import $ from "../../libs/rely/js/jquery.min"
    export default {
        name: "SMirrors",
      props:{
          data:{},
        mirrorBoxWidth:{},
        mirrorBoxHeight:{},
          marginLeft:{
            type:String,
            default:"5"
          },
          width:{
            type:String,
            default:"500px"
          },
        height:{
          type:String,
          default:"300px"
        },
        backgroundImage:{
          type:String,
          default:"url('/static/images/zujianSwiper/p3.png')"
        }
      },
      methods: {
        Mirrorstart(){
         let data=this.data;
          var li=this.$refs.li;
          var marginLeft=this.marginLeft;
          var mirrorBoxHeight=this.mirrorBoxHeight;
          var mirrorBoxWidth=this.mirrorBoxWidth;
          class BigMirror {
            constructor(obj) {
              let defaultObj = {
                boxDom: obj.boxDom,
                mirrorWidth: mirrorBoxWidth,
                mirrorHeight: mirrorBoxHeight,
                mirrorOpacity: 0.4,
                mirrorBgColor: 'white',
                multiple:1.5 ,
                bigImg: null
              }
              for (let key in obj) {
                obj[key] && (defaultObj[key] = obj[key]);
              }
              for (let key in defaultObj) {
                this[key] = defaultObj[key];
              }
              this.createUI();
              this.addEvent();
            }
            createUI() {
              //this.boxDom
              this.boxDom.style.backgroundSize = this.boxDom.offsetWidth + 'px ' + this.boxDom.offsetHeight + 'px';
              //放大镜
              this.mirrorDom = document.createElement('div');
              this.mirrorDom.style.cssText = "position:absolute;display:none;";
              this.mirrorDom.style.width = this.mirrorWidth + 'px';
              this.mirrorDom.style.height = this.mirrorHeight + 'px';
              this.mirrorDom.style.backgroundColor = this.mirrorBgColor;
              this.mirrorDom.style.opacity = this.mirrorOpacity;
              this.boxDom.appendChild(this.mirrorDom);
              //显示框
              this.showBoxDom = document.createElement('div');
              this.showBoxDom.style.cssText = "position:absolute;display:none;";
              this.showBoxDom.style.width = this.boxDom.offsetWidth+ 'px';
              this.showBoxDom.style.height = this.boxDom.offsetHeight + 'px';
              this.showBoxDom.style.backgroundImage = 'url(' + this.bigImg + ')';
              this.showBoxDom.style.backgroundSize = this.boxDom.offsetWidth * this.multiple +200+ 'px ' + this.boxDom.offsetHeight *
                this.multiple + 'px';
              // this.showBoxDom.style.left = (this.boxDom[0].offsetWidth + 10) + 'px';
              this.showBoxDom.style.left = 0 + 'px';
              this.showBoxDom.style.top = 0 + 'px';
              this.showBoxDom.className = "showBox";
              this.boxDom.appendChild(this.showBoxDom);
            }
            addEvent() {
              this.boxDom.onmouseover = function () {
                this.mirrorDom.style.display = "block";
                this.showBoxDom.style.display = 'block';
              }.bind(this);
              this.boxDom.onmouseout = function () {
                this.mirrorDom.style.display = "none";
                this.showBoxDom.style.display = 'none';
              }.bind(this);
              this.boxDom.onmousemove = function (ev) {
                var ev = window.event || event;
                //数据
                var currentLeft = ev.pageX - this.boxDom.offsetLeft - this.mirrorWidth / 2;
                var currentTop = ev.pageY - this.boxDom.offsetTop - this.mirrorHeight / 2;
                //判断边界
                if (currentLeft <= 0) {
                  currentLeft = 0;
                } else if (currentLeft >= this.boxDom.offsetWidth - this.mirrorWidth) {
                  currentLeft = this.boxDom.offsetWidth - this.mirrorWidth;
                }
                if (currentTop <= 0) {
                  currentTop = 0;
                } else if (currentTop >= this.boxDom.offsetHeight - this.mirrorHeight) {
                  currentTop = this.boxDom.offsetHeight - this.mirrorHeight;
                }
                //改变外观
                this.mirrorDom.style.left = currentLeft + 'px';
                this.mirrorDom.style.top = currentTop + 'px';
                this.showBoxDom.style.backgroundPosition = (currentLeft * -this.multiple) + 'px ' + (currentTop *
                  -this.multiple) + 'px';
              }.bind(this);
            }
          }
          // 点击下面的图片，替换背景图片
          function changeBgImg() {
            let box=document.getElementById("box");
            let li=document.getElementById("uls").children;
            for (let i = 0; i < li.length; i++) {
              li[i].onmouseenter = function () {
                box.style.backgroundImage = this.style.backgroundImage;
                document.getElementsByClassName("showBox")[0].style.backgroundImage = this.style.backgroundImage;
              }
            }
          }
          $(function(){
              var box=document.getElementById("box");
              new BigMirror({
                boxDom: box,
                mirrorWidth: 200,
                mirrorHeight: 200,
                bigImg: '/static/images/zujianSwiper/p3.png'
              });
              var uls=document.getElementById("uls");
              for (let i = 0; i < li.length; i++) {
                li[i].style.backgroundImage = "url(" + data[i].pic + ")";
              }
              changeBgImg();
              // //播放方向
              var moveLeft = 0;
              var jiantou1=document.getElementsByClassName("icon-jiantou1")[0];
              var jiantou=document.getElementsByClassName("icon-jiantou")[0];
              jiantou1.onclick = function () {
                let directionLeft=-1;
                moveLeft = moveLeft + directionLeft * (li[0].offsetWidth + 2 * marginLeft);
                console.log(2 * marginLeft)
                var count=(li.length-1)*(li[0].offsetWidth+2 * marginLeft);
                if (moveLeft <= -count) {
                  moveLeft = -count;
                }
                //改变外观
                document.getElementById("uls").style.left = moveLeft + 'px';
              }

              jiantou.onclick = function () {
                let directionLeft=1;
                moveLeft = moveLeft + directionLeft * (li[0].offsetWidth+2*marginLeft);
                if (moveLeft >= 0) {
                  moveLeft = 0;
                }
                //改变外观
                uls.style.left = moveLeft + 'px';
              }
          })
        }
      },
      updated(){
        this.Mirrorstart();
      },
      mounted(){
        this.Mirrorstart();
        // this.loadsmall();
      },
    }
</script>

<style scoped lang="stylus">
@import "../../libs/theme/SMirror.styl"
</style>
