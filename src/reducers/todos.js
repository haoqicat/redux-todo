import * as actionTypes from '../constants/ActionTypes'

const initialState = [
  {
    id: 0,
    text: 'Use Redux',
    completed: true
  },
  {
    id: 1,
    text: 'Try React',
    completed: false
  }
]

const todos = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }
      ]
    case actionTypes.COMPLETE_TODO:
      return state.map(
        t => (t.id === action.id ? { ...t, completed: true } : t)
      )
    default:
      return state
  }
}

export default todos
