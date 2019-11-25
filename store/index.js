import firebase from 'firebase/app'
import 'firebase/auth'

export const state = () => ({
  user: undefined
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  }
}

export const actions = {
  signIn({ commit }, payload) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => commit('setUser', { id: user.uid, email: user.email }))
  },
  autoSignIn({ commit }, payload) {
    commit('setUser', { id: payload.uid, email: payload.email })
  }
}

export const getters = {
  user(state) {
    return state.user
  },
  isAuthenticated(state) {
    return !!state.user
  }
}
