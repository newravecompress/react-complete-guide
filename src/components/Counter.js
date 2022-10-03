import classes from './Counter.module.css'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const showCounter = useSelector(state => state.showCounter)

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' })
  }

  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  }

  const increaseHandler = amount => {
    dispatch({ type: 'increase', amount })
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement' })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={() => increaseHandler(5)}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
