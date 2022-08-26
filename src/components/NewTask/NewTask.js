import Section from '../UI/Section'
import TaskForm from './TaskForm'
import useApi from '../../hooks/useApi'

const NewTask = (props) => {
  const { isLoading, error, func: postTask } = useApi()

  const enterTaskHandler = (text) => {
    postTask(
      {
        url: 'https://react-http-89110-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
        method: 'POST',
        body: { text },
        headers: {
          'Content-Type': 'application/json'
        }
      },
      data => {
        const generatedId = data.name // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: text }

        props.onAddTask(createdTask)
      }
    )
  }

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  )
}

export default NewTask
