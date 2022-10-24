import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { UIActions } from './store/UI'
import Notification from './components/UI/Notification'
import { fetchCartData, sendCartData } from './store/cartActions'

let isInitial = true

function App () {
  const showCart = useSelector(state => state.UI.cartIsVisible)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.UI.notification)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCartData())
  }, [])

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }

    if (!cart.changed)
      return

    dispatch(sendCartData(cart))
  }, [cart])

  return (
    <>
      {notification && <Notification {...notification} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  )
}

export default App
