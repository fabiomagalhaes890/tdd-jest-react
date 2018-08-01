'use strict'

import createReducer from '../create-reducer'
import { UPDATE_ADRESS } from './actions'

const initialState = {
  endereco: {
    adress: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1,
  }
}

const adress = createReducer(initialState, {
  [UPDATE_ADRESS]: (state, action) => action.payload
})

export default adress