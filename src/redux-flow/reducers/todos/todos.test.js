'use strict'

import { expect } from 'chai'
import todos from './index'
import { ADD_TODO } from './actions'

it('todo should be a funcion', () => {
  expect(todos).to.be.a('function')
})

it('should add a todo item', () => {
  const before = []  
  const actions = { type: ADD_TODO }
})