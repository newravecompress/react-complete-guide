import { configureStore } from '@reduxjs/toolkit'
import UISlice from './UI'
import cartSlice from './cart'

const store = configureStore({
  reducer: {
    UI: UISlice.reducer,
    cart: cartSlice.reducer,
  }
})

export default store