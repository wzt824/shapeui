<template>
    <div id="box" :style="{width}">
      <div id="box1">
        <ul>
          <slot name="li1">笔记本电脑</slot>
          <slot name="li2">智能家居</slot>
          <slot name="li3">华为手机</slot>
          <slot name="li4">苹果手机</slot>
        </ul>
      </div>
      <div id="box2">
        <slot name="li5">笔记本电脑展示区</slot>
        <slot name="li6">智能家居展示区</slot>
        <slot name="li7">华为手机展示区</slot>
        <slot name="li8">苹果手机展示区</slot>
      </div>
    </div>

</template>

<script>
    export default {
        name: "STab",
        props:{
          width:{
            type:String,
            default:"100%"
          }
        },
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
          }
        },
        mounted(){
          this.Tabs();
        }
    }
</script>

<style scoped lang="stylus">
  @import "../../libs/theme/tab.styl"
</style>
