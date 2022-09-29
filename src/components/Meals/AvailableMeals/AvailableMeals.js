import cls from './AvailableMeals.module.css'
import Card from '../../UI/Card/Card'
import MealItem from '../MealItem/MealItem'
import { useEffect, useState } from 'react'
import classes from './AvailableMeals.module.css'

const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [httpError, setHttpError] = useState(null)

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://react-http-89110-default-rtdb.europe-west1.firebasedatabase.app/meals.json',)

      if (!response.ok) {
        throw new Error('Something went wrong!')
      }

      const data = await response.json()

      const loadedMeals = []
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        })
      }

      setMeals(loadedMeals)
      setIsLoading(false)
    }
    fetchMeals()
      .catch(error => {
        setIsLoading(false)
        setHttpError(error.message)
      })
  }, [])

  if (isLoading) {
    return <section className={classes.MealsLoading}>
      <p>Loading...</p>
    </section>
  }

  if (httpError) {
    return <section className={classes.MealsError}>
      <p>{httpError}</p>
    </section>
  }

  return <section className={cls.meals}>
    <Card>
      <ul>
        {meals.map(el =>
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