import Card from '../UI/Card'
import cls from './AddUser.module.css'
import Button from '../UI/Button'
import { useRef, useState } from 'react'
import ErrorModal from '../UI/ErrorModal'

const AddUser = props => {
  const [error, setError] = useState(null)

  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const addUserHandler = (event) => {
    event.preventDefault()

    const enteredName = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)'
      })
      return
    }

    if (parseInt(enteredAge) < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (greater than zero)'
      })
      return
    }

    props.onAddUser(enteredName, enteredAge)
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
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
            ref={nameInputRef}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />

          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser