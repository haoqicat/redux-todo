import React, { Component } from 'react'
import styled from 'styled-components'
import List from './List'
import TextInput from './TextInput'
import Actions from './Actions'

class Posts extends Component {
  render() {
    return (
      <Wrap>
        <Title>Todo</Title>
        <ListWrap>
          <List />
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

export default Posts

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
  border: 1px solid red;
  flex-grow: 1;
`

const TextInputWrap = styled.div`
  border: 1px solid red;
`

const ActionsWrap = styled.div`
  border: 1px solid red;
`
