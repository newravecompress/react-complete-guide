import { useEffect, useState } from 'react'

let globalState = {}
let listeners = []
let actions = {}

export const useStore = (shouldListen = true) => {
  const [state, setState] = useState(globalState)

  const dispatch = (actionId, payload) => {
    const newState = actions[actionId](globalState, payload)
    globalState = { ...globalState, ...newState }

    for (const listener of listeners) {
      listener(globalState)
    }
  }

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState)
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter(li => li !== setState)
      }
    }
  }, [shouldListen])

  return [globalState, dispatch]
}

export const initStore = (initialActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState }
  }

  actions = { ...actions, ...initialActions }
}