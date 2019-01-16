// import loading from "./src/loading"
import tab from './src/tab'

tab.install = function (Vue,opts) {
  Vue.component(tab.name,tab)
}

export default tab
