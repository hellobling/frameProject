import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import user from './modules/user'
import animal from './modules/animal'
import * as actions from './actions'

Vue.use(Vuex)
const store = new Vuex.Store({
  actions,
  modules: {
    user,
    animal,
    common
  }
})

export default store
