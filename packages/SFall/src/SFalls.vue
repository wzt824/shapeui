<template>
  <div id="fallbox" :style="{height}">
    <div id="smallfall">
    </div>
  </div>
</template>
<script>
    export default {
        name: "SFalls",
      props:{
          height:{
            type:String,
            default:"400px"
          },
          controlColum:{
            type:String,
            default:"150"
          },
          dataurl:{
            type:String,
            default:"/static/data/fallImg.json"
          }
      },
      data(){
          return{
            data:[]
          }
      },
      methods:{
          _initDataFallImg(){
            fetch(this.dataurl)
              .then(res=>{
                res.json().then(data=>{
                  this.data = data;
                })
              })
          },
          infiniteLoding(){
            var clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
            let scrollTop = document.getElementById("fallbox").scrollTop;
            if(scrollTop+clientHeight>document.body.scrollHeight*0.8){
             this.lodingImg();
            }
          },
         setColumn(){
            let maxWidth = document.getElementById('smallfall').offsetWidth;
            let columns = parseInt(maxWidth/parseFloat(this.controlColum));
            for(let i=0;i<columns;i++){
              let Oul = document.createElement('ul');
              document.getElementById('smallfall').appendChild(Oul);
            }
          },
         minHeight(){
            var uls = document.getElementById("smallfall").children;
            let index = 0,minHeight=uls[0].offsetHeight;
            for(let i=0;i<uls.length;i++){
              if(uls[i].offsetHeight<minHeight){
                minHeight=uls[i].offsetHeight;
                index = i;
              }
            }
            return index;
          },
         lodingImg(){
            let xhr = new XMLHttpRequest();
            var minHeight=this.minHeight;
            xhr.open('get',this.dataurl,true);
            xhr.onreadystatechange = function(){
              var uls = document.getElementById("smallfall").children;
              if(xhr.readyState==4 && xhr.status==200){
                let data =JSON.parse(xhr.responseText);
                for(let i=0;i<data.length;i++){
                  let Oli = document.createElement('li');
                  let Oimg = document.createElement('img');
                  Oimg.src = data[i].pic;
                  uls[minHeight()].appendChild(Oli);
                  Oli.appendChild(Oimg);
                }
              }
            }
            xhr.send();
          }
      },
      created() {
          this._initDataFallImg();
      },
      mounted(){
        this.setColumn();
        this.lodingImg();
        document.getElementById("fallbox").onscroll=this.infiniteLoding;


      }

    }
</script>

<style >
@import "../../libs/theme/SFall.css";

</style>
