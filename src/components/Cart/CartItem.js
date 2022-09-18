import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/cart-slice';
import classes from './CartItem.module.css';
const CartItem = (props) => {
  const dispatch=useDispatch();
  const { title, price, quantity, total ,id} = props.item;
  
  const removeItemFromCartHandler=()=>{
    dispatch(cartAction.removeItemFromCart(id));

  }

  const addItemToCartHandler=()=>{
    dispatch(cartAction.addItemToCart({id}));

  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total}{' '}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemFromCartHandler}>-</button>
          <button onClick={addItemToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
// toFixed(2)