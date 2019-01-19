
import MyTab from "./tab"
import SAccount from "./SAccount"
import SimpleSwiper from "./SimpleSwiper"
import SBreathingLight from './SBreathingLight'
import SwiperAll from "./SwiperAll"
import SAlertClose from "./SAlertClose"
import SClassifyMenu from "./SClassifyMenu"
import SInput from "./Sinput"
import Smenu from "./Smenu"
import SRadio from "./Sradio"
import SSide from "./Sside"
const ShapeUI = {}

ShapeUI.install = function (Vue,opts) {
    Vue.component(MyTab.name,MyTab)
    Vue.component(SAccount.name,SAccount)
    Vue.component(SimpleSwiper.name,SimpleSwiper)
    Vue.component(SBreathingLight.name,SBreathingLight)
    Vue.component(SwiperAll.name,SwiperAll)
    Vue.component(SAlertClose.name,SAlertClose)
    Vue.component(SClassifyMenu.name,SClassifyMenu)
    Vue.component(SInput.name,SInput)
    Vue.component(Smenu.name,Smenu)
    Vue.component(SRadio.name,SRadio)
    Vue.component(SSide.name,SSide)
}

export default ShapeUI
