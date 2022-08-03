import cls from './Cart.module.css'
import Modal from '../UI/Modal/Modal'
import { useContext } from 'react'
import CartContext from '../../store/cartContext'
import CartItem from './CartItem/CartItem'

const Cart = props => {
  const ctx = useContext(CartContext)
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`
  const hasItems = ctx.items.length > 0

  const addHandler = () => {}
  const removeHandler = () => {}

  return <Modal onClose={props.onClose}>
    {
      <ul className={cls['cart-items']}>{
        ctx.items.map(item =>
          <CartItem
            key={item.id}
            {...item}
            onRemove={removeHandler.bind(null, item.id)}
            onAdd={addHandler.bind(null, item)}
          />
        )
      }</ul>
    }

    <div className={cls.total}>
      <span>Total amount</span>
      <span>{totalAmount}</span>
    </div>
    <div className={cls.actions}>
      <button className={cls['button--alt']} onClick={props.onClose}>Close</button>
      {hasItems && <button className={cls.button}>Order</button>}
    </div>
  </Modal>
}

export default Cart