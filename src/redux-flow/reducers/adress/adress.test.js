'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import adress from './index'
import { UPDATE_ADRESS } from './actions'

it('adress should be a function', () => {
  expect(adress).to.be.a('function')
})

it('should action UPDATE_ADRESS update adress ', () => {
  const before = deepFreeze({
    endereco: {
      adress: '',
      city: '',
      code: '',
      district: '',
      state: '',
      status: 1,
    }
  })
  const action = {
    type: UPDATE_ADRESS,
    payload: {
      endereco: {
        adress: 'Rua Novo Horizonte	',
        city: 'Maringá',
        code: '87005-280',
        district: 'Jardim Novo Horizonte',
        state: 'PR',
        status: 1,
      }
    }
  }

  const after = {
    endereco: {
      adress: 'Rua Novo Horizonte	',
      city: 'Maringá',
      code: '87005-280',
      district: 'Jardim Novo Horizonte',
      state: 'PR',
      status: 1,
    }
  }
  expect(adress(before, action)).to.be.deep.equal(after)
})