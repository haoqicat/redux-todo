import React, { Component } from 'react'
import styled from 'styled-components'
import List from './List'
import TextInput from './TextInput'
import Actions from './Actions'
import PropTypes from 'prop-types'

const propTypes = {
  todos: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired
}

class Todo extends Component {
  render() {
    const {
      todos,
      addTodo,
      completeTodo,
      setFilter,
      currentFilter
    } = this.props
    return (
      <Wrap>
        <Title>Todo</Title>
        <ListWrap>
          <List todos={todos} completeTodo={completeTodo} />
        </ListWrap>
        <TextInputWrap>
          <TextInput addTodo={addTodo} />
        </TextInputWrap>
        <ActionsWrap>
          <Actions setFilter={setFilter} currentFilter={currentFilter} />
        </ActionsWrap>
      </Wrap>
    )
  }
}

Todo.propTypes = propTypes

export default Todo

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
`

const Title = styled.div`
  text-align: center;
  width: 100%;
  padding: 10px;
  font-size: 34px;
  font-weight: 600;
`

const ListWrap = styled.div`
  flex-grow: 1;
`

const TextInputWrap = styled.div``

const ActionsWrap = styled.div``
