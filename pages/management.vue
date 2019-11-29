<template>
  <v-container>
    <v-row>
      <v-img :src="require('@/assets/mmc-logo.png')" />
    </v-row>
    <v-row class="form-container mx-2" align="center">
      <v-col cols="12">
        <v-bottom-navigation :value="discipline" grow color="primary" style="border-radius: 10px">
          <v-btn>
            <span>MU</span>
            <v-icon>mdi-numeric-1-circle</v-icon>
          </v-btn>

          <v-btn>
            <span>Dip</span>
            <v-icon>mdi-numeric-2-circle</v-icon>
          </v-btn>

          <v-btn>
            <span>Pull Up</span>
            <v-icon>mdi-numeric-3-circle</v-icon>
          </v-btn>

          <v-btn>
            <span>Squat</span>
            <v-icon>mdi-numeric-4-circle</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </v-col>

      <v-col cols="9" class="fill-height">
        <mobile-number-input v-model="weight" label="Kilogramm" step="5"></mobile-number-input>
      </v-col>
      <v-col cols="3" class="fill-height" @click="submitNextAttempt">
        <v-btn color="#61956D" fab dark>
          <v-icon>mdi-check</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MobileNumberInput from '@/components/MobileNumberInput.vue'
import { firestore } from '../plugins/firebase'

export default {
  components: { MobileNumberInput },
  middleware: 'auth',
  data: () => ({
    discipline: 1,
    weight: 0
  }),
  methods: {
    submitNextAttempt() {
      firestore.collection('/attempts').add({
        weight: this.weight,
        discipline: this.discipline
      })
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
