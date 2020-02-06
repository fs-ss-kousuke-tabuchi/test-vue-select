import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

new Vue({
  render: h => h(App),
}).$mount('#app')
