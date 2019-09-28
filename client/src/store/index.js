import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import * as actions from './actions'

Vue.use(Vuex)
const store = new Vuex.Store({
  actions,
  modules: {
    user
  }
})

export default store
