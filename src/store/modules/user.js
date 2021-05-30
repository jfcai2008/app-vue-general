// const user = {
//     state: {
//         user: {}
//     },
//     mutations: {
//         USER_INFO(state, info) {
//             state.user = info
//         }
//     },
//     actions: {
//         saveUserInfo({ commit }, data) {
//             commit('USER_INFO', data)
//         }
//     }
// };
// export default user

const state = {
    userInfo: {}
}
const mutations = {
    USER_INFO(state, info) {
        state.userInfo = info
    }
}
const actions = {
    saveUserInfo({ commit }, data) {
        commit('USER_INFO', data)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}