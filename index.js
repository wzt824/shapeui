
import SAddCarts from './packages/SAddCarts'
import SProvinceCityQu from './packages/SProvinceCityQu'
import SRegCheck from './packages/SRegCheck'
import SBreathingLight from './packages/SBreathingLight'
import SAccordionEffect from './packages/SAccordionEffect'
import SMaskLayer from './packages/SMaskLayer'
import STableSearch from './packages/STableSearch'
import STablePage from './packages/STablePage'
import STableAll from './packages/STableAll'
import STableBasic from './packages/STableBasic'
import Sclick from "./packages/Sclick"
import Suploading from "./packages/Suploading"
import Sloadingimages from "./packages/Sloadingimages"

import MyTab from "./packages/Stab"
import Smenu from "./packages/Smenu"
import SClassifyMenu from "./packages/SClassifyMenu"
import SSide from "./packages/Sside"
import SAlertClose from "./packages/SAlertClose"
import SInput from "./packages/Sinput"
import SRadio from "./packages/Sradio"
import SCheckbox from "./packages/Scheckbox"
import SForm from "./packages/Sform"
import SEchartsBar from "./packages/SechartsBar"
import SEchartsLine from "./packages/SechartsLine"
import SEchartsPie from "./packages/SechartsPie"
import SLoading from "./packages/Sloading"
import SShoppingCarts from "./packages/SshoppingCarts"
import SButton from "./packages/Sbutton"

import SAccount from "./packages/SAccount"
import SimpleSwiper from "./packages/SimpleSwiper"
import SSwiperFadeInOut from "./packages/SSwiperFadeInOut"
import SSwiperAll from "./packages/SwiperAll"
import SMirror from "./packages/SMirror"
import SFall from "./packages/SFall"
import SProgressBarOne from "./packages/SProgressBarOne"
import SPassStrong from "./packages/SPassStrong"
import SProgressBarTwo from "./packages/SProgressBarTwo"
import SProgressBarThree from "./packages/SProgressBarThree"
import STreeSide from "./packages/STreeSide"

import SClassify from './packages/SClassify'
import SClassifyB from './packages/SClassifyB'
import SCartA from './packages/SCartA'
import SCartB from './packages/SCartB'
import SCartC from './packages/SCartC'
import SProductlist from './packages/SProductlist'
import SLoginForm from './packages/SLoginForm'
import SRegForm from './packages/SRegForm'
import SText from './packages/SText'
import STextHover from './packages/STextHover'
import STextDown from './packages/STextDown'
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
