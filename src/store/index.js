import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import common from "./common.js";

import settings from './modules/settings'
import user from './modules/user'

import tagsView from './modules/tagsView'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common,
    app,
    settings,
    user,
    tagsView
  },
  getters
})

export default store
