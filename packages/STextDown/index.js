import STextDown from './src/s-text.css'
STextDown.install =function (Vue,opts) {
  Vue.directive("STextDown",{
    bind(el){
      el.addEventListener("touchstart",()=>{
        console.info(12345)
        el.style.animation = "shake-it .5s reverse infinite"
      })
      el.addEventListener("touchend",()=>{
        el.style.animation = null
      })
    }
  })
}
export default STextDown
