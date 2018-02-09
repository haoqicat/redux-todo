import { SHOW_ALL, SHOW_COMPLETED } from '../constants/Filters'

export const getTodos = state => state.todos || []

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_COMPLETED]: todo => todo.completed
}
export const getFilteredTodos = state =>
  getTodos(state).filter(TODO_FILTERS[state.filter])
