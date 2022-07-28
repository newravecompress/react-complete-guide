import cls from './Cart.module.css'
import Modal from '../UI/Modal/Modal'

const Cart = props => {
  const cartItems = <ul className={cls['cart-items']}>{
    [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.90 }].map(item => <li>{item.name}</li>)
  }</ul>

  return <Modal onClose={props.onClose}>
    {cartItems}

    <div className={cls.total}>
      <span>Total amount</span>
      <span>35.62</span>
    </div>
    <div className={cls.actions}>
      <button className={cls['button--alt']} onClick={props.onClose}>Close</button>
      <button className={cls.button}>Order</button>
    </div>
  </Modal>
}

export default Cart