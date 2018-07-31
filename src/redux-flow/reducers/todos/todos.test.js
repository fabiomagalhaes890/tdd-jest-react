'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import todos, { initialState } from './index'
import { ADD_TODO, TOGGLE_TODO } from './actions'

it('todo should be a funcion', () => {
  expect(todos).to.be.a('function')
})

it('should add a todo item', () => {
  const before = deepFreeze([])
  const actions = deepFreeze({ 
    type: ADD_TODO,
    payload: { id: 0, text: 'hey' }
  })
  const after = [{ id: 0, text: 'hey', completed: false }]
  expect(todos(before, actions)).to.be.deep.equal(after)
})

it('should add a new todo item', () => {
  const before = deepFreeze([
    { id: 0, text: 'Hey', completed: false }
  ])
  const actions = deepFreeze({ 
    type: ADD_TODO,
    payload: { id: 1, text: 'Ho' }
  })
  const after = [
    { id: 0, text: 'Hey', completed: false },
    { id: 1, text: 'Ho', completed: false }
  ]
  expect(todos(before, actions)).to.be.deep.equal(after)
})

it('should toogle first todo', () => {
  const before = deepFreeze([
    { id: 0, text: 'Hey', completed: false },
    { id: 1, text: 'Ho', completed: false }
  ])
  
  const actions = deepFreeze({ 
    type: TOGGLE_TODO,
    payload: { id: 0 }
  })
  
  const after = [
    { id: 0, text: 'Hey', completed: true },
    { id: 1, text: 'Ho', completed: false }
  ]
  expect(todos(before, actions)).to.be.deep.equal(after)
})

it('should toogle first todo', () => {
  const before = deepFreeze([
    { id: 0, text: 'Hey', completed: false },
    { id: 1, text: 'Ho', completed: false }
  ])
  
  const actions = deepFreeze({ 
    type: TOGGLE_TODO,
    payload: { id: 0 }
  })
  
  const after = [
    { id: 0, text: 'Hey', completed: true },
    { id: 1, text: 'Ho', completed: false }
  ]
  expect(todos(before, actions)).to.be.deep.equal(after)
})

it('should toogle second todo', () => {
  const before = deepFreeze([
    { id: 0, text: 'Hey', completed: false },
    { id: 1, text: 'Ho', completed: false }
  ])
  
  const actions = deepFreeze({ 
    type: TOGGLE_TODO,
    payload: { id: 1 }
  })
  
  const after = [
    { id: 0, text: 'Hey', completed: false },
    { id: 1, text: 'Ho', completed: true }
  ]
  expect(todos(before, actions)).to.be.deep.equal(after)
})

it('should return the lastest state when action is unknown ', () => {
  const before = deepFreeze([
    { id: 0, text: 'Hey', completed: false }
  ])
  
  const actions = deepFreeze({ type: 'UNKNOWN' })
  
  const after = [
    { id: 0, text: 'Hey', completed: false }
  ]
  expect(todos(before, actions)).to.be.deep.equal(after)
})

it('should return the initial state when state is undefined ', () => {
  const before = undefined
  
  const actions = deepFreeze({ })
  
  const after = initialState
  expect(todos(before, actions)).to.be.deep.equal(after)
})