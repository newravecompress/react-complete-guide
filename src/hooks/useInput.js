import { useState } from 'react'

const useInput = (validate) => {
  const [value, setValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)

  const isValid = validate(value)
  const hasError = !isValid && isTouched

  const valueChangeHandler = event => {
    setValue(event.target.value)
  }

  const inputBlurHandler = () => {
    setIsTouched(true)
  }

  const reset = () => {
    setValue('')
    setIsTouched(false)
  }

  return {
    value,
    isValid,
    hasError,
    reset,
    valueChangeHandler,
    inputBlurHandler
  }
}

export default useInput