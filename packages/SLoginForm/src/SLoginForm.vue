<template>
  <div class="loginForm">
    <label for=""> <input :style="inputStyle" v-model="username" class="username" type="text" :placeholder="placeholder.text1"></label>
    <label for=""><input :style="inputStyle" v-model="userpass" class="userpass" type="password" :placeholder="placeholder.text2"></label>
    <input :style="btnStyle" ref="loginBtn" class="loginBtn" type="button" value="登录" @click="loginfn">
    <input class="fastLoginBtn" type="button" value="一键登录">
  </div>
</template>

<script>
  export default {
    name: "SLoginForm",
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
            height:".4rem",
          }
        }
      },
      placeholder:{
        type:Object,
        default(){
          return{
              text1:"请输入用户名",
              text2:"请输入密码"
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
        isLoginStatus:false,
      }
    },
    methods:{
      loginfn(){
        if(this.isLoginStatus){
          this.$emit("login",this.username)
        }
      },
      loginStatusfn(){
        if(this.username=='' || this.userpass==''){
          this.isLoginStatus = false
          this.$refs.loginBtn.style.opacity = .4
        }else if(!this.usernamereg.test(this.username)){
          this.isLoginStatus = false
          this.$refs.loginBtn.style.opacity = .4
        }else if(!this.userpassreg.test(this.userpass)){
          this.isLoginStatus = false
          this.$refs.loginBtn.style.opacity = .4
        }else {
          this.isLoginStatus = true
          this.$refs.loginBtn.style.opacity = 1
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
      document.querySelector('.username').addEventListener("input",()=>{
        this.loginStatusfn()
      })
      document.querySelector('.userpass').addEventListener("input",()=>{
        this.loginStatusfn()
      })
    }
  }
</script>

<style scoped lang="stylus">
  .loginForm
    width 3.5rem
    padding .1rem 0
    margin 0 auto
    display flex
    flex-direction column

  .loginForm label
    display flex
  .loginForm input[type=text], input[type=password]
    width 100%
    margin: .1rem 0;
    height: .45rem;
    outline: none;
    box-sizing: border-box;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-bottom: 1px solid #e9e9e9;
    /*caret-color: red;*/
    text-indent: .3rem;
    font-size .16rem
    color #c5c5c5


  .loginForm input[type=text]::-webkit-input-placeholder
    color #c5c5c5
    text-indent: .3rem;
    font-size .16rem


  .loginForm input[type=password]::-webkit-input-placeholder
    color #c5c5c5
    text-indent: .3rem;
    font-size .16rem


  .loginForm input[type=button]
    box-sizing: border-box;
    height: .4rem;
    margin: .1rem 0;
    outline: none;
    border-radius: .2rem;
    transition: all .5s;
  .loginForm .loginBtn
    /*background: #ff0000;*/
    /*color: #ffffff;*/
    opacity: .4;
    border: 0;
  .loginForm .fastLoginBtn
    border: 1px solid #ff0000;
    background: #ffffff;
    color: #ff0000;
    transition: all .5s;
</style>
