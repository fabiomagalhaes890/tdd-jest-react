'use strict'

import { createStore } from 'redux'
import Counter from './counter'
/* import createStore from '../components/mycreate-store' */

const CounterStore = createStore(Counter)

export default CounterStore
