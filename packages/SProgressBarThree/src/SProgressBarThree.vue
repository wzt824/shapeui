<template>
  <div class="circleprogress">
    <div class="progress blue">
		                        <span class="progress-left">
		                            <span class="progress-bar"></span>
		                        </span>
      <span class="progress-right">
		                            <span class="progress-bar"></span>
		                        </span>
      <div class="progress-value" id="pv"><p class="numdata">0</p>%</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SProgressBarThree",
        props:{
          width:{
            type:String,
            default:"400px"
          },
          height:{
            type:String,
            default:"20px"
          },
          background:{
            type:String,
            default:"#6caf00"
          },
          borderColor:{
            type:String,
            default:"#eeeeee"
          }
        },
      data(){
          return{
            timer:null
          }
      },
      methods:{
          progressbar(){
            let time = this.timer
            var pv=document.getElementsByClassName("numdata")[0].innerHTML;
            let counter=parseFloat(pv);
            this.timer=setInterval(()=>{
              counter++;
              document.getElementsByClassName("numdata")[0].innerHTML=counter;
              if(counter==90){
                clearInterval(this.timer)
              }
            },90);
              }
          },
      mounted(){
          this.progressbar();
      },
      beforeDestroy(){
          clearInterval(this.timer)
          this.timer = null
      }
    }
</script>

<style scoped lang="stylus">
@import "../../libs/theme/SProgressBarThree.styl"
</style>
