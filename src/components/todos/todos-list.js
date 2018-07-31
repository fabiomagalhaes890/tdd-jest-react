'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../redux-flow/reducers/todos/action-creators'

const TodosList = ({ todos, handleToogleTodo }) => (
  <ul>
    {todos.map((todo) => (
      <li
        key={todo.id}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={handleToogleTodo(todo.id)}>
        {todo.text}
      </li>
    ))}
  </ul>
)

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  handleToogleTodo: (id) => (e) => {
    dispatch(toggleTodo(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
