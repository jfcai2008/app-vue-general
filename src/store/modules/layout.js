// to.matched[1].components.default.buttons
const state = {
  buttons: []
}
const mutations = {
  setButtons: (state, route) => {
    const view = route.matched[1].instances.default || { buttons: [] }
    state.buttons = view.buttons
  }
}
const actions = {
  setButtons({ commit, state }, route) {
    console.log(state)
    commit('setButtons', route)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
