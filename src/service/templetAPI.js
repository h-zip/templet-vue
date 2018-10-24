import service from './service'
import url from './url'
let templeteAPI = {
    a:{
        get: (args) => { return service.request(url.a, 'get', args) },
        post: (args) => { return service.request(url.a, 'post', args) },
        put: (args) => { return service.request(url.a, 'put', args) },
        delete: (args) => { return service.request(url.a, 'delete', args) }
    }
}

export default templeteAPI