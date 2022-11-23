import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const newTotalQuantity = cart.totalQuantity + 1;
    const updatedItems = cart.items.slice();

    const existingItem = updatedItems.find((item) => item.id === id);

    if (existingItem) {
      // update the item props
      const updatedItem = { ...existingItem };
      updatedItem.quantity++;
      updatedItem.totalPrice = updatedItem.totalPrice + price;
      const existingItemIndex = updatedItems.findIndex(
        (item) => item.id === id
      );
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      // push new item
      updatedItems.push({
        id: id,
        price: price,
        quantity: 1,
        totalPrice: price,
        name: title,
      });
    }

    const newProduct = {
      totalQuantity: newTotalQuantity,
      items: updatedItems,
    };

    // dispatch(
    //   cartActions.addItemToCart({
    //     id,
    //     title,
    //     price,
    //   })
    // );

    dispatch(cartActions.replaceCart(newProduct));
  };

  return (
    <li className='item'>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className='price'>₹{price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className='actions'>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
