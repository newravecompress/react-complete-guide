import React, { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

function App () {
  const [userList, setUserList] = useState([])

  const addUserHandler = (name, age) => {
    setUserList(prevState => {
      return [...prevState, { name, age }]
    })
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </>
  )
}

export default App
