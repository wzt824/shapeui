<template>
  <table id="tableBasic" :style="{color,fontSize:fontSize+'px'}">
    <thead>
    <tr :style="{backgroundColor:backgroundOne,textAlign}" >
      <th :style="{padding}"><input type="checkbox" class="selectAll">全选</th>
      <th :style="{padding}" v-for="(p,ind) in tableData">{{p.headerTitle}}</th>
    </tr>
    </thead>
    <tbody>
    <tr class="tr" v-for="(pp,ind) in tableData" :style="{textAlign}">
      <td :style="{padding}"><input type="checkbox" class="selectOne"></td>
      <td :style="{padding}" class="fruit" v-for="(p,ind) in pp.bodyData">{{p}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
    export default {
        name: "STableBasic",
      props:{
        tableData:{}  ,
        backgroundOne:{
          type:String,
          default: "#fff"
        },
        //单行
        backgroundTwo:{
          type:String,
          default: "#fff"
        },
        //偶数行
        backgroundThree:{
          type:String,
          default: "#eee"
        },
        color:{
          type:String,
          default:"#000"
        },
        fontSize:{
          type:String,
          default:"14"
        },
        textAlign:{
          type:String,
          default:"center"
        },
        padding:{
          type:String,
          default:"10px 15px"
        }
      },
      methods:{
        // 全选反选
        allCheck(){
          $(".selectAll")[0].onclick = function(){
            if($(this).prop("checked")){
              $(".selectOne").prop({
                checked:true
              })
            }else{
              $(".selectOne").prop({
                checked:false
              })
            }
          }
        },
        // 单选
        oneCheck(){
          $(".selectOne").each(function () {
            $(this).click(function () {
              let all= 0
              $(".selectOne").each(function () {
                if($(this).prop("checked")){
                  all++
                }
              })
              if($(".selectOne").length==all){
                $(".selectAll").prop({checked:true})
              }else{
                $(".selectAll").prop({checked:false})
              }
            })
          })
        }
      },
      mounted(){
        let bgone = this.backgroundTwo
        let bgtwo = this.backgroundThree
        $("tbody tr:odd").css("background-color",bgone);
        $("tbody tr:even").css("background-color",bgtwo);
        this.allCheck()
        this.oneCheck()
      }
    }
</script>

<style lang="stylus" scoped>
  table
    width 100%
    font-size 16px
    margin 20px auto
    border-collapse collapse
    tr
      transform translateX(0px) skew(0deg,0deg) scale(1)
      transition all 1s
      border 1px solid gray
      th,td
        border 1px solid gray
</style>
