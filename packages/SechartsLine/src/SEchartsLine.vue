<template>
  <div>
    <div ref='linechart' class='echartbox' :style="{width,height}"></div>
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
    export default {
        name: "SEchartsLine",
        props: {
          width:{
            type:String,
            default:"100%"
          },
          height:{
            type:String,
            default:"350px"
          },
          barlink: {
            type: String,
            required: false,
            default: ''
          },
          xname: {
            type: String,
            required: false,
            default: ''
          },
          yname: {
            type: String,
            required: false,
            default: ''
          },
          bardata: Object
        },
        data () {
          return {
            //link: this.textlink,
            // title: '',
            // legend_data: [],
            // axis_data: [],
            // series_data: [],
            // x_name: this.xname,
            // y_name: this.yname
          }
        },
        watch: {
          bardata (val) {
            this.title = val.title
            this.legend_data = val.legend_data
            this.axis_data = val.Axis_data
            this.series_data = val.series
            this.drawBar()
          }
        },
        mounted () {
          this.drawBar()
        },
        methods: {
          drawBar () {
            let myCharts = echarts.init(this.$refs.linechart)
            myCharts.setOption({
              color: ['#83d0d5', '#f1cb48', '#188ae2', '#E8830B', '#7460ae', '#fc4b6c', '#31ce77', '#eae0bc', '#e732cb', '#9dce8a'],
              title: {
                text: this.bardata.title,
                left: 'center',
                top: '0',
                bottom:'10',
                link: this.barlink,
                textStyle: {
                  color: '#B6B6B6',
                  fontSize:"18"
                }
              },
              tooltip: {
                // trigger: 'axis',
                axisPointer: {
                  type: 'shadow',
                }
              },
              grid: {
                left: '8%',
                bottom: '20%'
              },
              legend: {
                data: this.bardata.legend_data,
                left: 'center',
                bottom: '0',
                textStyle: {
                  color: '#B6B6B6'
                }
              },
              xAxis: [
                {
                  type: 'category',
                  position: 'bottom',
                  name: this.xname,
                  nameLocation: 'center',
                  nameGap: '40',
                  data: this.bardata.axis_data,
                  axisTick: {
                    show: true
                  },
                  axisLabel: {
                    textStyle: {
                      color: '#BFC2C8'
                    },
                    rotate: 30,
                    interval: 0
                  },
                  axisLine: {
                    lineStyle: {
                      color: '#BFC2C8'
                    }
                  }
                }
              ],
              yAxis: [
                {
                  type: 'value',
                  left: '0',
                  name: this.yname,
                  nameLocation: 'center',
                  nameGap: '45',
                  axisLine: {
                    lineStyle: {
                      color: '#BFC2C8'
                    }
                  },
                  axisTick: {
                    show: false
                  },
                  splitLine: {
                    lineStyle: {
                      color: '#ccc'
                    }
                  },
                  axisLabel: {
                    textStyle: {
                      color: '#BFC2C8'
                    },
                    interval: 0,
                    // formatter: function (value, index) {
                    //   if (value >= 1000 && value < 10000000) {
                    //     value = value / 1000 + 'K'
                    //   } else if (value >= 1000000 && value < 1000000000) {
                    //     value = value / 1000000 + 'M'
                    //   } else if (value >= 1000000000) {
                    //     value = value / 1000000000 + 'B'
                    //   }
                    //   return value
                    // }
                  }
                }
              ],
              series: [this.bardata.series_data]
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
    width 100%
    height 350px
</style>
