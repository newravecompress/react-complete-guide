import React, { useCallback, useEffect, useState } from 'react'

let logoutTimer

export const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: token => {},
  logout: () => {}
})

const calculateRemaining = (expiration) => {
  const currentTime = new Date().getTime()
  const adjustedExpiration = new Date(expiration).getTime()

  const remaining = adjustedExpiration - currentTime

  return remaining
}

const getToken = () => {
  const initialToken = localStorage.getItem('token')
  const expiration = localStorage.getItem('expiration')
  const remaining = calculateRemaining(expiration)

  if (remaining <= 3600) {
    localStorage.removeItem('token')
    localStorage.removeItem('expiration')

    return null
  }

  return {
    token: initialToken,
    duration: remaining
  }
}

export const AuthContextProvider = props => {
  const tokenData = getToken()
  let initialToken
  if (tokenData) {
    initialToken = tokenData.token
  }
  const [token, setToken] = useState(initialToken)

  const isLoggedIn = Boolean(token)

  const logoutHandler = useCallback(() => {
    setToken(null)
    localStorage.removeItem('token')
    localStorage.removeItem('expiration')
    clearTimeout(logoutTimer)
  }, [])

  const loginHandler = (token, expiration) => {
    setToken(token)
    localStorage.setItem('token', token)
    localStorage.setItem('expiration', expiration)

    const remaining = calculateRemaining(expiration)

    logoutTimer = setTimeout(logoutHandler, remaining)
  }

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration)
    }
  }, [tokenData, logoutHandler])

  const contextValue = { token, isLoggedIn, login: loginHandler, logout: logoutHandler }

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}