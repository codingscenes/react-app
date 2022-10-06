/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import FloorA from './components/FloorA';
import StatusBar from './components/StatusBar';
import ProductContext from './context/product-context';

const App = () => {
  const [product, setProduct] = useState('Orange');
  const [isReceived, setIsReceived] = useState(false);

  const confirmHandler = () => setIsReceived(true);

  return (
    <ProductContext.Provider
      value={
        {
        product: product,
        isReceived: isReceived,
        doConfirm: confirmHandler,
        }
      }
    >
      <StatusBar />
      <FloorA
        product={product}
        doConfirm={confirmHandler}
        isReceived={isReceived}
      />
    </ProductContext.Provider>
  );
};

export default App;
