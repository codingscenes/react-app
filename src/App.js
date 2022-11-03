import React, { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Teas from './components/Teas/Teas';

const App = () => {
  const [cartIsShow, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <Fragment>
     {cartIsShow && <Cart />}
      <Header onShowCart={showCartHandler}  />
      <main>
        <Teas />
      </main>
    </Fragment>
  );
};

export default App;
