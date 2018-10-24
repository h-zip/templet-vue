import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router/index'
Vue.config.productionTip = false
Vue.use(VueRouter)
console.log(router)
let app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Vue.use(app)
