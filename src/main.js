import Vue from 'vue'
import App from './App.vue'

import 'axios/dist/axios.min.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
