import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[
        { id: 'x1', name: 'Black Tea', amount: 2, price: 230 },
        { id: 'x2', name: 'Black Coffee', amount: 1, price: 130 },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹449</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button-close']}>Close</button>
        <button className={classes['button-order']}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
