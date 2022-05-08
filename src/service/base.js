import axios from "axios";
import store from "../mobx/store";

const ERR_OK = 0
const baseURL = '/'
axios.defaults.baseURL = baseURL

axios.interceptors.request.use(config => {
    store.loding = true
    return config
}, error => {
    store.loding = false
    return Promise.reject(error)
})

axios.interceptors.response.use(res => {
    store.loding = false
    const serverData = res.data
    if (serverData.code === ERR_OK) {
        return serverData.result
    }
}, error => {
    store.loding = false
    return Promise.reject(error)
})

export function get(url, params) {
    return axios.get(url, {
        params
    }).then(res => {
        return res
    }).catch( e => {
        console.log(e);
    })
}