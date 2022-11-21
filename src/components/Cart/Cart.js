import Card from '../UI/Card';
import CartItem from './CartItem';

const Cart = (props) => {
  return (
    <Card className='cart'>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: 'Worldcup', quantity: 3, total: 420, price: 140 }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
