import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItemsInCart = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);
  return (
    <button onClick={props.onClickHeaderBtn} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
