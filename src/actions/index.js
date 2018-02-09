import * as types from '../constants/ActionTypes'

export const addTodo = text => dispatch => {
  return dispatch({
    type: types.ADD_TODO,
    text
  })
}

export const completeTodo = id => dispatch => {
  return dispatch({
    type: types.COMPLETE_TODO,
    id
  })
}

export const setFilter = filter => dispatch => {
  return dispatch({
    type: types.SET_FILTER,
    filter
  })
}
