import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';
const CartButton = (props) => {
  const dispatch=useDispatch();
  const totalquantity=useSelector((state)=>state.itemTotheCart.totalQuantity);
  const onClickHandler =()=>{
    dispatch(uiActions.toggler());
  }

  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalquantity}</span>
    </button>
  );
};

export default CartButton;
