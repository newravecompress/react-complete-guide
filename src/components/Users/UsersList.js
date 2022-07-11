import cls from './UsersList.module.css'
import Card from '../UI/Card'

const UsersList = props => {
  return (
    <Card className={cls.users}>
      <ul>
        {props.users.map(
          (el, idx) => <li key={idx}>{el.name} ({el.age} years old)</li>
        )}
      </ul>
    </Card>
  )
}

export default UsersList