import { initStore } from './store';

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (curState, productId) => {
      const prodIndex = curState.products.findIndex((p) => p.id === productId);
      const newFavStatus = !curState.products[prodIndex].isFavorite;
      const updatedProducts = [...curState.products];
      updatedProducts[prodIndex] = {
        ...curState.products[prodIndex],
        isFavorite: newFavStatus,
      };
      return { products: curState.products };
    },
  };

  initStore(actions, {
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
  });
};

export default configureStore;
