'use strict'

const Counter = (state = 0, action = {}) => (
  action.type === 'INCREMENT' ? state + 1 : action.type === 'DECREMENT' ? state - 1 : state
)

export default Counter
