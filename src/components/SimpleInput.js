import useInput from '../hooks/useInput'

const SimpleInput = (props) => {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset
  } = useInput(value => value.trim() !== '')

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset
  } = useInput(value => value.trim().includes('@'))

  console.log('mounted')

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

  let formIsValid = false

  if (nameIsValid && emailIsValid) {
    formIsValid = true
  }

  const submitHandler = event => {
    event.preventDefault()

    if (!nameIsValid || !emailIsValid) {
      return
    }

    nameReset()
    emailReset()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameHandler}
          value={name}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && <p className="error-text">Name must not be empty</p>}
      </div>


      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailHandler}
          value={email}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && <p className="error-text">Please enter a valid email!</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
