import { initStore } from './store';

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (currentState, productId) => {
      // write your logic for toggle
      //immutable way state change
      const prodIndex = currentState.products.findIndex(
        (p) => p.id === productId
      );
      const newFavStatus = !currentState.products[prodIndex].isFavorite;
      const updatedProducts = [...currentState.products];
      updatedProducts[prodIndex] = {
        ...currentState.products[prodIndex],
        isFavorite: newFavStatus,
      };

      return { products: updatedProducts };
    },
  };

  initStore(
    {
      products: [
        {
          id: 'p1',
          title: 'Black Tea',
          description: 'De-stree yourself with yummy black tea',
          isFavorite: false,
        },
        {
          id: 'p2',
          title: 'Black Coffee',
          description: 'Rest yourself with yummy black Coffee',
          isFavorite: false,
        },
        {
          id: 'p3',
          title: 'Plain Tea',
          description: 'A tea which you wanna prefer.',
          isFavorite: false,
        },
        {
          id: 'p4',
          title: 'Green Tea',
          description: 'Wanna stay healthy? Try delicious Green Tea',
          isFavorite: false,
        },
      ],
    },
    actions
  );
};

export default configureStore;
