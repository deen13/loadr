import weights from './weights'

/**
 * This method calculates the plates to help the loaders getting their job
 * done faster and free of mistakes.
 *
 * @param weight the weight used for the attempt
 * @param squat whether it is a barbell discipline or not
 * @returns Array of the plates which should be used by the loaders
 * @see https://github.com/bcnzer/spotter-powerlifting/blob/master/components/runcomp/platedisplay.vue
 */
const calculatePlates = (weight, squat) => {
  if (squat && weight < 20) {
    throw 'You have to squat at least the bar'
  }

  if (weight < 0) {
    throw 'Weight needs to be greater than 0'
  }

  const start = {
    remainingWeight: squat ? (weight - 20) / 2 : weight,
    plates: []
  }

  const reducer = (accumulator, plate) => {
    const times = parseInt(accumulator.remainingWeight / plate)
    const plates = Array(times).fill(plate)

    return {
      remainingWeight: accumulator.remainingWeight % plate,
      plates: accumulator.plates.concat(plates)
    }
  }

  return Object.values(weights).reduce(reducer, start).plates
}

export { calculatePlates }
