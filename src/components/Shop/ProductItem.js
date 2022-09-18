import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const dispatch=useDispatch();
  const { title, price, description , id} = props;

  const addItemToCartHandler=()=>{
    dispatch(cartAction.addItemToCart({id,price,title}));
  }

  return (
    <li className={classes.item}>ln
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
