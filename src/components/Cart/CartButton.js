import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button className='button' onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className='badge'>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
