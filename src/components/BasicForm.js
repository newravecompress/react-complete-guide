import useInput from '../hooks/useInput'

const BasicForm = (props) => {

  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset
  } = useInput(value => value.trim() !== '')

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameInputHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset
  } = useInput(value => value.trim() !== '')

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset
  } = useInput(value => value.trim().includes('@'))

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
  const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

  let formIsValid = false

  if (nameIsValid && emailIsValid && lastNameIsValid) {
    formIsValid = true
  }

  const submitHandler = event => {
    event.preventDefault()

    if (!nameIsValid || !emailIsValid || !lastNameIsValid) {
      return
    }

    nameReset()
    emailReset()
    lastNameReset()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameInputHandler}
            value={name}
            onBlur={nameBlurHandler}
          />
          {nameInputHasError && <p className="error-text">Name must not be empty</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={lastNameInputHandler}
            value={lastName}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInputHasError && <p className="error-text">Last name must not be empty</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailInputHandler}
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

export default BasicForm
