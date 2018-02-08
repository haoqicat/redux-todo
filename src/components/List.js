import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { GRAY, BLACK, LIGHT_PRIMARY } from '../constants/Colors'
import RightIcon from './RightIcon'

const propTypes = {
  todos: PropTypes.array.isRequired
}

class List extends Component {
  render() {
    const { todos } = this.props
    return (
      <Wrap>
        {todos.map(todo => (
          <Todo completed={todo.completed} key={todo.id}>
            {todo.text}
            <IconWrap>
              {todo.completed && (
                <RightIcon width="18" height="18" fill={LIGHT_PRIMARY} />
              )}
            </IconWrap>
          </Todo>
        ))}
      </Wrap>
    )
  }
}

List.propTypes = propTypes

export default List

const Wrap = styled.div`
  padding: 20px;
`

const Todo = styled.div`
  position: relative;
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  color: ${props => (props.completed ? GRAY : BLACK)};
  height: 22px;
  line-height: 22px;
  margin: 10px 0;
`

const IconWrap = styled.div`
  position: absolute;
  right: 0;
  top: 2px;
`
