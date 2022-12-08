import React, { useState } from 'react'

export const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: token => {},
  logout: () => {}
})

export const AuthContextProvider = props => {
  const [token, setToken] = useState(null)

  const isLoggedIn = Boolean(token)

  const loginHandler = token => setToken(token)

  const logoutHandler = () => setToken(null)

  const contextValue = { token, isLoggedIn, login: loginHandler, logout: logoutHandler }

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}