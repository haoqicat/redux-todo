import React, { Component } from 'react'
import styled from 'styled-components'
import RightIcon from './RightIcon'
import ListIcon from './ListIcon'
import { BLUE, GRAY } from '../constants/Colors'
import { SHOW_COMPLETED, SHOW_ALL } from '../constants/Filters'
import PropTypes from 'prop-types'

const propTypes = {
  setFilter: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired
}

class Actions extends Component {
  render() {
    const { setFilter, currentFilter } = this.props
    return (
      <Wrap>
        <RightIcon
          onClick={() => setFilter(SHOW_COMPLETED)}
          fill={currentFilter === SHOW_COMPLETED ? BLUE : GRAY}
          width="30"
          height="30"
        />
        <ListIcon
          onClick={() => setFilter(SHOW_ALL)}
          fill={currentFilter === SHOW_ALL ? BLUE : GRAY}
          width="30"
          height="30"
        />
      </Wrap>
    )
  }
}

Actions.propTypes = propTypes

export default Actions

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 40px;
  svg {
    cursor: pointer;
  }
`
