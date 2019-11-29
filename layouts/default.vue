<template>
  <v-app dark>
    <v-app-bar app v-model="toolbar">
      <v-toolbar-title class="headline text-uppercase pr-4">
        <span>MCC</span>
        <span class="font-weight-light ml-1">MACHBAR</span>
      </v-toolbar-title>

      <v-btn text nuxt to="/">
        <v-icon>{{ mdiWeightKilogram }}</v-icon>
        <mq-layout mq="md+">
          <span class="ml-2">Scheibenstecker</span>
        </mq-layout>
      </v-btn>

      <v-btn text nuxt to="/management">
        <v-icon>{{ mdiAccountPlus }}</v-icon>
        <mq-layout mq="md+">
          <span class="ml-2">Verwaltung</span>
        </mq-layout>
      </v-btn>

      <v-spacer></v-spacer>

      <mq-layout mq="md+">
        <v-slide-x-reverse-transition>
          <v-btn text small color="#373737" @click="toolbar = false">
            <v-icon color="white" size="24px" v-if="toolbar">
              {{ mdiFullscreen }}
            </v-icon>
          </v-btn>
        </v-slide-x-reverse-transition>
      </mq-layout>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mdiFullscreen, mdiViewDashboard, mdiWeightKilogram, mdiAccountPlus, mdiLogout } from '@mdi/js'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Toolbar',
  data: () => ({
    toolbar: true,
    mdiFullscreen,
    mdiViewDashboard,
    mdiWeightKilogram,
    mdiAccountPlus
  }),
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}
</script>
