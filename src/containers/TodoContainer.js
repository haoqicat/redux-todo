import React from 'react'
import Todo from '../components/Todo'
import { connect } from 'react-redux'
import { getFilteredTodos } from '../selectors'
import { addTodo, completeTodo, setFilter } from '../actions'

const TodoContainer = props => <Todo {...props} />

const mapStateToProps = state => ({
  todos: getFilteredTodos(state),
  currentFilter: state.filter
})

export default connect(mapStateToProps, {
  addTodo,
  completeTodo,
  setFilter
})(TodoContainer)
