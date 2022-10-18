import Vue from 'vue'
import App from './App'
import VueMask from 'v-mask'
Vue.use(VueMask)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
