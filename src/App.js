/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import FloorA from './components/FloorA';

const App = () => {
  const [product, setProduct] = useState({ item: 'Orange' });
  const [isReceived, setIsReceived] = useState(false);

  useEffect(() => {
    if (isReceived) alert('Product received at FloorC');
  }, [isReceived]);

  return (
    <React.Fragment>
      <FloorA
        bag={product.item}
        doConfirm={() => setIsReceived(true)}
        isReceived={isReceived}
      />
    </React.Fragment>
  );
};

export default App;
