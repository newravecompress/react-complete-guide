import React, { useEffect, useState } from 'react'

import Tasks from './components/Tasks/Tasks'
import NewTask from './components/NewTask/NewTask'
import useApi from './hooks/useApi'

function App () {
  const [tasks, setTasks] = useState([])
  const { isLoading, error, func: fetchTasks } = useApi()

  useEffect(() => {
    fetchTasks(
      {
        url: 'https://react-http-89110-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
      },
      data => {
        const loadedTasks = []

        for (const taskKey in data) {
          loadedTasks.push({ id: taskKey, text: data[taskKey].text })
        }

        setTasks(loadedTasks)
      })
  }, [])

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task))
  }

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  )
}

export default App
