import Vue from 'vue'
import Vonic from './src/index'
// import sess from "./src/sess"
// let vonic = {}
// sess.clear()
// const beforeEach = (toRoute, fromRoute, next) => {
//   // const to = toRoute.path
//   // const from = fromRoute.path
//   // const scrollTop = Vonic.app.pageContentScrollTop()
//   //
//   // let h = sess.get(to)
//   // if (h && h.history) {
//   //   Vonic.app.nextDirection('back')
//   //   h.history = false
//   //   sess.set(to, h)
//   // } else {
//   //   sess.set(from || '/', {
//   //     history: true,
//   //     scrollTop: scrollTop
//   //   })
//   //   Vonic.app.nextDirection('forward')
//   // }
//
//   // const tabbarRoutes = [
//   //   // '/advanced/tabbar/home',
//   //   // '/advanced/tabbar/discount',
//   //   // '/advanced/tabbar/cart',
//   //   // '/advanced/tabbar/user'
//   // ]
//   //
//   // if (from && tabbarRoutes.indexOf(from) > -1) {
//   //   sess.set(from, {
//   //     history: false,
//   //     scrollTop: scrollTop
//   //   })
//   // }
//
//   // 某些页面定制 page transition direction
//   // if (
//   //   (from === '/' && to === '/home') ||
//   //   (from === '/home' && to === '/advanced/tabbar/home') ||
//   //   (from === '/advanced/tabbar/user' && to === '/pageFromTabbar')
//   // ) {
//   //   Vonic.app.nextDirection('forward')
//   // }
//   //
//   // if (
//   //   (to === '/' && from === '/home') ||
//   //   (to === '/home' && from === '/advanced/tabbar/home') ||
//   //   (to === '/advanced/tabbar/user' && from === '/pageFromTabbar')
//   // ) {
//   //   Vonic.app.nextDirection('back')
//   // }
//
//   next()
// }

// const afterEach = (toRoute, fromRoute) => {
//   const to = toRoute.path
//   const from = fromRoute.path
//   console.log(from + '------->' + to)
//   // [Custom Business] Never use history scrollTop when '/' => '/home'
//   if (from === '/' && to === '/tabbar/index') {
//     sess.set('navi',[to])
//   }else {
//     let arr = sess.get('navi')
//     arr.push(to)
//     sess.set(arr)
//   }
//
//   // const h = sess.get(to)
//   // if (h && h.scrollTop) {
//   //   Vue.nextTick(() => {
//   //     Vonic.app.pageContentScrollTop(h.scrollTop)
//   //   })
//   // }
// }
// vonic.beforeEach = beforeEach
// vonic.afterEach = afterEach
// vonic.Vonic = Vonic
export default Vonic
