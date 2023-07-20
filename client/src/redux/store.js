import { configureStore } from '@reduxjs/toolkit'
import xx99miiQuantityReducer from '../pages/reduxItems';

export const store = configureStore({
  reducer: {
    xx99miiQuantity: xx99miiQuantityReducer,
  },
})

