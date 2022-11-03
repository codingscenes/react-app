import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCardButton.module.css';
const HeaderCartButton = (props) => {
  return (
    <button className={`${classes.button}`} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>5</span>
    </button>
  );
};

export default HeaderCartButton;
