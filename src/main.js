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

import {
  mockXHR
} from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

// 引入axios,就不需要每个页面都引入
import axios from 'axios'

const instance1 = axios.create({
  baseURL: "http://120.25.214.5:8081",
})
const instance2 = axios.create({
  baseURL: "http://192.168.0.154:8081",
})

// axios.defaults.baseURL = "http://120.25.214.5:8081";
Vue.prototype.$axios = axios;
Vue.prototype.$instance1 = instance1;
Vue.prototype.$instance2 = instance2;


const getQueryOpenPositions = axios.create({
  baseURL: 'http://120.25.214.5:8081/openposition/queryOpenPositions'
});
Vue.prototype.$getQueryOpenPositions = getQueryOpenPositions;

// set ElementUI lang to EN
Vue.use(ElementUI, {
  locale
})

// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
