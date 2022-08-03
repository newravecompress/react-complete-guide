import cls from './MealItem.module.css'
import MealItemForm from '../MealItemForm/MealItemForm'
import { useContext } from 'react'
import CartContext from '../../../store/cartContext'

const MealItem = props => {
  const ctx = useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`

  const add2CartHandler = amount => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

  return <li className={cls.meal}>
    <div>
      <h3>{props.name}</h3>
      <div className={cls.description}>{props.description}</div>
      <div className={cls.price}>{price}</div>
    </div>
    <div>
      <MealItemForm onAdd2Cart={add2CartHandler} />
    </div>
  </li>
}

export default MealItem