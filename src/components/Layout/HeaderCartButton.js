import cls from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'

const HeaderCartButton = props => {
  return <button className={cls.button}>
    <span className={cls.icon}>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={cls.badge}>3</span>
  </button>
}

export default HeaderCartButton