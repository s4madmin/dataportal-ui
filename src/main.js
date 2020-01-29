import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import vSelect from 'vue-select'
import VueSession from 'vue-session'

Vue.use(VueSession)

import 'vue-select/dist/vue-select.css';

Vue.component('v-select', vSelect)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

