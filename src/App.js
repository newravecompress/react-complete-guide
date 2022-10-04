import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { UIActions } from './store/UI'
import Notification from './components/UI/Notification'

let isInitial = true

function App () {
  const showCart = useSelector(state => state.UI.cartIsVisible)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.UI.notification)
  const dispatch = useDispatch()

  useEffect(() => {
    const sendData = async () => {
      dispatch(UIActions.showNotification({
        status: 'pending',
        title: 'Sending',
        message: 'Sending cart data!'
      }))

      const res = await fetch(
        'https://react-http-89110-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart)
        }
      )

      if (!res.ok) {
        throw new Error('Sending cart data failed!')
      }

      dispatch(UIActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!'
      }))
    }

    if (isInitial) {
      isInitial = false
      return
    }

    sendData().catch(() => {
      dispatch(UIActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }))
    })
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
