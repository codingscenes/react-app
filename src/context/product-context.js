import React, { useState } from 'react';
import App from '../App';

const ProductContext = React.createContext({
  product: 'Orange',
  isReceived: false,
});

//! Custom Context Provider component

export const ProductContextProvider = (props) => {
  const [product] = useState('Orange');
  const [isReceived, setIsReceived] = useState(false);

  const confirmHandler = () => setIsReceived(true);

  return (
    <ProductContext.Provider
      value={{
        product: product,
        isReceived: isReceived,
        doConfirm: confirmHandler,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
