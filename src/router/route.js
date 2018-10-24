import component from './component'
import path from './path'

const route = [
  {path: '/', component: component.pageA.home},
  {name: 'pageA.home', path: path.pageA.home, component: component.pageA.home, prop: true, meta: {}},
  {name: 'pageA.detail', path: path.pageA.detail, component: component.pageA.detail, prop: true, meta: {}},
  {name: 'pageB.home', path: path.pageB.home, component: component.pageB.home, prop: true, meta: {}},
  {name: 'pageB.detail', path: path.pageB.detail, component: component.pageB.detail, prop: true, meta: {}}
]
export default route
