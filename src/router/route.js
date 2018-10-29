import component from './component'
import path from './path'

const route = [
  {path: '/', component: component.tabbar.index},
  {name: 'guide.index', path: path.guide.index, component: component.guide.index, prop: true, meta: {}},
  {name: 'tabbar.index', path: path.tabbar.index, component: component.tabbar.index, prop: true, meta: {}},
  {name: 'pageA.home', path: path.pageA.home, component: component.pageA.home, prop: true, meta: {}},
  {name: 'pageA.detail', path: path.pageA.detail, component: component.pageA.detail, prop: true, meta: {}},
  {name: 'pageB.home', path: path.pageB.home, component: component.pageB.home, prop: true, meta: {}},
  {name: 'pageB.detail', path: path.pageB.detail, component: component.pageB.detail, prop: true, meta: {}},
  {name: 'login.index', path: path.login.index, component: component.login.index, prop: true, meta: {}},
  {name: 'home.index', path: path.home.index, component: component.home.index, prop: true, meta: {}},
  {name: 'my.index', path: path.my.index, component: component.my.index, prop: true, meta: {}}
]
export default route
