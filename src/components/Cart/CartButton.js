import classes from './CartButton.module.css';
import { UIActions } from '../../store/UI'
import { useDispatch, useSelector } from 'react-redux'

const CartButton = (props) => {
  const dispatch = useDispatch()
  const cartQuantity = useSelector(state => state.cart.totalQuantity)

  const toggleHandler = () => {
    dispatch(UIActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
