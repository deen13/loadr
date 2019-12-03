<template>
  <v-row justify="center" align="center" style="height: 100%">
    <weight-preview :value="weight" :squat="discipline === 'SQUAT'"></weight-preview>
  </v-row>
</template>

<script>
import WeightPreview from '../components/plate-loading/WeightPreview'
import { firestore } from '../plugins/firebase'

// TODO: setup github actions

export default {
  components: { WeightPreview },
  async asyncData() {
    const snapshot = await firestore
      .collection('attempts')
      .orderBy('timestamp', 'desc')
      .limit(1)
      .get()

    return snapshot.docs.pop().data()
  },
  mounted() {
    firestore
      .collection('attempts')
      .orderBy('timestamp', 'desc')
      .limit(1)
      .onSnapshot(snapshot => {
        const event = snapshot.docs.pop().data()

        this.$set(this, 'weight', event.weight)
        this.$set(this, 'discipline', event.discipline)

        //TODO: Updated Notification
      })
  }
}
</script>
