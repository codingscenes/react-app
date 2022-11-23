import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    const sendCartData = async () => {
      const response = await fetch(
        'https://react-learning-project-6b928-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send cart data...');
      }
      const responseData = await response.json();
    };

    sendCartData().catch((error) => {
      console.log('[ERROR]', error.message);
    });
  }, [cart]);

  useSelector((state) => state.cart);
  return (
    <div>
      <Notification
        status='error'
        title='Server error'
        message='There is an error here.'
      />
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </div>
  );
}

export default App;
