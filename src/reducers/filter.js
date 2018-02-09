import * as filterTypes from '../constants/Filters'
import * as actionTypes from '../constants/ActionTypes'

const filter = (state = filterTypes.SHOW_ALL, action) => {
  switch (action.type) {
    case actionTypes.SET_FILTER:
      return action.filter
    default:
      return state
  }
}

export default filter
