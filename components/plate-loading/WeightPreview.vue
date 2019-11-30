<template>
  <v-row justify="center" align="center">
    <div id="plates-wrapper">
      <template v-for="plate in plates">
        <div v-if="plate === weights.RED" class="kg25 weight plate plate-kg25"></div>
        <div v-else-if="plate === weights.BLUE" class="kg20 weight plate plate-kg20"></div>
        <div v-else-if="plate === weights.YELLOW" class="kg15 weight plate plate-kg15"></div>
        <div v-else-if="plate === weights.GREEN" class="kg10 weight plate plate-kg10"></div>
        <div v-else-if="plate === weights.WHITE" class="kg5 weight plate plate-kg5"></div>
        <div v-else-if="plate === weights.BLACK" class="kg2d5 weight plate plate-kg2d5"></div>
        <div v-else-if="plate === weights.SILVER" class="kg1d25 weight plate plate-kg1d25">
          1.25
        </div>
        <div v-else-if="plate === weights.MINI" class="kg0d5 weight plate plate-kg0d5">
          0.5
        </div>
        <div v-else-if="plate === weights.MICRO" class="kg0d25 weight plate plate-kg0d25">
          0.25
        </div>
      </template>
    </div>
    <h3 id="textual" class="pl-5 display-3">{{ value.toLocaleString('de-DE') }} Kilogramm</h3>
  </v-row>
</template>

<script>
import { calculatePlates } from './platesCalculator'
import weights from './weights'

export default {
  props: {
    value: {
      type: Number,
      default: 0,
      validator: weight => weight > 0
    },
    squat: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({ weights }),
  computed: {
    plates() {
      return calculatePlates(this.value, this.squat)
    }
  }
}
</script>

<style>
.weight:after {
  /*font-family: icomoon;*/
  font-size: 50px;
  line-height: 200px;
  color: #fff;
}

.kg25:after {
  /*content: "\e907";*/
}

.kg20:after {
  /*content: "\e906";*/
}

.kg15:after {
  /*content: "\e905";*/
  line-height: 170px;
  color: #000;
}

.kg10:after {
  /*content: "\e904";*/
  line-height: 145px;
}

.kg5:after {
  /*content: "\e903";*/
  color: #000;
  font-size: 50px;
  line-height: 110px;
}

.kg2d5:after {
  /*content: "\e902";*/
  color: #fff;
  font-size: 45px;
  line-height: 80px;
}

.kg1d25:after {
  /*content: "\e908";*/
  font-size: 35px;
  line-height: 40px;
  color: #000;
}

.kg0d5:after {
  /*content: "\e900";*/
  color: #000;
  font-size: 35px;
  line-height: 40px;
}

.kg0d25:after {
  /*content: "\e901";*/
  color: #000;
  font-size: 35px;
  line-height: 40px;
}

.plate {
  width: 20px;
  height: 200px;
  text-align: center;
  border-style: solid;
  border-color: gray;
  border-width: 1px;
  border-radius: 5px;
  font-size: 14px;
  padding-bottom: 3px;
  display: inline-block;
  vertical-align: middle;
  writing-mode: tb-rl;
  transform: rotate(-180deg);
}

.plate-kg25 {
  background: #ff0000;
}

.plate-kg20 {
  background: #1673b6;
}

.plate-kg15 {
  background: #edd406;
  height: 170px;
}

.plate-kg10 {
  background: #007555;
  height: 140px;
}

.plate-kg5 {
  background: #f0f0f0;
  height: 110px;
}

.plate-kg2d5 {
  background: #3d3d3d;
  height: 80px;
}

.plate-kg1d25 {
  background: #bebebe;
  color: black;
  height: 40px;
}

.plate-kg0d5 {
  background: #bebebe;
  color: black;
  height: 40px;
}

.plate-kg0d25 {
  background: #bebebe;
  color: black;
  height: 40px;
}
</style>
