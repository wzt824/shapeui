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
import SUploading from "./Suploading"
import imgloading from "./Sloadingimages"
import Sclick from "./Sclick"
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
  Vue.component(SUploading.name,SUploading)
  Vue.component(imgloading.name,imgloading)
  Vue.component(Sclick.name,Sclick)
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
