export default function({ store, redirect }) {
  if (!store.getters.isAuthenticated) {
    redirect('/login')
  }
}
