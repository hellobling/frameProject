import * as types from '../mutation-types'

const state = {
  userList: []
}
const mutations = {
  [types.SET_USER_LIST] (state, data) {
    state.userList = data
  }
}

export default {
  state,
  mutations
}
