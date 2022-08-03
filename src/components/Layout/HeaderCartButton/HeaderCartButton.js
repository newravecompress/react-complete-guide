import cls from './HeaderCartButton.module.css'
import CartIcon from '../../Cart/CartIcon'
import { useContext } from 'react'
import CartContext from '../../../store/cartContext'

const HeaderCartButton = props => {
  const ctx = useContext(CartContext)
  const numItems = ctx.items.reduce((num, item) => {
    return num + item.amount
  }, 0)

  return <button className={cls.button} onClick={props.onClick}>
    <span className={cls.icon}>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={cls.badge}>{numItems}</span>
  </button>
}

export default HeaderCartButton