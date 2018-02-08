import React, { Component } from 'react'
import styled from 'styled-components'
import '../assets/global.css'
import TodoContainer from '../containers/TodoContainer'

class Main extends Component {
  render() {
    return (
      <Wrap>
        <TodoBox>
          <TodoContainer />
        </TodoBox>
      </Wrap>
    )
  }
}

export default Main

const Wrap = styled.div`
  background-color: #6f9436;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const TodoBox = styled.div`
  background: #fff;
  width: 300px;
  min-height: 170px;
  margin: 0 auto;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`
