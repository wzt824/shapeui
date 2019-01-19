
import MyTab from "./Stab"
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
import SAddCarts from './SAddCarts'
import SAccordionEffect from './SAccordionEffect'
import SMaskLayer from './SMaskLayer'
import SProvinceCityQu from './SProvinceCityQu'
import SRegCheck from './SRegCheck'
import STablePage from './STablePage'
import STableSearch from './STableSearch'
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
    Vue.component(SAddCarts.name,SAddCarts)
    Vue.component(SAccordionEffect.name,SAccordionEffect)
    Vue.component(SMaskLayer.name,SMaskLayer)
    Vue.component(SProvinceCityQu.name,SProvinceCityQu)
    Vue.component(SRegCheck.name,SRegCheck)
    Vue.component(STablePage.name,STablePage)
    Vue.component(STableSearch.name,STableSearch)
}

export default ShapeUI
