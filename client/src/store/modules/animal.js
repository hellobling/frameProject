import * as types from '../mutation-types'

const state = {
  animalList: []
}
const mutations = {
  [types.SET_ANIMAL_LIST] (state, data) {
    state.animalList = data
  }
}

export default {
  state,
  mutations
}
