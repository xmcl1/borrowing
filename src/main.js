// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 方法一：
// import httpInterceptor from "./router/httpInterceptor.js";
// httpInterceptor(router)//路由拦截
// 方法二：
import "./router/httpInterceptor.js";//路由拦截


Vue.config.productionTip = false

Vue.prototype.axios = axios
Vue.use(ElementUI)

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
