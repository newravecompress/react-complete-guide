import { createSlice } from '@reduxjs/toolkit'

const UISlice = createSlice({
  name: 'UI',
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible
    }
  }
})

export const UIActions = UISlice.actions
export default UISlice
