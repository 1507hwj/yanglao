import axios from 'axios'
import {
  MessageBox,
  Message
} from 'element-ui'
import store from '@/store'
import {
  getToken
} from '@/utils/auth'

// 设置默认请求地址，所有请求从这里发起
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // baseURL: 'http://120.25.214.5:8081',
  // http://120.25.214.5:8081
  // http://192.168.1.171:8081
  // http://192.168.1.10:8081
  timeout: 3000
})

// 请求拦截
request1.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log('111', error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截
request1.interceptors.response.use(
  /**
   * 如果想获得http信息， 如头信息或状态信息
   *  return  response => response
   */

  /**
   * 通过自定义代码确定请求状态
   * 通过HTTP状态码来判断状态
   */
  response => {
    const res = response.data

    // 如果返回的不是1，就提示error
    // window.console.log('res', res, 'res.code', res.code); //res为登录成功后返回的数据
    if (!res.code) {
      return res
    }
    if (res.code != 20000) {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code == 401 || res.code == 403 || res.code == 404) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }

      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      // Message({
      //   message: '登录成功！',
      //   type: 'success',
      //   duration: 2 * 1000
      // })
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

// 设置默认请求地址，所有请求从这里发起
const request2 = axios.create({
  baseURL: 'http://192.168.1.10:8081',
  // http://192.168.1.171:8081
  // http://192.168.1.10:8081
  timeout: 3000
})

// 请求拦截
request2.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log('111', error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截
request2.interceptors.response.use(
  /**
   * 如果想获得http信息， 如头信息或状态信息
   *  return  response => response
   */

  /**
   * 通过自定义代码确定请求状态
   * 通过HTTP状态码来判断状态
   */
  response => {
    const res = response.data

    // 如果返回的不是1，就提示error
    // window.console.log('res', res, 'res.code', res.code); //res为登录成功后返回的数据
    if (!res.code) {
      return res
    }
    if (res.code != 1) {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code == 401 || res.code == 403 || res.code == 404) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }

      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      // Message({
      //   message: '登录成功！',
      //   type: 'success',
      //   duration: 2 * 1000
      // })
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)


export {
  request,
  request1,
  request2
}
