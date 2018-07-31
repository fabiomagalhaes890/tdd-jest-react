'use strict'

export const initialState = 'SHOW_ALL'

const visibilityFilter = (state = initialState, action) => {
  return action.type === 'SET_VISIBILITY_FILTER' ? action.payload.filter : state
}

export default visibilityFilter
