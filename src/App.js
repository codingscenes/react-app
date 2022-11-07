import { Fragment, useState } from 'react';
import Cart from './Cart/Cart';
import Header from './Header/Header';
import Teas from './Teas/Teas';
import CartProvider from './store/CartProvider';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Teas />
      </main>
    </CartProvider>
  );
};

export default App;
