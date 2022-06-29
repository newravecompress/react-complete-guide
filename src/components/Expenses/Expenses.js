import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from '../NewExpense/ExpensesFilter'
import ExpensesList from './ExpensesList'
import { useState } from 'react'

export default function Expenses (props) {
  const [year, setYear] = useState('2020')

  const filteredExpenses = props.items.filter(el => el.date.getFullYear() === parseInt(year))

  const filterChangeHandler = year => {
    setYear(year)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} selected={year} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

