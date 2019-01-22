
import SAddCarts from './SAddCarts'
import SProvinceCityQu from './SProvinceCityQu'
import SRegCheck from './SRegCheck'
import SBreathingLight from './SBreathingLight'
import SAccordionEffect from './SAccordionEffect'
import SMaskLayer from './SMaskLayer'
import STableSearch from './STableSearch'
import STablePage from './STablePage'
import STableAll from './STableAll'
import STableBasic from './STableBasic'
import Sclick from "./Sclick"
import Suploading from "./Suploading"
import Sloadingimages from "./Sloadingimages"

import MyTab from "./Stab"
import Smenu from "./Smenu"
import SClassifyMenu from "./SClassifyMenu"
import SSide from "./Sside"
import SAlertClose from "./SAlertClose"
import SInput from "./Sinput"
import SRadio from "./Sradio"
import SCheckbox from "./Scheckbox"
import SForm from "./Sform"
import SEchartsBar from "./SechartsBar"
import SEchartsLine from "./SechartsLine"
import SEchartsPie from "./SechartsPie"
import SLoading from "./Sloading"
import SShoppingCarts from "./SshoppingCarts"
import SButton from "./Sbutton"

import SAccount from "./SAccount"
import SimpleSwiper from "./SimpleSwiper"
import SSwiperFadeInOut from "./SSwiperFadeInOut"
import SSwiperAll from "./SwiperAll"
import SMirror from "./SMirror"
import SFall from "./SFall"
import SProgressBarOne from "./SProgressBarOne"
import SPassStrong from "./SPassStrong"
import SProgressBarTwo from "./SProgressBarTwo"
import SProgressBarThree from "./SProgressBarThree"
import STreeSide from "./STreeSide"

import SClassify from './SClassify'
import SClassifyB from './SClassifyB'
import SCartA from './SCartA'
import SCartB from './SCartB'
import SCartC from './SCartC'
import SProductlist from './SProductlist'
import SLoginForm from './SLoginForm'
import SRegForm from './SRegForm'
import SText from './SText'
import STextHover from './STextHover'
import STextDown from './STextDown'
const ShapeUI = {}

ShapeUI.install = function (Vue,opts) {
  Vue.component(SAddCarts.name,SAddCarts)
  Vue.component(SProvinceCityQu.name,SProvinceCityQu)
  Vue.component(SRegCheck.name,SRegCheck)
  Vue.component(SBreathingLight.name,SBreathingLight)
  Vue.component(SAccordionEffect.name,SAccordionEffect)
  Vue.component(SMaskLayer.name,SMaskLayer)
  Vue.component(STableSearch.name,STableSearch)
  Vue.component(STablePage.name,STablePage)
  Vue.component(STableAll.name,STableAll)
  Vue.component(STableBasic.name,STableBasic)
  Vue.component(Sclick.name,Sclick)
  Vue.component(Suploading.name,Suploading)
  Vue.component(Sloadingimages.name,Sloadingimages)

  Vue.component(MyTab.name,MyTab)
  Vue.component(Smenu.name,Smenu)
  Vue.component(SClassifyMenu.name,SClassifyMenu)
  Vue.component(SSide.name,SSide)
  Vue.component(SAlertClose.name,SAlertClose)
  Vue.component(SInput.name,SInput)
  Vue.component(SRadio.name,SRadio)
  Vue.component(SCheckbox.name,SCheckbox)
  Vue.component(SForm.name,SForm)
  Vue.component(SEchartsBar.name,SEchartsBar)
  Vue.component(SEchartsLine.name,SEchartsLine)
  Vue.component(SEchartsPie.name,SEchartsPie)
  Vue.component(SLoading.name,SLoading)
  Vue.component(SShoppingCarts.name,SShoppingCarts)
  Vue.component(SButton.name,SButton)

  Vue.component(SAccount.name,SAccount)
  Vue.component(SimpleSwiper.name,SimpleSwiper)
  Vue.component(SSwiperFadeInOut.name,SSwiperFadeInOut)
  Vue.component(SSwiperAll.name,SSwiperAll)
  Vue.component(SMirror.name,SMirror)
  Vue.component(SFall.name,SFall)
  Vue.component(SProgressBarOne.name,SProgressBarOne)
  Vue.component(SProgressBarTwo.name,SProgressBarTwo)
  Vue.component(SPassStrong.name,SPassStrong)
  Vue.component(SProgressBarThree.name,SProgressBarThree)
  Vue.component(STreeSide.name,STreeSide)


  Vue.component(SClassify.name,SClassify)
  Vue.component(SClassifyB.name,SClassifyB)
  Vue.component(SCartA.name,SCartA)
  Vue.component(SCartB.name,SCartB)
  Vue.component(SCartC.name,SCartC)
  Vue.component(SProductlist.name,SProductlist)
  Vue.component(SLoginForm.name,SLoginForm)
  Vue.component(SRegForm.name,SRegForm)
  Vue.directive("SText",{
    bind(el){
      el.style.animation = "shake-it .5s reverse infinite "
    }
  })
  Vue.directive("STextDown",{
    bind(el){
      el.addEventListener("touchstart",()=>{
        el.style.animation = "shake-it .5s reverse infinite"
      })
      el.addEventListener("touchend",()=>{
        el.style.animation = null
      })
    }
  })
  Vue.directive("STextHover",{
    bind(el){
      el.addEventListener("mouseenter",()=>{
        el.style.animation = "shake-it .5s reverse infinite "
      })
      el.addEventListener("mouseleave",()=>{
        el.style.animation = null
      })
    }
  })

}
export default ShapeUI
