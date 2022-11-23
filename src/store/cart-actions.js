import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Fetching',
        message: 'Fetching cart data.',
      })
    );
    const fetchData = async () => {
      const response = await fetch(
        'https://react-learning-project-6b928-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response.ok) {
        throw new Error('Unable to fetch cart data.');
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCartData({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity || 0,
        })
      );
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Cart Synced',
          message: 'Cart is up to date',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Fetching Failed',
          message: 'Failed to fetch data',
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    // async - sideffect
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending',
        message: 'Sending cart data.',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-learning-project-6b928-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send cart data...');
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success',
          message: 'Cart data saved.',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Failed',
          message: 'Something went wrong!',
        })
      );
    }
  };
};
