import base from './base'
import baseConfig from './config'
import _ from 'lodash'
// const dataStr = ['put', 'post', 'patch', 'delete']
const paramsStr = ['get'];
let request = function (url, method, args) {
    let config = _.cloneDeep(baseConfig)
    paramsStr.includes(method) ? config.params = args : config.data = args
    return base.axiosService(url, method, config)
}

export default {request: request}