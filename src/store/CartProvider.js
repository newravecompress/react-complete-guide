import CartContext from './cartContext'
import { useReducer } from 'react'

const defaultState = {
  items: [],
  totalAmount: 0
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

  return null
}

const CartProvider = props => {
  const [state, dispatch] = useReducer(cartReducer, defaultState)

  const addItem = item => {
    dispatch({ type: 'ADD', item })
  }

  const removeItem = id => {
    dispatch({ type: 'REMOVE', id })
  }

  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem,
    removeItem
  }

  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
}

export default CartProvider