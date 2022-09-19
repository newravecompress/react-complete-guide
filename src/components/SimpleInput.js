import { useRef, useState } from 'react'

const SimpleInput = (props) => {
  const [name, setName] = useState('')
  const [nameIsTouched, setNameIsTouched] = useState(false)

  console.log('mounted')

  const enteredNameIsValid = name.trim() !== ''
  const nameInputIsInvalid = !enteredNameIsValid && nameIsTouched
  const inputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

  const nameHandler = event => {
    setName(event.target.value)
  }

  const nameBlurHandler = event => {
    setNameIsTouched(true)
  }

  const submitHandler = event => {
    event.preventDefault()
    setNameIsTouched(true)

    if (!enteredNameIsValid) {
      return
    }

    setName('')
    setNameIsTouched(false)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameHandler}
          value={name}
          onBlur={nameBlurHandler}
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
