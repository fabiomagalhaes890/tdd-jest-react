'use strict'

import { combineReducers } from 'redux'
import todos from './todos/index'
import visibilityFilter from './visibility-filter/index'

export default combineReducers({
  todos,
  visibilityFilter
})
