import { createSlice } from '@reduxjs/toolkit'

const toolkitSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    todos: ['снять видео', 'смонтировать видео', 'рассказать про видеографию'],
  },
  reducers: {
    increment(state) {
      state.count = state.count + 1
    },
    decrement(state) {
      state.count = state.count - 1
    },
    reset(state) {
      state.count = 0
    },
    addTodo(state, actions) {
      state.todos.push(actions.payload)
    },
    removeTodos(state) {
      state.todos.pop()
    }
  }
})
export default toolkitSlice.reducer
export const {increment, decrement, reset, addTodo, removeTodos} = toolkitSlice.actions