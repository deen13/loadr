<template>
  <v-row justify="center">
    <v-col cols="12" class="py-2">
      <v-row justify="center">
        <!-- TODO: Loading Animation -->
        <weight-preview v-if="lastEvent" :weight="lastEvent.weight" :squat="lastEvent.discipline === 'SQUAT'"></weight-preview>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import WeightPreview from '../components/plate-loading/WeightPreview'
import { firestore } from '../plugins/firebase'

export default {
  components: { WeightPreview },
  data: () => ({
    lastEvent: undefined
  }),
  mounted() {
    firestore
      .collection('attempts')
      .orderBy('timestamp')
      .onSnapshot(snapshot => {
        this.lastEvent = snapshot
          .docChanges()
          .pop()
          .doc.data()
      })
  }
}
</script>
