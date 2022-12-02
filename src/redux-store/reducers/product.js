import { TOGGLE_FAV } from '../actions/product';

const initialState = {
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
};

const productReducer = (state = initialState, { type, productId }) => {
  switch (type) {
    case TOGGLE_FAV:
      // write your immutable state logic
      const prodIndex = state.products.findIndex(
        (product) => product.id === productId
      );
      const newFavStatus = !state.products[prodIndex].isFavorite;
      const updatedProducts = [...state.products];

      updatedProducts[prodIndex] = {
        ...state.products[prodIndex],
        isFavorite: newFavStatus,
      };

      return { products: updatedProducts };
    default:
      return state;
  }
};
export default productReducer;
