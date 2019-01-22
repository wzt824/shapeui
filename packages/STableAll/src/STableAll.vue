<template>
  <div class="tableBox">
    <div class="tableTop">
      <div class="tableTopRight">
        <ul id="proUls">
          <li>点击搜索：</li>
          <li>
            <span id="proId">{{productTitle[0]}}</span>
          </li>
          <li>
            <span id="proName">{{productTitle[1]}}</span>
          </li>
          <li>
            <span id="proPrice">{{productTitle[2]}}</span>
          </li>
          <li>
            <span id="proClassify">{{productTitle[3]}}</span>
          </li>
        </ul>
        <div class="searchBox">
          <span id="backSearch">重新搜索</span>
          商品搜索：
          <input name="key" type="text" id="key" value="">
          <span id="JdSearch"><i class="iconfont icon-sousuo"></i>搜索</span>
        </div>
      </div>
    </div>
    <table id="myTable" border="1" cellpadding="0" cellspacing="0" :style="{color,fontSize:fontSize+'px'}">
      <tr>
        <th width="8%"></th>
        <th width="12%">{{productTitle[0]}}</th>
        <th width="20%">{{productTitle[1]}}</th>
        <th width="20%">{{productTitle[2]}}</th>
        <th width="20%">{{productTitle[3]}}</th>
        <th width="20%">操作</th>
      </tr>
      <tr v-for="(a,idx) in productData">
        <th width="8%"><input type="checkbox" class="selectOne"></th>
        <td width="12%"><p class="proName" :title="a.productId">{{a.productId}}</p></td>
        <td width="20%"><p class="proName" :title="a.title">{{a.title}}</p></td>
        <td width="20%">{{a.price}}</td>
        <td width="20%"><p class="proName" :title="a.type3">{{a.type3}}</p></td>
        <td width="20%">
          <span class="proDelete">删除</span>
        </td>
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
  import $ from "../../libs/rely/js/jquery.min.js"
    export default {
        name: "STableAll",
      props:{
        productTitle:{},
        productData:{},
        pageNum:{
          type:Number,
          default:5
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
        }
      },
      methods:{
        tablePaging() {
          let page = this.pageNum
          var pageSize = page;//显示每页显示的数据
          var curPage = 0; //当前页面
          var lastPage; //最后页
          var direction = 0;//方向
          var sumLen; //table总行数
          var sumPage; //table总页数
          var begin;//开始
          var end; //结束
          let bgone = this.backgroundTwo
          let bgtwo = this.backgroundThree
          $(function () {
            $("#myTable tr:odd").css("background-color",bgone);
            $("#myTable tr:even").css("background-color",bgtwo);
            //商品编号搜索
            $("#proId").click(function () {
              $("#proUls").css({display: "none"});
              $(".searchBox").css({display: "block"});
              //商品编号进行搜索
              $("#JdSearch").click(function () {
                let onValue = $("#key").val();
                onSearchProId(onValue)
              })
            });
            //商品名称搜索
            $("#proName").click(function () {
              $("#proUls").css({display: "none"});
              $(".searchBox").css({display: "block"});
              //商品名称进行搜索
              $("#JdSearch").click(function () {
                let onValue = $("#key").val();
                onSearchproName(onValue)
              })
            });
            //商品价格搜索
            $("#proPrice").click(function () {
              $("#proUls").css({display: "none"});
              $(".searchBox").css({display: "block"});
              //商品价格进行搜索
              $("#JdSearch").click(function () {
                let onValue = $("#key").val();
                onSearchproPrice(onValue)
              })
            });
            //商品分类搜索
            $("#proClassify").click(function () {
              $("#proUls").css({display: "none"});
              $(".searchBox").css({display: "block"});
              //商品分类进行搜索
              $("#JdSearch").click(function () {
                let onValue = $("#key").val();
                onSearchproClassify(onValue)
              })
            });

            //点击重新搜索返回搜索界面
            $("#backSearch").click(function () {
              $("#proUls").css({display: "block"});
              $(".searchBox").css({display: "none"});
              showData();
            });
            sumLen = $("#myTable tr").length - 1;// 求这个表的总行数，剔除第一行表头
            sumPage = sumLen % pageSize == 0 ? sumLen / pageSize : Math.floor(sumLen / pageSize) + 1;//根据记录条数，计算页数
            curPage = 1;// 设置当前为第一页

            $("#currPage").html("当前" + curPage + "/" + sumPage + " 页    每页 ");// 显示当前多少页
            $("#showPage").html("数据总量" + sumLen + "");//显示总数
            $("#pageSize").val(pageSize);//每页显示数

            showData();
            subSelect();

            $("#btn1").click(function firstPage() {    // 首页
              PublicFirstPage();
            });
            $("#btn2").click(function frontPage() {    // 上一页
              direction = -1;
              displayPage();
            });
            $("#btn3").click(function nextPage() {    // 下一页
              direction = 1;
              displayPage();
            });
            $("#btn4").click(function lastPage() {    // 尾页
              curPage = sumPage;
              direction = 0;
              displayPage();
            });
            $("#btn5").click(function changePage() {    // 转页
              curPage = document.getElementById("changePage").value * 1;
              if (!/^[1-9]\d*$/.test(curPage)) {
                alert("请输入正整数");
                return;
              }
              if (curPage > sumPage) {
                alert("超出数据页面");
                return;
              }
              direction = 0;
              displayPage();
            });

            $(".inputs").blur(function inputs() {    // 设置每页显示多少条记录
              pageSucess();
            })
          });


          //首页  自定义页数
          function PublicFirstPage() {
            curPage = 1;
            direction = 0;
            displayPage();
          }

          //页面加载完成后
          function pageSucess() {
            pageSize = document.getElementById("pageSize").value;    //每页显示的记录条数
            if (!/^[1-9]\d*$/.test(pageSize)) {
              alert("请输入正整数");
              return;
            }
            sumLen = $("#myTable tr").length - 1;
            sumPage = sumLen % pageSize == 0 ? sumLen / pageSize : Math.floor(sumLen / pageSize) + 1;//根据记录条数，计算页数
            curPage = 1;        //当前页
            direction = 0;        //方向
            PublicFirstPage();
          }

          //页面加载完成后显示相应的数据
          function showData() {
            for (var i = 0; i <= sumLen; i++) {
              $("#myTable tr").hide();    // 首先，设置这行为隐藏
              $("#myTable tr").each(function (i) {    // 然后，通过条件判断决定本行是否恢复显示
                if (i <= pageSize)//显示begin<=x<=end的记录
                  $(this).show();
              });
            }
          }

          //点击时触发的效果
          function displayPage() {
            if (curPage <= 1 && direction == -1) {
              direction = 0;
              alert("已经是第一页了");
              return;
            } else if (curPage >= sumPage && direction == 1) {
              alert("已经是最后一页了");
              return;
            }
            lastPage = curPage;

            // 修复当len=1时，curPage计算得0的bug
            if (sumLen > pageSize) {
              curPage = ((curPage + direction + sumLen) % sumLen);
            } else {
              curPage = 1;
            }

            $("#currPage").html("当前" + curPage + "/" + sumPage + " 页   每页 ");// 显示当前多少页
            begin = (curPage - 1) * pageSize + 1;// 起始记录号
            end = begin + 1 * pageSize - 1;    // 末尾记录号
            if (end > sumLen) {
              end = sumLen;
            }
            $("#myTable tr").hide();    // 首先，设置这行为隐藏
            $("#myTable tr").each(function (i) {    // 然后，通过条件判断决定本行是否恢复显示
              if ((i >= begin && i <= end) || i == 0)//显示begin<=x<=end的记录
                $(this).show();
            });
          }
          //单选
          function subSelect(){
            $(".selectOne").each(function () {
              $(this).click(function () {
                if($(this).prop("checked")){
                  toCaozuo()
                }else{
                  alert(1)
                }
              })
            })
          }
          subSelect()
          function toCaozuo(){
            $(".proDelete").each(function () {
              $(this).click(function () {
                this.parentNode.parentNode.remove()
              })
            })
          }
          //操作
          //ProId搜索]0
          function onSearchProId(obj) {//js函数开始
            setTimeout(function () {//因为是即时查询，需要用setTimeout进行延迟，让值写入到input内，再读取
              var storeId = document.getElementById('myTable');//获取table的id标识
              var rowsLength = storeId.rows.length;//表格总共有多少行
              var searchCol = 1;//要搜索的哪一列，这里是第一列，从0开始数起
              for (var i = 1; i < rowsLength; i++) {//按表的行数进行循环，本例第一行是标题，所以i=1，从第二行开始筛选（从0数起）
                var searchText = storeId.rows[i].cells[searchCol].innerHTML;//取得table行，列的值
                if (searchText.match(obj) || searchText.toUpperCase().match(obj.toUpperCase())) {//用match函数进行筛选，如果input的值，即变量 key的值为空，返回的是ture，
                  // console.log(obj)
                  storeId.rows[i].style.display = '';//显示行操作，
                  storeId.rows[i].style.background = "#639dbe";
                  storeId.rows[i].style.color = "white";
                } else {
                  storeId.rows[i].style.display = 'none';//隐藏行操作
                }
              }
            }, 20);//200为延时时间
          }

          //ProName搜索
          function onSearchproName(obj) {//js函数开始
            setTimeout(function () {//因为是即时查询，需要用setTimeout进行延迟，让值写入到input内，再读取
              var storeId = document.getElementById('myTable');//获取table的id标识
              var rowsLength = storeId.rows.length;//表格总共有多少行
              var searchCol = 2;//要搜索的哪一列，这里是第一列，从0开始数起
              for (var i = 1; i < rowsLength; i++) {//按表的行数进行循环，本例第一行是标题，所以i=1，从第二行开始筛选（从0数起）
                var searchText = storeId.rows[i].cells[searchCol].innerHTML;//取得table行，列的值
                if (searchText.match(obj) || searchText.toUpperCase().match(obj.toUpperCase())) {//用match函数进行筛选，如果input的值，即变量 key的值为空，返回的是ture，
                  // console.log(obj)
                  storeId.rows[i].style.display = '';//显示行操作，
                  storeId.rows[i].style.background = "#639dbe";
                  storeId.rows[i].style.color = "white";
                } else {
                  storeId.rows[i].style.display = 'none';//隐藏行操作
                }
              }
            }, 20);//200为延时时间
          }

          //proPrice搜索
          function onSearchproPrice(obj) {//js函数开始
            setTimeout(function () {//因为是即时查询，需要用setTimeout进行延迟，让值写入到input内，再读取
              var storeId = document.getElementById('myTable');//获取table的id标识
              var rowsLength = storeId.rows.length;//表格总共有多少行
              var searchCol = 3;//要搜索的哪一列，这里是第一列，从0开始数起
              for (var i = 1; i < rowsLength; i++) {//按表的行数进行循环，本例第一行是标题，所以i=1，从第二行开始筛选（从0数起）
                var searchText = storeId.rows[i].cells[searchCol].innerHTML;//取得table行，列的值
                if (searchText.match(obj) || searchText.toUpperCase().match(obj.toUpperCase())) {//用match函数进行筛选，如果input的值，即变量 key的值为空，返回的是ture，
                  // console.log(obj)
                  storeId.rows[i].style.display = '';//显示行操作，
                  storeId.rows[i].style.background = "#639dbe";
                  storeId.rows[i].style.color = "white";
                } else {
                  storeId.rows[i].style.display = 'none';//隐藏行操作
                }
              }
            }, 20);//200为延时时间
          }

          //proClassify搜索
          function onSearchproClassify(obj) {//js函数开始
            setTimeout(function () {//因为是即时查询，需要用setTimeout进行延迟，让值写入到input内，再读取
              var storeId = document.getElementById('myTable');//获取table的id标识
              var rowsLength = storeId.rows.length;//表格总共有多少行
              var searchCol = 4;//要搜索的哪一列，这里是第一列，从0开始数起
              for (var i = 1; i < rowsLength; i++) {//按表的行数进行循环，本例第一行是标题，所以i=1，从第二行开始筛选（从0数起）
                var searchText = storeId.rows[i].cells[searchCol].innerHTML;//取得table行，列的值
                if (searchText.match(obj) || searchText.toUpperCase().match(obj.toUpperCase())) {//用match函数进行筛选，如果input的值，即变量 key的值为空，返回的是ture，
                  // console.log(obj)
                  storeId.rows[i].style.display = '';//显示行操作，
                  storeId.rows[i].style.background = "#639dbe";
                  storeId.rows[i].style.color = "white";
                } else {
                  storeId.rows[i].style.display = 'none';//隐藏行操作
                }
              }
            }, 20);//200为延时时间
          }
        },
      },
      created(){
        this.tablePaging();
      }
    }
</script>

<style lang="stylus" scoped>
  .tableBox
    width: 100%
    height: 100%
  .tableTop
    width: 100%
    height: 55px
    padding 0 15px
    border 1px solid #ddd
    background #fff
    box-sizing border-box
    .tableTopRight
      float right
      height: 100%
      color #333
      ul
        li
          list-style none
          float left
          font-size 14px
          line-height 14px
          margin 20px 2px
          span
            padding 5px 12px
            background #eee
            border-radius 8px
            cursor pointer
      .searchBox
        display none
        height: 100%
        #backSearch
          background #eee
          color #333
        input
          height: 50%
          margin-top 3%
          outline none
          text-indent 4px
        span
          vertical-align middle
          padding 4.5px 10px
          background #63a35c
          font-size 16px
          line-height 16px
          border-radius 5px
          color white
          cursor pointer
          i
            margin-right 2px
  table
    width: 100%
    /*min-width 640px*/
    background #b1e7f5
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
    background #ffffff
    display flex
    align-items center
    color #908c88
    justify-content center
    .pageSize
      margin 0 20px
</style>
