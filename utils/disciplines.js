const disciplines = Object.freeze({
  0: 'MU',
  1: 'DIP',
  2: 'PU',
  3: 'SQUAT'
})

const disciplineIdByText = string => parseInt(Object.keys(disciplines).find(key => disciplines[key] === string))

export { disciplines, disciplineIdByText }
