import React, { useState } from 'react';

export const ProductContext = React.createContext({
  products: [],
  toggleFav: (id) => {},
});

const ProductProvider = (props) => {
  const [productList, setProductList] = useState([
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
  ]);

  const toggleFavorite = (productId) => {
    setProductList((currentProductList) => {
      /// write your logic
      const prodIndex = currentProductList.findIndex(
        (product) => product.id === productId
      );
      const newFavStatus = !currentProductList[prodIndex].isFavorite;
      const updatedProducts = [...currentProductList];

      updatedProducts[prodIndex] = {
        ...currentProductList[prodIndex],
        isFavorite: newFavStatus,
      };

      return updatedProducts;
    });
  };
  const valueToBeShared = {
    products: productList,
    toggleFav: toggleFavorite,
  };
  return (
    <ProductContext.Provider value={valueToBeShared}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
