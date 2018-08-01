'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import adress from './index'
import { UPDATE_ADDRESS } from './actions'

it('adress should be a function', () => {
  expect(adress).to.be.a('function')
})

it('should action UPDATE_ADDRESS update adress ', () => {
  const before = deepFreeze({
    adress: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1,
  })
  const action = {
    type: UPDATE_ADDRESS,
    payload: {
      adress: 'Rua Novo Horizonte	',
      city: 'Maringá',
      code: '87005-280',
      district: 'Jardim Novo Horizonte',
      state: 'PR',
      status: 1,
    }
  }

  const after = {
    adress: 'Rua Novo Horizonte	',
    city: 'Maringá',
    code: '87005-280',
    district: 'Jardim Novo Horizonte',
    state: 'PR',
    status: 1,
  }
  expect(adress(before, action)).to.be.deep.equal(after)
})