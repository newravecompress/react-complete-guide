import './ExpenseForm.css'
import { useState } from 'react'

export default function ExpenseForm (props) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [showForm, setShowForm] = useState(false)

  const showFormHandler = () => setShowForm(true)

  const cancelFormHandler = () => setShowForm(false)

  const titleChangeHandler = event => {
    setTitle(event.target.value)
  }

  const amountChangeHandler = event => {
    setAmount(event.target.value)
  }

  const dateChangeHandler = event => {
    setDate(event.target.value)
  }

  const submitHandler = event => {
    event.preventDefault()

    const expenseData = { title, amount: +amount, date: new Date(date) }
    props.onSaveExpenseData(expenseData)
    setTitle('')
    setAmount('')
    setDate('')
    setShowForm(false)
  }

  if (showForm) {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input type="text" value={title} onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Amount</label>
            <input type="number" min="0.01" step="0.01" value={amount}
                   onChange={amountChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" value={date}
                   onChange={dateChangeHandler} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={cancelFormHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    )
  }

  return <button onClick={showFormHandler}>Show form</button>
}