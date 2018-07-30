'use strict'

const createStore = (reducer) => {
  let state
  let subscriptions = []

  const dispatch = (action) => {
    state = reducer(state, action)
    subscriptions.forEach((f) => f())
  }

  const subscribe = (func) => {
    subscriptions.push(func)
  }

  dispatch({})

  return {
    getState: () => state,
    dispatch,
    subscribe
  }
}

export default createStore
