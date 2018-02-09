import React, { Component } from 'react'
import styled from 'styled-components'
import { LIGHT_PRIMARY } from '../constants/Colors'
import AddIcon from './AddIcon'

class TextInput extends Component {
  render() {
    return (
      <Wrap>
        <Input />
        <Button>
          <AddIcon fill="white" width="16" height="16" />
        </Button>
      </Wrap>
    )
  }
}

export default TextInput

const Wrap = styled.div`
  padding: 20px;
  display: flex;
`
const Input = styled.input`
  padding: 3px 13px;
  border-radius: 35px 0 0 35px;
  border: 2px solid ${LIGHT_PRIMARY};
  flex-grow: 1;
  :focus {
    outline: none;
  }
`

const Button = styled.div`
  padding: 7px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transform: scale(1.8);
  background: ${LIGHT_PRIMARY};
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`
