'use strict'

import { expect } from 'chai'
import map from './map'

it('map should be a function', () => {
  expect(map).to.be.a('function')
})

it('map([1,2]) should return [1,2]', () => {
  expect(map([1,2])).to.deep.equal([1,2]);
})

it('map([2,3], (item) => item) should return [2,3]', () => {
  expect(map([2,3], (item) => item)).to.be.deep.equal([2,3])
})

it('map([2,3], (item) => item + 1) should return [3,4]', () => {
  expect(map([2,3], (item) => item + 1)).to.be.deep.equal([3,4])
})

it('map() should return []', () => {
  expect(map()).to.be.deep.equal([])
})

it('map(1) should throw a TypeError', () => {
  let error
  try {
    map(1)
  } catch (e) {
    error = e
  }

  expect(error.name).to.be.equal('TypeError')
})

it('map(1) should throw an TypeError with message this first parameter must be an array', () => {
  let error
  try {
    map(1)
  } catch (e) {
    error = e
  }

  expect(error.message).to.be.equal('this first parameter must be an array')
})

it('map([1,2],"function") should throw an TypeError', () => {
  let error
  try {
    map([1,2], '')
  } catch (e) {
    error = e
  }

  expect(error.name).to.be.equal('TypeError')
})

it('map([1,2],"function") should throw an TypeError an message the second parameter must be a function', () => {
  let error
  try {
    map([1,2], '')
  } catch (e) {
    error = e
  }

  expect(error.message).to.be.equal('the second parameter must be a function')
})