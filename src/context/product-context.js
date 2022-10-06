import React from 'react';

const ProductContext = React.createContext({
  product: 'Orange',
  isReceived: false,
});

export default ProductContext;
