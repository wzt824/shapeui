<template>
    <div class="regForm">
      <label for=""> <input :style="inputStyle" v-model="username"  class="username" type="text" placeholder="用户名/邮箱/已验证手机"></label>
      <label for=""><input :style="inputStyle" v-model="userpass"  class="userpass userpass1" type="password" placeholder="请输入密码"></label>
      <label for=""><input :style="inputStyle" v-model="isuserpass" class="userpass userpass2" type="password" placeholder="请确认密码"></label>
      <slot name="otherInfo"></slot>
      <input @click="regfn()" :style="btnStyle" ref="regBtn" class="regBtn" type="button" value="注册" >

    </div>
</template>

<script>
    export default {
        name: "SRegForm",
        props:{
          usernamereg:{
            default:/\W/
          },
          userpassreg:{
            default:/\W/
          },
          btn:{
            type:Object,
            default(){
              return{
                color:"#fff",
                bgColor:"red",
                borderRadius:".2rem",
                height:".4rem"
              }
            }
          },
          input:{
            type:Object,
            default(){
              return{
                caretColor:"green",
                fontSize:".1rem",
                color:"#000"
              }
            }
          }
        },
        data(){
          return{
            username:'',
            userpass:'',
            isuserpass:'',
            isRegStatus:false
          }
        },
        methods:{
          regfn(){
            if(this.isRegStatus){
              this.$emit("register",this.username)
            }
          },
          isRegStatusfn(){
            if(this.username=='' || this.userpass=='' || this.isuserpass==""){
              this.isRegStatus=false
              this.$refs.regBtn.style.opacity = .4
            }else if (!this.usernamereg.test(this.username)){
              this.isRegStatus=false
              this.$refs.regBtn.style.opacity = .4
            }else if (!this.userpassreg.test(this.userpass)){
              this.isRegStatus=false
              this.$refs.regBtn.style.opacity = .4
            }else if (this.userpass!=this.isuserpass){
              this.isRegStatus=false
              this.$refs.regBtn.style.opacity = .4
            } else {
              this.isRegStatus = true
              this.$refs.regBtn.style.opacity = 1
            }
          },
          btnfn(){
            return `background:${this.btn.bgColor};color:${this.btn.color};
        height:${this.btn.height};line-height:${this.btn.height}`
          },
          inputfn(){
            return `caret-color:${this.input.caretColor};color:${this.input.color};font-size:${this.input.fontSize};`
          }
        },
        computed:{
          btnStyle(){
            return this.btnfn()
          },
          inputStyle(){
            return this.inputfn()
          }
        },
      mounted() {
          document.querySelector(".username").addEventListener("input",()=>{
            this.isRegStatusfn()
          })
          document.querySelector(".userpass1").addEventListener("input",()=>{
            this.isRegStatusfn()
          })
          document.querySelector(".userpass2").addEventListener("input",()=>{
            this.isRegStatusfn()
          })
      }
    }
</script>

<style scoped lang="stylus">
  .regForm
    width 3.5rem
    padding .1rem 0
    margin 0 auto
    display flex
    flex-direction column

  .regForm label
    display flex
  .regForm input[type=text], input[type=password]
    width 100%
    margin: .1rem 0;
    height: .45rem;
    outline: none;
    box-sizing: border-box;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-bottom: 1px solid #e9e9e9;
    caret-color: red;
    text-indent: .3rem;
    font-size .16rem
    color #c5c5c5


  .regForm input[type=text]::-webkit-input-placeholder
    color #c5c5c5
    text-indent: .3rem;
    font-size .16rem


  .regForm input[type=password]::-webkit-input-placeholder
    color #c5c5c5
    text-indent: .3rem;
    font-size .16rem


  .regForm input[type=button]
    box-sizing: border-box;
    height: .4rem;
    margin: .1rem 0;
    outline: none;
    border-radius: .2rem;
    transition: all .5s;
  .regForm .regBtn
    background: #ff0000;
    color: #ffffff;
    opacity: .4;
    border: 0;
</style>
