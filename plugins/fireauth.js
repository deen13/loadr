import firebase from 'firebase/app'
import 'firebase/auth'

export default context => {
  return firebase.auth().onAuthStateChanged(user => {
    if (user) {
      context.store.dispatch('autoSignIn', user)
    }
  })
}
