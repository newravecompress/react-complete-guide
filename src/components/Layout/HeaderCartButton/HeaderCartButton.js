import cls from './HeaderCartButton.module.css'
import CartIcon from '../../Cart/CartIcon'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../../../store/cartContext'

const HeaderCartButton = props => {
  const [isHighlighted, setIsHighlighted] = useState(false)

  const ctx = useContext(CartContext)
  const { items } = ctx

  const numItems = items.reduce((num, item) => {
    return num + item.amount
  }, 0)

  const btnClasses = `${cls.button} ${isHighlighted && cls.bump}`

  useEffect(() => {
    if (items.length === 0) return

    setIsHighlighted(true)

    const timer = setTimeout(() => {
      setIsHighlighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return <button className={btnClasses} onClick={props.onClick}>
    <span className={cls.icon}>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={cls.badge}>{numItems}</span>
  </button>
}

export default HeaderCartButton