import React, { Component } from 'react'
import styled from 'styled-components'
import List from './List'
import TextInput from './TextInput'
import Actions from './Actions'
import PropTypes from 'prop-types'

const propTypes = {
  todos: PropTypes.array.isRequired
}

class Todo extends Component {
  render() {
    const { todos } = this.props
    return (
      <Wrap>
        <Title>Todo</Title>
        <ListWrap>
          <List todos={todos} />
        </ListWrap>
        <TextInputWrap>
          <TextInput />
        </TextInputWrap>
        <ActionsWrap>
          <Actions />
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

const ActionsWrap = styled.div`
  border: 1px solid red;
`
