import cls from './Cart.module.css'
import Modal from '../UI/Modal/Modal'
import { useContext, useState } from 'react'
import CartContext from '../../store/cartContext'
import CartItem from './CartItem/CartItem'
import Checkout from './Checkout/Checkout'

const Cart = props => {
  const [isCheckout, setIsCheckout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)
  const ctx = useContext(CartContext)
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`
  const hasItems = ctx.items.length > 0

  const addHandler = item => {
    ctx.addItem({ ...item, amount: 1 })
  }

  const removeHandler = id => {
    ctx.removeItem(id)
  }

  const orderHandler = () => {
    setIsCheckout(true)
  }

  const modalActions =
    <div className={cls.actions}>
      <button className={cls['button--alt']} onClick={props.onClose}>Close</button>
      {hasItems && <button className={cls.button} onClick={orderHandler}>Order</button>}
    </div>

  const submitOrderHandler = async data => {
    setIsSubmitting(true)

    await fetch(
      'https://react-http-89110-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: data,
          items: ctx.items
        })
      }
    )

    setIsSubmitting(false)
    setDidSubmit(true)
    ctx.clearCart()
  }

  const cartModalContent = <>
    <ul className={cls['cart-items']}>{
      ctx.items.map(item =>
        <CartItem
          key={item.id}
          {...item}
          onRemove={() => removeHandler(item.id)}
          onAdd={() => addHandler(item)}
        />
      )
    }</ul>
    <div className={cls.total}>
      <span>Total amount</span>
      <span>{totalAmount}</span>
    </div>
    {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
    {!isCheckout && modalActions}
  </>

  const submittingModalContent = <p>Sending order data...</p>

  const didSubmitModalContent = <>
    <p>Successfully sent the order!</p>
    <div className={cls.actions}>
      <button className={cls.button} onClick={props.onClose}>Close</button>
    </div>
  </>

  return <Modal onClose={props.onClose}>
    {!isSubmitting && !didSubmit && cartModalContent}
    {isSubmitting && submittingModalContent}
    {!isSubmitting && didSubmit && didSubmitModalContent}
  </Modal>
}

export default Cart