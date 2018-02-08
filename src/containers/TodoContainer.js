import React from 'react'
import Todo from '../components/Todo'
import { connect } from 'react-redux'

const TodoContainer = props => <Todo {...props} />

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {})(TodoContainer)
