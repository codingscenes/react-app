/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import FloorA from './components/FloorA';
import StatusBar from './components/StatusBar';

const App = () => {
  const [product, setProduct] = useState({ item: 'Orange' });
  const [isReceived, setIsReceived] = useState(false);

  useEffect(() => {
    if (isReceived) alert('Product received at FloorC');
  }, [isReceived]);

  return (
    <React.Fragment>
      <StatusBar bag={product.item} isReceived={isReceived} />
      <FloorA
        bag={product.item}
        doConfirm={() => setIsReceived(true)}
        isReceived={isReceived}
      />
    </React.Fragment>
  );
};

export default App;
