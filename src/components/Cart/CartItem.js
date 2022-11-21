const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  return (
    <li className='item'>
      <header>
        <h3>{title}</h3>
        <div className='price'>
          ₹{total.toFixed(2)}{' '}
          <span className='itemprice'>(₹{price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className='details'>
        <div className='quantity'>
          x <span>{quantity}</span>
        </div>
        <div className='actions'>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
