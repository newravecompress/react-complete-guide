import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'

export default function Expenses (p) {
  const expenses = p.items.map(el => <ExpenseItem {...el} />)
  return (
    <Card className="expenses">
      {expenses}
    </Card>
  )
}

