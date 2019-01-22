<template>
  <div>
    <div ref='piechart' class='echartbox' :style="{width,height}"></div>
  </div>
</template>

<script>
    // 引入基本模板
    let echarts = require('echarts/lib/echarts')
    // 引入柱状图组件
    require('echarts/lib/chart/bar')
    // 引入折线图组件
    require('echarts/lib/chart/line')
    // 引入饼图组件
    require('echarts/lib/chart/pie')
    // 引入提示框和title组件
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
    require('echarts/lib/component/legend')
    export default {
        name: "SEchartsPie",
        props: {
          width:{
            type:String,
            default:"100%"
          },
          height:{
            type:String,
            default:"350px"
          },
          legend:{
            type:Object,
            default:''
          },
          seriesData:{
            type:Object,
            default:''
          },
          title:{
            type:Object,
            default:'用户等级占比'
          }
        },
        mounted () {
          this.drawBar()
        },
        methods: {
          drawBar () {
            let myCharts = echarts.init(this.$refs.piechart)
            myCharts.setOption({
              tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)"
              },
              title:this.title,
              legend: this.legend,
              series: this.seriesData
            })
            window.addEventListener('resize', function () {
              myCharts.resize()
            })
          }
        }
    }
</script>

<style scoped lang="stylus">
  .echartbox
    /*width 100%*/
    /*height 450px*/
</style>
