import { useRef, useState } from 'react'

const SimpleInput = (props) => {
  const [name, setName] = useState('')
  const [nameIsValid, setNameIsValid] = useState(true)
  const nameInput = useRef()

  const nameHandler = event => {
    setName(event.target.value)
  }

  const submitHandler = event => {
    event.preventDefault()

    if (name.trim() === '') {
      setNameIsValid(false)
      return
    }

    console.log(name)
    setNameIsValid(true)
    setName('')
  }

  const inputClasses = nameIsValid ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={submitHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInput}
          type="text"
          id="name"
          onChange={nameHandler}
          value={name}
        />
        {!nameIsValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
