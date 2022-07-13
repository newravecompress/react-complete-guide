import Card from './Card'
import Button from './Button'
import cls from './ErrorModal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = props => {
  return <div className={cls.backdrop} onClick={props.onConfirm} />
}

const ModalOverlay = props => {
  return (
    <Card className={cls.modal}>
      <header className={cls.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={cls.content}>
        <p>{props.message}</p>
      </div>
      <footer className={cls.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  )
}

const ErrorModal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop {...props} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay {...props} />,
        document.getElementById('overlay-root')
      )}
    </>
  )
}

export default ErrorModal