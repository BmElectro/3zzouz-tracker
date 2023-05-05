import { configureStore } from '@reduxjs/toolkit'
import blob from './slice'


export default configureStore({
  reducer: {
    azzouz: blob,
  },

})