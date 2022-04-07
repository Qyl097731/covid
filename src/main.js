import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dataV from '@jiaminghi/data-view'
import request from '@/utils/request'
import "@/assets/css/globle.css"
Vue.config.productionTip = false


new Vue({
  router,
  store,
  dataV,
  request,
  render: h => h(App)
}).$mount('#app')
