import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  successOpen: false,
  successMessage: '',
  errorOpen: false,
  errorMessage: '',
}

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    snackbarSuccess(state, action) {
      state.successOpen = true
      state.successMessage = action.payload
    },
    snackbarError(state, action) {
      state.errorOpen = true
      state.errorMessage = action.payload
    },
    snackbarClear(state) {
      return initialState
      // return state.initialState = state
      // state.successOpen = false
      // state.errorOpen = false
      // state.successMessage = ''
      // state.errorMessage = ''
    },
  },
})
export default snackbarSlice.reducer
export const {
  snackbarSuccess,
  snackbarError,
  snackbarClear,
} = snackbarSlice.actions
