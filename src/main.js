import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

import i18n from './lang'

import {
  mockXHR
} from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

// 引入axios,就不需要每个页面都引入
import axios from 'axios'

const instance1 = axios.create({
  baseURL: "http://39.107.33.189:8081",
})
const instance2 = axios.create({
  baseURL: "http://192.168.1.171:8081",
})
const instance3 = axios.create({
  baseURL: "http://192.168.1.10:8081",
})

Vue.prototype.$axios = axios;
Vue.prototype.$instance1 = instance1;
Vue.prototype.$instance2 = instance2;
Vue.prototype.$instance3 = instance3;



// set ElementUI lang to EN
Vue.use(ElementUI)

// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

import {
  getToken
} from '@/utils/auth' // get token from cookie

let token = getToken()
console.log('token1', token)

axios.defaults.headers.common['token'] = token;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'; //配置请求头



//添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  // let user = JSON.parse(window.sessionStorage.getItem('access-user'));
  let user = getToken()
  console.log(user)
  if (user) {
    token = user.token;
  }
  config.headers.common['token'] = token;
  //console.dir(config);
  return config;
}, function (error) {
  // Do something with request error
  console.info("error: ");
  console.info(error);
  return Promise.reject(error);
});


// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  if (response.data && response.data.code) {
    if (parseInt(response.data.code) === 108 || parseInt(response.data.code) === 109 || response.data.msg === 'TOKEN失效，请重新登录' || response.data.msg === 'TOKEN不存在') {
      //未登录
      response.data.msg = "登录信息已失效，请重新登录";
      // road.$message.error(response.data.msg);
      this.$message({
        message: response.data.msg,
        type: 'success'
      })
      // routerIndex.push('/login');
      this.$router.push({
        path: "login"
      })
    }
    if (parseInt(response.data.code) === -1) {
      road.$message.error("请求失败");
    }
  }
  return response;
}, function (error) {
  // Do something with response error
  console.dir(error);
  // road.$message.error("服务器连接失败");
  this.$message({
    message: "服务器连接失败",
    type: 'success'
  })
  return Promise.reject(error);
})


new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
