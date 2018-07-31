'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../redux-flow/reducers/todos/action-creators'
import * as filterActions from '../../redux-flow/reducers/visibility-filter/actions'

const TodosList = ({ todos, activeFilter, handleToogleTodo }) => (
  <ul>
    {getVisibleTodos(todos, activeFilter).map((todo) => (
      <li
        key={todo.id}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={handleToogleTodo(todo.id)}>
        {todo.text}
      </li>
    ))}
  </ul>
)

const getVisibleTodos = (todos, activeFilter) => {
  switch (activeFilter) {
    case filterActions.SHOW_ALL:
      return todos
    case filterActions.SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed)
    case filterActions.SHOW_ACTIVE:
      return todos.filter((todo) => !todo.completed)
  }
  return todos
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  activeFilter: state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => ({
  handleToogleTodo: (id) => (e) => {
    dispatch(toggleTodo(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
