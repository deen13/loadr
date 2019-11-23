<template>
  <v-row justify="center">
    <v-col cols="12" class="py-2">
      <v-row justify="center">
        <weight-preview :weight="140" squat></weight-preview>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import WeightPreview from '../components/plate-loading/WeightPreview'

export default {
  components: { WeightPreview }
}
</script>
