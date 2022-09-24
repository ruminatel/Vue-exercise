import Vue from 'vue'
import App from './App.vue'

// 导入需要被全局注册的那个组件

//定义全局自定义指令
Vue.directive('color',
// {
//   bind(el,binding) {
//     el.style.color = binding.value
//   },
//   update(el,binding) {
//     el.style.color = binding.value
//   }
// }
function(el,binding) {
  el.style.color = binding.value
}
)

new Vue({
  // render 函数中，渲染的是哪个 .vue 组件，那么这个组件就叫做 “根组件”
  render: h => h(App)
}).$mount('#app')
