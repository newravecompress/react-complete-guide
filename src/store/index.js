import { configureStore } from '@reduxjs/toolkit'
import UISlice from './UI'

const store = configureStore({
  reducer: {
    UI: UISlice.reducer
  }
})

export default store