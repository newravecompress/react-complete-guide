import CartContext from './cartContext'
import { useReducer } from 'react'

const defaultState = {
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const index = state.items.findIndex(item => item.id === action.item.id)
    const item = state.items[index]
    const totalAmount = state.totalAmount + action.item.price * action.item.amount

    let items

    if (item) {
      let updatedItem = { ...item, amount: item.amount + action.item.amount }
      items = [...state.items]
      items[index] = updatedItem
    } else {
      items = state.items.concat(action.item)
    }

    return { items, totalAmount }
  }

  if (action.type === 'REMOVE') {
    const index = state.items.findIndex(item => item.id === action.id)
    const item = state.items[index]
    const totalAmount = state.totalAmount - item.price

    let items

    if (item.amount === 1) {
      items = state.items.filter(el => el.id !== action.id)
    } else {
      items = [...state.items]
      items[index] = { ...item, amount: item.amount - 1 }
    }

    return { items, totalAmount }
  }

  if (action.type === 'CLEAR') {
    return defaultState
  }

  return defaultState
}

const CartProvider = props => {
  const [state, dispatch] = useReducer(cartReducer, defaultState)

  const addItem = item => {
    dispatch({ type: 'ADD', item })
  }

  const removeItem = id => {
    dispatch({ type: 'REMOVE', id })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR' })
  }

  return <CartContext.Provider value={{
    items: state.items,
    totalAmount: state.totalAmount,
    addItem,
    removeItem,
    clearCart
  }}>
    {props.children}
  </CartContext.Provider>
}

export default CartProvider