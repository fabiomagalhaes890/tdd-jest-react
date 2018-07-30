'use strict'

import { expect } from 'chai'
import counter from './counter'

it('reducer should be a function', () => {
  expect(counter).to.be.a('function')
})

it('counter(0, { type: "INCREMENT" }) should return 1', () => {
  expect(counter(0, { type: 'INCREMENT' })).to.be.equal(1)
})

it('counter(1, { type: "INCREMENT" }) should return 2', () => {
  expect(counter(1, { type: 'INCREMENT' })).to.be.equal(2)
})

it('counter(2, { type: "DECREMENT" }) should return 2', () => {
  expect(counter(2, { type: 'DECREMENT' })).to.be.equal(1)
})

it('counter(5, { type: "DECREMENT" }) should return 4', () => {
  expect(counter(5, { type: 'DECREMENT' })).to.be.equal(4)
})

it('counter(5, { type: "DECREMENT" }) should return 5', () => {
  expect(counter(5, { type: 'SOMETHING' })).to.be.equal(5)
})

it('counter(undefined, {}) should return 5', () => {
  expect(counter(undefined, {})).to.be.equal(0)
})