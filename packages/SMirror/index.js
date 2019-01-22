import SMirror from "./src/SMirrors"
SMirror.install=function(Vue,objs){
  Vue.component(SMirror.name,SMirror)
}
export default SMirror
