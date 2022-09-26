import { useReducer, useState } from 'react'

const initialInputState = {
  value: '',
  isTouched: false
}

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT':
      return { ...state, value: action.value}
    case 'BLUR':
      return {...state, isTouched: true}
    case 'RESET':
      return {value: '', isTouched: false }
  }
  return initialInputState
}

const useInput = (validate) => {
  const [inputState, dispatch] =  useReducer(inputStateReducer, initialInputState)

  const isValid = validate(inputState.value)
  const hasError = !isValid && inputState.isTouched

  const valueChangeHandler = event => {
    dispatch({type: 'INPUT', value: event.target.value})
  }

  const inputBlurHandler = () => {
    dispatch({type: 'BLUR'})
  }

  const reset = () => {
    dispatch({type: 'RESET '})
  }

  return {
    value: inputState.value,
    isValid,
    hasError,
    reset,
    valueChangeHandler,
    inputBlurHandler
  }
}

export default useInput