import firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.NUXT_ENV_API_KEY,
  projectId: process.env.NUXT_ENV_PROJECT_ID,
  authDomain: `${process.env.NUXT_ENV_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `${process.env.NUXT_ENV_PROJECT_ID}.firebaseio.com`
}

const app = firebase.initializeApp(firebaseConfig)

export const firestore = app.firestore()
