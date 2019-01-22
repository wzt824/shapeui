import STextHover from './src/s-text.css'
STextHover.install =function (Vue,opts) {
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
export default STextHover
