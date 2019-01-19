
import MyTab from "./packages/Stab"
import SAccount from "./packages/SAccount"
import SimpleSwiper from "./packages/SimpleSwiper"
import SBreathingLight from './packages/SBreathingLight'
import SwiperAll from "./packages/SwiperAll"
import SAlertClose from "./packages/SAlertClose"
import SClassifyMenu from "./packages/SClassifyMenu"
import SInput from "./packages/Sinput"
import Smenu from "./packages/Smenu"
import SRadio from "./packages/Sradio"
import SSide from "./packages/Sside"
import SAddCarts from './packages/SAddCarts'
import SAccordionEffect from './packages/SAccordionEffect'
import SMaskLayer from './packages/SMaskLayer'
import SProvinceCityQu from './packages/SProvinceCityQu'
import SRegCheck from './packages/SRegCheck'
import STablePage from './packages/STablePage'
import STableSearch from './packages/STableSearch'
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
