import { disciplines, disciplineIdByText } from '../disciplines'
import each from 'jest-each/build/index'

describe('disciplines.js', () => {
  each([
    ['MU', 0],
    ['DIP', 1],
    ['PU', 2],
    ['SQUAT', 3]
  ]).test('%s should result in %s', (text, expectedId) => {
    const id = disciplineIdByText(text)

    expect(id).toEqual(expectedId)
  })
})
