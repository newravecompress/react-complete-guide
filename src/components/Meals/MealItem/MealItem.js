import cls from './MealItem.module.css'
import MealItemForm from '../MealItemForm/MealItemForm'

const MealItem = props => {
  const price = `$${props.price.toFixed(2)}`

  return <li className={cls.meal}>
    <div>
      <h3>{props.name}</h3>
      <div className={cls.description}>{props.description}</div>
      <div className={cls.price}>{price}</div>
    </div>
    <div>
      <MealItemForm />
    </div>
  </li>
}

export default MealItem