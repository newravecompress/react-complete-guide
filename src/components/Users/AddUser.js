import Card from '../UI/Card'
import cls from './AddUser.module.css'
import Button from '../UI/Button'
import { useState } from 'react'
import ErrorModal from '../UI/ErrorModal'

const AddUser = props => {
  const [userName, setUserName] = useState('Max')
  const [age, setAge] = useState('')
  const [error, setError] = useState(null)

  const addUserHandler = (event) => {
    event.preventDefault()

    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)'
      })
      return
    }

    if (parseInt(age) < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (greater than zero)'
      })
      return
    }

    props.onAddUser(userName, age)

    setUserName('')
    setAge('')
  }

  const userNameChangeHandler = event => {
    setUserName(event.target.value)
  }

  const ageChangeHandler = event => {
    setAge(event.target.value)
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
      {
        error
          ? <ErrorModal
              title={error.title}
              message={error.message}
              onConfirm={errorHandler}
            />
          : null
      }
      <Card className={cls.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={userNameChangeHandler}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />

          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser