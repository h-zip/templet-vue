import VueRouter from 'vue-router'
import route from './route'
import vonic from '../components/vonic/index'
const router = new VueRouter({routes: route})
router.beforeEach(vonic.beforeEach)
router.afterEach(vonic.afterEach)
// router.beforeEach((to, from, next) => {
// })
export default router
