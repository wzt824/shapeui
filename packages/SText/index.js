import SText from './src/s-text.css'
SText.install =function (Vue,opts) {
  Vue.directive("SText",{
    bind(el){
      el.style.animation = "shake-it .5s reverse infinite "
    }
  })
}
export default SText
