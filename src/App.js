import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { uiActions } from './store/ui-slice';

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending',
          message: 'Sending cart data.',
        })
      );
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
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success',
          message: 'Cart data saved.',
        })
      );
    };

    sendCartData().catch((error) => {
      console.log('[ERROR]', error.message);
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Failed',
          message: 'Something went wrong!',
        })
      );
    });
  }, [cart, dispatch]);

  useSelector((state) => state.cart);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
