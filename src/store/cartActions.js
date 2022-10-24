import { UIActions } from './UI'
import { cartActions } from './cart'

export const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const resp = await fetch('https://react-http-89110-default-rtdb.europe-west1.firebasedatabase.app/cart.json')

      if (!resp.ok) {
        throw new Error('Could not fetch cart data!')
      }

      return await resp.json()
    }

    try {
      const cartData = await fetchData()
      dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity
      }))
    } catch (error) {
      dispatch(UIActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }))
    }
  }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const res = await fetch(
        'https://react-http-89110-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity
          })
        }
      )

      if (!res.ok) {
        throw new Error('Sending cart data failed!')
      }
    }

    dispatch(UIActions.showNotification({
      status: 'pending',
      title: 'Sending',
      message: 'Sending cart data!'
    }))

    try {
      await sendRequest()

      dispatch(UIActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!'
      }))
    } catch (error) {
      dispatch(UIActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }))
    }
  }
}