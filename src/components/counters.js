'use strict'

import React from 'react'
import Counter from './counter'
import { connect } from 'react-redux'
import { INCREMENT, DECREMENT, REMOVE_COUNTER } from '../redux-flow/reducers/counters/actions'
import { addCounter } from '../redux-flow/reducers/counters/action-creators'

const Counters = ({ counters, addCounter, removeCounter, increment, decrement }) => (
  <div>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      {counters.map((counter, index) => (
        <Counter
          {...{
            key: index,
            counter,
            removeCounter: removeCounter(index),
            increment: increment(index),
            decrement: decrement(index)
          }} />
      ))}
    </div>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <button onClick={addCounter}>Add counter</button>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  counters: state
})

const mapDispatchToProps = (dispatch) => ({
  addCounter: () => dispatch(addCounter()),
  removeCounter: (index) => () => dispatch({ type: REMOVE_COUNTER, index: index }),
  increment: (index) => () => dispatch({ type: INCREMENT, index: index }),
  decrement: (index) => () => dispatch({ type: DECREMENT, index: index })
})

export default connect(mapStateToProps, mapDispatchToProps)(Counters)
