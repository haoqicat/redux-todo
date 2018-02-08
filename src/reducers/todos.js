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
    default:
      return state
  }
}

export default todos
