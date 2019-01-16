
import MyTab from "./tab"
import SAccount from "./SAccount"
import SimpleSwiper from "./SimpleSwiper"
import SBreathingLight from './SBreathingLight'
const ShapeUI = {}

ShapeUI.install = function (Vue,opts) {
    Vue.component(MyTab.name,MyTab)
    Vue.component(SAccount.name,SAccount)
    Vue.component(SimpleSwiper.name,SimpleSwiper)
    Vue.component(SBreathingLight.name,SBreathingLight)
}

export default ShapeUI
