import React from 'react'
import Todo from '../components/Todo'
import { connect } from 'react-redux'
import { getTodos } from '../selectors'

const TodoContainer = props => <Todo {...props} />

const mapStateToProps = state => ({
  todos: getTodos(state)
})

export default connect(mapStateToProps, {})(TodoContainer)
