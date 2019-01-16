<template>
    <div id="box">
      <div id="box1">
        <ul>
          <li class="fix">
            <slot name="li1">笔记本电脑</slot>
          </li>
          <li>
            <slot name="li2">智能家居</slot>
          </li>
          <li>
            <slot name="li3">华为手机</slot>
          </li>
          <li>
            <slot name="li4">苹果手机</slot>
          </li>
        </ul>
      </div>
      <div id="box2">
        <div class="one">笔记本电脑展示区</div>
        <div>智能家居展示区</div>
        <div>华为手机展示区</div>
        <div>苹果手机展示区</div>
      </div>
    </div>

</template>

<script>
    export default {
        name: "tab",
        methods:{
          Tabs(){
            var box=document.getElementById('box');
            var lis=box.firstElementChild.firstElementChild.children;
            var box2=document.getElementById('box2').children;
            for(var i=0;i<lis.length;i++){  //遍历li
              lis[i].index=i;  //给每个节点添加一个自定义属性，用来接收i的值
              lis[i].onclick=fn; //此处不能加（），不然没点击就已经执行了
            }
            function fn(){
              for(var j=0;j<lis.length;j++){
                lis[j].className='';
                box2[j].style.display='none';
              }
              this.className='fix';
              box2[this.index].style.display='block';
            }
          },
          showResult(){
            $(".showOneCode")[0].onclick = function () {
              $(".textCodeBox").animate({
                height:"100%"
              },400);
              $(".hideOneCode")[0].style.display = "block";
              $(".showOneCode")[0].style.display = "none";
            }
            $(".hideOneCode")[0].onclick = function () {
              $(".textCodeBox").animate({
                height:"0"
              },400);
              $(".hideOneCode")[0].style.display = "none";
              $(".showOneCode")[0].style.display = "block";
            }
          }
        },
        mounted(){
          this.Tabs();
          this.showResult();
        }
    }
</script>

<style scoped lang="stylus">
  @import "../../libs/theme/tab.styl"
</style>
