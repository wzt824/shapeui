<template>
  <div id="container1" style="height: 400px;width: 100%"></div>
</template>

<script>
  import "../../libs/rely/js/echarts.js"
  // import MyECharts from "../../libs/rely/js/MyECharts.js."
    export default {
        name: "SECharts",
      mounted() {
        var data1 = [
                       { group: 'Beijing', name: '1月', value: 10 },
                       { group: 'Beijing', name: '2月', value: 15 },
                     { group: 'Beijing', name: '3月', value: 12 },
                      { group: 'Beijing', name: '4月', value: 14 },
                       { group: 'Tokyo', name: '1月', value: 12 },
                       { group: 'Tokyo', name: '2月', value: 15 },
                      { group: 'Tokyo', name: '3月', value: 2 },
                       { group: 'Tokyo', name: '4月', value: 14 }];

                 var opt1 = MyECharts.ChartOptionTemplates.Bar('各个城市气温趋势', '°C', data1);
                  MyECharts.RenderChart(opt1, 'container1');
      }
    }
</script>

<style scoped lang="stylus">
  /*@import "../../assets/css/PpublicCss.styl";*/
</style>
