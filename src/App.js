import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import { useState } from 'react'

const DUMMY_EXPENSES = [
  { title: 'Car Insurance1', amount: 294.67, date: new Date(2022, 2, 28) },
  { title: 'Toilet paper', amount: 6.67, date: new Date(2020, 2, 28) },
  { title: 'Food', amount: 51.67, date: new Date(2019, 2, 28) },
  { title: 'Bike repair', amount: 64.6, date: new Date(2019, 2, 28) },
]

export default function App () {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense => {
    setExpenses(prevState => {
      return [expense, ...prevState]
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}
