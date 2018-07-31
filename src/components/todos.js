'use strict'

import React from 'react'
import Form from './todos/form'
import TodosList from './todos/todos-list'
import Filter from './todos/filter'

const Todos = () => {
  return (
    <div>
      <Form />
      <TodosList />
      <Filter />
    </div>
  )
}

export default Todos
