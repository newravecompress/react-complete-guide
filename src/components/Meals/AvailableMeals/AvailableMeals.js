import cls from './AvailableMeals.module.css'
import Card from '../../UI/Card/Card'
import MealItem from '../MealItem/MealItem'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
]

const AvailableMeals = () => {
  return <section className={cls.meals}>
    <Card>
      <ul>
        {DUMMY_MEALS.map(el =>
          <MealItem
            key={el.id}
            name={el.name}
            description={el.description}
            price={el.price}
            id={el.id}
          />)}
      </ul>
    </Card>
  </section>
}

export default AvailableMeals