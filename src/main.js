// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
'use strict'

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VeeValidate from 'vee-validate'
import App from './App'
import router from './router'
import { VueBus, Focus } from 'onlyid-frontend-common'
import AxiosUtil from './axios-util'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueBus)
Vue.use(AxiosUtil)
Vue.use(Focus)
// const config = {
//   events: 'blur'
// }
// Vue.use(VeeValidate, config)

/* eslint-disable no-new */
window.vue = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
