'use strict'

import React from 'react'
import Form from './todos/form'
import TodosList from './todos/todos-list'
import Filter from './todos/filter'
import SearchCep from './search-cep'

const Todos = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <div>
        <Form />
        <TodosList />
        <Filter />
      </div>
      <div>
        <SearchCep />
      </div>
    </div>
  )
}

export default Todos
