import Vue from 'vue'
import router from './../config/router'
import App from './App'

new Vue({
  router,
  render: h => h(App)
}).$mount('#vueApp')