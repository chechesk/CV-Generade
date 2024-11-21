import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Slice/LoginConfig'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})