import cls from './Modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = props => {
  return <div className={cls.backdrop} onClick={props.onClose} />
}

const ModalOverlay = props => {
  return <div className={cls.modal}>
    <div className={cls.content}>{props.children}</div>
  </div>
}

const portalEl = document.getElementById('overlays')

const Modal = props => {
  return <>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalEl)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalEl)}
  </>
}

export default Modal