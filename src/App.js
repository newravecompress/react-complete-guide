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
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </div>
  )
}

export default App
