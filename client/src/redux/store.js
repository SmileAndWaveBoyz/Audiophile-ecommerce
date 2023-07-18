import { configureStore } from '@reduxjs/toolkit'
import xx99miiQuantityReducer from '../pages/xx99MiiQuantitySlice';

export const store = configureStore({
  reducer: {
    xx99miiQuantity: xx99miiQuantityReducer,
  },
})

