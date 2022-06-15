import './ExpenseDate.css'

export default function ExpenseDate (p) {
  const month = p.date.toLocaleString('en-US', { month: 'long' })
  const day = p.date.toLocaleString('en-US', { day: '2-digit' })
  const year = p.date.getFullYear()

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  )
}