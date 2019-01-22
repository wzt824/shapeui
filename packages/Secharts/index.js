import SECharts from "./src/SECharts"
SECharts.install=function(Vue,objs){
  Vue.component(SECharts.name,SECharts)
}
export default SECharts
