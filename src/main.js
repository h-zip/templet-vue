import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router/index'
import Vonic from './components/vonic/index'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vonic)
Vue.use(Vonic.app, {
  router,
  pushMehod: 'push', // push, replace
  pageTransition: 'ios'
})
// let app = new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
// Vue.use(app)
