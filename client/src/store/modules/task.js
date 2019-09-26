import * as types from '../mutation-types'

const state = {
  list: []
}
const mutations = {
  [types.SET_TASK_LIST] (state, data) {
    state.list = data
  }
}

export default {
  state,
  mutations
}
