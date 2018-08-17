// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
'use strict'

import 'babel-polyfill'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style.css'
import App from './App'
import router from './router'
import { VueBus, Focus } from 'onlyid-frontend-common'
import AxiosUtil from './axios-util'
import StatsPlugin from './stats-plugin'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueBus)
Vue.use(AxiosUtil)
Vue.use(Focus)
Vue.use(StatsPlugin)

window.store = {
  debug: true,
  state: {
    disabled: false
  },
  setDisabled (newValue) {
    if (this.debug) console.log('setDisabled', newValue)
    this.state.disabled = newValue
  }
}

/* eslint-disable no-new */
window.vue = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
