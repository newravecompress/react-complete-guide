import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from '../NewExpense/ExpensesFilter'
import { useState } from 'react'

export default function Expenses (props) {
  const [year, setYear] = useState('2020')

  const expenses = props.items.map((el, idx) => <ExpenseItem {...el} key={idx} />)

  const filterChangeHandler = year => {
    console.log('Expenses.js')
    setYear(year)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} selected={year} />

      {expenses}
    </Card>
  )
}

