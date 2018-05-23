// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 下面的叼毛是引进来的vuex啦
import vuexStore from './store'   // 新增


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:vuexStore,//我就是那个引进来的叼毛并要挂载到实例上使用啊
  components: { App },
  template: '<App/>'
})
