<template>
  <div class="tableBox">
    <table id="myTable" border="1" cellpadding="0" cellspacing="0">
      <tr :style="{backgroundColor:backgroundOne}">
        <th width="20%" v-for="(p,ind) in productTitle">{{p}}</th>
      </tr>
      <tr v-for="(a,idx) in productData" >
        <td width="20%"><p class="proName" :title="a.productId">{{a.productId}}</p></td>
        <td width="20%"><p class="proName" :title="a.title">{{a.title}}</p></td>
        <td width="20%">{{a.price}}</td>
        <td width="20%"><p class="proName" :title="a.type3">{{a.type3}}</p></td>
      </tr>
    </table>
    <div class="tableBottom">
      <div class="tableBottomBox">
        <a id="currPage"></a>
        <input id="pageSize" class="inputs InputFoucs" type="text" size="1" maxlength="2" value="getDefaultValue"/><a> 条 </a>
        <a  href="javascript:;" id="btn1">首页</a>
        <a  href="javascript:;" id="btn2">上一页</a>
        <a  href="javascript:;" id="btn3">下一页</a>
        <a  href="javascript:;" id="btn4">尾页</a>
        <a>转到 </a>
        <input id="changePage" type="text" size="1" maxlength="4"/>
        <a>页 </a>
        <a  href="javascript:;" id="btn5">跳转</a>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from "jquery"
    export default {
        name: "STablePage",
      props:{
        productData:{},
        productTitle:{},
        pageNum:{
          type:Number,
          default:5
        },
        //表头颜色
        backgroundOne:{
          type:String,
          default: "#7bdbf3"
        },
        //单行
        backgroundTwo:{
          type:String,
          default: "#b1e7f5"
        },
        //偶数行
        // backgroundThree:{
        //   type:String,
        //   default: "#7bdbf3"
        // }

      },
      methods:{
        tablePaging(){
          console.clear()
          let page = this.pageNum
          var pageSize = page;//显示每页显示的数据
          var curPage = 0; //当前页面
          var lastPage ; //最后页
          var direction = 0;//方向
          var sumLen ; //table总行数
          var sumPage ; //table总页数
          var begin ;//开始
          var end ; //结束

          $(function () {
            sumLen = $("#myTable tr").length - 1;// 求这个表的总行数，剔除第一行表头
            sumPage = sumLen % pageSize == 0 ? sumLen / pageSize : Math.floor(sumLen / pageSize) +1 ;//根据记录条数，计算页数
            curPage = 1;// 设置当前为第一页

            $("#currPage").html("当前" + curPage + "/" + sumPage + " 页    每页 ");// 显示当前多少页
            $("#showPage").html("数据总量" + sumLen + "");//显示总数
            $("#pageSize").val(pageSize);//每页显示数

            showData();

            $("#btn1").click(function firstPage(){    // 首页
              PublicFirstPage();
            });
            $("#btn2").click(function frontPage(){    // 上一页
              direction=-1;
              displayPage();
            });
            $("#btn3").click(function nextPage(){    // 下一页
              direction=1;
              displayPage();
            });
            $("#btn4").click(function lastPage(){    // 尾页
              curPage=sumPage;
              direction = 0;
              displayPage();
            });
            $("#btn5").click(function changePage(){    // 转页
              curPage=document.getElementById("changePage").value * 1;
              if (!/^[1-9]\d*$/.test(curPage)) {
                alert("请输入正整数");
                return ;
              }
              if (curPage > sumPage) {
                alert("超出数据页面");
                return ;
              }
              direction = 0;
              displayPage();
            });

            $(".inputs").blur(function inputs(){    // 设置每页显示多少条记录
              pageSucess();
            })
          });
          //首页  自定义页数
          function PublicFirstPage() {
            curPage=1;
            direction = 0;
            displayPage();
          }
          //页面加载完成后
          function pageSucess() {
            pageSize = document.getElementById("pageSize").value;    //每页显示的记录条数
            if (!/^[1-9]\d*$/.test(pageSize)) {
              alert("请输入正整数");
              return ;
            }
            sumLen =$("#myTable tr").length - 1;
            sumPage = sumLen % pageSize == 0 ? sumLen / pageSize : Math.floor(sumLen / pageSize) +1 ;//根据记录条数，计算页数
            curPage=1;        //当前页
            direction=0;        //方向
            PublicFirstPage();
          }
          //页面加载完成后显示相应的数据
          function showData() {
            for (var i=0;i<=sumLen;i++){
              $("#myTable tr").hide();    // 首先，设置这行为隐藏
              $("#myTable tr").each(function(i){    // 然后，通过条件判断决定本行是否恢复显示
                if(i<=pageSize)//显示begin<=x<=end的记录
                  $(this).show();
              });
            }
          }
          //点击时触发的效果
          function displayPage() {
            if(curPage<=1 &&　direction==-1){
              direction=0;
              alert("已经是第一页了");
              return;
            }else if(curPage >= sumPage &&　direction==1){
              alert("已经是最后一页了");
              return;
            }
            lastPage  = curPage;

            // 修复当len=1时，curPage计算得0的bug
            if (sumLen > pageSize) {
              curPage = ((curPage + direction + sumLen) % sumLen);
            } else {
              curPage = 1;
            }

            $("#currPage").html("当前" + curPage + "/" + sumPage + " 页   每页 ");// 显示当前多少页
            begin=(curPage-1)*pageSize + 1;// 起始记录号
            end = begin + 1*pageSize - 1;    // 末尾记录号
            if(end > sumLen){
              end = sumLen;
            }
            $("#myTable tr").hide();    // 首先，设置这行为隐藏
            $("#myTable tr").each(function(i){    // 然后，通过条件判断决定本行是否恢复显示
              if((i>=begin && i<=end) || i==0 )//显示begin<=x<=end的记录
                $(this).show();
            });
          }
        }
      },
      created(){
        this.tablePaging()
      },
      mounted(){
          console.log(this.productData)
      },

    }
</script>

<style lang="stylus" scoped>
  .JdTable
    margin-left 40px
    margin-top 30px
    margin-right 30px
  .tableBox
    width: 100%
    height: 100%
  table
    width: 100%
    /*min-width 670px*/
    /*background #b1e7f5*/
    table-layout: fixed
    border:solid #ddd
    font-size 14px
    border-width:1px 0px 0px 1px
    color #908c88
    i
      font-size 24px
      color #908c88
      cursor pointer
      position relative
      .IconImg
        display none
        position absolute
        left: 0
        right: 0
        top: 0
        bottom: 0
        margin auto
    .firstIcon
      font-weight 400
    i:hover
      color red
    tr
      th
        height 40px
        color #555
        border:solid #ddd
        border-width:0px 1px 1px 0px
      td
        text-align center
        padding 0 5px
        height: 50px
        border:solid #ddd
        border-width:0px 1px 1px 0px
        box-sizing border-box
        .proName
          width 100%
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
        span
          padding 4px 10px
          color #fff
          border-radius 5px
          cursor pointer
        .putaway
          background #82af6f
          cursor auto
        .soldOut
          background #999999
          display none
          cursor auto
        .proSoldOut
          background #ccc
        .proUpdate
          background #438eb9
        .proDelete
          background #d15b47
        .proPutaway
          background #72b63f
    tr:nth-child(2n)
      background #7bdbf3
    tr:first-child
      background #7bdbf3
  .tableBottom
    width: 100%
    height: 55px
    display flex
    background #ffffff
    align-items center
    color #908c88
    justify-content center
    .pageSize
      margin 0 20px
</style>
