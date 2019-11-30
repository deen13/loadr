<template>
  <v-container>
    <v-row>
      <v-img :src="require('@/assets/mmc-logo.png')" />
    </v-row>
    <v-row>
      <v-col class="login-container">
        <v-form v-model="valid">
          <v-text-field v-model="email" :prepend-icon="mdiAt" name="username" label="E-Mail" type="text" :rules="emailRules" @keyup.enter="login" />
          <v-text-field v-model="password" :prepend-icon="mdiLock" name="password" label="Passwort" type="password" :rules="passwordRules" @keyup.enter="login" />

          <v-btn min-width="100%" rounded color="primary" @click.native="login" :loading="loading" :disabled="!valid">
            Login
          </v-btn>
        </v-form>
      </v-col>

      <v-snackbar v-model="loginFailed" color="error" bottom>
        {{ loginFailedMessage }}
      </v-snackbar>
    </v-row>
  </v-container>
</template>

<script>
import { mdiLock, mdiAt } from '@mdi/js'
import { mapActions } from 'vuex'
import firebase from 'firebase'

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
  name: 'Login',
  data: () => ({
    valid: false,
    loading: false,
    loginFailed: false,

    email: null,
    password: null,

    emailRules: [v => !!v || 'Wir brauchen deine E-Mail um dich einzuloggen.', v => EMAIL_REGEX.test(v) || 'Irgendwas stimmt mit der E-Mail nicht. 🤔'],
    passwordRules: [v => !!v || 'Wir brauchen dein Passwort um dich einzuloggen. Außer uns beiden sollte das aber keiner kennen. 🤫'],
    loginFailedMessage: 'Wir konnten dich leider nicht einloggen. Das Passwort oder die E-Mail ist falsch. 😢',

    mdiLock,
    mdiAt
  }),
  methods: {
    ...mapActions(['signIn']),
    login() {
      if (this.valid) {
        this.loading = true

        this.signIn({ email: this.email, password: this.password })
          .then(() => this.$router.push('/management'))
          .catch(error => (this.loginFailed = true))
          .finally(() => (this.loading = false))
      }
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push('/management')
      }
    }).bind(this)
  }
}
</script>

<style scoped>
.login-container {
  bottom: 0;
  position: fixed;
  right: 0;
  left: 0;
  height: 40%;
}
</style>
