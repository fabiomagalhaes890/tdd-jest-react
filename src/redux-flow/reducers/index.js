'use strict'

import { combineReducers } from 'redux'
import todos from './todos/index'
import visibilityFilter from './visibility-filter/index'
import address from './adress/index'

export default combineReducers({
  todos,
  visibilityFilter,
  address
})
