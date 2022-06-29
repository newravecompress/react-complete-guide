import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

export default function ExpenseItem (p) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={p.date} />

        <div className="expense-item__description">
          <h2>{p.title}</h2>
          <div className="expense-item__price">${p.amount}</div>
        </div>
      </Card>
    </li>
  )
}