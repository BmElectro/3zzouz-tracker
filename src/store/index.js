import { configureStore } from '@reduxjs/toolkit'
import blob from './slice'
import chartReducer from './chartSlice'

export default configureStore({
  reducer: {
    azzouz: blob,
    charts: chartReducer
  },

})