import VueRouter from 'vue-router'
import route from './route'
import Vonic from '../components/vonic/index'
import sess from '../components/vonic/src/sess'
import path from './path'
const router = new VueRouter({routes: route})

router.beforeEach((toRoute, fromRoute, next) => {
  const to = toRoute.path
  const from = fromRoute.path
  console.log('before' + from + '------->' + to)
  if (from === '/' && to === '/') {
    const firstOpen = sess.get('firstOpen')
    const token = sess.get('token')
    console.log(token)
    if (firstOpen === null) {
      sess.set('navi',[path.guide.index])
      next(path.guide.index)
      return
    }
    if (token === null) {
      sess.set('navi',[path.login.index])
      next(path.login.index)
      return
    }
  }
  next()
})
router.afterEach((toRoute, fromRoute) => {
  const to = toRoute.path
  const from = fromRoute.path
  console.log('after' + from + '------->' + to)
  // [Custom Business] Never use history scrollTop when '/' => '/home'
  // if (from === '/' && to === '/') {
  //   sess.set('navi',[to])
  //   console.log(sess.get('navi'))
  // }else {
  // }
})
router.navi_push = function (path) {
  let arr = sess.get('navi')
  arr.push(path)
  sess.set('navi',arr)
  console.log(arr)
  // Vonic.app.nextDirection('forward')
  router.forward(path)
}
router.navi_pop = function () {
  let arr = sess.get('navi')
  arr.splice(arr.length-1,1)
  let last = arr[arr.length-1]
  sess.set('navi',arr)
  console.log(arr)
  // Vonic.app.nextDirection('back')
  router.back(last)
}
router.navi_changeRoot = function (path) {
  sess.set('navi',[path])
  // Vonic.app.nextDirection('no')
  router._push(path)
}
export default router
