import cls from './MealItemForm.module.css'
import Input from '../../UI/Input/Input'
import { useRef, useState } from 'react'

const MealItemForm = props => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const inputRef = useRef()

  const submitHandler = event => {
    event.preventDefault()

    const amount = parseInt(inputRef.current.value)

    if (amount < 1 || amount > 5) {
      setAmountIsValid(false)
      return
    }

    props.onAdd2Cart(amount)
  }

  return <form className={cls.form} onSubmit={submitHandler}>
    <Input
      ref={inputRef}
      label="Amount"
      input={{
        id: 'amount',
        type: 'number',
        min: 1,
        max: 5,
        step: 1,
        defaultValue: 1
      }}
    />
    <button>+ Add</button>
    {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
  </form>
}

export default MealItemForm