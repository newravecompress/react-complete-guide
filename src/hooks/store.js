import { useEffect, useState } from 'react'

let globalState = {}
let listeners = []
let actions = {}

export const useStore = () => {
  const [state, setState] = useState(globalState)

  const dispatch = actionId => {
    const newState = actions[actionId](globalState)
    globalState = { ...globalState, ...newState }

    for (const listener of listeners) {
      listener(globalState)
    }
  }

  useEffect(() => {
    listeners.push(setState)

    return () => {
      listeners = listeners.filter(li => li !== setState)
    }
  }, [])

  return [globalState, dispatch]
}

export const initStore = (initialActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState }
  }

  actions = { ...actions, ...initialActions }
}