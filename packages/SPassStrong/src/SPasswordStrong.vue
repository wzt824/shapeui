<template>
  <div class="strongpass">
    <input name="password" type="PassWord" @keyup="CheckIntensity()" id="pinput" ref="pinput"  :style="{width,height}">
    <table border="0" cellpadding="0" cellspacing="0" >
      <tr align="center" :style="{height:datas.strongHeight}">
        <td id="pwd_Weak" class="pwd pwd_c" :style="{width:datas.strongWidth}">&nbsp;</td>
        <td id="pwd_Medium" class="pwd pwd_c pwd_f">无</td>
        <td id="pwd_Strong" class="pwd pwd_c pwd_c_r">&nbsp;</td>
      </tr>
    </table>
  </div>
</template>
<script>
    export default {
        name: "SPasswordStrong",
       props:{
          datas:{},
         width:{
           type:String,
           default:"60%"
         },
         height:{
           type:String,
           default:"30px"
         }
       },
      methods:{
        CheckIntensity(){
          let pwd=this.$refs.pinput.value;
          // console.log(pwd)
          //判断输入密码的类型
          var Mcolor,Wcolor,Scolor,Color_Html;
          var m=0;
          var Modes=0;
          for(let i=0; i<pwd.length; i++){
            var charType=0;
            var t=pwd.charCodeAt(i);
            if(t>=48 && t <=57){charType=1;} //为0～9十个阿拉伯数字
            else if(t>=65 && t <=90){charType=2;} //为26个大写英文字母
            else if(t>=97 && t <=122){charType=4;} //为26个小写英文字母
            else{charType=4;}
            Modes |= charType;
          }
          //计算密码模式
          for(let i=0;i<4;i++){
            if(Modes & 1){m++;}
            Modes>>>=1;
          }
          if(pwd.length<=4){m=1;}
          if(pwd.length<=0){m=0;}
          //返回强度级别
          switch(m){
            case 1 :
              Wcolor="pwd pwd_Weak_c";
              Mcolor="pwd pwd_c";
              Scolor="pwd pwd_c pwd_c_r";
              Color_Html="弱";

              break;
            case 2 :
              Wcolor="pwd pwd_Medium_c";
              Mcolor="pwd pwd_Medium_c";
              Scolor="pwd pwd_c pwd_c_r";
              Color_Html="中";

              break;
            case 3 :
              Wcolor="pwd pwd_Strong_c";
              Mcolor="pwd pwd_Strong_c";
              Scolor="pwd pwd_Strong_c pwd_Strong_c_r";
              Color_Html="强";

              break;
            default :
              Wcolor="pwd pwd_c";
              Mcolor="pwd pwd_c pwd_f";
              Scolor="pwd pwd_c pwd_c_r";
              Color_Html="无";
              break;
          }
          document.getElementById('pwd_Weak').className=Wcolor;
          document.getElementById('pwd_Medium').className=Mcolor;
          document.getElementById('pwd_Strong').className=Scolor;
          document.getElementById('pwd_Medium').innerHTML=Color_Html;
        }
      },
      mounted(){
        this.CheckIntensity()
      }
    }
</script>

<style scoped lang="stylus">
  @import "../../libs/theme/SPassStrong.styl"
</style>
