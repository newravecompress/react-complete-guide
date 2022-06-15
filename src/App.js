import './App.css'
import Expenses from './components/Expenses/Expenses'

function App () {
  const expenses = [
    { title: 'Car Insurance1', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'Toilet paper', amount: 6.67, date: new Date(2021, 2, 28) },
    { title: 'Food', amount: 51.67, date: new Date(2021, 2, 28) },
    { title: 'Bike repair', amount: 64.6, date: new Date(2021, 2, 28) },
  ]

  return (
    <div className="App">
      <div>Let's get started!</div>
      <Expenses items={expenses} />
    </div>
  )
}

export default App
