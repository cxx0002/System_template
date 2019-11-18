import axios from "axios";
import store from '../store'
import { Message } from 'view-design'
axios.defaults.baseURL = process.env.API_ROOT;
axios.default.time = 30000;
axios.default.header = { "x-user-token": store.state.header }
/**
 * 设置请求拦截
 */
axios.interceptors.request.use(
    config => {
        let token = store.state.token;
        if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
          
            config.headers.token = `${token}`;
        }
        return config;
    },
    err => {
        this.$router.push("/login")
        return Promise.reject(err);
    }
);

axios.interceptors.response.use(function (response) {
    if (response.status >= 400) {
        localStorage.clear();// 删除已经失效或过期的token（不删除也可以，因为登录后覆盖）
        router.replace({
            path: '/login', // 到登录页重新获取token
            query: {
                //回到当前页面
                redirect: router.currentRoute.fullPath
            }
        })
    }
    return response
}, function (error) {
    if (error.response) {
        if (error.response.status === 403) {
            Message.error('登录过期');
            localStorage.clear();//清除信息
            router.replace({
                path: '/login' // 到登录页重新获取token
            })
        } else if (error.response.status === 404) {
            console.log('aaa')
            Message.error('参数错误');
        } else if (error.response.status === 405) {
            Message.warning('权限不足,请联系管理员');
            router.replace({
                path: '/405',
            })
        } else if (error.response.status === 500) {
            Message.error('服务器异常');
        }
    }
    return Promise.reject(error)
})


/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params, { headers: { 'Content-Type': 'application/json' } })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}
