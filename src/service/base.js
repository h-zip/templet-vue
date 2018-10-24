import axios from 'axios'

// axios.defaults.baseURL = 'https://api.example.com'
// axios.defaults.timeout = 10000

let axiosService = function (url, method, config) {
    return axios[method](url, config)
}
export default {axiosService: axiosService}