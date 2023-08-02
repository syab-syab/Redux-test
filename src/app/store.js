import { configureStore } from '@reduxjs/toolkit'
import codeReducer from '../features/codeSlice'

export default configureStore({
  reducer: {
    paycode: codeReducer,
  }
})