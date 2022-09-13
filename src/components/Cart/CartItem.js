import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '../../store/cart-slice';
import classes from './CartItem.module.css';
const CartItem = (props) => {
  const dispatch=useDispatch();
  const { title, price } = props.item;
  const quantity=useSelector((state)=>state.counter.counter);
  
  const decrementHandler=()=>{
    dispatch(cartAction.decrement());

  }

  const incrementHandler=()=>{
    dispatch(cartAction.increment());

  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${quantity*price}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementHandler}>-</button>
          <button onClick={incrementHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
// toFixed(2)