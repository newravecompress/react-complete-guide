import cls from './Card.module.css'

const Card = props => {
  return <div className={cls.card}>{props.children}</div>
}

export default Card