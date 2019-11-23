import { calculatePlates } from '../platesCalculator'
import weights from '../weights'
import each from 'jest-each'

const MUSCLE_UP = false
const SQUAT = true
const DIP = false

describe('platesCalculator.js', () => {
  each([
    [70, SQUAT, [weights.RED]],
    [15, MUSCLE_UP, [weights.YELLOW]],
    [75, SQUAT, [weights.RED, weights.BLACK]],
    [220, SQUAT, [weights.RED, weights.RED, weights.RED, weights.RED]],
    [
      260,
      SQUAT,
      [weights.RED, weights.RED, weights.RED, weights.RED, weights.BLUE]
    ],
    [
      140,
      DIP,
      [
        weights.RED,
        weights.RED,
        weights.RED,
        weights.RED,
        weights.RED,
        weights.YELLOW
      ]
    ]
  ]).test('%s should result in %s', (weight, squat, expectedPlates) => {
    const plates = calculatePlates(weight, squat)

    expect(plates).toHaveLength(expectedPlates.length)
    expect(JSON.stringify(plates)).toEqual(JSON.stringify(expectedPlates))
  })

  it('throws error for weights lower than 20 in squat', () => {
    expect(() => {
      calculatePlates(19, SQUAT)
    }).toThrow()
  })

  it('throws error for weights lower than 0', () => {
    expect(() => {
      calculatePlates(-1, DIP)
    }).toThrow()
  })
})
