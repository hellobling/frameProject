import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import animal from './modules/animal'
import * as actions from './actions'

Vue.use(Vuex)
const store = new Vuex.Store({
  actions,
  modules: {
    user,
    animal
  }
})

export default store
