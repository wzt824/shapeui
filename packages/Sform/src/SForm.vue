<template>
    <div>
      <form action="" class="reg" v-for="(p,index) in inputData" v-if="inputData" :style="{width}">
        <h5>简易注册</h5>
        <label class="regLabel">{{p.name1}}</label><input :type="p.type1" placeholder="请输入用户名"><br>
        <label class="regLabel">{{p.name2}}</label><input :type="p.type2" placeholder="请输入密码"><br>
        <label class="regLabel">{{p.name3}}</label><input :type="p.type3" name="a" id="nan"> <label for="nan">男</label>
        <input :type="p.type3" name="a" id="nv">　<label for="nv">女</label><br>
        <label class="regLabel">{{p.name4}}</label><input :type="p.type4" placeholder="请输入邮箱"><br>
        <label class="regLabel">{{p.name5}}</label><input :type="p.type5" placeholder="请输入QQ号"><br>
        <label class="regLabel">{{p.name6}}</label><input :type="p.type6" placeholder="请输入手机号"><br>
        <label class="regLabel">{{p.name7}}</label><input :type="p.type7" placeholder="请确认密码"><br>
        <input type="submit" value="立即注册">
        <input type="reset" value="重置">
      </form>
    </div>
</template>

<script>
    export default {
        name: "SForm",
        props:{
          inputData:{},
          type:{
            type:String,
            default:"submit"
          },
          width:{
            type:String,
            default: "80%"
          }
        }
    }
</script>

<style scoped lang="stylus">
@import "../../libs/theme/Sform.styl"
</style>
