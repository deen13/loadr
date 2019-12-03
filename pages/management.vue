<template>
  <v-container>
    <v-row>
      <v-img :src="require('@/assets/mmc-logo.png')" />
    </v-row>
    <v-row class="form-container mx-2" align="center">
      <v-col cols="12">
        <v-bottom-navigation v-model="discipline" grow color="primary" style="border-radius: 10px">
          <v-btn v-for="discipline in disciplines" :key="discipline.text">
            <span>{{ discipline.text }}</span>
            <v-icon>{{ discipline.icon }}</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </v-col>

      <v-col cols="9" class="fill-height">
        <mobile-number-input v-model="weight" label="Kilogramm" step="5"></mobile-number-input>
      </v-col>
      <v-col cols="3" class="fill-height">
        <v-btn color="#61956D" fab dark @click="submitNextAttempt" :loading="loading">
          <v-icon>{{ mdiCheck }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MobileNumberInput from '@/components/MobileNumberInput.vue'
import { firestore } from '../plugins/firebase'
import { disciplineIdByText, disciplines } from '../utils/disciplines'
import { mdiCheck, mdiNumeric1Circle, mdiNumeric2Circle, mdiNumeric3Circle, mdiNumeric4Circle } from '@mdi/js'

export default {
  components: { MobileNumberInput },
  middleware: 'auth',
  data: () => ({
    mdiCheck,
    loading: false,
    disciplines: [
      { text: 'MU', icon: mdiNumeric1Circle },
      { text: 'Dip', icon: mdiNumeric2Circle },
      { text: 'Pull Up', icon: mdiNumeric3Circle },
      { text: 'Squat', icon: mdiNumeric4Circle }
    ]
  }),
  methods: {
    submitNextAttempt() {
      this.loading = true

      firestore
        .collection('/attempts')
        .add({
          weight: this.weight,
          discipline: disciplines[this.discipline],
          timestamp: new Date()
        })
        .finally(() => (this.loading = false))
    }
  },
  async asyncData() {
    const snapshot = await firestore
      .collection('attempts')
      .orderBy('timestamp', 'desc')
      .limit(1)
      .get()

    const event = snapshot.docs.pop().data()

    return {
      weight: event.weight,
      discipline: disciplineIdByText(event.discipline)
    }
  }
}
</script>

<style scoped>
.form-container {
  bottom: 0;
  position: fixed;
  right: 0;
  left: 0;
  height: 40%;
}

.fill-height {
  height: 100%;
}
</style>
