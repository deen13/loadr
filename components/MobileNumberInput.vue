<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-text-field v-model="number" :rules="[positive, isNumber]" :label="label" outlined required>
    <template v-slot:prepend-inner>
      <v-icon class="mr-2" :disabled="number <= 0" @click="number = number - parse(step)">
        {{ mdiMinus }}
      </v-icon>
    </template>

    <template v-slot:append>
      <v-icon :disabled="number >= 300" @click="number = number + parse(step)">
        {{ mdiPlus }}
      </v-icon>
    </template>
  </v-text-field>
</template>

<script>
import { mdiPlus, mdiMinus } from '@mdi/js'
import numeral from 'numeral'

export default {
  props: {
    value: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    step: {
      type: String,
      default: () => '1'
    }
  },
  data: () => ({
    positive: v => !v || numeral(v).value() >= 0 || 'Negative Versuche nehmen wir nicht. 😁',
    isNumber: v => !isNaN(v) || 'Damit kann ich nichts anfangen. 🤔',
    mdiPlus,
    mdiMinus
  }),
  methods: {
    parse(value) {
      return numeral(value).value()
    }
  },
  computed: {
    number: {
      get: function() {
        return this.value
      },
      set: function(value) {
        if (value) {
          this.$emit('input', this.parse(value))
        } else {
          this.$emit('input', 0)
        }
      }
    }
  }
}
</script>
