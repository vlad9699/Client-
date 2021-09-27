import { combineReducers, configureStore } from '@reduxjs/toolkit'
import toolkitSlice from './toolkitSlice'
import snackbarSlice from './snackbarSlice'
// import toolkitReducer from './toolkitReducer'
const rootReducer = combineReducers({
  toolkit: toolkitSlice,
  snackbar: snackbarSlice,
})

export  const store = configureStore({
  reducer: rootReducer,
})
